import React, { useReducer, useContext, useEffect } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import alertContext from "../alerts/alertContext";
import axios from "config/axios";

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  LOGOUT,
} from "types/index";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const { showAlert } = useContext(alertContext);

  //Funciones
  const userRegister = async (datos) => {
    try {
      const result = await axios.post("/user/register", datos);
      dispatch({ type: REGISTER_SUCCESS, payload: result.data });
      localStorage.setItem("token", result.data.token);
    } catch (err) {
      dispatch({ type: REGISTER_ERROR });
      if (err.response) showAlert(err.response.data?.errors, "alerta-error");
      else
        showAlert(
          [{ msg: "Ha ocurrido un error en el servidor" }],
          "alerta-error"
        );
    }
  };

  const userLogin = async (datos) => {
    try {
      const result = await axios.post("/user/login", datos);
      dispatch({ type: LOGIN_SUCCESS, payload: result.data });
      localStorage.setItem("token", result.data.token);
    } catch (err) {
      dispatch({ type: LOGIN_ERROR });
      if (err.response) showAlert(err.response.data?.errors, "alerta-error");
      else
        showAlert(
          [{ msg: "Ha ocurrido un error en el servidor" }],
          "alerta-error"
        );
    }
  };

  const getUser = async (token) => {
    try {
      const result = await axios.post("/user");
      const user = result.data.user;
      dispatch({ type: GET_USER, payload: user });
    } catch (err) {
      if (err.response) console.log(err.response);
      else console.log("Ha ocurrido un error en el servidor");
    }
  };

  const logoutUser = () => dispatch({ type: LOGOUT });

  useEffect(() => {
    if (state.token) {
      axios.setAuth(state.token);
      getUser(state.token)
    };
  }, [state.token]);

  return (
    <authContext.Provider
      value={{
        token: state.token,
        user: state.user,
        userRegister,
        userLogin,
        getUser,
        logoutUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
