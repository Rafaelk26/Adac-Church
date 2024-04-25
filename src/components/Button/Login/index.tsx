interface buttonProps extends React.HTMLAttributes<HTMLButtonElement>{
    type: "submit" | "reset" | "button";
    name: string;
}

export function Button({type, name, ...rest}:buttonProps){
    return(
        <>
            <button
            {...rest}
            type={type}
            className="w-full p-2 border border-1 border-white rounded-md transition-all
            hover:bg-white hover:text-black hover:font-medium">
                {name}
            </button>
        </>
    )
}