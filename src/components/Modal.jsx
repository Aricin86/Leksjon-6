import React from 'react';

const Modal = () => {
  const handleChange = () => {
    console.log('log change');
  };

  return (
    <section>
      <header>
        <h3>New todo</h3>
      </header>

      <form>
        <label>Title</label>
        <input type="text" id="inputValueTitle" placeholder="Title of todo" />

        <label>
          Description
          <span>
            (<span id="descCharLeft">50</span> characters left)
          </span>
        </label>
        <input
          type="text"
          id="inputValueDesc"
          onChange={handleChange}
          placeholder="Short description"
          maxLength="30"
        />

        <label>Author</label>
        <input type="text" id="inputValueAuthor" placeholder="Name of author" />

        <button type="button" className="btn-create" onClick="submitNewTodo()">
          Create
        </button>
      </form>
    </section>
  );
};

export default Modal;
