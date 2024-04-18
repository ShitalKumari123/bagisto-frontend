import React from "react";
import "../style/Navbar.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="top-nav">
        <div className="bagisto">Bagisto Admin</div>
        <Link to={"/admin"}>
        <div className="adminpanel">Visit Admin Panel</div>
        </Link>
      </div>

      <div className="nav-bar">
        <div className="logonmenu">
          <Link to={"/"} className="velocity">
           Velocity
          </Link>
          <div className="menus">
            <ul>
              <li>
                <Link to={"/men/Men"}>Men</Link>
              </li>
              <li>
              <Link to={"/men/Women"}>Women</Link>
              </li>
              <li>
              <Link to={"/men/Kid"}>Kids</Link>
              </li>
              <li>
              <Link to={"/men/Wellness"}>Wellness</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <input type="text" placeholder="Search products here" />
          <div className="three-icons">
            <FaArrowRightArrowLeft className="one"/>
            <FaCartShopping className="one"/>
            <IoIosContact className="one"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
