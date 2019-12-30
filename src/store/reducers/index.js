import combineReducers from "../conbineReducers";
import productReducer from "./productReducer";
import loginReducers from "./loginReducer";

const reducers = combineReducers({
  productStore: productReducer,
  loginStore: loginReducers
});

export { reducers };
