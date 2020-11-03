import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import axios from "config/axios";
import {
  SHOW_PROJECT_TASK_LIST,
  NEW_TASK,
  DELETE_TASK,
  ERROR_TASK,
  ACTUAL_TASK,
  EDIT_TASK,
} from "types/index";

const TaskState = (props) => {
  const initialState = {
    projectTaskList: [],
    errorTask: false,
    actualTask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Funciones para CRUD
  const showProjectTaskList = async (projectId) => {
    try {
      const result = await axios.get(`task/${projectId}`);
      const tasks = result.data.tasks;
      dispatch({ type: SHOW_PROJECT_TASK_LIST, payload: tasks });
    } catch (err) {
      if (err.response) console.log(err.response);
      else console.log("Ha ocurrido un error");
    }
  };
  const newTask = async (task) => {
    try {
      const result = await axios.post("/task", task);
      const newTask = result.data.task;
      dispatch({ type: NEW_TASK, payload: newTask });
    } catch (err) {
      if (err.response) console.log(err.response);
      else console.log("Ha ocurrido un error");
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/task/${id}`);
      dispatch({ type: DELETE_TASK, payload: id });
    } catch (err) {
      if (err.response) console.log(err.response);
      else console.log("Ha ocurrido un error");
    }
  };

  const showErrorTask = () => {
    dispatch({ type: ERROR_TASK });
  };

  const setActualTask = (id) => {
    dispatch({ type: ACTUAL_TASK, payload: id });
  };

  const editTask = async (task) => {
    try {
      await axios.put(`/task/${task._id}`, task);
      dispatch({ type: EDIT_TASK, payload: task });
    } catch (err) {
      if (err.response) console.log(err.response);
      else console.log("Ha ocurrido un error");
    }
  };

  return (
    <taskContext.Provider
      value={{
        projectTaskList: state.projectTaskList,
        errorTask: state.errorTask,
        actualTask: state.actualTask,
        showProjectTaskList,
        newTask,
        deleteTask,
        showErrorTask,
        setActualTask,
        editTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
