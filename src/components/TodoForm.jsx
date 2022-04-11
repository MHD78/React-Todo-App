import { useState } from "react"

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const date = new Date()
        todo !== "" ? props.func(todo, date.toLocaleString()) : alert("enter a valid value!"); setTodo("");
    }

    return (
        <form onSubmit={submitHandler} className="flex gap-x-2 w-full max-w-sm " >
            <input type={"text"} value={todo} onChange={e => setTodo(e.target.value)} className="px-2 w-10/12 rounded dark:dark-inp outline-none" />
            <button type="submit" className="px-4 py-1 sm:px-8 rounded text-white bg-sky-500 hover:bg-sky-600 dark:dark-btn " >Add</button>
        </form>
    );
}

export default TodoForm;