import React from 'react';
import CompletedListItem from './CompletedListItem';
import Search from './Search';

const CompletedList = ({ list, handleSearch, search, searchingTodos }) => {
  const clickSearchButton = () => {
    searchingTodos();
  };

  return (
    <section id="table-section">
      <h3>Completed todos</h3>
      <form>
        <Search handleSearch={handleSearch} search={search} />
        <button type="button" onClick={clickSearchButton}>
          Search
        </button>
        <label className="sorting-checkbox">
          Sort by date (ascending)
          <input type="checkbox" id="sortByAscending" />
          <span className="checkmark" />
        </label>
      </form>
      <table id="todo-table">
        <thead>
          <tr id="tbl-header">
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Completed date</th>
          </tr>
        </thead>
        <tbody>
          {list.length <= 0 && (
            <tr id="tbl-empty-row" className="tbl-row">
              <td colSpan="4">No completed todos yet.</td>
            </tr>
          )}
          {list.length > 0 &&
            list.map((todo) => <CompletedListItem key={todo.id} {...todo} />)}
        </tbody>
      </table>
    </section>
  );
};

export default CompletedList;
