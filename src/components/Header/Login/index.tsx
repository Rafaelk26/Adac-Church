// Import logo
import logoAdac from '../../../assets/Logo/logo-adac.png';

export function HeaderLogin(){
    return(
        <>
            <a href="/">
                <header 
                className='bg-transparent absolute z-10 w-full flex justify-center
                sm:justify-center
                md:justify-start'>
                    <img 
                    src={logoAdac} 
                    alt="ADAC Church" 
                    className='bg-transparent mt-5 w-20
                    sm:w-20 
                    md:w-20
                    lg:w-24
                    xl:w-24' />
                </header>
            </a>
        </>
    )
}