// Import for development
import { Link } from 'react-router-dom';

interface buttonProps{
    type: "submit" | "reset" | "button";
    path: string;
}

export function ButtonMinistration({type, path}:buttonProps){
    return(
        <>  
            <Link to={path} className='bg-transparent'>
                <button
                type={type}
                className="w-full p-2 border-2 bg-red-600 rounded-lg transition-all font-medium 
                        hover:font-medium hover:border-red-800 hover:scale-105">         
                    Ver
                </button>
            </Link>
        </>
    )
}