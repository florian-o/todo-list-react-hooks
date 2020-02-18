import React, {  useContext } from 'react';


import './task-list.scss';

import AddTask from '../AddTask/AddTask';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataContext } from '../contexts/DataContext';

const TaskList = () => {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { task, dispatch } = useContext(DataContext);
  const theme = isLightTheme ? light : dark;

  return (

    <div className="task-list"  style = {{ color: theme.synthax , background: theme.bg}} >
      <AddTask />
      <ul>

        {task.map(item => {

          return (
            <li className="task-lists" key={item.id}> {item.task}  <span onClick={() => dispatch({type: 'REMOVE_TASK', id: item.id})}>x</span> </li> 
          );
        })}
 
      </ul>
    </div>

  );
};

export default TaskList;
