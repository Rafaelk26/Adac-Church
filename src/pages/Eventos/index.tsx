// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMainCard } from '../../components/Container/MainCard';
import { HeaderPages } from '../../components/Header/Pages/index';
import { Slide } from '../../components/Pages/Event/Slide';
import { Button } from '../../components/Button/Home/index';

// Import for development
import { Link } from 'react-router-dom';

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
                <div className='w-full h-full mt-36 flex flex-col justify-center items-center
                md:flex-row'>
                    {/* Introdução */}
                    <div className='w-full h-max ps-0 flex justify-start
                    md:w-1/2 '>
                        {/* Parágrafo com texto sobre os eventos */}
                        <p className='px-2 text-xl text-center mt-2 
                        md:text-3xl md:w-full md:text-start md:max-w-xl'>
                            Participe de nossos eventos e descubra oportunidades 
                            emocionantes para se conectar com Deus nessa comunhão 
                            incrível. Junte-se a nós para crescer na fé e no amor. 
                            Esperamos você aqui para compartilharmos esses momentos 
                            especiais em Cristo juntos!
                        </p>
                    </div>
                    {/* Slide */}
                    <div className='w-full p-5 flex flex-col justify-center items-center
                    md:w-1/2'>
                        {/* Componente Slide */}
                        <div className="w-full h-max md:h-auto mb-5">
                            <Link to={'/adac/eventos/show/'}>
                                <Slide />
                            </Link>
                            {/* Botão "Ver Eventos" */}
                            <div className="flex justify-center mt-2 
                            md:justify-start">
                                <Button 
                                name='Ver Eventos'
                                path='/adac/eventos/show'
                                type='button'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMainCard>
        </>
    );
}
