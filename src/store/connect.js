import React, { useContext, useEffect, useCallback, useState } from "react";
import Context from "./context";
import { STORE } from "./constants/storageKeys";

const connect = (mapState, mapDispatch) => {
  return WrappedComponent => {
    return props => {
      const { store, dispatch } = useContext(Context);

      useEffect(() => {
        localStorage.setItem(STORE, JSON.stringify(store));
      }, [store]);
      return (
        <WrappedComponent
          {...mapState(store)}
          {...mapDispatch(dispatch)}
          {...props}
        />
      );
    };
  };
};

export { connect };
