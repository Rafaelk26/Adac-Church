interface buttonProps{
    type: "submit" | "reset" | "button";
    name: string;
}

export function Button({type, name}:buttonProps){
    return(
        <>
            <button
            type={type}
            className="w-full p-2 border border-1 border-white rounded-md transition-all
            hover:bg-white hover:text-black hover:font-medium">
                {name}
            </button>
        </>
    )
}