import combineReducers from "../conbineReducers";
import productReducer from "./productReducer";

const reducers = combineReducers({
  productStore: productReducer
});

export { reducers };
