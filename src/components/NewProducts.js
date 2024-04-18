import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/NewProducts.css'
import Button from './Button'
import {useNavigate} from 'react-router-dom'
function NewProducts() {
    const navigate=useNavigate()
    const [NewProducts,setNewProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/productlist")
        .then((res)=>{
            console.log(res.data);
            setNewProducts(res.data)
        })
    },[])

    function gotoproductdetails(ev){
      navigate("/productdetails",{state:{New:ev}})
    }
  return (
    <>
     <h2 className='heading'>New Products</h2>
    <div className="products">
    {NewProducts.map((product, index) => (
                    <div key={index} className="cardz">

                            <img className="imgss" onClick={()=>{gotoproductdetails(product)}} src={product.image} alt="" />
                      
                        <p className="name">{product.name}</p>
                        <div className="textss">
                            <p className='low'>As low as</p>
                            <p className='price'>{product.price}</p>
                        </div>
                    </div>
                ))}
</div>
<Button/>
    </>
  )
}

export default NewProducts
