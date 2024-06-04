// Import for development
import { Link } from 'react-router-dom';

interface cellCardsProps{
    photo: string;
    link: string;
}

export function CellCards({photo, link}: cellCardsProps){
    return(
        <>
            <div className='w-1/5 h-80 min-w-56 max-w-64'>
                <Link to={link}>
                    <img
                    className='cards w-full h-full border border-input object-cover rounded-2xl transition-all cursor-pointer 
                    hover:shadow-lg
                    hover:scale-105' 
                    src={photo} 
                    alt="Cell" />
                </Link>
            </div>    
        </>
    )
}