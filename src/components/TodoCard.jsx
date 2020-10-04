import React from 'react';

const TodoCard = ({ id, title, description, deleteTodo, addCompletedTodo }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleComplete = () => {
    addCompletedTodo(id);
  };

  return (
    <article value={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" className="btn-delete" onClick={handleDelete}>
        Delete
      </button>
      <button type="button" className="btn-complete" onClick={handleComplete}>
        Complete
      </button>
    </article>
  );
};

export default TodoCard;
