import projectsFrench from '../assets/data/projects-french.json';
import projectsEnglish from '../assets/data/projects-english.json';
import projectsJapanese from '../assets/data/projects-japanese.json';
import { HashLink as Link } from 'react-router-hash-link';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { LanguageContext } from '../App';

function Projects() {
  const { language, toFrench, toEnglish, toJapanese } =
    React.useContext(LanguageContext);

  let projects;
  if (language === 'english') {
    projects = projectsEnglish;
    console.log(projects);
  }
  if (language === 'french') {
    projects = projectsFrench;
    console.log(projects);
  }
  if (language === 'japanese') {
    projects = projectsJapanese;
    console.log(projects);
  }
  return (
    <section id="projects">
      <h1>Projects</h1>

      <OwlCarousel
        items={5}
        className="owl-theme"
        center={true}
        loop="true"
        margin={0}
        pagination="true"
        dots="false"
        nav="true"
        responsive={{
          1: {
            items: 1,
          },
          1000: {
            items: 2,
          },
          1500: {
            items: 3,
          },
        }}
      >
        {projects.map((project) => (
          <div key={project.id} className="item">
            <Link to={`.././project/${project.id}#header`}>
              <img src={project.thumbnail}></img>
            </Link>
            <figcaption>{project.name}</figcaption>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
}

export default Projects;
