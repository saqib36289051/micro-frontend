// main_container.d.ts
declare module "main_container/store" {
  import store from "main_container/store";
  import { RootState, AppDispatch, AppStore } from "main_container/store";

  // const store: Store<RootState, any>;
  export default store;
  export type { RootState, AppDispatch, AppStore };
}

declare module "main_container/BASE_URL" {
  export default BASE_URL;
}

declare module "main_container/StoreProvider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}

declare module "main_container/useReduxHooks" {
  import {useAppSelector,useAppDispatch} from "main_container/useReduxHooks";
  import { RootState, AppDispatch, AppStore } from "main_container/store";
  interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useAppSelector: TypedUseSelectorHook<RootState>;
  export const useAppDispatch: TypedUseSelectorHook<AppDispatch>;
}
