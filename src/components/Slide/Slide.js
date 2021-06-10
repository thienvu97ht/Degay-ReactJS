import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
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
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/25438939_1542853189141171_4157740623004633535_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=-PzuY_FeLPsAX9Gemst&_nc_ht=scontent.fsgn2-5.fna&oh=c43f5287d15691c79dfd3decff62e2e2&oe=60D68106"
              alt=""
              className="header__slider-img"
            />
          </div>
          <div>
            <img
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t31.18172-8/15129665_1164652033627957_5431995798793249056_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=19026a&_nc_ohc=yJfUBkJ2JtYAX_lC1G6&_nc_ht=scontent.fsgn2-5.fna&oh=04727387050bde80ba211326dc06cf5c&oe=60D7026D"
              alt=""
              className="header__slider-img"
            />
          </div>
          <div>
            <img
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/39403369_1853088631450957_6235328705950908416_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=HX7ro43CkqoAX9YtJsW&_nc_ht=scontent.fsgn2-5.fna&oh=eef268c560f7e6af6d98ec99eaaa271a&oe=60D543D5"
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
