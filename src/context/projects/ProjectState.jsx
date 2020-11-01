import React, {useReducer} from "react";

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
  const projects = [
    { id: 'id1', name: "Un proyecto guay" },
    { id: 'id2', name: "Un proyecto molón" },
    { id: 'id3', name: "Un proyecto de puta madre" },
  ]

  const initialState = {
    projectList: [],
    showNewProjectForm: false,
    errorForm: false,
    actualProject: null
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Serie de funciones para el CRUD
  const toogleShowForm = () => {
    dispatch({type: NEW_PROJECT_FORM });
  }
  const loadProjectList = () => {
    dispatch({type: LOAD_PROJECT_LIST, payload: projects})
  }
  const newProject = (project) => {
    dispatch({ type: NEW_PROJECT, payload: project });
  }
  const showError = () => {
    dispatch({ type: ERROR_FORM });
  };
  const setActualProject = (id) => {
    dispatch({type: ACTUAL_PROJECT, payload:id})
  }
  const deleteProject = (id) => {
    dispatch({type: DELETE_PROJECT, payload:id})
  }

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
