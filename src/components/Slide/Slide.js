import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slide-container">
        <style>{cssstyle}</style>
        <Slider {...settings}>
          <div>
            <img
              src={slide1}
              alt=""
              className="header__slider-img"
            />
          </div>
          <div>
            <img
              src={slide2}
              alt=""
              className="header__slider-img"
            />
          </div>
          <div>
            <img
              src={slide3}
              alt=""
              className="header__slider-img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

const cssstyle = `
.slick-prev {
  left: 20px;
  z-index: 1;
}

.slick-next {
  right: 40px;
}

.slick-next{
  z-index: 1;
}

.slick-prev:before, .slick-next:before {
  font-size: 40px;
  opacity: .5;
}

.slick-prev:before:hover, .slick-next:before:hover {
  opacity: 1;
}

.slick-dots {
  bottom: 5%;
}

.slick-dots li button:before {
  font-size: 12px;
}

`;

export default Slide;
