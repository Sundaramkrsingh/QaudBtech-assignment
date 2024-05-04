const Button = ({ label, onClick }) => {

    return <button className={`text-white p-2 text-xs sm:text-base rounded-lg ${label === "del"? "bg-red-500": "bg-green-500"} focus:bg-green-700`} onClick={onClick}>{label}</button>
}

export default Button