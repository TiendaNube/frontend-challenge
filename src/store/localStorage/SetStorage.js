import React, { useContext, useEffect } from "react";
import Context from "../helpers/Context";

const setStorage = (mapState, mapDispatch) => {
  return (WrappedComponent) => {
    return (props) => {
      const { store, dispatch } = useContext(Context);

      useEffect(() => {
        localStorage.setItem("storage", JSON.stringify(store));
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

export { setStorage };
