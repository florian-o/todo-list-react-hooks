import React, { useState, useEffect , useContext } from 'react';
import uuid from 'uuid';

import './task-list.scss';

import AddTask from '../AddTask/AddTask';
import { ThemeContext } from '../contexts/ThemeContext';

const TaskList = () => {

    const [ tasks , setTasks] = useState ([]);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
  
    const theme = isLightTheme ? light : dark ;


    const newTask = (task) => {        
        setTasks([...tasks ,{task: task,id:uuid() }])
  }

useEffect(() => {
    console.log(tasks); 

}, [tasks])

    return (

        <div className="task-list"  style = {{ color: theme.synthax , background: theme.bg  }} >
        <AddTask newTask={newTask}/>
            <ul>
                {tasks.map( item => {
                    return (
                        <li onClick={(e)=> console.log(e.currentTarget)} className='task-lists'key={item.id}>{item.task}</li>
                    )
                })}
            </ul>
            
        </div>

    );
};

export default TaskList;