import { useParams } from 'react-router-dom';
import projects from '../assets/data/projects.json';

function Project() {
  const { projectId } = useParams();
  if (projectId === undefined) {
    return <Navigate to="/0" replace={true} />;
  }
  let project = projects.filter((projects) => projects.id === projectId);

  return (
    <section id="project">
      <div className="left">
        <img src={project[0].picture}></img>
      </div>
      <div className="right">
        <h1>This is the project {project[0].name}</h1>
      </div>
    </section>
  );
}

export default Project;
