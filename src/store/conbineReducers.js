import { chain } from "lodash";

const combineReducers = reducer => {
  return (state = {}, action) => {
    return chain(Object.keys(reducer))
      .reduce((init, next) => {
        init[next] = reducer[next](state[next], action);
        return init;
      }, {})
      .value();
  };
};

export default combineReducers;
