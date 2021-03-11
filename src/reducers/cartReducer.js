import * as actions from "../actions/actionTypes";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: {
    skirt: {
      name: "Skirt",
      price: 89.0,
      numbers: 0,
      inCart: false,
    },
    momBlackJeans: {
      name: "Mom black jeans",
      price: 120.0,
      numbers: 0,
      inCart: false,
    },
    whiteSweater: {
      name: "White sweater",
      price: 199.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_CART: {
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.numbers += 1;
      addQuantity.inCart = true;
      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
      };
    }
    case actions.GET_NUMBERS_CART: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
