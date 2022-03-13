import TodoCard from "./TodoCard";


const TodoList = (props) => {

    const onComplete = (todoID) => {
        props.completeHandler(todoID);
    }
    const onDelete = (todoID) => {
        props.deleteHandler(todoID);
    }
    const onEdit = (todoID, editedText) => {
        props.editHandler(todoID, editedText)
    }

    const data = () => {
        if (props.todos.length === 0) return <p>add some todos</p>
        return (
            <div className="w-full sm:w-3/4" >
                {
                    props.todos.map((todo) => {
                        return (
                            <TodoCard
                                todo={todo}
                                key={todo.id}
                                onComplete={onComplete}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        )
                    })
                }
            </div>
        );
    }
    return (
        <>
            {data()}
        </>
    )

}


export default TodoList;