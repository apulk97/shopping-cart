import {
  ADD_TO_CART,
  EDIT_CART,
  HANDLE_CART,
  REMOVE_FROM_CART,
} from "../actions/types";

const INITIAL_STATE = {
  myCart: {},
  cartOpen: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, myCart: { ...state.myCart, ...action.payload } };

    case EDIT_CART:
      const cart = { ...state.myCart };
      const { quantity } = cart[action.payload];
      cart[action.payload].quantity = quantity + 1;
      return { ...state, myCart: { ...cart } };

    case REMOVE_FROM_CART:
      const prevCart = { ...state.myCart };
      const newQuantity = prevCart[action.payload].quantity;
      if (prevCart[action.payload].quantity > 1 ) {
        prevCart[action.payload].quantity = newQuantity - 1;
      } else {
        delete prevCart[action.payload];
      }
      return { ...state, myCart: { ...prevCart } };

    case HANDLE_CART:
      return {
        ...state,
        cartOpen: action.payload,
      };
    default:
      return state;
  }
};
