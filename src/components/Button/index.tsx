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
            className="w-max bg-white py-2 px-4 quicksand text-xl 
            rounded-md transition-all hover:scale-105">
                {name}
            </button>
        </a>
            
        </>
    )
}