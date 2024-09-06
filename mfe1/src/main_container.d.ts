// main_container.d.ts
declare module 'main_container/store' {
  import store from 'main_container/store';
  import { RootState, AppDispatch, AppStore } from 'main_container/store';

  // const store: Store<RootState, any>;
  export default store;
  export type { RootState, AppDispatch, AppStore };
}
