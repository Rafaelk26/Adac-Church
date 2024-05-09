interface buttonProps{
    id_event?: string;
    type: "submit" | "reset" | "button";
    name: string;
}

export function ButtonDelete({id_event, type, name}:buttonProps){
    
    const handleDelete = async (id: string) => {
        alert(id)
    }
    
    return(
        <>  <button
            id={id_event}
            onClick={() => id_event && (handleDelete(id_event))}
            type={type}
            className="w-full p-2 border-2 bg-red-500 rounded-lg transition-all font-medium
            hover:bg-red-600 hover:font-medium md:border-red-800">         
                {name}
            </button>
        </>
    )
}