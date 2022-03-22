import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';

import './styles.css';

function Modal({
  task: { name, index }, handleSubmit, setShowModal
}) {
  const [editedTask, setEditedTask] = useState(name);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSumitEditedTask = () => {
    handleSubmit(editedTask, index);
    setShowModal(false);
  };

  return (
    <div className="modal-container">
      <div>
        <h1>Editing task: { name }</h1>
        <button className="modal-close-btn" type="button" onClick={handleCloseModal}>x</button>
        <Form task={editedTask} handleChange={handleChange} handleSubmit={handleSumitEditedTask} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

export default Modal;
