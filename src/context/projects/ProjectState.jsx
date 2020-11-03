import React, { useReducer } from "react";
import axios from "config/axios";

import projectContext from "context/projects/projectContext";
import projectReducer from "context/projects/projectReducer";

import {
  NEW_PROJECT_FORM,
  LOAD_PROJECT_LIST,
  NEW_PROJECT,
  ERROR_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "types/index";

const ProjectState = (props) => {
  const initialState = {
    projectList: [],
    showNewProjectForm: false,
    errorForm: false,
    actualProject: null,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Serie de funciones para el CRUD
  const toogleShowForm = () => {
    dispatch({ type: NEW_PROJECT_FORM });
  };
  const loadProjectList = async () => {
    try {
      const result = await axios.get("/project");
      const projects = result.data.results;
      dispatch({ type: LOAD_PROJECT_LIST, payload: projects });
    } catch (error) {
      if (error.response) console.log(error.response);
      else console.log("Ha ocurrido un error en el servidor");
    }
  };
  const newProject = async (project) => {
    try {
      const result = await axios.post("/project", project);
      const newProject = result.data.project;
      dispatch({ type: NEW_PROJECT, payload: newProject });
    } catch (error) {
      dispatch({ type: ERROR_FORM });
      if (error.response) console.log(error.response);
      else console.log("Ha ocurrido un error en el servidor");
    }
  };
  const showError = () => {
    dispatch({ type: ERROR_FORM });
  };
  const setActualProject = (id) => {
    dispatch({ type: ACTUAL_PROJECT, payload: id });
  };
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/project/${id}`);
      dispatch({ type: DELETE_PROJECT, payload: id });
    } catch (error) {
      if (error.response) console.log(error.response);
      else console.log("Ha ocurrido un error en el servidor");
    }
  };

  return (
    <projectContext.Provider
      value={{
        projectList: state.projectList,
        showNewProjectForm: state.showNewProjectForm,
        errorForm: state.errorForm,
        actualProject: state.actualProject,
        toogleShowForm,
        loadProjectList,
        newProject,
        showError,
        setActualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
