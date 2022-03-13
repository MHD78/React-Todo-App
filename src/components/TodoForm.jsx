import { useState } from "react"

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const date = new Date()
        todo !== "" ? props.func(todo, date.toDateString()) : alert("enter a valid value!"); setTodo("");
    }

    return (
        <form onSubmit={submitHandler} className="flex gap-x-2 w-full max-w-sm " >
            <input type={"text"} value={todo} onChange={e => setTodo(e.target.value)} className="px-2 w-3/4 rounded outline-slate-500" />
            <button type="submit" className="px-4 py-1 sm:px-8 rounded text-white bg-slate-600 hover:bg-slate-700 " >Add</button>
        </form>
    );
}

export default TodoForm;