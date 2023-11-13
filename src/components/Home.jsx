import { Link } from 'react-router-dom';
import portrait from '../assets/images/seb-portrait.jpg';
import skills from '../assets/data/skills.json';
function Home() {
  return (
    <main>
      <div id="upper">
        <section id="left">
          <div id="sebastien-etievant">
            <div className="nom">
              <h1>Sébastien ETIEVANT</h1>
              <h2>Intégrateur /</h2>
              <h2>Développeur web</h2>
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
        <nav>
          <ul className="menu">
            {skills.map((idx) => (
              <li key={idx.id}>
                <Link to={`./Card/${idx.id}`}>
                  <button>{idx.name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section id="right">skills</section>
      </div>
    </main>
  );
}

export default Home;
