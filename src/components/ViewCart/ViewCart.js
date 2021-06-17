import { Component, Fragment } from "react";
import "./styles.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import ViewCartItem from "./ViewCartItem";
import EmptyCart from "../EmptyCart/EmptyCart";

class ViewCart extends Component {
  findProductById = (productsInCart, products) => {
    var result = [];
    if (productsInCart.length > 0) {
      for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < productsInCart.length; j++) {
          if (products[i].id === productsInCart[j].productId) {
            result.push(products[i]);
          }
        }
      }
    }
    return result;
  };

  showProductsInCart = (productsById, productsInCart) => {
    var result = null;
    if (productsById.length > 0) {
      result = productsInCart.map((productInCart, index) => {
        var productById = productsById.find((productById) => {
          return productById.id === productInCart.productId;
        });
        return (
          <ViewCartItem
            key={index}
            productById={productById}
            productInCart={productInCart}
          />
        );
      });
    }
    return result;
  };

  showTotalAmount = (productsById, productsInCart) => {
    var total = 0;
    if (productsById.length > 0) {
      for (var i = 0; i < productsById.length; i++) {
        for (var j = 0; j < productsInCart.length; j++) {
          if (productsById[i].id === productsInCart[j].productId) {
            total += productsById[i].price * productsInCart[j].quantity;
          }
        }
      }
    }
    var totalFormat = total
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return totalFormat;
  };

  showEmptyCartItem = (productsInCart, productsById) => {
    if (productsInCart.length === 0) {
      return <EmptyCart />;
    } else {
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
                    {this.showProductsInCart(productsById, productsInCart)}
                  </tbody>
                </table>
                <div className="continue_shopping-btn">
                  <Link to="/list-products" className="continue_shopping-link">
                    TIẾP TỤC MUA HÀNG
                  </Link>
                </div>
              </div>
              <div className="col l-4 m-12 c-10 c-o-1">
                <div className="total_cart">
                  <div className="sub_total">
                    <p>Tổng tiền</p>
                    <p>{this.showTotalAmount(productsById, productsInCart)}</p>
                  </div>
                  <div className="final_total">
                    <Link to="checkout" className="update_cart">
                      Thanh toán
                    </Link>
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
  };

  render() {
    var { productsInCart, products } = this.props;

    var productsById = this.findProductById(productsInCart, products);
    return (
      <Fragment>
        {this.showEmptyCartItem(productsInCart, productsById)}
      </Fragment>
    );
  }
}

export default ViewCart;
