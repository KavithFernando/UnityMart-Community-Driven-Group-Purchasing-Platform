# import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import warnings
import nltk
from nltk.stem.snowball import SnowballStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

nltk.download('punkt')
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the dataset
amazon_df = pd.read_csv("Dataset/productData.csv")

# Create a SnowballStemmer instance for English
stemmer = SnowballStemmer("english")


# Define a function for tokenization and stemming
def tokenize_stem(text):
    # Tokenize the text into words and convert to lowercase
    tokens = nltk.word_tokenize(text.lower())

    # Stem each token using SnowballStemmer
    stemmed = [stemmer.stem(w) for w in tokens]

    return " ".join(stemmed)


# Apply "tokenize_stem()" to create a new column in a DataFrame
amazon_df["Stemmed Tokens"] = amazon_df.apply(lambda row: tokenize_stem(row["productName"] + " " + row["category"]), axis=1)

# Create a TfidfVectorizer instance with the custom tokenizer
tfidf_vectorizer = TfidfVectorizer(tokenizer=tokenize_stem)


# Define a function to check cosine similarity between two texts
def check_cosine_similarity(text1, text2):
    # Create a TF-IDF matrix for the given texts
    matrix = tfidf_vectorizer.fit_transform([text1, text2])

    # Calculate cosine similarity between the vectors in the matrix
    similarity_matrix = cosine_similarity(matrix)[0][1]

    # Return the cosine similarity value
    return similarity_matrix


def search_product(query):
    # Tokenize and stem the user query
    stemmed_query = tokenize_stem(query)

    # Apply the check_cosine_similarity function to calculate similarity for each product
    amazon_df["Similarity"] = amazon_df["Stemmed Tokens"].apply(lambda x: check_cosine_similarity(stemmed_query, x))

    # Sort the DataFrame by similarity in descending order and take the top 10 results
    result = amazon_df.sort_values(by=["Similarity"], ascending=False).head(10)[["_id"]]

    # Return the result containing product titles, descriptions, and categories
    return result["_id"].tolist()


@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data['query']
    result = search_product(query)
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
