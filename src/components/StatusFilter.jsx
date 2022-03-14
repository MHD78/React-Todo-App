
const StatusFilter = (props) => {

    return (
        <div>
            <select onChange={(e) => props.func(e.target.value)} >
                <option value={"All"}>All</option>
                <option value={"Completed"}>Completed</option>
                <option value={"Active"}>Active</option>
            </select>
        </div>
    );
}

export default StatusFilter;