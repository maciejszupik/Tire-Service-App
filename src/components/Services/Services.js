import React, { Component } from "react";
import image2 from "./2.jpg";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";

class Home extends Component {
  get styles() {
    return {
      width: "80%",
      margin: "0 auto",
      minHeight: '50vh',
      display: "flex"
    };
  }
  render() {
    return (
      <div style={this.styles}>
        <div className="servicesLeft">
          <h1>OUR SERVICES</h1>
          <h2>TIRES SWAP</h2>
          <h2>WHEELS SWAP</h2>
          <h2>TIRE STORAGE FOR SEASON</h2>
          <Popup trigger={<button>PRICES</button>} position="bottom center">
            <div class="popUpMenu">
              <h3>TIRE SWAP</h3>
              <ul>
              <li>15 inch -> 140 PLN</li>
                <li>16 inch -> 160 PLN</li>
                <li>17 inch -> 170 PLN</li>
                <li>18 inch -> 180 PLN</li>
                <li>19 inch -> 190 PLN</li>
                <li>20 inch -> 200 PLN</li>
              </ul>
              <h3>WHEELS SWAP</h3>
              <ul>
                <li>15 inch -> 100 PLN</li>
                <li>16 inch -> 120 PLN</li>
                <li>17 inch -> 130 PLN</li>
                <li>18 inch -> 140 PLN</li>
                <li>19 inch -> 150 PLN</li>
                <li>20 inch -> 160 PLN</li>
              </ul>
            </div>
          </Popup>
          <Popup trigger={<button>PRICES</button>} position="bottom center">
            <div class="popUpMenu">
              <h3>TIRE SWAP</h3>
              <ul>
                <li>15 inch -> 140 PLN</li>
                <li>16 inch -> 160 PLN</li>
                <li>17 inch -> 170 PLN</li>
                <li>18 inch -> 180 PLN</li>
                <li>19 inch -> 190 PLN</li>
                <li>20 inch -> 200 PLN</li>
              </ul>
            </div>
          </Popup>
          <NavLink to="/term" className="mainLinks">
            <button>SET AN APPOINTMENT</button>
          </NavLink>
        </div>
        <div className="servicesRight">
          <img src={image2} alt="img2" />
        </div>
      </div>
    );
  }
}

export default Home;
