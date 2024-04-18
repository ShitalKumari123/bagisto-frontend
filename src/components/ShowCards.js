import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import "../style/ShowCards.css";
import { useNavigate } from "react-router-dom";
function ShowCards() {
  const [MenuData, setMenuData] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/menu").then((res) => {
      console.log(res.data);
      setMenuData(res.data);
    });
  }, []);

  const navigate = useNavigate();

  function gotoFilteredMen() {
    navigate("/men/Men");
  }

  function gotoFilteredWomen() {
    navigate("/men/Women");
  }

  function gotoFilteredKid() {
    navigate("/men/Kid");
  }

  function gotoFilteredWellness() {
    navigate("/men/Wellness");
  }

  return (
    <div>
      <h2 className="viewalll">View All</h2>
      <div className="all">
        <div className="fulll">
          {MenuData.map((item) => (
            <div key={item.id} className="cards">
              <img className="imgs" src={item.image} alt="" />
              <p className="namee">{item.name}</p>
              <div className="texts">
                <p>As low as</p>
                <p className="pri">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Character</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <button className="btncharacter" onClick={gotoFilteredMen}>
                      Men
                    </button>
                  </li>
                  <li>
                    <button className="btncharacter" onClick={gotoFilteredWomen}>Women</button>
                  </li>
                  <li>
                    <button className="btncharacter" onClick={gotoFilteredKid}>Kid</button>
                  </li>
                  <li>
                    <button className="btncharacter" onClick={gotoFilteredWellness}>'Wellness</button>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Color</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Brand</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Shoes</Accordion.Header>
              <Accordion.Body className="lists">
                <ul>
                  <li>
                    <a href="#">Red</a>
                  </li>
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">Blue</a>
                  </li>
                  <li>
                    <a href="#">Green</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ShowCards;
