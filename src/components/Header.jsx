import french from '../assets/icons/flag-french66-40.jpg';
import english from '../assets/icons/flag-english66-40.jpg';
import japanese from '../assets/icons/flag-japan66-40.jpg';
import moon from '../assets/icons/moon.svg';
import sun from '../assets/icons/light.svg';
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

      <div className="icons">
        <div className="flags">
          <ul>
            <li>
              <a href="#">
                <img
                  src={english}
                  onClick={() => {
                    toEnglish();
                    localStorage.setItem('languagelocal', 'english');
                  }}
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={french}
                  onClick={() => {
                    toFrench();
                    localStorage.setItem('languagelocal', 'french');
                  }}
                ></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={japanese}
                  onClick={() => {
                    toJapanese();
                    localStorage.setItem('languagelocal', 'japanese');
                  }}
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="darkmode-toggle">
          <input type="checkbox" id="darkmode-toggle" />
          <label
            for="darkmode-toggle"
            onClick={() => {
              const newTheme = theme === 'light' ? 'dark' : 'light';
              localStorage.setItem('themelocal', newTheme);
              toggleTheme();
            }}
          >
            {/* <img src={moon} className="moon"></img>
            <img src={sun} className="sun"></img> */}
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
