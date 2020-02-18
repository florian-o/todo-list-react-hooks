import React, { useState,useContext } from 'react';
import { DataContext } from '../../components/contexts/DataContext';

import './add-tasks.scss';

const AddTask = () => {

  const { dispatch } = useContext(DataContext);
  const [tasks, settasks] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({
      type: 'ADD_TASK', task: tasks
    });
    settasks('');
  };

  return (

    <div className="add-task">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={tasks} placeholder = "Ajouté une tache ...." onChange={(e) => settasks(e.target.value)} />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  )

};
export default AddTask;
