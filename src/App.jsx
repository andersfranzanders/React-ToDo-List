import React, {useEffect, useState} from "react";

import './App.css';

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useTodos from './useTodos';

function App() {

    const { getTodos, addToTodos, updateTodoDone, deleteTodo } = useTodos();

    return (
      <div className="container">
          <div className="headline">
            <h1>ToDos</h1>
          </div>
        <div className="todoBodyContainer">

            <AddTodo addTodoFunction = {addToTodos}/>
            <TodoList todos={getTodos} updateTodoDone={updateTodoDone} deleteTodo={deleteTodo}/>
        </div>
      </div>
  );
}

export default App;
