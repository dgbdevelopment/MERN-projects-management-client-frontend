import React from "react";
import NewProjectForm from "components/projects/NewProjectForm";
import ProjectList from "components/projects/ProjectList";

const Sidebar = () => {
  return (
    <aside>
      <div className="new-project-form">
        <h1>
          MERN<span> - Tareas</span>
        </h1>
        <NewProjectForm />
      </div>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  );
};

export default Sidebar;
