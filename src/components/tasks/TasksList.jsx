import React, { useContext, useEffect } from "react";
import Task from "components/tasks/Task";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import projectContext from "context/projects/projectContext";
import taskContext from "context/tasks/taskContext";

const TasksList = () => {

  const project_context = useContext(projectContext);
  const { actualProject, deleteProject } = project_context;
  const task_context = useContext(taskContext);
  const { projectTaskList, showProjectTaskList } = task_context;

  useEffect(() => {
    if (actualProject) showProjectTaskList(actualProject._id);
  // eslint-disable-next-line
  }, [actualProject]);

  
  return (
    <>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {projectTaskList?.length === 0 ? (
          <li className="tarea">No hay tareas</li>
        ) : (
          <TransitionGroup>
            {projectTaskList?.map((task) => (
                <CSSTransition key={task._id} classNames="tarea" timeout={300}>
                  <Task task={task} className="tarea"></Task>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
        <button
          type="button"
          className="btn btn-eliminar btn-block"
          onClick={() => deleteProject(actualProject._id)}
        >
          <span style={{ whiteSpace: "pre-wrap" }}>
            Eliminar proyecto {"\t"} 🗙
          </span>
        </button>
      </ul>
    </>
  );
};

export default TasksList;
