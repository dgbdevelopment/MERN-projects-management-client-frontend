import {
  SHOW_PROJECT_TASK_LIST,
  NEW_TASK,
  DELETE_TASK,
  ERROR_TASK,
  ACTUAL_TASK,
  EDIT_TASK,
} from "types/index";

const taskReducer = (state, action) => {
  switch (action.type) {
    case SHOW_PROJECT_TASK_LIST:
      return {
        ...state,
        projectTaskList: action.payload,
        actualTask: null,
        errorTask: false,
      };
    case NEW_TASK:
      return {
        ...state,
        projectTaskList: [action.payload, ...state.projectTaskList],
        errorTask: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        projectTaskList: state.projectTaskList.filter(
          (task) => task._id !== action.payload
        ),
        actualTask: null,
      };
    case ERROR_TASK:
      return { ...state, errorTask: true };      
    case ACTUAL_TASK:
      return {
        ...state,
        actualTask: state.projectTaskList.filter(
          (task) => task._id === action.payload
        )[0],
      };
    case EDIT_TASK:
      return {
        ...state,
        projectTaskList: state.projectTaskList.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        actualTask: null,
      };
    default:
      return state;
  }
}

export default taskReducer;