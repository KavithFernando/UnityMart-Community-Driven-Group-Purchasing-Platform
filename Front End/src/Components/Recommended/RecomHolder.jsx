import React from 'react'
import RecomProduct from './RecomProduct'
import "./RecomHolder.css"

export default function RecomHolder() {
	const [products, setProducts] = useState([]);

  	useEffect(() => {
    // Define a function to fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/newest');
        // Assuming the response data is an array of products
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  	}, []); // Empty dependency array ensures this effect runs only once on mount
	
  	return (
		<>
			<section className='recomSection'>
				<h2 className='forYou'>More For You</h2>
				<div className="recom-product-holder">
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
					<RecomProduct/>
				</div>
			</section>
		</>
  )
}
