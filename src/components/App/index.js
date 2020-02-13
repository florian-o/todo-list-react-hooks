// == Import : npm
import React,{useContext} from 'react';

// == Import : local
import './app.scss';
import Header from '../Header';
import ThemeContextProvider,{ThemeContext} from '../../components/contexts/ThemeContext'; 

import TaskList from '../TaskLists/TaskLilst';


// == Composant
const App = () => { 
  

  return(
  <div id="app" >

   <ThemeContextProvider> 
     
    <Header />
    <TaskList />
   
    </ThemeContextProvider>
    
  </div>
  )
};

// == Export
export default App;
