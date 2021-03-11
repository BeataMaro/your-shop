import * as actions from "./actionTypes";

export const addCart = (productName) => {
  return (dispatch) => {
    console.log("Adding to cart");
    console.log(`Product name: ${productName}`);
    dispatch({
      type: actions.ADD_PRODUCT_CART,
      payload: productName,
    });
  };
};
