import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LogoutButton extends Component {
  onLogOut = () => {
    this.props.auth0.logout();
  };

  render() {
    return (
      <li className="account-information-item">
        <button onClick={this.onLogOut} className="account-information-link">
          Đăng xuất
        </button>
      </li>
    );
  }
}

export default withAuth0(LogoutButton);
