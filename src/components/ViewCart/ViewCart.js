import React, { Component } from "react";
import "./styles.css";
import "./responsive.css";

class ViewCart extends Component {
  render() {
    return (
      <div className="view_cart-container">
        <div className="title">
          <p>GIỎ HÀNG</p>
        </div>
        <div className="grid wide">
          <div className="row">
            <div className="col l-8 m-12 c-10 c-o-1">
              <table className="table table-cart">
                <tbody>
                  <tr>
                    <th className="product">Sản phẩm</th>
                    <th className="qty">Số lượng</th>
                    <th className="price">Tổng tiền</th>
                    <th className="remove"> Xóa</th>
                  </tr>
                  <tr className="cart_item">
                    <th className="product">
                      <a href="productDetail.html">
                        <div className="thumb-cart">
                          <img
                            src="https://product.hstatic.net/1000281824/product/f4b7d41d-dc19-4b81-8d29-1c14334ac00b_d96a30057e1a4519a210a3444b9fa548_grande.jpeg"
                            alt=""
                          />
                          <div className="thumb-cart-info">
                            <p className="name">Áo Thun Loang Tím</p>
                            <p className="size">Size: Trung</p>
                            <p className="price">320,000₫</p>
                          </div>
                        </div>
                      </a>
                    </th>
                    <th className="qty">
                      <div className="qty-number">
                        <input
                          type="button"
                          className="qtymius"
                          defaultValue="<"
                        />
                        <input
                          type="text"
                          className="quantity"
                          defaultValue={1}
                        />
                        <input
                          type="button"
                          className="qtyplus"
                          defaultValue=">"
                        />
                      </div>
                    </th>
                    <th className="price">
                      <p>320,000₫</p>
                    </th>
                    <th className="remove">
                      <button className="btn-remove">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </th>
                  </tr>
                  <tr className="cart_item">
                    <th className="product">
                      <a href="productDetail.html">
                        <div className="thumb-cart">
                          <img
                            src="https://product.hstatic.net/1000281824/product/e8ab76c2-b57c-4861-836b-685b9d73dcf5_7fb1655340114ca7bf2a480718c7199d_grande.jpeg"
                            alt=""
                          />
                          <div className="thumb-cart-info">
                            <p className="name">Sơ Mi Siết Tay Anh Xanh</p>
                            <p className="size">Size: Nhỏ</p>
                            <p className="price">330,000₫</p>
                          </div>
                        </div>
                      </a>
                    </th>
                    <th className="qty">
                      <div className="qty-number">
                        <input
                          type="button"
                          className="qtymius"
                          defaultValue="<"
                        />
                        <input
                          type="text"
                          className="quantity"
                          defaultValue={1}
                        />
                        <input
                          type="button"
                          className="qtyplus"
                          defaultValue=">"
                        />
                      </div>
                    </th>
                    <th className="price">
                      <p>330,000₫</p>
                    </th>
                    <th className="remove">
                      <button className="btn-remove">
                        <i className="fas fa-trash-alt" />
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
              <div className="continue_shopping-btn">
                <a href="listproducts.html" className="continue_shopping-link">
                  TIẾP TỤC MUA HÀNG
                </a>
              </div>
            </div>
            <div className="col l-4 m-12 c-10 c-o-1">
              <div className="total_cart">
                <div className="sub_total">
                  <p>Tổng tiền</p>
                  <p>650,000₫</p>
                </div>
                <div className="final_total">
                  <a href="checkOut.html" className="update_cart">
                    Thanh toán
                  </a>
                </div>
              </div>
              <label
                className="control-label"
                htmlFor="CartSpecialInstructions">
                Ghi chú
              </label>
              <textarea
                name="note"
                className="form-control"
                placeholder="Bạn muốn mô tả rõ hơn về đơn hàng..."
                id="CartSpecialInstructions"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCart;
