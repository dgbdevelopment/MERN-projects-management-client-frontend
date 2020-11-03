import React, {useContext} from "react";
import taskContext from "context/tasks/taskContext";

const Task = ({ task }) => {

  const task_context = useContext(taskContext);
  const { deleteTask, editTask, setActualTask } = task_context;

  const toggleDone = () => {
    task.done = !task.done;
    editTask(task);
  }

  return (
    <li className="tarea sombra">
      <p>{task.taskname}</p>
      <div className="estado">
        {task.done ? (
          <button className="completo" type="button" onClick={toggleDone}>
            Completo
          </button>
        ) : (
          <button className="incompleto" type="button" onClick={toggleDone}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={()=> setActualTask(task._id)}>
          Editar
        </button>
        <button type="button" className="btn btn-secundario" onClick={()=> deleteTask(task._id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
