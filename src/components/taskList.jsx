import TodoBox from "./todoBox"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAgain, deleteTodo, fetchTodos } from "../redux/slices/todoListSlice"
import { markDone } from "../redux/slices/todoListSlice"

const TaskList = () => {
    const todos = useSelector((state) => state.todoList.todos)
    const dispatch = useDispatch()

    // useEffect to fetch the todos from localStorage
    useEffect(() => {
        dispatch(fetchTodos())
    }, [])

    if (!todos) {
        return <div className="border-t sm:border-l flex justify-center items-center">
            No Todos added yet, Add now
        </div>
    }

    return <div className="border-t sm:border-l">
        {
            todos.map(todo => 
                <TodoBox 
                    key={todo.id} 
                    title={todo.title} 
                    dueDate={todo.dueDate} 
                    completed={todo.completed} 
                    onCompleted={() => dispatch(markDone(todo.id))} 
                    onAddAgain={() => dispatch(addAgain(todo.id))} 
                    onClickDel={() => dispatch(deleteTodo(todo.id))}
                />
            )
        }
    </div>
}

export default TaskList