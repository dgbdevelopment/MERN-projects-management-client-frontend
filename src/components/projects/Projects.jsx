import React, {useContext} from "react";
import Sidebar from "components/layout/Sidebar";
import Header from "components/layout/Header";
import TaskForm from "components/tasks/TaskForm";
import TasksList from "components/tasks/TasksList";

import projectContext from "context/projects/projectContext";


const Projects = () => {

  const context = useContext(projectContext);
  const { actualProject } = context;


  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        {actualProject ? (<main>
          <TaskForm />

          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>) : <h2 className="contenedor-tareas">Selecciona un proyecto</h2>}
      </div>
    </div>
  );
};

export default Projects;
