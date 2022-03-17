import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import ExtraModal from "./ExtraModal";
import EditModal from "./EditModal";

const TodoCard = ({ todo, onEdit, onComplete, onDelete }) => {
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);

    return (
        <div className="w-full max-w-7xl mx-auto relative  my-6  font-semibold dark:shadow-none dark:dark-card bg-slate-300 p-3 rounded-lg shadow-lg shadow-gray-400  " >
            <div className="dark:dark-text flex justify-between items-center gap-x-2">
                <BiCheckCircle onClick={() => onComplete(todo.id)} className={`text-2xl cursor-pointer ${todo.isComplete ? "text-slate-400 dark:text-slate-600 " : "hover:text-green-800"}`} />
                <span className="text-xs text-slate-500" >{todo.date}</span>
                <BiDotsVerticalRounded onClick={() => setModal(true)} className={` text-2xl cursor-pointer ${todo.isComplete ? "text-slate-400 " : "hover:text-blue-800"}`} />
                <ExtraModal modal={modal} setModal={setModal} setEdit={setEdit} todo={todo} onDelete={onDelete} />
                <EditModal edit={edit} setEdit={setEdit} todo={todo} onEdit={onEdit} />
            </div>
            <p onClick={() => setModal(false)} className={`dark:dark-text w-full text-base  p-3 text-justify break-words ${todo.isComplete && "line-through text-slate-400 "}`} >{todo.text}</p>
        </div>
    );
}

export default TodoCard;