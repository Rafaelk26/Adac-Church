// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMainCard } from '../../components/Container/MainCard';
import { HeaderPages } from '../../components/Header/Pages/index';
import { Slider } from '../../components/Pages/Event/Slide'


export function Eventos(){
    return(
        <>
            <ContainerHeader>
                <HeaderPages name='Agenda de Eventos' />
            </ContainerHeader>
            <ContainerMainCard>
                <div className='w-full mt-36 flex flex-col justify-center'>
                    {/* Introdução */}
                    <div className='w-1/2 p-5 ps-0 flex justify-start
                    md:w-1/3'>
                        <p className='text-sm
                        md:text-3xl'>
                            Participe de nossos eventos e descubra oportunidades 
                            emocionantes para se conectar com Deus nessa comunhão 
                            incrível. Junte-se a nós para crescer na fé e no amor. 
                            Esperamos você aqui para compartilharmos esses momentos 
                            especiais em Cristo juntos!
                        </p>
                    </div>
                    {/* Slide */}
                    <div className='w-1/2
                    md:w-1/5'>
                        <Slider />
                    </div>
                </div>
            </ContainerMainCard>
        </>
    )
}