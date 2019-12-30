import React, { useState, useReducer, useEffect } from "react";

import PropTypes from "prop-types";
import Context from "./context";
import { STORE } from "./constants/storageKeys";
import { initStoreAction } from "./actions/actionCreators";

const Provider = ({ children, reducer }) => {
  const [store, dispatch] = useReducer(reducer);

  const [state, setState] = useState({ isLoaded: false });

  useEffect(() => {
    dispatch(initStoreAction());
    setState({ isLoaded: true });
  }, []);

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
  persistConfig: PropTypes.shape({
    key: PropTypes.string,
    storage: PropTypes.shape(window.localStorage)
  })
};

Provider.defaultProps = {
  persistConfig: {
    key: STORE,
    localStorage: window.localStorage
  }
};

export default Provider;
