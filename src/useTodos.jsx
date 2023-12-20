// useTodos.js

import { useState, useEffect } from 'react';

const useTodos = () => {

    let initialTodos = [
        { cont: "Therapie machen", done: true, id: 1 },
        { cont: "Bewerbungen rauskloppen", done: true, id: 2 },
        { cont: "Sport machen", done: false, id: 3 }
    ];

    const [getTodos, setTodos] = useState(initialTodos);

    function addToTodos (inputToAdd) {
        let newId = 1;
        if (getTodos.length > 0){
            newId = getTodos[getTodos.length - 1].id + 1;
        }

        setTodos(getTodos.concat({ cont: inputToAdd, done: false, id: newId }));
    }

    function updateTodoDone (id, isDone) {
        function updateAtId(todo){
            return todo.id === id ? { ...todo, done: isDone } : todo;
        }

        let updatedItems = getTodos.map(todo =>
            updateAtId(todo)
        );
        setTodos(updatedItems);
    }
    function deleteTodo (id) {
        const updatedTodos = getTodos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }




    return { getTodos, addToTodos, updateTodoDone, deleteTodo };
};

export default useTodos;