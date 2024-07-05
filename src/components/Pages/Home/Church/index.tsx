// Button
import { Button } from '../../../../components/Button/Home';

import { useState, useEffect, useMemo } from 'react';

// Photo Church
import photoChurch from '../../../../assets/Capas/A_Igreja.jpeg';

export function Church(){

    const [asideMenu, setAsideMenu] = useState<boolean>(false)

    useEffect(()=> {
        function handleResize(){
            setAsideMenu(window.innerWidth > 960)
        }

        window.addEventListener("resize", handleResize)
        handleResize()


        return ()=> {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    // Desempenho da foto
    useMemo(()=> photoChurch, []);

    return(
        <>
            <main className="bg-transparent flex flex-col justify-center items-center mt-32
            sm:mt-20">
                {/* Title A Igreja */}
                <div className='w-1/2 flex flex-col items-center transition-all hover:scale-105 hover:cursor-default'>
                    <h1 className='quicksand text-5xl text-center text-white w-full'>A Igreja</h1>
                    <p className='mt-4 inter text-center text-white max-w-96 justify-center'>
                        Fique por dentro de toda a história da ADAC, que hoje, 
                        mudou milhares e milhares de vidas de pessoas através de Jesus!
                    </p>
                </div>

                {/* A Igreja */}
                <section 
                className='bg-transparent w-full mt-10 flex gap-16'>
                  
                {asideMenu && (
                    <>
                        {/* Aside ADAC Topics */}
                        <aside 
                        className='w-1/4 h-full max-h-2/5 bg-gray-200 rounded-xl'>
                            <div className='w-full p-6 pt-8 pb-24 bg-transparent'>
                                <h1 className='bg-transparent quicksand text-5xl text-black'>ADAC</h1>
                                <ul className='bg-transparent w-full flex flex-col gap-7 justify-center items-center mt-6'>
                                    {/* Fundação */}
                                    <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                        <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>O Surgimento</h3>
                                        <p className='bg-transparent mt-1 text-gray-600 w-full'>
                                        No contexto de igreja dentro da 
                                        realidade de Caraguatatuba pode-se 
                                        afirmar que havia pouca disposição... 
                                        </p>
                                    </li>
                                    {/* Lorem */}
                                    <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                        <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>A Transformação</h3>
                                        <p className='bg-transparent mt-1 font-normal text-gray-600 w-full'>
                                        Foi no ano de 2016 quando houve a mudança 
                                        para a visão celular que a ADAC começou a 
                                        viver definitivamente a...
                                        </p>
                                    </li>
                                    {/* Lorem */}
                                    <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                        <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>Dedicação</h3>
                                        <p className='bg-transparent mt-1 text-gray-600 w-full'>
                                        Tendo como lema a frase “AMOR É A NOSSA 
                                        RAZÃO, ENTREGA É A NOSSA RESPOSTA”, através 
                                        do cuidado individual... 
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </>
                )}


                    {/* Section Photo more Informations */}
                    <section className='bg-transparent w-full h-1/3'>
                        {/* Photo */}
                        <div className='bg-transparent w-full rounded-2xl font-normal'>
                            <a href="/adac/igreja">
                                <img 
                                className='w-full h-72 object-cover rounded-xl transition-all cursor-pointer
                                sm:h-full
                                hover:scale-105'
                                src={photoChurch} 
                                alt="ADAC Church" />
                            </a>
                        </div>
                        {/* Resume and Informations */}
                        <div className='w-full'>
                            <p className='text-white text-xl flex justify-center mt-2 md:justify-start '>
                            Descubra as etapas da nossa história e veja como Deus tem guiado cada passo da 
                            nossa jornada! Em meio à realidade de Caraguatatuba, onde a juventude enfrentava 
                            desafios e falta de direção, a ADAC surgiu no coração do Pastor Presidente Ronaldo 
                            Natalino. Movido por um chamado divino, ele teve a missão de despertar uma nova 
                            geração de adoradores do Senhor.  
                            </p>
                        </div>
                        {/* Button */}
                        <div 
                        className="w-full bg-transparent mt-5 flex justify-center 
                        sm:justify-start
                        md:justify-start
                        lg:justify-start">
                            <Button 
                            type='button' 
                            name='Conhecer'
                            path='/adac/igreja'
                            />
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}