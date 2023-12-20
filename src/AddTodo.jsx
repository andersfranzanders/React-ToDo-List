import React, { useState } from 'react';
import './AddTodo.css';

export default function AddTodo({addTodoFunction}) {
    let [getInputValue, setInputValue] = useState('');
    let [getPrio, setPrio] = useState(1);

    return (
        <div className="addTodoContainer">

                <div className="item-8">
                    <input
                        type="text"
                        value={getInputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="type the thing you want to do..."
                    />
                </div>
                <div className="item-1">
                    <button onClick={() => addTodoFunction(getInputValue,getPrio)}>+</button>
                </div>

        </div>
    );
}


