import React, { useState } from 'react';

import './styles.css';

function Main() {
  const [, setNewTask] = useState();

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <form action="#">
        <input type="text" onChange={handleNewTask} />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default Main;
