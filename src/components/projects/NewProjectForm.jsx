import React, { useState, useContext, useEffect } from "react";
import projectContext from "context/projects/projectContext";
import { v4 as uuidv4 } from "uuid";
import Error from 'components/errors/Error';


const NewProjectForm = () => {
  const [project, setProject] = useState({
    id: "",
    name: ""
  });
  const { id, name } = project;

  const context = useContext(projectContext);

  const { showNewProjectForm, errorForm, toogleShowForm, newProject, showError } = context;


  const handleChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return showError();
    setProject({...project, id:uuidv4()})
  };

  useEffect(() => {
    if (id.trim()!=="") {
      newProject(project)
      setProject({id:"", name:""})
    }
  // eslint-disable-next-line
  },[id])

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
