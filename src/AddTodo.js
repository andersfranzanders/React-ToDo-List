import React, { useState } from 'react';
import './AddTodo.css';

export default function AddTodo({addTodoFunction}) {
    let [getInputValue, setInputValue] = useState('');

    return (
        <div className="addTodoContainer">
            <div className="item-80">
                <input
                    type="text"
                    value={getInputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add Item"
                />
            </div>
            <div className="item-20">
            <button onClick={() => addTodoFunction(getInputValue)}>Add</button>
            </div>
        </div>
    );
}


