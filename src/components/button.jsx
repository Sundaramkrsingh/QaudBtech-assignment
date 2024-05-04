const Button = ({ label, onClick }) => {

    return <button className="text-white p-2 rounded-lg bg-green-500 focus:bg-green-700" onClick={onClick}>{label}</button>
}

export default Button