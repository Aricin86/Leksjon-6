import React from 'react';

const Search = ({ search, handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        placeholder="for title"
        onChange={handleChange}
        value={search}
      />
    </>
  );
};

export default Search;
