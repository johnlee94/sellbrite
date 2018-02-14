import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

class Cart extends Component {
  renderList() {
    if (this.props.selectedProducts.arr.length === 0) {
      return <div>Nothing in your Cart.. Start Shopping!</div>
    }
    let totalPrice = 0;
    return this.props.selectedProducts.arr.map((product) => {
      totalPrice += product.price
      return(
        <div style={{marginBottom: '15px'}}>
          <img src={require('../../images/' + product.filename)} style={{width: '150px', height: 'auto', display: 'inline-block'}}></img>
          <div style={{display: 'inline-block', textAlign: 'right', float: 'right'}}>
          <h5>
            {product.name}
          </h5>
          <p>
            ${product.price}
          </p>
        </div>
        <br/>
        </div>
      )
    })
  }

  getTotal() {
    let totalPrice = 0;
    this.props.selectedProducts.arr.map((product) => {
      totalPrice += product.price
    })
    totalPrice = totalPrice.toFixed(2);
      return (
        <div style={{textAlign: 'right'}}><b>Total: ${totalPrice}</b></div>
)
  }

  render() {
    return(
      <div>
        <h1 style={{textAlign: 'center', marginBottom: '25px', textDecoration: 'underline'}}>Your Cart</h1>
        {this.renderList()}
        <hr/>
        {this.getTotal()}
        <br/>
        <div style={{textAlign: 'center'}}>
          <Button>Check Out</Button>
        </div>
      </div>
    )
  }
  }


function mapStateToProps(state) {
  return {
    selectedProducts: state.selectedProducts
  };
}

export default connect(mapStateToProps)(Cart);
