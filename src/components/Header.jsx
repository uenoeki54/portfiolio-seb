import french from '../assets/icons/flag-french66-40.jpg';
import english from '../assets/icons/flag-english66-40.jpg';
import japanese from '../assets/icons/flag-japan66-40.jpg';
import darkmode from '../assets/icons/icon-darkmode-trans.png';
import { Link } from 'react-router-dom';
import React from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';
function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { language, toFrench, toEnglish, toJapanese } =
    React.useContext(LanguageContext);
  return (
    <header id="header">
      <Link to="./">Home</Link>
      <p>{language}</p>
      <div className="icons">
        <div className="flags">
          <ul>
            <li>
              <a href="#">
                <img src={english} onClick={toEnglish}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={french} onClick={toFrench}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={japanese} onClick={toJapanese}></img>
              </a>
            </li>
          </ul>
        </div>
        <img src={darkmode} className="mode" onClick={toggleTheme}></img>
      </div>
    </header>
  );
}

export default Header;
