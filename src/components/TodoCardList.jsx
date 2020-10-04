import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ list, deleteTodo, addCompletedTodo }) => (
  <section id="card-list">
    {list.length <= 0 && <p id="no-todo">Huzzah! No todos today.</p>}
    {list.length > 3
      ? list
          .slice(0, 3)
          .map((todo) => (
            <TodoCard
              deleteTodo={deleteTodo}
              addCompletedTodo={addCompletedTodo}
              key={todo.id}
              {...todo}
            />
          ))
      : list.map((todo) => (
          <TodoCard
            deleteTodo={deleteTodo}
            addCompletedTodo={addCompletedTodo}
            key={todo.id}
            {...todo}
          />
        ))}
  </section>
);

export default TodoCardList;
