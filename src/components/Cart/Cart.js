import React from "react";
import { connect } from "react-redux";

const cartStyles = {
  padding: "2rem",
  backgroundColor: "pink",
};

const Cart = ({ cartProps }) => {
  console.log(cartProps);
  return <div style={cartStyles}>I am a cart</div>;
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
