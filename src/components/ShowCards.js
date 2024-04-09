import React, { useEffect, useState } from 'react'
import axios from 'axios'
function ShowCards() {
    const [Menu,setMenu]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/menu")
        .then((res)=>{
            console.log(res.data);
            setMenu(res.data)
        })
    })
  return (
    <div>
        <h2 className="viewall">View All</h2>
      <div className="full">
        {Menu.map((ev) => {
          return (
            <>
            <div className="cardz">
              <img className="imgss" src={ev.image} alt="" />
              <p className="name">{ev.name}</p>
                <div className="textss">
                <p>As low as</p>
                <p>{ev.price}</p>
              </div>
              </div>          
            </>
          );
        })}
      </div>
    </div>
  )
}

export default ShowCards
