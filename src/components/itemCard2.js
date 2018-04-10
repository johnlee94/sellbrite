import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { addProduct } from '../actions/add_product'


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

//Google's material-ui

class ItemCard2 extends Component {
  // constructor(props) {
  //   const { classes } = props;
  //   super(props);
  // }
  renderList() {
    return this.props.products.map((product) => {
      let priceInDollars = product.price.toFixed(2)
      let itemImage = "../../images/" + product.filename
      // console.log(this.props.products)
      return (
        <div style={{width: 345, display: 'inline-block', margin: '10px 10px 10px 10px', padding: '0 5px 5px 0'}}
          key={product.filename}
          >
          <Card style={{width: 345, display: 'inline-block'}}>
            <CardMedia style={{height: 200}}
              image={require('../../images/' + product.filename)}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="headline" component="h2">
                {product.name}
              </Typography>
              <Typography variant="headline" component="h1">
                ${priceInDollars}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" style={{margin: '0 auto'}}
                key={product.name}
                onClick={() => this.props.addProduct(product)
                }
                >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
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

ItemCard2.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProduct: addProduct}, dispatch);
}

// export default compose(
//   withStyles(styles, {
//     name: 'ItemCard2',
//   }),
//   connect(),
// )(mapStateToProps);

export default connect (mapStateToProps, mapDispatchToProps)(ItemCard2)
// export default connect (mapStateToProps, withStyles(styles))(ItemCard2);
