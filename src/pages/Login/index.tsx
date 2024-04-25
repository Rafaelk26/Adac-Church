// Components
import { HeaderLogin } from '../../components/Header/Login';
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';
import { Form } from '../../components/Pages/Login/Form';

// Image
import leaoLogo from '../../assets/leao.png';

export function Login(){

    return(
        <>  
            <img 
            src={leaoLogo}
            className="fixed z-0 object-cover top-0 flex items-center w-full h-screen overflow-hidden opacity-35" />
            <ContainerHeader>
                <HeaderLogin />
            </ContainerHeader>
            <ContainerMain>
                <div className='bg-transparent mt-32 items-center 
                w-full h-max flex justify-center
                sm:justify-center
                md:me-4 md:justify-end md:right-6 md:top-2 
                '>
                    <div className='w-full max-w-80 h-4/5 bg-transparent'>
                        <Form />
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}