import { useEffect, useReducer, useCallback, useState } from "react";
import { isNull, isUndefined, assignIn } from "lodash";
import { STORE } from "./constants/storageKeys";

function usePersist(reducer, persist) {
  const [store, dispatch] = useReducer(reducer);
  console.log(store);

  return [store, dispatch];
}

export default usePersist;
