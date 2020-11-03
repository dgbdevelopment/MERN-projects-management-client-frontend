import React, { useContext } from "react";
import projectContext from "context/projects/projectContext";

const Header = (props) => {

  const { user, logoutUser } = props
  
  const { setActualProject } = useContext(projectContext);

  const handleClick = () => {
    setActualProject(null)
    logoutUser();
  }

  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Usuario: <span>{user?.username}</span>
      </p>
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={handleClick}>
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
