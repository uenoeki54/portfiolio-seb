import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Success from './components/Success';
import Header from './components/Header';
import Projects from './components/Projects';
import Project from './components/Project';
import React, { useState, useEffect } from 'react';

import './assets/sass/main.scss';

const ThemeContext = React.createContext([]);
export { ThemeContext };
const LanguageContext = React.createContext([]);
export { LanguageContext };
function App() {
  // Retrieve the light mode variable from local storage
  const localTheme = localStorage.getItem('themelocal') || 'light';
  const [theme, setTheme] = useState(localTheme);

  // Function to toggle theme
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  // Function to update theme based on local storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('themelocal') || 'light';
      setTheme(newTheme);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Language context stuff
  // Retrieve the language variable from local storage
  const localLanguage = localStorage.getItem('languagelocal') || 'english';
  const [language, setLanguage] = useState(localLanguage);
  function toFrench() {
    setLanguage('french');
  }
  function toEnglish() {
    setLanguage('english');
  }
  function toJapanese() {
    setLanguage('japanese');
  }

  // Function to update language based on local storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const newLanguage = localStorage.getItem('languagelocal') || 'english';
      setLanguage(newLanguage);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
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
              <Route path="/success/:languageId" element={<Success />} />
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
