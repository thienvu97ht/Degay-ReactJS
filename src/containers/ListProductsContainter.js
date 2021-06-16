import { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../actions/index";
import ListProducts from "../components/ListProducts/ListProducts";

class ListProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <ListProducts products={products} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProductsContainer);
