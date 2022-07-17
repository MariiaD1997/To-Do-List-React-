import React, { useState } from "react";
import "./Todo.css";
import ToDoForm from "../NewTask/ToDoForm";
import ToDoList from "./ToDoList";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
