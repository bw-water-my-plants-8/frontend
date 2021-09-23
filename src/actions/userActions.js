export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};
