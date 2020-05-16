import React, { useState, useReducer } from "react";
import { initialState, TodoReducer } from "../reducers/TodoReducer";

const TodoList = () => {
    //item, completed, id
    const[item, setItem] = useState('');
    const[completed, setCompleted] = useState('');
    const[id, setId] = useState('');

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <div>
            <p>{item}</p>
            <p>{completed}</p>
            <p>{id}</p>
        </div>
    )

};

export default TodoList;
