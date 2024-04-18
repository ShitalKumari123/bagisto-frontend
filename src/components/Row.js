import React, { useEffect } from "react";
import '../style/Row.css'
import {Link} from 'react-router-dom'
import ShowCards from "./ShowCards";
function Row() {

  return (
    <>
<div className="both">
      <div className="first">
        <img
          src="https://demo.bagisto.com/bagisto-common/storage/theme/6/BM9JR17OYnbD1n2kK9PqFj9ojBIxk4TGJBOy5P61.webp"
          alt=""
        />
      </div>
      <div className="secondss">
        <div className="one">
        <h1 className="boldi">Get Ready for <br /> our new Bold <br />Collections!</h1>
        </div>
        <div className="two">
        <p className="light">
          Introducing Our New Bold Collections! Elevate your style with daring
          designs and vibrant statements. Explore striking patterns and bold
          colors that redefine your wardrobe. Get ready to embrace the
          extraordinary!
        </p>
        </div>
        <div className="three">
          <Link to={"showcards"}>
        <button className="btn3">View All</button>
        </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Row;
