import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 style={{ marginTop: "4rem" }}>Página no encontrada. Error 404</h1>
      <p style={{ textAlign: "center" }}>
        <Link to="/">Volver</Link>
      </p>
    </>
  );
};

export default NotFound;
