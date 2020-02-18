// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from '../Header/Header';
import ThemeContextProvider from '../contexts/ThemeContext'; 
import DataContextProvider from '../../components/contexts/DataContext';

import TaskList from '../TaskLists/TaskLilst';


// == Composant
const App = () => { 
  

  return(
  <div id="app" >
   <ThemeContextProvider> 
     <DataContextProvider>
     
    <Header />
    <TaskList />
    </DataContextProvider>
    </ThemeContextProvider>
    
  </div>
  )
};

// == Export
export default App;
