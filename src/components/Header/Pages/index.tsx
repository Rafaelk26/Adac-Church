// Importando imagem do diretório
import logoAdac from '../../../assets/Logo/logo-adac.png';

interface headerProps{
    name:string
}

export function HeaderPages({ name }: headerProps){
    
    return(
        <>
        
            <header
            id="header_home" 
            className="
            w-full h-24 flex flex-row
            sm:flex sm:justify-between sm:items-end
            md:flex md:justify-between md:items-end
            lg:flex lg:justify-between lg:items-end
            ">
                {/* Title */}
                <div className='w-max h-max flex items-center'>
                    <h1 
                    className='font-bold quicksand text-5xl'>{name}</h1>
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