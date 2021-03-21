import React from "react";
import { connect } from "react-redux";
import StyledCart from "./StyledCart";

const Cart = ({ cartProps }) => {
  const { products, cartNumbers, cartCost } = cartProps;
  console.log(products);
  return (
    <StyledCart>
      <h2>Cart</h2>
      <div>All products: {cartNumbers}</div>
      <div>Total: {cartCost}$</div>
    </StyledCart>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
