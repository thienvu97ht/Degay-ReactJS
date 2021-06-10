import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="title-bacground" />
        <h1 className="about-title-text">Giới thiệu</h1>
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-10 c-o-1">
              <p className="about-content">
                Cái tên Degrey được tạo ra rất ngẫu hứng, xuất phát từ “Chuỗi
                ngày u buồn về sự nghiệp, tương lai trong quá khứ của chính
                mình” – theo lời chia sẻ của Degrey’s founder. Là một local
                brand mang khuynh hướng Á Đông, kết hợp giữa hai yếu tố truyền
                thống và hiện đại, Degrey luôn cố gắng mang đến những thông điệp
                văn hoá ý nghĩa qua từng đường nét thiết kế. Tiếp theo đó sự
                sang trọng, thanh lịch cũng là những yếu tố tạo nên một Degrey
                đầy sức hút, sự lựa chọn hoàn hảo dành cho các bạn trẻ yêu thích
                phong cách hoài cổ nhưng vẫn muốn thoát xác trong những bộ cánh
                mới mẻ hơn.
              </p>
              <p className="about-content">
                Thành lập từ năm 2016 và được nhiều bạn trẻ biết đến qua những
                mẫu áo truyền thông, Degrey hiện đang từng bước khẳng định vị
                trí của mình trong bản đồ streetwear Việt Nam.
              </p>
              <p className="about-content">
                Hiện nay, Degrey vẫn đang tiếp tục hoàn thiện và phát triển về
                sản phẩm cũng như mở rộng nhiều phong cách thời trang.
              </p>
              <p className="about-content">
                Degrey xin gửi lời cảm ơn đến tất cả những khách hàng đã, đang
                và sẽ ủng hộ Degrey cũng như Xoài thời gian qua và sắp tới. Cảm
                ơn rất nhiều !
              </p>
              <p className="about-content">
                Sơ lược lịch sử DEGREY do DOSIIN - kênh media về thời trang và
                life-style, khai thác mảng văn hóa đường phố tại Việt Nam viết
                ra:
              </p>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height={700}
                  src="https://www.youtube.com/embed/H7vcKCjX-IE?controls=0"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
