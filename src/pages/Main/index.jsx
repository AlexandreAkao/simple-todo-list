import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import './styles.css';

function Main() {
  const [newTask, setNewTask] = useState();

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <form action="#" className="form">
        <input value={newTask} type="text" onChange={handleNewTask} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>

    </div>
  );
}

export default Main;
