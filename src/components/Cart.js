import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cart extends Component {
  render() {
    if (!this.props.SelectedProducts) {
      return <div> Start Shopping </div>
    }

    return(
      console.log(this.props.selectedProducts)
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    selectedProducts: state.selectedProducts
  };
}

export default connect(mapStateToProps)(Cart);
