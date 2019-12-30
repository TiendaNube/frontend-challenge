import React, { useContext } from "react";
import Context from "./context";

const connect = (mapState, mapDispatch) => {
  return WrappedComponent => {
    return props => {
      const { store, dispatch } = useContext(Context);
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
