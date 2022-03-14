import { useState, useEffect } from "react";
import StatusFilter from "./StatusFilter";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [Filter, setFilter] = useState([]);
    const [status, setStatus] = useState("All");

    useEffect(() => {
        setFilter(todos);
        statusFilter(status);
    }, [todos]);

    const todoHandler = (value, date) => {
        setTodos([...todos, { text: value, date, isComplete: false, id: Math.floor(Math.random() * 1000) }]);

        statusFilter(status);
    }
    const completeHandler = (id) => {
        const index = todos.findIndex(todos => todos.id === id);
        const clone = [...todos];
        clone[index].isComplete = true;
        setTodos(clone);
    }
    const deleteHandler = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    }
    const editHandler = (id, editedText) => {
        const index = todos.findIndex(todos => todos.id === id);
        const clone = [...todos];
        clone[index].text = editedText;
        setTodos(clone);
    }
    const statusFilter = (selected) => {
        setStatus(selected)
        if (selected === "All") {
            setFilter(todos);
        } else if (selected === "Completed") {
            setFilter(todos.filter(todo => todo.isComplete === true));

        } else {
            setFilter(todos.filter(todo => todo.isComplete === false));
        }
    }

    return (
        <div className="flex flex-col items-center m-auto w-11/12 sm:w-3/4 mt-20 p-10 bg-slate-200 rounded" >
            <TodoForm func={todoHandler} />
            <StatusFilter func={statusFilter} />
            <TodoList todos={Filter} completeHandler={completeHandler} deleteHandler={deleteHandler} editHandler={editHandler} />
        </div>
    );
}

export default TodoApp;