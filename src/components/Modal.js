import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Cart from './Cart.js';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    width: '500px',
    margin: 'auto'
  };
}

const styles = theme => ({
  paper: {
    position: 'fixed',
    width: '30%',
    top: '20%',
    left: '35%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class CartModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div style={{textAlign: 'right'}}><Button style={{textSize: '1rem'}}onClick={this.handleOpen}>Shopping Cart</Button></div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
        <Cart />
          </div>
        </Modal>
      </div>
    );
  }
}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const CartModalWrapped = withStyles(styles)(CartModal);

export default CartModalWrapped;
