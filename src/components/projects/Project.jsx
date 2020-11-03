import React, { useContext } from "react";
import projectContext from "context/projects/projectContext";

const Project = ({ project }) => {

  const context = useContext(projectContext);

  const { setActualProject } = context;
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={()=>setActualProject(project._id)}>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
