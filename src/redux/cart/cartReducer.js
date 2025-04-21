import CartActionsTypes from "./action-types";

const initialState = {
  products: [],
  TotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      const prodctIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (prodctIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        state,
        products: state.products.filter((p) => p.id !== action.payload),
      };

    case CartActionsTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        state,
        products: state.products.map((product) => {
          return product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        }),
      };

    case CartActionsTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        state,
        products: state.products.map((product) => {
          return product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
