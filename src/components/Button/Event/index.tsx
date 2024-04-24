// Import for development
import { Link } from 'react-router-dom';

interface buttonProps{
    type: "submit" | "reset" | "button";
    name: string;
    path: string;
}

export function Button({type, name, path}:buttonProps){
    return(
        <>  
            <Link to={path} className='bg-transparent'>
                <button
                type={type}
                className="w-full p-2 border-2 bg-black rounded-lg transition-all font-medium
                hover:bg-white hover:text-black hover:font-medium md:border-black">         
                    {name}
                </button>
            </Link>
        </>
    )
}