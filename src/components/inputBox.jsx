const InputBox = ({ label, placeholder, onChange }) => {

    return <div className="flex flex-col">
        <label className="text-xs sm:text-sm font-semibold text-zinc-600 mb-1">{label}</label>
        <input className="rounded-lg border p-2 text-sm" placeholder={placeholder} onChange={onChange} />
    </div>
}

export default InputBox