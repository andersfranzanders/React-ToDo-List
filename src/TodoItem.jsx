import React from "react";
import './TodoItem.css';

export default function TodoItem( {todo, updateTodoDone, deleteTodo} ) {

    return (
        <div className="todoItem">
            <div>
                <input type="checkbox"
                       className="styledCheckbox"
                       checked={todo.done}
                       onChange={event =>
                           updateTodoDone(todo.id, event.target.checked)}/>
            </div>
            <div className="todoLabel">
                {todo.cont}
            </div>
            <div>
                <button onClick={() => deleteTodo(todo.id)}>del</button>
            </div>
        </div>
    );
}