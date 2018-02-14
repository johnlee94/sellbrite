import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  renderList() {
    return this.props.selectedProducts.arr.map((product) => {
      return(
        <div>{product.name}</div>
      )
    })
  }

  render() {
    if (!this.props.selectedProducts) {
      console.log(this.props.selectedProducts)
      return <div> Start Shopping </div>
    }

    return(
      <div>{this.renderList()}</div>
    )
  }
  }


function mapStateToProps(state) {
  return {
    selectedProducts: state.selectedProducts
  };
}

export default connect(mapStateToProps)(Cart);
