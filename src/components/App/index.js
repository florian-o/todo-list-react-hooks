// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Header from '../Header';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskLists/TaskLilst'


// == Composant
const App = () => (
  <div id="app">
    <Header />
    <AddTask />
    <TaskList />
  </div>
);

// == Export
export default App;
