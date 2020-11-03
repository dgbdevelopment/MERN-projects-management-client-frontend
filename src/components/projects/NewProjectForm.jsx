import React, { useState, useContext } from "react";
import projectContext from "context/projects/projectContext";
import Error from 'components/errors/Error';


const NewProjectForm = () => {
  const [project, setProject] = useState({
    name: ""
  });
  const { name } = project;

  const context = useContext(projectContext);

  const { showNewProjectForm, errorForm, toogleShowForm, newProject, showError } = context;


  const handleChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "") return showError();
    await newProject(project);
    setProject({name: ''})
  };

  return (
    <div>
      {showNewProjectForm ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : (
        <button type="button" className="btn btn-primario btn-block" onClick={toogleShowForm}>
          Nuevo Proyecto
        </button>
        )}
      {errorForm ? <Error message={"El nombre del proyecto es obligatorio"}/>:null}
    </div>
  );
};

export default NewProjectForm;
