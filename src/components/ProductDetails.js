import React from 'react'
import {useLocation} from 'react-router-dom'
import '../style/ProductDetails.css'
function ProductDetails() {
    const location=useLocation()

    const products = location.state.New;   //just to use map function
    console.log(products)
    return (
        <div>
{/* <h1>{location.state.Newproducts[1].name}</h1> */}


    <div > 
        <h1>{products.name}</h1>
        <img src={products.image} alt={products.name} />
        <p>Price: {products.price}</p>
        <p>Description: {products.description}</p>
        {/* Add more details if needed */}
    </div>


        </div>
    );
    
}

export default ProductDetails
