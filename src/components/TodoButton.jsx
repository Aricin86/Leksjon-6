import React from 'react';

const TodoButton = () => {
  const openAddTodoPopup = () => {
    // e.preventDefault();
    console.log('Clicked todo-button!');
  };
  return (
    <button onClick={openAddTodoPopup} type="button">
      <i className="fas fa-plus" /> Todo
    </button>
  );
};

export default TodoButton;
