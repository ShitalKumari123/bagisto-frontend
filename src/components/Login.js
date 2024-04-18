import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoNote } from "react-icons/go";
import { GrCatalogOption } from "react-icons/gr";
import { SiPayloadcms } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import axios from "axios";
import {Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
function Login() {
  const [axiosGet, setaxiosGet] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:8000/admprofile")
      .then((ev) => {
        console.log(ev.data, "profile details aa gyi");
        setaxiosGet(ev.data);
      })
      .catch((ev) => {
        console.log(
          ev,
          "error in getting the data from the server in file login"
        );
      });
  }, []);

    //...............post the data................
    


  // function gotoView(){
  //    navigate("/viewprofile")
  // }
  return (
    <div>
      <div className="lgnpg">
        <div className="dshbrd">
          <ul>
            <li className="list">
              <a className="anchor" href="#">
                <LuLayoutDashboard className="icn" /> Dashboard
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <GoNote className="icn" />
                Sales
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <GrCatalogOption className="icn" />
                Catalog
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <SiPayloadcms className="icn" />
                CMS
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <SiGooglemarketingplatform className="icn" />
                Marketing
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <TbReportSearch className="icn" />
                Reporting
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <IoSettingsOutline className="icn" />
                Setting
              </a>
            </li>
            <li className="list">
              <a className="anchor" href="#">
                <GrConfigure className="icn" />
                Configure
              </a>
            </li>
          </ul>
        </div>
       <Container
       >

      
        {/* <div className="profile"> */}
            {
            axiosGet.map((ev) => {
              return <ul className="profile">
                <li>
                  <a href="#">{ev.name}</a>
                </li>
                <li>
                  <a href="#">{ev.email}</a>
                </li>
                <li>
                  <a href="#">{ev.dob}</a>
                </li>
                <li>
                  <a href="#">{ev.phoneNumber}</a>
                </li>
                
                {/* <button onClick={gotoView} className="vw">View</button> */}
              </ul>;
            })}
        {/* </div> */}
        </Container>
      </div>
    </div>
  );
}

export default Login;
