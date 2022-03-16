
const StatusFilter = (props) => {

    return (
        <div >
            <span className="dark:dark-text font-semibold" >Order By :</span>
            <select onChange={(e) => props.func(e.target.value)} className="dark:dark-inp dark:text-white rounded ml-2 text-blue-900 font-medium outline-none " >
                <option value={"All"}>All</option>
                <option value={"Completed"}>Completed</option>
                <option value={"Active"}>Active</option>
            </select>
        </div>
    );
}

export default StatusFilter;