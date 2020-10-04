import React, { useState } from 'react';

const Modal = ({ toggleModal, addTodo, formData, setFormData }) => {
  const [charLeft, setCharLeft] = useState('');

  const handleCharInputChange = (e) => {
    setCharLeft(50 - e.target.value.length);
  };

  const closeModal = (event) => {
    toggleModal(event);
  };

  const handleAddTodoSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  const updateValue = (e) => {
    const inputValue = { [e.target.name]: e.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };

  return (
    <>
      <section className="new-todo-popup" id="addNewTodoForm">
        <header>
          <h3>New todo</h3>
          <span onClick={closeModal}>+</span>
        </header>

        <form className="popup-container">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={updateValue}
            placeholder="Title of todo"
          />

          <label>
            Description
            <span id="descInfoSpan">
              (<span id="descCharLeft">{charLeft || 50}</span> characters left)
            </span>
          </label>
          <input
            type="text"
            name="description"
            onChange={(handleCharInputChange, updateValue)}
            placeholder="Short description"
            maxLength="50"
          />

          <label>Author</label>
          <input
            type="text"
            name="author"
            onChange={updateValue}
            placeholder="Name of author"
          />

          <button
            type="submit"
            className="btn-create"
            onClick={handleAddTodoSubmit}
          >
            Create
          </button>
        </form>
      </section>

      <section id="overlay" onClick={closeModal} />
    </>
  );
};

export default Modal;
