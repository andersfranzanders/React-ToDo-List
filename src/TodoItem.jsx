import React from "react";
import './TodoItem.css';

export default function TodoItem( {todo, pos, updateTodoDone,updateTodoPosition, deleteTodo} ) {

    return (
        <div className="todoItem">

            <div className="item-1">
                <input type="checkbox"
                       className="styledCheckbox"
                       checked={todo.done}
                       onChange={event =>
                           updateTodoDone(todo.id, event.target.checked)}
                />
            </div>

            <div className="item-8">
                <div className = {todo.done ? "doneLabel" : ""}>
                {todo.cont}
                </div>
            </div>
            <div className="item-1">
                <div className="buttonContainer">
                    <div>
                <button onClick={() => updateTodoPosition(pos,todo.done, -1)}>↑</button>
                    </div>
                    <div>
                    <button onClick={() => updateTodoPosition(pos,todo.done, 1)}>↓</button>
                    </div>
                </div>
            </div>
            <div className="item-1">
                <button onClick={() => deleteTodo(todo.id)}>–</button>
            </div>
        </div>
    );
}