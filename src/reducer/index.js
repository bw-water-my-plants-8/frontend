import { SET_USER } from "../actions";

const initialState = {
  users: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
          phoneNumber: action.payload.password,
        },
      };
    default:
      return state;
  }
};

export default reducer;
