const CountBadge = ({ count }) => {
    return (
        <span className="bg-indigo-500 dark:bg-gray-600 absolute top-0 right-0 text-xs px-1 rounded-bl-md " >
            {count}
        </span>
    );
}

export default CountBadge;