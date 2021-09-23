import { SET_USER } from "../actions/userActions";
import {
  ADD_PLANT,
  EDIT_PLANT,
  DELETE_PLANT,
  SET_PLANTS,
  FETCH_START,
  SET_ERROR,
  TOGGLE_EDITING,
} from "../actions/plantActions";

const initialState = {
  plants: [],
  user: {
    user_id: "",
    username: "",
    password: "",
    phone_number: "",
  },
  isFetching: false,
  editing: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case SET_USER:
      return {
        ...state,
        user: {
          user_id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
          phone_number: action.payload.phone_number,
        },
        isFetching: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };
    case TOGGLE_EDITING:
      return {
        editing: !state.editing,
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
        isFetching: false,
      };
    case EDIT_PLANT:
      return {
        ...state,
        plants: state.plants.map((plant) => {
          if (plant.id === action.payload.id) {
            return action.payload;
          } else {
            return plant;
          }
        }),
        isFetching: false,
        editing: false,
      };
    case DELETE_PLANT:
      return {
        ...state,
        plants: state.plants.filter((plant) => plant !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
