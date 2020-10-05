import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import Title from './src/components/Title';
import TodoButton from './src/components/TodoButton';
import Modal from './src/components/Modal';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';

const pageTitle = 'Your Online Todo App';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [idCounter, setIdCounter] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });

  const toggleModal = () => {
    setShowModal((modalOpen) => !modalOpen);
  };

  const addTodo = () => {
    setIdCounter(idCounter + 1);
    setTodoList((prev) => [{ id: idCounter, ...formData }, ...prev]);
    toggleModal();
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const createCurrentDateTime = () => {
    const newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    const newDateTime = `${`0${newDate.getDate()}`.slice(-2)}.${`0${
      newDate.getMonth() + 1
    }`.slice(-2)}.${newDate.getFullYear()} - ${hours}:${minutes}:${seconds}`;
    return newDateTime;
  };

  const searchingTodos = () => {
    if (search.length <= 0) {
      setFilteredTodoList(completedTodoList);
      return;
    }

    setFilteredTodoList(
      completedTodoList.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const addCompletedTodo = (id) => {
    setCompletedTodoList((prev) => [
      { id, ...formData, date: createCurrentDateTime() },
      ...prev,
    ]);
    setFilteredTodoList((prev) => [
      { id, ...formData, date: createCurrentDateTime() },
      ...prev,
    ]);
    deleteTodo(id);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchingTodos();
  };

  return (
    <>
      <header>
        <Navbar />
        <Title title={pageTitle} />
      </header>
      <main>
        <TodoButton toggleModal={toggleModal} />
        <TodoCardList
          list={todoList}
          deleteTodo={deleteTodo}
          addCompletedTodo={addCompletedTodo}
        />
        <CompletedList
          list={filteredTodoList}
          handleSearch={handleSearch}
          search={search}
          searchingTodos={searchingTodos}
        />
        {showModal && (
          <Modal
            toggleModal={toggleModal}
            addTodo={addTodo}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </main>
    </>
  );
};

export default App;
