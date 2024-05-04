import Button from "./button"
import TodoButton from "./todoButton"

const TodoBox = ({ title, dueDate, onClickDel, onCompleted, onAddAgain, completed }) => {

    return <div className={`flex justify-between items-center h-20 border-b px-4`}>
        <div>
            <div className="text-base sm:text-xl font-semibold">{title}</div>
            <div className="text-sm text-slate-400 mt-1.5">
                <span className="text-slate-500">Due date: </span> 
                {dueDate}
            </div>
        </div>
        <div>
            <Button label={"del"} onClick={onClickDel} />
            <TodoButton onClick={completed? onAddAgain: onCompleted} completed={completed} />
        </div>
    </div>
}

export default TodoBox