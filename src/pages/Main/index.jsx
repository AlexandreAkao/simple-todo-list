import React, { useState } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './styles.css';

function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskParsed = newTask.trim();

    if (!tasks.includes(newTaskParsed)) {
      setTasks((prevTasks) => [...prevTasks, newTaskParsed]);
      setNewTask('');
    }
  };

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <form onSubmit={handleSubmit} className="form">
        <input value={newTask} type="text" onChange={handleNewTask} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <ul className="tasks">
        {tasks.map((tarefa) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
