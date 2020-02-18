import React,{ useContext }from 'react';
import './header.scss';

import { ThemeContext } from '../contexts/ThemeContext';
const Header = () => {

  const { isLightTheme, light, dark} = useContext(ThemeContext);
  const {toggleTheme} = useContext(ThemeContext);
  const themes = isLightTheme ? light : dark;
 
  return(
  <header style={{ background: themes.ui, color: themes.syntax }} >
    <p className="titleApp"> My Todo App'</p>
    <button onClick={toggleTheme}>Theme {themes.theme} click for change</button>
  </header>
  )
};

export default Header;
