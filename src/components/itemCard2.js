import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class ItemCard2 extends Component {
  // const { classes } = props;
  renderList() {
    return this.props.products.map((product) => {
      return (
        <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={"../../images/" + product.filename}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="headline" component="h2">
                {product.name}
              </Typography>
              <Typography component="p">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
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

export default connect (mapStateToProps)(ItemCard2);
// export default withStyles(styles)(ItemCard2);
