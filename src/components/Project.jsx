import { useParams } from 'react-router-dom';
import React from 'react';
import { LanguageContext } from '../App';
import projectsFrench from '../assets/data/projects-french.json';
import projectsEnglish from '../assets/data/projects-english.json';
import projectsJapanese from '../assets/data/projects-japanese.json';
import { Link } from 'react-router-dom';

function Project() {
  const { language, toFrench, toEnglish, toJapanese } =
    React.useContext(LanguageContext);
  const { projectId } = useParams();
  if (projectId === undefined) {
    return <Navigate to="/0" replace={true} />;
  }

  let projects;
  if (language === 'english') {
    projects = projectsEnglish;
  }
  if (language === 'french') {
    projects = projectsFrench;
  }
  if (language === 'japanese') {
    projects = projectsJapanese;
  }
  let project = projects.filter((projects) => projects.id === projectId);

  return (
    <section id="project">
      <div className="left">
        <img src={project[0].picture}></img>
      </div>
      <div className="right">
        <h1>Project : {project[0].name}</h1>
        <p>{project[0].text}</p>
        <p>{project[0].text2}</p>
        <Link to={project[0].link}>{project[0].link}</Link>
        <br></br>
        <Link to={project[0].github}>{project[0].github}</Link>
      </div>
    </section>
  );
}

export default Project;
