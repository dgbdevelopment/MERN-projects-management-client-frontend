import React, { useContext, useEffect } from "react";
import Task from "components/tasks/Task";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import projectContext from "context/projects/projectContext";
import taskContext from "context/tasks/taskContext";

const TasksList = () => {

  const project_context = useContext(projectContext);
  const { actualProject, deleteProject } = project_context;
  const task_context = useContext(taskContext);
  const { taskList, projectTaskList, showProjectTaskList } = task_context;

  useEffect(() => {
    showProjectTaskList(actualProject.id);
  // eslint-disable-next-line
  }, [actualProject, taskList]);

  
  return (
    <>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {projectTaskList && projectTaskList.length === 0 ? (
          <li className="tarea">No hay tareas</li>
        ) : (
          <TransitionGroup>
            {projectTaskList &&
              projectTaskList.map((task) => (
                <CSSTransition
                  key={task.id}
                  classNames="tarea"
                  timeout={300}
                >
                  <Task task={task} className="tarea"></Task>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(actualProject.id)}
      >
        Eliminar proyecto &times;
      </button>
    </>
  );
};

export default TasksList;
