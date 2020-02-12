import React, { useState } from 'react';

import './add-tasks.scss';

const AddTask = () => {

  const [task, settask] = useState('');

  const newTask = (e) => {
    e.preventDefault();
     console.log(task);
    settask('');
  }

  return (

    <div className="add-task">
      <form onSubmit={(e) => newTask(e)}>
        <input type="text" value={task} placeholder = "Ajouté une tache ...." onChange={(e) => settask(e.target.value)} />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  )

};
export default AddTask;
