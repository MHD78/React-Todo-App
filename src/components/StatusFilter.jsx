import { useState } from "react";

const StatusFilter = ({ func }) => {
    const [active, setActive] = useState("All");
    return (
        <ul className="max-w-sm w-full flex justify-between overflow-hidden bg-gray-400 rounded dark:bg-black/30 backdrop-blur-md " >
            <li onClick={() => { func("All"); setActive("All") }} className={`${active === "All" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter `} >All</li>
            <li onClick={() => { func("Completed"); setActive("Completed") }} className={`${active === "Completed" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter`}>Completed</li>
            <li onClick={() => { func("Active"); setActive("Active") }} className={`${active === "Active" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter`}>Active</li>
        </ul>
        // <div >
        //     <span className="dark:dark-text font-semibold" >Order By :</span>
        //     <select onChange={(e) => func(e.target.value)} className="dark:dark-inp dark:text-white rounded ml-2 text-blue-900 font-medium outline-none " >
        //         <option value={"All"}>All</option>
        //         <option value={"Completed"}>Completed</option>
        //         <option value={"Active"}>Active</option>
        //     </select>
        // </div>
    );
}

export default StatusFilter;