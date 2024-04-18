import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../style/Men.css'
function Men() {
    const {character}=useParams()      //from navbar
    console.log(character);

    const [MenuData,setMenuData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/menu")
        .then((res)=>{
            console.log(res.data);
            setMenuData(res.data)
        })
    },[])

    const filterItems=MenuData.filter((ev)=>ev.character==character)
    console.log(filterItems);

  return (
    <div>
        <div className="men">
       {filterItems.map((product, index) => (
                    <div key={index} className="cardz">

                            <img className="i" src={product.image} alt="" />
                      
                        <p className="n">{product.name}</p>
                        <div className="te">
                            <p className='lw'>As low as</p>
                            <p className='pre'>{product.price}</p>
                        </div>
                    </div>
                ))}
                </div>
    </div>
  )
}

export default Men
