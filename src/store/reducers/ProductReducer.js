import uuid from "uuid/v1";
import { map, filter } from "lodash";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "store/enums/action-names";

const storeStorage = JSON.parse(localStorage.getItem("storage"));

const initialState = {
  products: storeStorage ? storeStorage.productStore.products : [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...{ id: uuid() }, ...action.payload }],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: map(state.products, (product) =>
          action.payload.id === product.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: filter(
          state.products,
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default ProductReducer;
