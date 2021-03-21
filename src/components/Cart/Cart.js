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

      <div>
        <p>Your products:</p>
        {inCart.length && (
          <div>
            {inCart.map((p) => (
              <div key={nanoid()}>
                {p.name} ({p.numbers}) {p.price}$
              </div>
            ))}
          </div>
        )}
      </div>
      <div>All products: {cartNumbers}</div>
      <div>Total: {cartCost}$</div>
    </StyledCart>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
