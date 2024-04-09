import React from "react";
import "../style/Navbar.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
function Navbar() {
  return (
    <div>
      <div className="top-nav">
        <div className="bagisto">Bagisto Admin</div>
        <div className="adminpanel">Visit Admin Panel</div>
      </div>

      <div className="nav-bar">
        <div className="logonmenu">
          <div className="velocity">
           Velocity
          </div>
          <div className="menus">
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Wellness</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <input type="text" placeholder="Search products here" />
          <div className="three-icons">
            <FaArrowRightArrowLeft />
            <FaCartShopping />
            <IoIosContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
