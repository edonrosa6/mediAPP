function Button({title, iconName, func}) {
    return (
        <div>
            <button onClick={func} className="flex items-center ml-auto rounded-md border hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-900 bg-gradient-to-t from-blue-500 to-blue-700 border-gray-600 mt-1 px-4 py-2">
                <div className="text-sm font-semibold">{title}</div> 
                <i className={iconName ? "fa-solid " + iconName + " fa-lg ml-2" : "fa-solid fa-paper-plane fa-lg ml-2"}></i>
            </button> 
        </div>
    )
}

export default Button;