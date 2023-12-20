// useTodos.js

import { useState, useEffect, useMemo } from 'react';

const useTodos = () => {

    let initialTodos = [
        { cont: "Therapie machen", done: false,  id: 1 },
        { cont: "Bewerbungen rauskloppen", done: false, id: 2 },
        { cont: "schmusen", done: true,  id: 3 },
        { cont: "Sport machen", done: false, id: 4 },
        { cont: "lachen", done: true,  id: 5 },
        { cont: "küssen", done: true, id: 6 }
    ];

    const [getTodos, setTodos] = useState(initialTodos);


    function addToTodos (content,prio) {
        let newId = 1;
        if (getTodos.length > 0){
            newId = Math.max(...getTodos.map(item => item.id)) + 1;
        }
        let todos = getTodos.concat({ cont: content, done: false, prio:prio, id: newId })
        setTodos(todos);
    }

    function updateTodoDone (id, isDone) {
        let updatedItems = getTodos.map(todo =>
            todo.id === id ? { ...todo, done: isDone } : todo);
        setTodos(updatedItems);
    }

    function updateTodoPosition(position, isDone, direction) {

        const undoneItems = getTodos.filter(todo => ! todo.done);
        const doneItems = getTodos.filter(todo => todo.done);

        if (! isDone){
            if (position + direction < 0 || position + direction >= undoneItems.length){
                return;
            }
                [undoneItems[position], undoneItems[position + direction]] =
                    [undoneItems[position + direction], undoneItems[position]];
        }
        if (isDone){
            if (position + direction < 0 || position + direction >= doneItems.length){
                return;
            }
            [doneItems[position], doneItems[position + direction]] =
                [doneItems[position + direction], doneItems[position]];
        }
        setTodos([...undoneItems,... doneItems]);
    }

    function deleteTodo (id) {
        const updatedTodos = getTodos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }




    return { getTodos, addToTodos, updateTodoDone, updateTodoPosition, deleteTodo };
};

export default useTodos;