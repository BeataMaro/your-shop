import { GET_NUMBERS_CART } from "./actionTypes";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting all cart numbers");
    dispatch({
      type: GET_NUMBERS_CART,
    });
  };
};
