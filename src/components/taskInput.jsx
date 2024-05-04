import { useDispatch, useSelector } from "react-redux";
import Button from "./button"
import InputBox from "./inputBox"
import { onChangeDuedate, onChangeTitle } from "../redux/slices/todoSlice";
import { addTodo } from "../redux/slices/todoListSlice";

const TaskInput = () => {
    const title = useSelector((state) => state.todo.title)
    const dueDate = useSelector((state) => state.todo.dueDate)
    const dispatch = useDispatch()

    return <div className="flex justify-center items-center">
        <div className="flex flex-col justify-evenly w-48 sm:w-72 h-60 border-2 border-slate-200 rounded-xl shadow-md hover:shadow-xl px-3 md:px-5 my-3 sm:mb-0"> 
            <InputBox label={"Title"} placeholder={"assignment"} onChange={(e) => dispatch(onChangeTitle(e.target.value))} />
            <InputBox label={"Due date"} placeholder={"00-00-0000"} onChange={(e) => dispatch(onChangeDuedate(e.target.value))} /> 
            <Button label={"add"} onClick={() => {
                dispatch(
                    addTodo({
                        title,
                        dueDate
                    })
                )
            }} />
        </div>
    </div>
}

export default TaskInput