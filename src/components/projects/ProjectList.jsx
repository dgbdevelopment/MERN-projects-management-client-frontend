import React, {useContext, useEffect} from "react";
import Project from "components/projects/Project";
import projectContext from 'context/projects/projectContext';
import { CSSTransition, TransitionGroup } from "react-transition-group";


const ProjectList = () => {

  const context = useContext(projectContext);

  const { projectList, loadProjectList } = context;

  useEffect(() => {
    loadProjectList();
    // eslint-disable-next-line
  }, []);

  if (projectList.length === 0) return <p className="text-center">Sin proyectos en Activo.<br/> Agrega un nuevo proyecto</p>;
  
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projectList.map((project) => (
          <CSSTransition key={project.id} classNames="proyecto" timeout={300}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
