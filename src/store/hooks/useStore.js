import { useContext } from "react";

import Context from "./context";

const useStore = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { store, dispatch } = useContext(Context);

  return {
    getState: store,
    dispatch
  };
};

export default useStore;
