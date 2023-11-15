import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Project from './components/Project';
import Switch from './components/Switch';
import './assets/sass/main.scss';

import React from 'react';
import { useState } from 'react';

const ThemeContext = React.createContext([]);
export { ThemeContext };
function App() {
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`app ${theme}`}>
          <Switch />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:skillId" element={<Home />} />
            <Route path="/project/:projectId" element={<Project />} />
          </Routes>
          <Projects />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
