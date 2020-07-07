import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  INIT
} from "store/constants/actionTypes";

export const initStoreAction = () => ({ type: INIT });

export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });

export const updateProductAction = payload => ({
  type: UPDATE_PRODUCT,
  payload
});

export const deleteProductAction = payload => ({
  type: DELETE_PRODUCT,
  payload
});
