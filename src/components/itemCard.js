import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ItemCard extends Component {
  renderList() {
    return this.props.products.map((product) => {
      return (
        <div className="card" style={{width: '20rem'}}>
    <img className="card-img-top" src={require("../../images/" + product.filename)} alt="Card image cap"/>
    <div className="card-block">
      <h4 className="card-title">{product.name}</h4>
      <p className="card-text">{product.price}</p>
      <a href="#" className="btn btn-primary">Add to Cart</a>
    </div>
  </div>
      );
    });
  }

  render() {
    return (
     <div>
       {this.renderList()}
     </div>
   );

  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return 'x';
}

export default connect (mapStateToProps)(ItemCard);
