import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './styles.css';

function Form({ task, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={task} type="text" onChange={handleChange} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
};

export default Form;
