import projects from '../assets/data/projects.json';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';

function Projects() {
  const [sliderIndex, setSliderIndex] = useState(1);
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="thumbnails">
        <ul>
          <IoIosArrowDropleft
            onClick={() => {
              sliderIndex === 0
                ? setSliderIndex(projects.length - 1)
                : setSliderIndex(sliderIndex - 1);
            }}
          />
          <div>
            <Link
              to={
                sliderIndex === 0
                  ? `.././project/${projects.length - 1}#header`
                  : `.././project/${sliderIndex - 1}#header`
              }
            >
              <img
                src={
                  sliderIndex === 0
                    ? projects[projects.length - 1].thumbnail
                    : projects[sliderIndex - 1].thumbnail
                }
              ></img>
            </Link>
            {/* <figcaption>{projects[sliderIndex - 1].name}</figcaption> */}
          </div>
          <div>
            <Link to={`.././project/${sliderIndex}#header`}>
              <img src={projects[sliderIndex].thumbnail}></img>
            </Link>
            <figcaption>{projects[sliderIndex].name}</figcaption>
          </div>
          <div>
            <Link
              to={
                sliderIndex === projects.length - 1
                  ? `.././project/${0}#header`
                  : `.././project/${sliderIndex + 1}#header`
              }
            >
              <img
                src={
                  sliderIndex === projects.length - 1
                    ? projects[0].thumbnail
                    : projects[sliderIndex + 1].thumbnail
                }
              ></img>
            </Link>
            {/* <figcaption>{projects[sliderIndex + 1].name}</figcaption> */}
          </div>
          <IoIosArrowDropright
            onClick={() => {
              sliderIndex < projects.length - 1
                ? setSliderIndex(sliderIndex + 1)
                : setSliderIndex(0);
            }}
          />
        </ul>
      </div>
    </section>
  );
}

export default Projects;
