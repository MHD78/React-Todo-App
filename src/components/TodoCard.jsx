import { BiCheckCircle, BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import ExtraModal from "./ExtraModal";
import EditModal from "./EditModal";

const TodoCard = (props) => {
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);

    return (
        <div className="w-full max-w-7xl mx-auto relative  my-6  font-semibold bg-slate-300 px-5 py-3 rounded-lg shadow-lg shadow-gray-400  " >
            <div className=" flex justify-between items-center gap-x-2">
                <BiCheckCircle onClick={() => props.onComplete(props.todo.id)} className={`text-2xl cursor-pointer ${props.todo.isComplete ? "text-slate-400 " : "hover:text-green-800"}`} />
                <span className="text-xs text-slate-500" >{props.todo.date}</span>
                <BiDotsVerticalRounded onClick={() => setModal(true)} className={` text-2xl cursor-pointer ${props.todo.isComplete ? "text-slate-400 " : "hover:text-blue-800"}`} />
                <ExtraModal modal={modal} setModal={setModal} setEdit={setEdit} values={props} />
                <EditModal edit={edit} setEdit={setEdit} values={props} onEdit={props.onEdit} />
            </div>
            <p onClick={() => setModal(false)} className={`w-full text-base  p-3 text-justify break-words ${props.todo.isComplete && "line-through text-slate-400 "}`} >{props.todo.text}</p>
        </div>
    );
}

export default TodoCard;