import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import Title from './src/components/Title';
import TodoButton from './src/components/TodoButton';
import Modal from './src/components/Modal';
import TodoCardList from './src/components/TodoCardList';
import CompletedList from './src/components/CompletedList';
// import Search from './src/components/Search';
// import List from './src/components/List';

// const URL =
// 'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=';

const pageTitle = 'Your Online Todo App';

const App = () => {
  // const [search, setSearch] = useState('');
  // const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
  });
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const toggleModal = () => {
    setShowModal((modalOpen) => !modalOpen);
  };

  const addTodo = () => {
    setTodoList((prev) => [{ id: todoList.length, ...formData }, ...prev]);
    toggleModal();
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const addCompletedTodo = (id) => {
    setCompletedTodoList((prev) => [
      { date: new Date(), ...formData },
      ...prev,
    ]);
    deleteTodo(id);
  };

  // fetching data
  // const fetchData = async () => {
  //   const response = await fetch(URL + search);
  //   const companyData = await response.json();
  //   setData(companyData._embedded.enheter);
  // };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

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
        <CompletedList list={completedTodoList} />
        {showModal && (
          <Modal
            toggleModal={toggleModal}
            addTodo={addTodo}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {/* <Search handleSearch={handleSearch} search={search} />
        <button onClick={fetchData} type="button">
          Søk
        </button>
        <List list={data} /> */}
      </main>
    </>
  );
};

export default App;
