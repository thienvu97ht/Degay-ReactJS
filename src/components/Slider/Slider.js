import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";

class Slider extends Component {
  render() {
    return (
      <div className="sajid-1 owl-theme slide-container">
        <div className="item">
          <img src={slide1} alt="" className="header__slider-img" />
        </div>
        <div className="item">
          <img src={slide2} alt="" className="header__slider-img" />
        </div>
        <div className="item">
          <img src={slide3} alt="" className="header__slider-img" />
        </div>
      </div>
    );
  }
}

export default Slider;
