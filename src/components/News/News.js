import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";
import new1 from "../../assets/new1.jpg";
import new2 from "../../assets/new2.jpg";
import new3 from "../../assets/new3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

class News extends Component {
  render() {
    var settings_2 = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 500,
      className: "row news-content",
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    // var { news } = this.props;
    return (
      <div className="app__container-product">
        <div className="grid wide">
          <h4 className="app__container-title">Tin tức</h4>
          <Slider {...settings_2}>
            <Link to={`news`} className="container__product-item">
              <img src={new1} alt="" className="news-item-img" />
              <h1 className="news-title">1.000.000 FOLLOWERS ON FACEBOOK</h1>
              <div className="news-upload-info">
                <p className="news-info">Đăng bởi</p>
                <p className="news-author">DEGREY VN</p>
                <p className="news-upload-date">9 Tháng 2, 2021</p>
                <p className="news-comment">0 Bình luận</p>
              </div>
              <p className="news-text-content">
                1.000.000 FOLLOWERS ON FACEBOOK- Cảm ơn các bạn đồng hành cùng
                Degrey suốt thời gian qua. Để đền đáp lại mọi sự yêu thương vô
                bờ bến tụi mình xin phép tổ chức event như sau.- Với mỗi hoá đơn
                từ 1 triệu đồng (1.000.000vnd)...
              </p>
            </Link>
            <Link to={`news`} className="container__product-item">
              <img src={new2} alt="" className="news-item-img" />
              <h1 className="news-title">
                Cùng Degrey chung tay tuyên truyền phòng tránh Covid – 19
              </h1>
              <div className="news-upload-info">
                <p className="news-info">Đăng bởi</p>
                <p className="news-author">DEGREY VN</p>
                <p className="news-upload-date">28 Tháng 3, 2020</p>
                <p className="news-comment">0 Bình luận</p>
              </div>
              <p className="news-text-content">
                Degrey – một trong những local brand nổi tiếng, đi đầu trong
                phong cách thời trang đường phố, mới đây đã cho thay đổi logo
                của mình nhằm kêu gọi tất cả mọi người tự cách ly tại nhà, chủ
                động bảo vệ bản thân...
              </p>
            </Link>
            <Link to={`news`} className="container__product-item">
              <img src={new3} alt="" className="news-item-img" />
              <h1 className="news-title">
                MAKE LOVE NOT WAR - DEGREY x DIRTY COINS
              </h1>
              <div className="news-upload-info">
                <p className="news-info">Đăng bởi</p>
                <p className="news-author">DEGREY VN</p>
                <p className="news-upload-date">8 Tháng 2, 2020</p>
                <p className="news-comment">0 Bình luận</p>
              </div>
              <p className="news-text-content">
                MAKE LOVE NOT WAR - DEGREY x DIRTY COINSPhát hành 11 giờ 11 phút
                sáng ngày 09/02/2020. Bộ sưu tập được bán tại trang mạng
                http://degrey.vn - http://dirtycoins.vn
              </p>
            </Link>
          </Slider>
          <div className="text-center">
            <a href="!#" className="load-more-news">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
