import React from 'react';
import './BottomBar.css';

export default function BottomBar({deleteAllTodos}) {
    return (
        <>
            <div className="empty-row">
            </div>
            <div className="row-at-bottom">
                <div>
                    <button onClick={() => deleteAllTodos()}>empty list</button>
                </div>
            </div>
        </>
    );
}
