import {
  SHOW_PROJECT_TASK_LIST,
  NEW_TASK,
  DELETE_TASK,
  ERROR_TASK,
  MODIFY_DONE,
  ACTUAL_TASK,
  EDIT_TASK,
} from "types/index";

const taskReducer = (state, action) => {
  switch (action.type) {
    case SHOW_PROJECT_TASK_LIST:
      return { ...state, projectTaskList: state.taskList.filter(task => task.projectId === action.payload) };
    case NEW_TASK:
      return { ...state, taskList: [action.payload,...state.taskList], errorTask: false }
    case DELETE_TASK:
      return { ...state, taskList: state.taskList.filter(task => task.id !== action.payload) }
    case ERROR_TASK:
      return { ...state, errorTask: true };
    case MODIFY_DONE:
      return { ...state, taskList: state.taskList.map(task => task.id === action.payload.id ? action.payload : task)}
    case ACTUAL_TASK:
      return { ...state, actualTask: state.taskList.filter(task => task.id === action.payload)[0] };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        actualTask: null 
      };
    default:
      return state;
  }
}

export default taskReducer;