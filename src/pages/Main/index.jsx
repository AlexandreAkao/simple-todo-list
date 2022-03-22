import React, { useState, useEffect } from 'react';

import Form from '../../components/Form';
import Modal from '../../components/Modal';
import TaskList from '../../components/TaskList';

import './styles.css';

function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedTask, setEditedTask] = useState({
    name: '',
    index: -1
  });

  useEffect(() => {
    const tasksLoaded = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasksLoaded);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (event) => {
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

  const handleDelete = (index) => {
    const removedList = [...tasks];
    removedList.splice(index, 1);
    setTasks(removedList);
  };

  const handleEdit = (name, index) => {
    setEditedTask({ name, index });
    setShowModal(true);
  };

  const handleSubmitEdited = (task, index) => {
    setTasks((prevTasks) => {
      const editedList = [...prevTasks];
      editedList[index] = task;
      return editedList;
    });
  };

  return (
    <div className="main">
      <h1>ToDo List</h1>
      {showModal && (
        <Modal
          task={editedTask}
          handleSubmit={handleSubmitEdited}
          setShowModal={setShowModal}
        />
      )}
      <Form
        task={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Main;
