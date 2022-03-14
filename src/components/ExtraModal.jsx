import { useState } from "react"
import { BiCommentEdit, BiX, BiTrash } from "react-icons/bi";



const ExtraModal = ({ modal, setModal, setEdit, todo, onDelete }) => {


    return (
        <div className={`flex-col bg-gray-100 absolute top-1 right-4 w-20 rounded-lg p-1 m-1  ${modal ? " flex" : "hidden"}`} >
            <BiX onClick={() => setModal(false)} className="text-lg self-end cursor-pointer" />
            <span  >
                <span onClick={() => { setEdit(true); setModal(false) }} className={`flex justify-start items-center gap-x-1 cursor-pointer transition duration-300 rounded-lg p-0.5 ${todo.isComplete ? "text-slate-400 " : "hover:text-white hover:bg-sky-600"} `}  >
                    <BiCommentEdit className="text-lg" />
                    Edit
                </span>
                <span onClick={() => onDelete(todo.id)} className={`flex justify-start items-center gap-x-1 cursor-pointer transition duration-300 rounded-lg p-0.5 ${todo.isComplete ? "text-slate-400 " : "hover:text-white hover:bg-red-600"} `} >
                    <BiTrash className="text-lg" />
                    Delete
                </span>
            </span>

        </div>
    );
}

export default ExtraModal;