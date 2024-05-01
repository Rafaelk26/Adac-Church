// Importando imagem do diretório
import logoAdac from '../../../assets/Logo/logo-adac.png';

interface headerProps{
    name: string;
    path: string;
}

export function HeaderPages({ name, path }: headerProps){
    
    return(
        <>
        
            <header
            id="header_home" 
            className="
            w-full h-24 flex flex-col-reverse justify-center items-center mt-10
            sm:justify-between sm:items-center 
            md:justify-between md:items-end md:flex-row md:mt-0
            lg:justify-between lg:items-end lg:flex-row
            ">
                {/* Title */}
                <div className='w-max h-max flex items-center'>
                    <h1 
                    className='font-bold quicksand text-2xl sm:text-3xl md:text-5xl'>{name}</h1>
                </div>
                {/* Logo ADAC */}
                <a 
                href={path} 
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