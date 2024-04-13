// Button
import { Button } from '../../../../components/Button/index';

export function Church(){
    return(
        <>
            <main className="bg-transparent flex flex-col justify-center items-center mb-52">
                {/* Title A Igreja */}
                <div className='w-1/2 flex flex-col items-center transition-all hover:scale-105 hover:cursor-default'>
                    <h1 className='quicksand text-5xl text-center text-white'>A Igreja</h1>
                    <p className='mt-4 inter text-center text-white max-w-96 justify-center'>
                        Fique por dentro de toda a história da ADAC, que hoje, 
                        mudou milhares e milhares de vidas de pessoas através de Jesus!
                    </p>
                </div>

                {/* A Igreja */}
                <section className='bg-transparent w-full mt-10 flex gap-16'>
                    {/* Aside ADAC Topics */}
                    <aside className='w-1/4 h-min max-h-max bg-gray-200 rounded-xl'>
                        <div className='w-full p-6 pt-8 pb-24 bg-transparent'>
                            <h1 className='bg-transparent quicksand text-5xl text-black'>ADAC</h1>
                            <ul className='bg-transparent w-full flex flex-col gap-7 justify-center items-center mt-6'>
                                {/* Fundação */}
                                <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                    <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>Fundação</h3>
                                    <p className='bg-transparent mt-1 text-gray-600 w-full'>
                                        Lorem ipsum dolor sit amet consectetur. 
                                        Risus interdum convallis lobortis quis 
                                        enim aenean ornare est condimentum. 
                                    </p>
                                </li>
                                {/* Lorem */}
                                <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                    <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>Lorem</h3>
                                    <p className='bg-transparent mt-1 font-normal text-gray-600 w-full'>
                                        Lorem ipsum dolor sit amet consectetur. 
                                        Risus interdum convallis lobortis quis 
                                        enim aenean ornare est condimentum. 
                                    </p>
                                </li>
                                {/* Lorem */}
                                <li className='w-full bg-transparent transition-all hover:scale-105 hover:cursor-default'>
                                    <h3 className='bg-transparent font-semibold inter text-2xl text-gray-600'>Lorem</h3>
                                    <p className='bg-transparent mt-1 text-gray-600 w-full'>
                                        Lorem ipsum dolor sit amet consectetur. 
                                        Risus interdum convallis lobortis quis 
                                        enim aenean ornare est condimentum. 
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Section Photo more Informations */}
                    <section className='bg-transparent w-full'>
                        {/* Photo */}
                        <div className='bg-transparent w-full h-1/2 max-h-max rounded-2xl font-normal'>
                            <a href="/adac/igreja">
                                <img 
                                className='w-full h-full object-cover rounded-xl transition-all cursor-pointer hover:scale-105'
                                src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA" 
                                alt="ADAC Church" />
                            </a>
                        </div>
                        {/* Resume and Informations */}
                        <div className='mt-4'>
                            <p className='text-white text-xl flex justify-start'>
                            Nossa igreja, fundada em [ano de fundação], tem sido um farol de fé e serviço em nossa comunidade. 
                            Desde suas origens como pequenas células até a fundação da ADAC Church, nossa jornada reflete a dedicação 
                            aos ensinamentos de Cristo. Unidos pelo amor a Deus e ao próximo, cultivamos comunidades vibrantes através 
                            das células, estendendo apoio e serviço à nossa comunidade. Com gratidão pelo passado e esperança para o futuro, 
                            continuamos comprometidos em escrever os próximos capítulos de nossa história com fé, amor e serviço. Que este 
                            registro histórico nos inspire a seguir adiante com fé, amor e serviço. Que Deus continue a abençoar nossa igreja 
                            e todos os que a ela pertencem. Shalom!
                            </p>
                        </div>
                        {/* Button */}
                        <div className="w-full bg-transparent mt-3">
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