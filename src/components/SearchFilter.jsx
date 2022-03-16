const SearchFilter = ({ func }) => {
    return (
        <div className="rounded  text-blue-900 font-medium outline-none" >
            <input placeholder="search a todo..." onChange={(e) => func(e.target.value)} className="dark:dark-inp px-2 py-0.5 text-sm w-full rounded outline-slate-500" />
        </div>
    );
}

export default SearchFilter;