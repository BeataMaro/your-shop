import React from "react";
import { connect } from "react-redux";

const ProductDetails = ({ cartProps, match }) => {
  const { products } = cartProps;
  const product = match.params.id;
  const price = products[product].price;
  const name = products[product].name;

  console.log(name);
  return (
    <div>
      <h2>Product details</h2>
      <p>{name}</p>

      <div>{price}$</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(ProductDetails);
