const TodoButton = ({ onClick, completed }) => {

    return <button className={`text-white ml-1 rounded-lg text-xs sm:text-base ${completed ? 'bg-red-500 focus:bg-red-700 px-2 py-2 sm:py-2 sm:px-3' : 'bg-green-500 focus:bg-green-700 py-2 px-1 sm:p-2'}`} onClick={onClick}>
        {completed? "Add": "Done"}
    </button>
}

export default TodoButton