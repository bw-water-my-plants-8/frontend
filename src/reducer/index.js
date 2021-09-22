import {
  SET_USER,
  ADD_PLANT,
  EDIT_PLANT,
  DELETE_PLANT,
  LOGIN_ERROR,
} from "../actions";

const initialState = {
  plants: [],
  user: {
    user_id: "",
    username: "",
    password: "",
    phone_number: "",
  },
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          user_id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
          phone_number: action.payload.phone_number,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_PLANT:
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };
    case EDIT_PLANT:
      return {
        ...state,
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
