import pandas as pd
import numpy as np
import seaborn as sns
import warnings

# Import libraries for collaborative filtering approach
from surprise import KNNWithMeans
from surprise import Dataset
from surprise import accuracy
from surprise import Reader
from surprise.model_selection import train_test_split
from sklearn.decomposition import TruncatedSVD

warnings.filterwarnings('ignore')
sns.set_theme(color_codes=True)

# Load the dataset and set the column names
df = pd.read_csv('Dataset/ratings_Electronics.csv', names=['userId', 'productId', 'rating', 'timestamp'])

# Create dataframe from taking a sample from 'df' with 2000000 records
product_data = df.sample(n=2000000, ignore_index=True)

# Delete the previous dataframe to release the memory
del df

# Delete the unnecessary timestamp column
product_data.drop('timestamp', axis=1, inplace=True)

# Count the number of rated products per user
no_of_rated_products_per_user = product_data.groupby(by='userId')['rating'].count().sort_values(ascending=False)

# Filter the products with more than 50 ratings and making a new dataframe
data = product_data.groupby('productId').filter(lambda x: x['rating'].count() >= 50)

# Calculate the number of ratings per product
# Sort the results in the descending order
no_of_rating_per_product = data.groupby('productId')['rating'].count().sort_values(ascending=False)

# Create a list of the top 20 products
top_20_products = no_of_rating_per_product.head(20).index.tolist()

# Print the top 20 products using a for loop
print("Top 20 Products based on Number of Ratings:")
for i, product_id in enumerate(top_20_products, 1):
    print(f"{i}. Product ID: {product_id}")

# Specify the rating scale of data
reader = Reader(rating_scale=(1, 5))

# load the data from "data" into a format suitable for collaborative filtering
surprise_data = Dataset.load_from_df(data, reader)

# Split the surprise dataset into 80:20 ratio using train_test_split
trainSet, testSet = train_test_split(surprise_data, test_size=0.3, random_state=42)

algo = KNNWithMeans(k=5, sim_options={'name': 'pearson_baseline', 'user_based': False})

# Train the collaborative filtering algorithm on the training dataset
algo.fit(trainSet)

# Make predictions on the testing dataset and store the prediction objects in the 'test_pred' list
test_pred = algo.test(testSet)

print("Item-based Model : Test Set")
# 'verbose=True' is set to display additional information (Print "RMSE: x")
accuracy.rmse(test_pred, verbose=True)

# Create smaller dataframe with 20000 random samples from 'data'
data2 = data.sample(20000)

# Create pivot table from the data2 DataFrame
ratings_matrix = data2.pivot_table(values='rating', index='productId', columns='userId', fill_value=0)

# Decompose ratings matrix using Truncated Singular Value Decomposition (SVD)
SVD = TruncatedSVD(n_components=10)
decomposed_matrix = SVD.fit_transform(ratings_matrix)

# Calculate the correlation matrix
correlation_matrix = np.corrcoef(decomposed_matrix)


def recommend_products(selected_product_id, print_correlation=False, top_n=21, correlation_threshold=0.85):
    # Find the index of the specified product ID
    try:
        # Make a list of index values
        product_names = list(ratings_matrix.index)
        product_id_index = product_names.index(selected_product_id)
    except ValueError:
        print(f"Product ID '{selected_product_id}' not found in the dataset.")
        return None

    # Extract the row corresponding to the specified product ID from the correlation matrix
    correlation_product_id = correlation_matrix[product_id_index]

    # Filter the rows of the correlation matrix with products with a correlation value above the threshold
    similar_products_indices = np.where(correlation_product_id > correlation_threshold)[0]

    # Get the indices of the top N highest correlation values
    top_indices = np.argsort(correlation_product_id[similar_products_indices])[-top_n:-1][::-1]

    # Create a dictionary with product IDs as keys and their correlation values as values
    correlation_dict = {product_names[similar_products_indices[x]]: correlation_product_id[similar_products_indices[x]]
                        for x in top_indices}

    # Print the recommended products
    print(f"Top {top_n} Recommended Products for '{selected_product_id}':")
    if print_correlation:
        for recommended_product_id, correlation_value in correlation_dict.items():
            print(f"Product ID: {recommended_product_id}, Correlation Value: {correlation_value}")
    else:
        for recommended_product_id, correlation_value in correlation_dict.items():
            print(f"Product ID: {recommended_product_id}")


# Example usage:
recommend_products("B00001P4ZH", True)
