// Import for development
import { Link } from 'react-router-dom';

interface buttonProps{
    type: "submit" | "reset" | "button";
    name: string;
    path: string;
}

export function ButtonEdit({type, name, path}:buttonProps){
    return(
        <>  
            <Link to={path} className='bg-transparent'>
                <button
                type={type}
                className="w-full p-2 border-2 bg-yellow-600 rounded-lg transition-all font-medium 
                        hover:font-medium hover:border-yellow-800 hover:scale-105">         
                    {name}
                </button>
            </Link>
        </>
    )
}