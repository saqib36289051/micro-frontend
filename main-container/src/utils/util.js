import { loadUserState } from "./localStorage";

export const isUserLoggedIn = () => {
  let userState = loadUserState();
  if (userState?.token) return true;
  return false;
};

export const getAuthToken = () => {
  let userState = loadUserState();
  return userState?.token;
};
