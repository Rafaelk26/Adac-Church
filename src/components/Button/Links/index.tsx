// Importando biblioteca link para personaliar
import { Link } from 'react-router-dom';

interface linkProps{
    to: string;
    nome_link: string;
    className?: string;
}

export function Links({to, nome_link, className}: linkProps){
    return(
        <li className={className}>
            <Link 
            className='bg-transparent text-white w-full flex justify-center'
            to={to}>
                {nome_link}
            </Link>
        </li>
    )
}