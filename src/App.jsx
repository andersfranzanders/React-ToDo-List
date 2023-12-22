import React from "react";

import './App.css';

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import useTodos from './useTodos';
import BottomBar from "./BottomBar";

function App() {

    const { getTodos, addToTodos, updateTodoDone,updateTodoPosition, deleteTodo,deleteAllTodos } = useTodos();

    return (
      <div className="container">
          <div className="headline">
            <h1>TO DO</h1>
          </div>
        <div className="todoBodyContainer">

            <AddTodo addTodoFunction = {addToTodos}/>
            <TodoList todos={getTodos}
                      updateTodoDone={updateTodoDone}
                      updateTodoPosition={updateTodoPosition}
                      deleteTodo={deleteTodo}/>
            <BottomBar deleteAllTodos={deleteAllTodos}/>
        </div>
      </div>
  );
}

export default App;
