
import React from "react";
import "../style/ViewProfile.css";
import { Link,useLocation } from "react-router-dom";

function ViewProfile() {
  const loc=useLocation();
  console.log(loc.state);
  return (
    <>
      <div className="fullly">
        <div className="firsthalf"></div>
        <div className="secondhalf">
          <div className="inbtn">
          <div className="inpt">

          <input type="text" placeholder={loc.state.data.name} />
          <input type="text" placeholder={loc.state.data.email}/>
          <input type="text" placeholder={loc.state.data.dob}/>
          <input type="text" placeholder={loc.state.data.address}/>
          <input type="text" placeholder={loc.state.data.phoneNumber} />
          </div>
          <div className="bbttnn">
            <button className="delete">Delete</button>
            <button className="edit">Edit</button>
            <button className="save">Save</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
