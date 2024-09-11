declare module "redux_store/store" {
  import store from "redux_store/store";
  import {
    RootState,
    AppDispatch,
    AppStore,
    StoreProvider,
    useAppSelector,
    useAppDispatch,
  } from "redux_store/store";

  export { useAppSelector, useAppDispatch };
  export type { RootState, AppDispatch, AppStore };
  export default store;
}

declare module "redux_store/storeProvider" {
  import React from "react";
  import StoreProvider from "redux_store/storeProvider";
  export default StoreProvider;
}
// "./actions": "./src/store/slice",
declare module "redux_store/actions" {
  import { setUser } from "redux_store/actions";
  export { setUser };
}
// "./sagas": "./src/store/sagas"
declare module "redux_store/sagas" {
  import { get, post } from "redux_store/sagas";
  export { get, post };
}
