import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {
  SHOW_PROJECT_TASK_LIST,
  NEW_TASK,
  DELETE_TASK,
  ERROR_TASK,
  MODIFY_DONE,
  ACTUAL_TASK,
  EDIT_TASK,
} from "types/index";

const TaskState = props => {

  const initialState = {
    taskList: [
      { id: "1", taskname: "Elegir plataforma", done: true, projectId: "id1" },
      { id: "2", taskname: "Elegir colores", done: false, projectId: "id1" },
      {
        id: "3",
        taskname: "Elegir plataformas de pago",
        done: false,
        projectId: "id1",
      },
      { id: "4", taskname: "Elegir hosting", done: true, projectId: "id1" },
      { id: "5", taskname: "Elegir plataforma", done: true, projectId: "id2" },
      { id: "6", taskname: "Elegir hosting", done: true, projectId: "id2" },
      { id: "7", taskname: "Elegir colores", done: false, projectId: "id3" },
      {
        id: "8",
        taskname: "Elegir plataformas de pago",
        done: false,
        projectId: "id3",
      },
      { id: "9", taskname: "Elegir hosting", done: true, projectId: "id3" },
    ],
    projectTaskList: [],
    errorTask: false,
    actualTask: null
  };
  
  const [state, dispatch] = useReducer(taskReducer, initialState)

  //Funciones para CRUD
  const showProjectTaskList = id => {
    dispatch({ type: SHOW_PROJECT_TASK_LIST, payload: id });
  }
  const newTask = task => {
    dispatch({ type: NEW_TASK, payload: task });
  }
  const deleteTask = id => {
    dispatch({ type: DELETE_TASK, payload: id });
  }

  const showErrorTask = () => {
    dispatch({ type: ERROR_TASK})
  }

  const modifyDone = (task) => {
    dispatch({ type: MODIFY_DONE, payload: task })
  }

  const setActualTask = (id) => {
    dispatch({ type: ACTUAL_TASK, payload:id})
  }

  const editTask = (task) => {
    dispatch({ type: EDIT_TASK, payload:task})
  }

  return (
    <taskContext.Provider
      value={{
        taskList: state.taskList,
        projectTaskList: state.projectTaskList,
        errorTask: state.errorTask,
        actualTask: state.actualTask,
        showProjectTaskList,
        newTask,
        deleteTask,
        showErrorTask,
        modifyDone,
        setActualTask,
        editTask
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}
 
export default TaskState;