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
            className="absolute object-cover top-0 w-screen h-screen overflow-hidden opacity-35" />
            <ContainerHeader>
                <HeaderLogin />
            </ContainerHeader>
            <ContainerMain>
                <div className='bg-transparent absolute z-10 right-6 mt-36 w-full h-full flex justify-end'>
                    <div className='w-1/4 h-full bg-transparent'>
                        <Form />
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}