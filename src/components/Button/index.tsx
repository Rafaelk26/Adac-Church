interface buttonProps{
    type: "submit" | "reset" | "button";
    name: string;
    path: string;
}

export function Button({type, name, path}: buttonProps){
    return(
        <>  
        <a href={path}>
            <button
            type={type} 
            className="w-44 bg-white py-2 px-2 quicksand text-xl 
            rounded-md transition-all hover:scale-105 hover:text-white hover:bg-transparent hover:outline hover:outline-1 hover:outline-white">
                {name}
            </button>
        </a>
            
        </>
    )
}