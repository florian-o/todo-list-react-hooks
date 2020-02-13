import React, { useState } from 'react';

import './add-tasks.scss';

const AddTask = ({newTask}) => {

  const [tasks, settasks] = useState('');

  const handleSubmit = (e) =>{

    e.preventDefault();
    newTask(tasks);
    settasks('');
  }
 
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
