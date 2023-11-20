import projects from '../assets/data/projects.json';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <OwlCarousel
        items={3}
        className="owl-theme"
        loop="false"
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
        {projects.map((idx) => (
          <div key={idx.id} className="item">
            <Link to={`.././project/${idx.id}#header`}>
              <img src={idx.thumbnail}></img>
            </Link>
            <figcaption>{idx.name}</figcaption>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
}

export default Projects;
