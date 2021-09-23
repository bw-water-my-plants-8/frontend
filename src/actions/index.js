import axiosWithAuth from "../utils/axiosWithAuth";

export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const FETCH_START = "FETCH_START";
export const SET_PLANTS = "SET_PLANTS";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const ADD_PLANT = "ADD_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const getPlants = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosWithAuth()
      .get(`https://water-my-plants-8-api.herokuapp.com/plants`)
      .then((res) => {
        dispatch(setPlantsState(res.data));
      })
      .catch((err) => {
        dispatch(err);
      });
  };
};

export const setUser = (user) => {
  return { type: SET_USER, payload: user };
};

export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const setPlantsState = (plants) => {
  return { type: SET_PLANTS, payload: plants };
};

export const toggleEdit = () => {
  return { type: TOGGLE_EDITING };
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
