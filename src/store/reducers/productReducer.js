import uuid from "uuid/v1";
import { map, filter } from "lodash";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "store/constants/actionTypes";
import { STORE } from "store/constants/storageKeys";

const storeStorage = JSON.parse(localStorage.getItem(STORE));

const initialState = {
  products: storeStorage ? storeStorage.productStore.products : []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { ...{ id: uuid() }, ...action.payload }]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: map(state.products, product =>
          action.payload.id === product.id ? action.payload : product
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: filter(
          state.products,
          product => product.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default productReducer;
