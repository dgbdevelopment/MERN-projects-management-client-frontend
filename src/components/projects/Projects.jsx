import React, {useContext, useEffect} from "react";
import Sidebar from "components/layout/Sidebar";
import Header from "components/layout/Header";
import TaskForm from "components/tasks/TaskForm";
import TasksList from "components/tasks/TasksList";

import projectContext from "context/projects/projectContext";
import authContext from "context/auth/authContext";
// import alertContext from "context/alerts/alertContext";
// import Alert from "components/alert/Alert";



const Projects = (props) => {

  // const { alert } = useContext(alertContext);

  const { actualProject } = useContext(projectContext);

  const { user, logoutUser } = useContext(authContext);

  useEffect(
    () => {
      if (!user) props.history.push("/");
    }, //eslint-disable-next-line
    [user]
  );

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header user={user} logoutUser={logoutUser} history={props.history} />
        {actualProject ? (
          <main>
            <TaskForm />

            <div className="contenedor-tareas">
              <TasksList />
            </div>
          </main>
        ) : (
          <h2 className="contenedor-tareas">Selecciona un proyecto</h2>
        )}
      </div>
    </div>
  );
};

export default Projects;
