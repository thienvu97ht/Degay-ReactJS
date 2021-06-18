import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Search from "../components/Search/Search";

class SearchContainer extends Component {
  render() {
    var { keyword, onClearKeyword } = this.props;
    return <Search keyword={keyword} onClearKeyword={onClearKeyword} />;
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClearKeyword: () => {
      dispatch(actions.clearKeyword());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
