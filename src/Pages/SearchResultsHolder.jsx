import React, { useEffect, useState } from 'react'
import RecomProduct from "../Components/Recommended/RecomProduct"
import "../Components/Recommended/RecomHolder.css"
import axios from 'axios';

export default function SearchResultsHolder() {

    const [products, setProducts] = useState([]);

    const showSearchResults = async () => {
        const searchResults = localStorage.getItem("results");
        const array = searchResults.split(",");
        // const array = ["65f03142b639cb94b1111666", "65fda2646a670fc089374a65", "65fdd06adca17ee93e4b159c", "65fda5c86a670fc089374a67", "65fda9086a670fc089375bf3", "65fdae7e6a670fc089376b0e"];
        try {
          const { data } = await axios.post(
            "https://test.atomaxia.com/expressjstest/get/queProducts",
            {
              ids: array,
            }
          );
    
          setProducts(data.product);
        } catch (error) {
          console.error(error);
        }
    };

    useEffect(() => {
        showSearchResults();
    }, [])

  	return (
		<>
			<section className='recomSection'>
				<div className="recom-product-holder">
					{products.map((product) => (
						<RecomProduct
						key={product._id}
						productId={product._id}
						productName={product.productName}
						category={product.category}
						reach={product.reach}
						current={product.current}
						discountPrice={product.discountPrice}
						storePrice={product.storePrice}
						description={product.description}
						photo={product.photo}
						sellerID={product.sellerID}
						/>
					))}
				</div>
			</section>
		</>
  	)
}
