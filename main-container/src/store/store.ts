import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
const store = configureStore({
  reducer: {
    setting: userSlice,
  },
});

store.subscribe(() => {
  console.log("Store updated:", store.getState());
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store;
