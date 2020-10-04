import React from 'react';
import CompletedListItem from './CompletedListItem';

const CompletedList = ({ list }) => (
  <section id="table-section">
    <h3>Completed todos</h3>
    <form>
      <label htmlFor="search">Søk: </label>
      <input
        type="text"
        id="search"
        // placeholder="org.nr"
        // onChange={handleChange}
        // value={search}
      />
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
        {list.length <= 0 && <tr />}
        {list.length > 0 &&
          list.map((todo) => <CompletedListItem key={todo.id} {...todo} />)}
      </tbody>
    </table>
  </section>
);

export default CompletedList;
