import React from 'react';
import Modal from './Modal';

const TodoButton = () => {
  const openAddTodoPopup = () => {
    // e.preventDefault();
    // <Modal />;
    console.log('klikka');
  };
  return (
    <button onClick={openAddTodoPopup} type="button">
      <i className="fas fa-plus" /> Todo
    </button>
  );
};

export default TodoButton;
