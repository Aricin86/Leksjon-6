import React, { useState } from 'react';

const TodoButton = ({ toggleModal }) => {
  const openModal = (event) => {
    toggleModal(event);
  };

  return (
    <button onClick={openModal} type="button" id="btn-add-todo">
      Todo
    </button>
  );
};

export default TodoButton;
