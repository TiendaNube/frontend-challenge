import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "store/enums/action-names";

export const createProductAction = (payload) => ({
  type: CREATE_PRODUCT,
  payload,
});

export const updateProductAction = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const deleteProductAction = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});
