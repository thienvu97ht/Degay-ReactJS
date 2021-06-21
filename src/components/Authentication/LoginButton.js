import { Component, Fragment } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

class LoginButton extends Component {
  loginWithRedirect = () => {
    this.props.auth0.loginWithRedirect();
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    var elmButton = isAuthenticated ? (
      <li className="header__navbar-item hide-on-mobile-tablet">
        <Link
          to="/account"
          className="header__navbar-item-link login-btn header__navbar-item-link-underline">
          {user.name}
        </Link>
      </li>
    ) : (
      <li className="header__navbar-item hide-on-mobile-tablet">
        <button
          onClick={this.loginWithRedirect}
          className="header__navbar-item-link login-btn header__navbar-item-link-underline">
          Đăng nhập
        </button>
      </li>
    );

    return <Fragment>{elmButton}</Fragment>;
  }
}

export default withAuth0(LoginButton);
