import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  LOGOUT }
  from "types/index";

const taskReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { token: action.payload.token, user: action.payload.user }
    case LOGIN_ERROR:
    case LOGOUT:
    case REGISTER_ERROR:
      localStorage.removeItem("token")
      return { token: null, user: null }
    case GET_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
};
export default taskReducer;
