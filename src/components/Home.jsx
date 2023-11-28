import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import skillsFrench from '../assets/data/skills-french.json';
import skillsEnglish from '../assets/data/skills-english.json';
import skillsJapanese from '../assets/data/skills-japanese.json';
import intro from '../assets/data/intro.json';
import portrait from '../assets/images/seb-portrait.jpg';
import linkedin from '../assets/icons/linkedin.png';
import { MdDoubleArrow } from 'react-icons/md';
import React from 'react';
import { LanguageContext } from '../App';

function Home() {
  const { language, toFrench, toEnglish, toJapanese } =
    React.useContext(LanguageContext);
  const { skillId } = useParams();

  if (skillId === undefined) {
    return <Navigate to="/0" replace={true} />;
  }
  // ON DEFINIT LE CONTENU SKILLS A AFFICHER EN FONCTION DE LA LANGUE ET DE LA PAGE SKILLS

  let skills;
  if (language === 'english') {
    skills = skillsEnglish;
  }
  if (language === 'french') {
    skills = skillsFrench;
  }
  if (language === 'japanese') {
    skills = skillsJapanese;
  }
  let skill = skills.filter((skills) => skills.id === skillId);

  const skilllist = { __html: skill[0].text };

  return (
    <main>
      <div id="upper">
        <section id="left">
          <div id="sebastien-etievant">
            <div className="nom">
              <h1>Sébastien ETIEVANT</h1>
              <h2>
                {language === 'french' && 'Intégrateur /'}{' '}
                {language === 'english' && 'Web Developper'}
                {language === 'japanese' && 'ウェブ開発者'}
                <br></br>
                {language === 'french' && 'Développeur web'}
              </h2>
            </div>
            <img src={portrait}></img>
          </div>
          <p>{intro[language + 'first']}</p>
          <p>{intro[language + 'second']}</p>
          <br></br>
          <div id="links">
            <Link to="https://www.linkedin.com/in/s%C3%A9bastien-etievant-771b7052/">
              <img src={linkedin}></img>
            </Link>
            <Link to={intro[language + 'resumelink']}>
              {intro[language + 'resumename']}
            </Link>
          </div>
        </section>
        <nav id="skills">
          <ul className="menu">
            {skills.map((idx) => (
              <li key={idx.id}>
                <Link to={`.././${idx.id}`}>
                  <button>{idx.menu}</button>
                </Link>
              </li>
            ))}
            <li className="arrows">
              <MdDoubleArrow className="follow-arrow" />

              <MdDoubleArrow className="go-arrow" />
            </li>
          </ul>
        </nav>
        <section id="right">
          <h1>{skill[0].name}</h1>
          <div dangerouslySetInnerHTML={skilllist}></div>
          <hr />
        </section>
      </div>
    </main>
  );
}

export default Home;
