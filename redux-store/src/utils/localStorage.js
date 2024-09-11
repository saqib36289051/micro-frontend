export const loadUserState = () => {
    try {
      const serializedState = localStorage.getItem("user");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  export const saveUserState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("user", serializedState);
    } catch (err) {
      //ignoring write erros
    }
  };