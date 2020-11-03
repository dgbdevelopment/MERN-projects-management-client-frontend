import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import authContext from "context/auth/authContext";
import alertContext from "context/alerts/alertContext";
import Alert from "components/alert/Alert";

const Login = (props) => {

  const { userLogin, user } = useContext(authContext); 

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const { alert } = useContext(alertContext);


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(userData)
  };

  useEffect(() => {
    if (user) props.history.push("/projects")
  }//eslint-disable-next-line
,[user])

  return (
    <div className="form-usuario">
      {alert ? <Alert msg={alert.msg} category={alert.category} /> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="current-email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <input
              className="btn btn-primario btn-block"
              type="submit"
              value="Iniciar sesión"
            />
          </div>
        </form>
        <p>
          <Link class-name="enlace-cuenta" to="/new-account">
            ¿No estás registrado? Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
