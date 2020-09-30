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

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');

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
        <TodoCardList />

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
