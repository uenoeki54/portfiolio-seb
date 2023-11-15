import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import skills from '../assets/data/skills.json';
import portrait from '../assets/images/seb-portrait.jpg';
import { MdDoubleArrow } from 'react-icons/md';

function Home() {
  const { skillId } = useParams();
  if (skillId === undefined) {
    return <Navigate to="/0" replace={true} />;
  }
  let skill = skills.filter((skills) => skills.id === skillId);

  console.log(`skillId vaut ${skillId}`);
  console.log(`skill vaut ${skill}`);
  console.log(skill[0].text);
  const skilllist = { __html: skill[0].text };
  return (
    <main>
      <div id="upper">
        <section id="left">
          <div id="sebastien-etievant">
            <div className="nom">
              <h1>Sébastien ETIEVANT</h1>
              <h2>Intégrateur /Développeur web</h2>
            </div>
            <img src={portrait}></img>
          </div>
          <p>
            Hello ! I am a web developper with a strong business culture and
            strong language skills! Feel free to browse thsi small portfolio of
            mine ! <br></br>Lorem ipsum dolor sit amet, consectetur patate elit.
            Vestibulum id ul
          </p>
        </section>
        <nav id="skills">
          <ul className="menu">
            {skills.map((idx) => (
              <li key={idx.id}>
                <Link to={`.././${idx.id}`}>
                  <button>{idx.name}</button>
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
          <div dangerouslySetInnerHTML={skilllist}></div>
          <hr />
        </section>
      </div>
    </main>
  );
}

export default Home;
