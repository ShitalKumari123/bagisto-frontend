import React, { useState } from "react";
import "../style/Admin.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Admin() {
  //usestate to store info.........................
//   const [image, setImage] = useState("");
//   const HandleImageChange = (ev) => {
//     console.log(image);
//     setImage(ev.target.value)
//   };

  const [name, setName] = useState("");
  const HandleNameChange = (ev) => {
    setName(ev.target.value);
    console.log(name);
  };

  const [password, setPassword] = useState("");
  const HandlePasswordChange = (ev) => {
    setPassword(ev.target.value);
    console.log(password);
  };
  const [email, setemail] = useState("");
  const HandleEmailChange = (ev) => {
    setemail(ev.target.value);
    console.log(ev.target.value);
  };
  const [dob, setDob] = useState("");
  const HandledobChange = (ev) => {
    setDob(ev.target.value);
    console.log(ev.target.value);
  };
  const [address, setaddress] = useState("");
  const HandleaddressChange = (ev) => {
    setaddress(ev.target.value);
    console.log(ev.target.value);
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const HandlePhoneChange = (ev) => {
    setPhoneNumber(ev.target.value);
    console.log(phoneNumber);
  };
  //......................................onclick
  const navi=useNavigate();
  const HandleClick = async (ev) => {
    const data = {
      name: name, //the key "name" will store the value of name(usestate) in it
      password: password,
      email:email,
      dob:dob,
      address:address,
      phoneNumber: phoneNumber,
    };

    navi("/viewprofile",{state:{data:data}})
    // console.log(data);
    // ev.preventDefault()
    //...............................axios
    try {
      await axios.post("http://localhost:8000/adm", data);
      console.log("yes i am axios and i am working");
    } catch (ev) {
      console.log(ev, "i am an error in axios in file admin");
    }
  };

  return (
    <>
      <div className="box">
        <div className="admin">
          <div className="inp">
            <h2 className="headings">Admin Panel</h2>
            {/* <input
              type="text"
              placeholder="enter the image url"
              onChange={HandleImageChange}
            /> */}
            <input
              type="text"
              placeholder="Enter your name"
              onChange={HandleNameChange}
            />
         
            <input
              type="password"
              placeholder="Enter your password"
              onChange={HandlePasswordChange}
            />
               <input
              type="text"
              placeholder="Enter your email"
              onChange={HandleEmailChange}
            />
                <input
              type="text"
              placeholder="Enter your dob"
              onChange={HandledobChange}
            />
                <input
              type="text"
              placeholder="Enter your address"
              onChange={HandleaddressChange}
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              onChange={HandlePhoneChange}
            />
          </div>
          <div className="btnnn">
            <button type="submit" className="btns" onClick={HandleClick}>
              Sign In
            </button>
            <Link to={"/login"}>
              <button className="btns">Log In</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
