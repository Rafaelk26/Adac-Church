// Import for development
import { useMemo } from 'react';

// Components
import { Button } from '../../../../components/Button/Home';

// Photo Eventos
import photoEvento from '../../../../assets/Capas/Eventos.jpeg';



export function Event(){
    // Photo desempenho
    const photoMemorized = useMemo(()=> photoEvento,[]);

    return(
        <article className="bg-transparent flex flex-col justify-center items-center mb-64 h-96 mt-40 md:mt-10 md:mb-44">   
            {/* The Event */}
            <section className='bg-transparent w-full mt-20 md:flex md:justify-center md:gap-5'>
                {/* Photo Event */}
                <div className='w-full h-max flex flex-col items-center transition-all md:w-1/2 hover:scale-105 hover:cursor-default'>
                    <a className='h-full' href="/adac/eventos">
                        <img className="w-full h-full max-w-xl rounded-2xl" 
                        src={photoMemorized} 
                        alt="Eventos" />
                    </a>
                </div>
                {/* Informations */}
                <div className='flex flex-col w-full items-center overflow-hidden
                md:w-1/3 md:items-start'>
                    <h1 className='quicksand text-5xl text-center text-white w-full m-0 mb-5 mt-8 
                    md:text-start md:mt-0'>
                        Eventos
                    </h1>
                    <div className="h-60 overflow-y-auto mb-4
                    md:h-64">
                        <p className='text-white text-lg inter mb-5 sm:text-sm md:text-base md:max-w-96'>
                        Não perca a chance de participar! Explore a seção de Eventos da ADAC 
                        e fique por dentro de todas as atividades planejadas para fortalecer 
                        sua fé e comunidade. Desde encontros maravilhosos a cursos de formação, nossos 
                        eventos são desenhados para impactar vidas e promover um crescimento espiritual
                        significativo. Venha vivenciar momentos de comunhão e edificação com Deus, 
                        onde cada evento é uma oportunidade de se conectar mais profundamente com Deus 
                        e com outros membros da ADAC. Nossos eventos não são apenas ocasiões sociais, 
                        mas verdadeiros marcos na caminhada espiritual de cada participante. Além disso, 
                        oferecemos atividades para todas as idades, desde os mais jovens até os mais 
                        experientes, garantindo que cada membro da família encontre seu espaço e propósito 
                        com Cristo.
                        </p>
                    </div>
                    <div className='ms-2'>
                        <Button 
                        type='button' 
                        path='/adac/eventos' 
                        name='Conferir' />
                    </div>
                </div>
            </section>
        </article>
    )
}
