import { useState, useRef, useEffect } from "react";
import { BiX } from "react-icons/bi";
import TodoForm from "./TodoForm";

const EditModal = ({ todo, edit, setEdit, onEdit }) => {

    const [value, setValue] = useState("");
    const inp = useRef();
    useEffect(() => {
        inp.current.focus();
    }, [edit]);


    const submitHandler = (e) => {
        e.preventDefault();
        onEdit(todo.id, value)
        setEdit(false);
        setValue("");
    }
    return (
        <form onSubmit={submitHandler} className={`justify-center w-full h-full items-center gap-x-2  right-0 top-0 bg-black/80 rounded  absolute ${edit ? "flex" : "hidden"}`} >
            <BiX onClick={() => setEdit(false)} className="text-xl  text-white cursor-pointer absolute top-1 right-1" />
            <input ref={inp} required onChange={e => setValue(e.target.value)} value={value} type={"text"} className="px-2 w-2/4 py-1 rounded outline-slate-500" />
            <button type="submit" className="px-4 py-1 sm:px-8 rounded text-white bg-slate-600 hover:bg-slate-700 " >Edit</button>
            {/* <TodoForm /> */}
        </form>
    );
}

export default EditModal;