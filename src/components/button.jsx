const Button = ({ label, onClick }) => {

    return <button className={`text-white rounded-lg ${label === "del"? "bg-red-500 py-2 px-3": "bg-green-500 p-2"} ${label === "del"? "focus:bg-red-700": "focus:bg-green-700"}`} onClick={onClick}>{label}</button>
}

export default Button