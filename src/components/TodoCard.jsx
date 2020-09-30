import React from 'react';

const TodoCard = ({ title, description }) => (
  <article>
    <h2>{title}</h2>
    <p>{description}</p>
    <button type="button">Delete</button>
    <button type="button">Complete</button>
  </article>
);

export default TodoCard;
