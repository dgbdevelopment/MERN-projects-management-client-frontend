import React, { useState, useContext, useEffect } from "react";
import Error from 'components/errors/Error';

import projectContext from "context/projects/projectContext";
import taskContext from "context/tasks/taskContext";

const TaskForm = () => {

  const project_context = useContext(projectContext);
  const { actualProject } = project_context;
  const task_context = useContext(taskContext);
  const { newTask, showErrorTask, errorTask, actualTask, editTask } = task_context;

  const [task, setTask] = useState({
    taskname: '',
    done: false,
    projectId: ''
  })

  const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (task.taskname.trim() === "") return showErrorTask();
    if (actualTask) {
      editTask(task);
      cleanTask();
      return;
    }
    task.projectId = actualProject._id;
    newTask(task);
    cleanTask();
  }

  useEffect(() => {
    if (actualTask) setTask(actualTask);
  }, [actualTask])

  const cleanTask = () => {
    setTask({
      taskname: "",
      done: false,
      projectId: ""
    });    
  }

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Tarea"
            name="taskname"
            onChange={handleChange}
            value={task.taskname}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={actualTask ? "Modificar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errorTask ? <Error message={"Debe introducir un nombre para la tarea"}/>:null}
    </div>
  );
};

export default TaskForm;
