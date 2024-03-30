import React, { useEffect, useState } from 'react'
import RecomProduct from './RecomProduct'
import "./RecomHolder.css"
import axios from 'axios';

export default function RecomHolder() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('https://test.atomaxia.com/expressjstest/recent-products');
			setProducts(response.data.recentProducts);
		  } catch (error) {
			console.error('Error fetching recent products:', error);
		  }
		};
	
		fetchData();
		}, []);

  	return (
		<>
			<section className='recomSection'>
				<h2 className='forYou'>More For You</h2>
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
