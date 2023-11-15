import projects from '../assets/data/projects.json';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="thumbnails">
        <ul>
          {projects.map((idx) => (
            <li key={idx.id}>
              <Link to={`.././project/${idx.id}#header`}>
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
