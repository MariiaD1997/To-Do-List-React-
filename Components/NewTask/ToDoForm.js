import React, { useState } from "react";
import "./ToDoForm.css";

const ToDoForm = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);

    setInputText("");
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form className="input-form">
      <input
        type="text"
        placeholder="Add new task!"
        value={inputText}
        onChange={inputChangeHandler}
        className="todo-input"
      />
      <button type="submit" className="todo-button" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todos" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">In progress</option>
        </select>
      </div>
    </form>
  );
};

export default ToDoForm;
