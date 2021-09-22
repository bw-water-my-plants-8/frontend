export const SET_USER = "SET_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const loginError = (error) => {
  return { type: LOGIN_ERROR, payload: error };
};

export const addPlant = (plant) => {
  return { type: ADD_PLANT, payload: plant };
};

export const editPlant = (plant) => {
  return { type: EDIT_PLANT, payload: plant };
};

export const deletePlant = (plant) => {
  return { type: DELETE_PLANT, payload: plant };
};
