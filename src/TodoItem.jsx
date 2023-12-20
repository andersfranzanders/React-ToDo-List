import React from "react";
import './TodoItem.css';

export default function TodoItem( {todo, updateTodoDone, deleteTodo} ) {

    return (
        <div className="todoItem">
            <div className="item-1">
                <input type="checkbox"
                       className="styledCheckbox"
                       checked={todo.done}
                       onChange={event =>
                           updateTodoDone(todo.id, event.target.checked)}/>
            </div>
            <div className="todoLabel item-7">
                {todo.cont}
            </div>
            <div className="item-1">
                <button onClick={() => deleteTodo(todo.id)}>–</button>
            </div>
        </div>
    );
}