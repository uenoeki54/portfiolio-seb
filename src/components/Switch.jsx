import React from 'react';
import { ThemeContext } from '../App';

function Switch() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button className="switch" onClick={toggleTheme}>
      <h1>
        {'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}
      </h1>
    </button>
  );
}

export default Switch;
