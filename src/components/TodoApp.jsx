import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import StatusFilter from "./StatusFilter";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const userTodos = "key";

const TodoApp = (props) => {
    const [todos, setTodos] = useState([]);
    const [Filter, setFilter] = useState([]);
    const [status, setStatus] = useState("All");

    useEffect(() => {
        if (JSON.parse(localStorage.getItem(userTodos)).length !== 0) {
            setTodos(JSON.parse(localStorage.getItem(userTodos)));
        }

    }, []);

    useEffect(() => {
        setFilter(todos);
        localStorage.setItem(userTodos, JSON.stringify(todos));
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
    // const searchFilter = (value) => {
    //     setFilter(Filter.filter(todo => todo.text.toLowerCase().includes(value.toLowerCase())));

    // }


    return (
        <div >
            <NavBar Theme={props} />
            <div className="flex flex-col items-center m-auto max-w-6xl w-11/12 sm:w-3/4 mt-20 p-10 bg-slate-200 dark:bg-black/10 dark:backdrop-blur-3xl rounded" >
                <TodoForm func={todoHandler} />
                <div className="h-fit w-full flex flex-col sm:flex-row justify-around items-center mt-6 gap-y-2" >
                    <StatusFilter func={statusFilter} count={Filter.length} />
                </div>
                <TodoList todos={Filter} completeHandler={completeHandler} deleteHandler={deleteHandler} editHandler={editHandler} />
            </div>
        </div>
    );
}

export default TodoApp;