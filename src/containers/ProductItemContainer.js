import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import ProductItem from "../components/ProductItem/ProductItem";

class ProductItemContainer extends Component {
    render() {
        var { product, onOpenProductModal, onQuickViewProductModal } = this.props;
        return (
            <ProductItem
                product={product}
                onOpenProductModal={onOpenProductModal}
                onQuickViewProductModal={onQuickViewProductModal}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayModal: state.isDisplayModal,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onOpenProductModal: () => {
            dispatch(actions.openProductModal());
        },
        onQuickViewProductModal: (product) => {
            dispatch(actions.QuickViewProductModal(product));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductItemContainer);
