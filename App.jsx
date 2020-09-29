// import React, { useState } from 'react';
// import Title from './src/components/Title';
// import Search from './src/components/Search';
// import List from './src/components/List';

// const URL =
//   'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=';

// const greeting = 'Velkommen til Demo';

// const App = () => {
// const [search, setSearch] = useState('');
// const [data, setData] = useState('');

// const fetchData = async () => {
//   const response = await fetch(URL + search);
//   const companyData = await response.json();
//   setData(companyData._embedded.enheter);
// };

// const handleSearch = (e) => {
//   setSearch(e.target.value);
// };

// return (
// <>
//   <Title title={greeting} />
//   <Search handleSearch={handleSearch} search={search} />
//   <button onClick={fetchData} type="button">
//     Søk
//   </button>
//   <hr />
//   <List list={data} />
// </>

// );
// };

import React from 'react';

const App = () => (
  <>
    <h1>Some title </h1>
    <form id="search">
      <label htmlFor="search">Søk: </label>
      <input type="text" id="search" placeholder="org.nr" />
      <button type="submit">Finn selskap</button>
    </form>
    <hr />
  </>
);

export default App;
