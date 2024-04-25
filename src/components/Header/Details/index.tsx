// Import for development
import { Link } from 'react-router-dom';

// Importando imagem do diretório
import logoAdac from '../../../assets/Logo/logo-adac.png';

// Icon
import { BiArrowBack } from 'react-icons/bi';

export function HeaderDetails(){
    return(
        <>
            <header 
            className="
            w-full h-24 flex flex-col-reverse mt-10 bg-transparent 
            absolute z-20 gap-7 justify-center items-center
            sm:justify-between sm:items-center sm:gap-3 
            md:justify-between md:items-center md:flex-row md:mt-0
            lg:justify-between lg:items-center lg:flex-row
            ">
                {/* Arrow back */}
                <div className='w-max h-max flex justify-center items-center bg-transparent'>
                    {/* Arrow back page */}
                    <Link className='bg-transparent' to={'/adac/eventos/'}>
                        <BiArrowBack className='bg-transparent' size={35}/>
                    </Link>
                </div>
                {/* Logo ADAC */}
                <a 
                href="/" 
                className='bg-transparent w-20 m-0'
                >
                    <img src={logoAdac} alt="ADAC Church" 
                    className='
                    bg-transparent w-20 h-max
                    sm:w-20 
                    md:w-20 md:mt-0
                    lg:w-24 lg:mt-0
                    xl:w-24 xl:mt-0' />
                </a>
            </header>
        </>
    )
}
