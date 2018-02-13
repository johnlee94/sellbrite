import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class ItemCard2 extends Component {
  // constructor(props) {
  //   const { classes } = props;
  //   super(props);
  // }
  renderList() {
    return this.props.products.map((product) => {
      let priceInDollars = product.price.toFixed(2)
      let itemImage = "../../images/" + product.filename
      return (
        <div>
          <Card style={{maxWidth: 345}}>
            <CardMedia style={{height: 200}}
              image={require('../../images/' + product.filename)}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="headline" component="h2">
                {product.name}
              </Typography>
              <Typography component="p">
                ${priceInDollars}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
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

// export default compose(
//   withStyles(styles, {
//     name: 'ItemCard2',
//   }),
//   connect(),
// )(mapStateToProps);

export default connect (mapStateToProps)(withStyles(styles)(ItemCard2))
// export default connect (mapStateToProps, withStyles(styles))(ItemCard2);
