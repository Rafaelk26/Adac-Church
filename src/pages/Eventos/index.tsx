// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMainCard } from '../../components/Container/MainCard';
import { HeaderPages } from '../../components/Header/Pages/index';
import { Slider } from '../../components/Pages/Event/Slide';

// Define a função Eventos
export function Eventos() {
    return (
        <>
            {/* Componente ContainerHeader com o componente HeaderPages dentro */}
            <ContainerHeader>
                <HeaderPages name='Agenda de Eventos' /> 
            </ContainerHeader>
            {/* Componente ContainerMainCard envolvendo os conteúdos */}
            <ContainerMainCard>
                <div className='w-full mt-36 flex flex-col md:flex-row items-center'>
                    {/* Introdução */}
                    <div className='w-full md:w-1/2 p-5 ps-0 flex justify-start'>
                        {/* Parágrafo com texto sobre os eventos */}
                        <p className='text-sm md:text-3xl'>
                            Participe de nossos eventos e descubra oportunidades 
                            emocionantes para se conectar com Deus nessa comunhão 
                            incrível. Junte-se a nós para crescer na fé e no amor. 
                            Esperamos você aqui para compartilharmos esses momentos 
                            especiais em Cristo juntos!
                        </p>
                    </div>
                    {/* Slide */}
                    <div className='w-full md:w-1/2 p-5 flex flex-col justify-center items-center '>
                        {/* Componente Slider */}
                        <div className="w-full h-120 md:h-auto mb-5">
                            <Slider />
                        </div>
                    </div>
                </div>
                {/* Botão "Ver Eventos" */}
                <div className="flex justify-end">
                    <button className="bg-black text-white border border-white hover:bg-gray-800 font-bold py-2 px-4 rounded mr-4">
                        Ver Eventos
                    </button>
                </div>
            </ContainerMainCard>
        </>
    );
}
