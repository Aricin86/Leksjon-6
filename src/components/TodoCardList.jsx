import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todoList }) => (
  <section>
    {todoList && todoList.map((todo) => <TodoCard key={todo.id} {...todo} />)}
    {/* : ( 
       <p>Huzzah! No todos today.</p>
    )} */}
  </section>
);

export default TodoCardList;
