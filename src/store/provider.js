import React, { useState, useEffect, useReducer } from "react";

import PropTypes from "prop-types";
import Context from "./context";
import { initStoreAction } from "./actions/actionCreators";

const Provider = ({ children, reducer, persist }) => {
  const [store, dispatch] = useReducer(reducer);

  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch(initStoreAction());
    setState({ isLoaded: true });
  }, [dispatch]);

  return (
    <Context.Provider displayName="Main Context" value={{ dispatch, store }}>
      {state.isLoaded ? children : false}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  reducer: PropTypes.func.isRequired,
  persist: PropTypes.bool
};

Provider.defaultProps = {
  persist: false
};

export default Provider;
