import React, { Component } from "react";
import image1 from "./1.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <div className="containerBox">
          <img className="mainImage" src={image1} alt="img1" />
        </div>
      </>
    );
  }
}

export default Home;
