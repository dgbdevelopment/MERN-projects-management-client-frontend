import {
  NEW_PROJECT_FORM,
  LOAD_PROJECT_LIST,
  NEW_PROJECT,
  ERROR_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "types/index";

/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case NEW_PROJECT_FORM:
      return { ...state, showNewProjectForm: true };
    case LOAD_PROJECT_LIST:
      return { ...state, projectList: action.payload };
    case NEW_PROJECT:
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
        showNewProjectForm: false,
        errorForm: false
      };
    case ERROR_FORM: return {
      ...state, errorForm: true
    }
    case ACTUAL_PROJECT: return {
      ...state, actualProject: state.projectList.filter(project=> project._id===action.payload)[0]
    }
    case DELETE_PROJECT: return {
      ...state, projectList: state.projectList.filter(project => project._id !== action.payload),
      actualProject: null
    }
    default:
      return state;
  }
};
