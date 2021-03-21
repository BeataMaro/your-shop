import React from "react";
import { connect } from "react-redux";
import StyledCart from "./StyledCart";

import { nanoid } from "nanoid";

const Cart = ({ cartProps }) => {
  const { products, cartNumbers, cartCost } = cartProps;

  const cartProducts = Object.values(products);
  const inCart = cartProducts.filter((prod) => prod.inCart);

  return (
    <StyledCart>
      <h2>Cart</h2>
      <div>All products: {cartNumbers}</div>
      <div>Total: {cartCost}$</div>
      <div>
        <p>Your products:</p>
        {inCart.length && (
          <ul>
            {inCart.map((p) => (
              <li key={nanoid()}>
                {p.name} ({p.numbers}) {p.price}$
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledCart>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
