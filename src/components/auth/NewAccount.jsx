import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { username, email, password, confirm } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
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
