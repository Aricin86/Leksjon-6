import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import Title from './src/components/Title';
import TodoButton from './src/components/TodoButton';
import TodoCardList from './src/components/TodoCardList';
// import TodoCard from './src/components/TodoCard';
// import Search from './src/components/Search';
// import List from './src/components/List';

// const URL =
// 'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=';

const pageTitle = 'Your Online Todo App';
const todoList = [
  {
    id: 1,
    title: 'Title #1',
    author: 'Jane',
    description: 'Do this and that and then some',
  },
  {
    id: 2,
    title: 'Randomly Generated',
    author: 'Joe',
    description: 'More stuff to do.',
  },
];

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');
  // const [todoInfo, setTodoInfo] = useState('');

  // const fetchTodoInfo = () => {
  //   setTodoInfo(todoList);
  // };

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
        <TodoButton />
        <TodoCardList list={todoList} />

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
