// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMainCard } from '../../components/Container/MainCard';
import { HeaderPages } from '../../components/Header/Pages/index';


export function Eventos(){
    return(
        <>
            <ContainerHeader>
                <HeaderPages name='Agenda de Eventos' />
            </ContainerHeader>
            <ContainerMainCard>
                <div className='mt-44'>
                    <p className='text-white'>TESTEE</p>
                </div>
            </ContainerMainCard>
        </>
    )
}