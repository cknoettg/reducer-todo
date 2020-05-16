import React, { useState, useReducer } from "react";
import { initialState, TodoReducer } from "../reducers/TodoReducer";

const TodoList = () => {
    //item, completed, id
    // const[item, setItem] = useState('');
    // const[completed, setCompleted] = useState('');
    // const[id, setId] = useState('');

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const [items, setItems] = useState("");

    const addTodo = e => {
        e.preventDefault();
        let todo = { 
            item: items, 
            completed: false, 
            ID: Date.now() };
        dispatch({ type: "ADD_TODO", payload: todo });
        setItems("");
    };

    const handleChanges = e => {
        setItems(e.target.value);
    };

    return (
        <div>
            {state.todos.map(todo => {
                return <p className={`item${todo.completed ? " completed" : ""}`}
                onClick={() =>
                  dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })
                }>{todo.item}</p>;
            })}
            <form onSubmit={addTodo}>
                <input type="text" value={items} onChange={handleChanges} />
                <button>Add Todo</button>
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
            </form>
        </div>
    )

};

export default TodoList;
