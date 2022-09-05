import { useState } from "react";
import CountBadge from "./CountBadge";

const StatusFilter = ({ func, count }) => {

    const [active, setActive] = useState("All");
    return (
        <ul className="max-w-sm w-full flex justify-between overflow-hidden bg-gray-400 rounded dark:bg-black/30 backdrop-blur-md " >
            <li onClick={() => { func("All"); setActive("All") }} className={`relative ${active === "All" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter `} >
                All
                {active === "All" && <CountBadge count={count} />}
            </li>
            <li onClick={() => { func("Completed"); setActive("Completed") }} className={`relative px-5 ${active === "Completed" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter`}>
                Completed
                {active === "Completed" && <CountBadge count={count} />}
            </li>
            <li onClick={() => { func("Active"); setActive("Active") }} className={`relative ${active === "Active" ? "bg-sky-500 dark:bg-[#7f8c8d]" : "bg-transparent"} bright-filter`}>
                Active
                {active === "Active" && <CountBadge count={count} />}
            </li>
        </ul>
    );
}

export default StatusFilter;