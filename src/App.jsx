import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Project from './components/Project';

import './assets/sass/main.scss';

import React from 'react';
import { useState } from 'react';

const ThemeContext = React.createContext([]);
export { ThemeContext };
const LanguageContext = React.createContext([]);
export { LanguageContext };
function App() {
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  const [language, setLanguage] = useState('english');
  function toFrench() {
    setLanguage('french');
  }
  function toEnglish() {
    setLanguage('english');
  }
  function toJapanese() {
    setLanguage('japanese');
  }
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageContext.Provider
          value={{ language, toFrench, toEnglish, toJapanese }}
        >
          <div className={`app ${theme}`}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:skillId" element={<Home />} />
              <Route path="/project/:projectId" element={<Project />} />
            </Routes>
            <Projects />
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
