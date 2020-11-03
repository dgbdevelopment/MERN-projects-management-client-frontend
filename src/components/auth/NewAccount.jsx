import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import authContext from "context/auth/authContext";
import alertContext from "context/alerts/alertContext";
import Alert from 'components/alert/Alert';

const NewAccount = (props) => {

  const { userRegister, user } = useContext(authContext);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = newUser;

  const { alert } = useContext(alertContext);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(newUser)
  };

  useEffect(
    () => {
      if (user) props.history.push("/projects");
    }, //eslint-disable-next-line
    [user]
  );


  return (
    <div className="form-usuario">
      {alert ? <Alert msg={alert.msg} category={alert.category} /> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nombre de usuario"
              autoComplete="new-username"
              onChange={handleChange}
              value={username}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="new-email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirmar contraseña"
              autoComplete="new-password"
              onChange={handleChange}
              value={confirm}
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
          <Link class-name="enlace-cuenta" to="/">
            Volver a Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NewAccount;
