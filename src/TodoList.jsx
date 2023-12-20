import React from "react";
import TodoItem from "./TodoItem";
import './TodoList.css';
export default function TodoList({todos, updateTodoDone,updateTodoPosition, deleteTodo}) {

    function renderTodoItem(todo, pos) {
        return (<li key={todo.id}><TodoItem todo ={todo}
                                            pos = {pos}
                                            updateTodoDone={updateTodoDone}
                                            updateTodoPosition={updateTodoPosition}
                                            deleteTodo={deleteTodo}/></li>)
    }

    return (
        <div className="listBodyContainer">
            <div>

                <h3> Things to do </h3>
                <ul>
                    {todos
                        .filter(todo => !todo.done)
                    .map( (todo,pos ) => renderTodoItem(todo,pos)
                    )}
                </ul>
            </div>
            <div>
                <h3> Things done </h3>

            <ul>
                {todos
                    .filter(todo => todo.done)
                    .map( (todo,pos ) => renderTodoItem(todo,pos)
                    )}
                </ul>
            </div>
        </div>)
}