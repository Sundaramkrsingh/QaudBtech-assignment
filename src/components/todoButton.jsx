const TodoButton = ({ onClick, completed }) => {

    return <button className={`text-white rounded-lg ${completed ? 'bg-red-500 focus:bg-red-700 py-2 px-3' : 'bg-green-500 focus:bg-green-700 p-2'}`} onClick={onClick}>
        {completed? "Add": "Done"}
    </button>
}

export default TodoButton