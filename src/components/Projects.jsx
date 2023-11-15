import { Link } from 'react-router-dom';
import projects from '../assets/data/projects.json';
function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="thumbnails">
        <ul>
          {projects.map((idx) => (
            <li key={idx.id}>
              <Link to={`.././project/${idx.id}`}>
                <img src={idx.thumbnail}></img>
              </Link>
              <caption>{idx.name}</caption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
