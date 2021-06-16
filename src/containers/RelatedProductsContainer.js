import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

class RelatedProductsContainer extends Component {
    render() {
        var { product, onOpenProductModal, onQuickViewProductModal } = this.props;
        return (
            <RelatedProducts
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
)(RelatedProductsContainer);
