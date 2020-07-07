import {
  addProductAction,
  updateProductAction,
  deleteProductAction
} from "./actionCreators";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "../constants/actionTypes";

describe("actions", () => {
  it("should create a product", () => {
    const expectedAdd = { type: ADD_PRODUCT, payload: "payload" };
    expect(addProductAction("payload")).toEqual(expectedAdd);
  });

  it("should update product", () => {
    const expectedUpdate = { type: UPDATE_PRODUCT, payload: "payload2" };
    expect(updateProductAction("payload2")).toEqual(expectedUpdate);
  });

  it("should remove product", () => {
    const expectedRemove = { type: DELETE_PRODUCT, payload: "123" };
    expect(deleteProductAction("123")).toEqual(expectedRemove);
  });
});
