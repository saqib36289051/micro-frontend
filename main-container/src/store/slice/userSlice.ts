import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUserState } from "../../utils/localStorage";
import { UserWithToken } from "../../types/userSliceTypes";
const userState = loadUserState();

const initialState: { user: UserWithToken } = {
  user: userState ? userState : { token: null },
};

export const userSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {

    setUser(
      state,
      action: PayloadAction<Partial<UserWithToken> & { logout?: boolean }>
    ) {
      if (action.payload?.logout === true) {
        return {
          ...state,
          user: {
            token: null,
          },
        };
      }
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
