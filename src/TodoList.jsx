import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';
export default function TodoList({todos, updateTodoDone, deleteTodo}) {

    function renderTodoItem(todo) {
        return (<li key={todo.id}><TodoItem todo={todo} updateTodoDone={updateTodoDone} deleteTodo={deleteTodo}/></li>)
    }

    return (
        <div className="listBodyContainer">
            <div>
                <h3> Things to do </h3>
                <ul>
                    {todos
                        .filter(todo => !todo.done)
                    .map( todo => renderTodoItem(todo)
                    )}
                </ul>
            </div>
            <div>
                <h3> Things done </h3>

            <ul>
                {todos
                    .filter(todo => todo.done)
                    .map( todo => renderTodoItem(todo)
                    )}
                </ul>
            </div>
        </div>)
}