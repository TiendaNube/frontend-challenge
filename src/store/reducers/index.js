import MergeReducers from "../MergeReducers";
import ProductReducer from "./ProductReducer";

const reducers = MergeReducers({
  productStore: ProductReducer,
});

export { reducers };
