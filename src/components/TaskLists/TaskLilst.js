import React, {useState} from 'react';
import './task-list.scss';

const TaskList = () => {


    const [ task , setTask ] = useState ([

        { task : 'faire les course' , id: 1 },
        { task : 'faire tourner la machine a laver' , id: 2 },
        { task : 'allez recuperé les enfants a la chorale' , id: 3 },
        { task : 'allez au garage faire reparé la voiture' , id: 4 },
    ]);


    return (

        <div className="task-list" >
            <ul>
                {task.map( item => {
                    return (
                        <li className='task-lists'key={item.id}>{item.task}</li>
                    )
                })}
            </ul>
        </div>

    );
};

export default TaskList;