// Import for development
import { useMemo } from 'react';


// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';
import { HeaderPages } from '../../components/Header/Pages';

// Photos
import image1 from '../../assets/Capas/Event6.jpeg';
import image2 from '../../assets/Capas/Event5.jpeg';
import image3 from '../../assets/Capas/Event3.jpeg';

export function Igreja(){

    const imageMemorized = useMemo(()=> image1, []);
    const imageMemorized2 = useMemo(()=> image2, []);
    const imageMemorized3 = useMemo(()=> image3, []);

    return(
        <>
            <ContainerHeader>
                <HeaderPages 
                name='A Igreja'
                path='/'
                />
            </ContainerHeader>
            {/* Main */}
            <ContainerMain>
                {/* The Surgiment */}
                <div className='w-full mt-48 md:mt-32'>
                    {/* Title */}
                    <div className='w-full flex items-center flex-col transition-all
                    hover:scale-105 hover:cursor-default'>
                        <h1 className='quicksand text-4xl'>O Surgimento</h1>
                        <h2 className='quicksand text-xl w-64 text-center'>Despertando uma Geração de Adoradores</h2>
                    </div>
                    <div className='w-full mt-10 flex flex-col-reverse
                    md:flex-row'>
                        <div className='w-full flex justify-center
                        md:w-1/2'>
                            <div className='w-full mt-10 text-center flex items-center
                            md:text-start md:w-4/6 md:ms-10 md:mt-0'>
                                <span className='inter'>
                                    <strong className='text-4xl'>N</strong>o contexto de igreja dentro da realidade 
                                    de Caraguatatuba pode-se afirmar que havia pouca disposição e amor pela vida da juventude 
                                    que se perdia nesse lugar. Foi então que a ADAC nasceu no coração do Pastor Presidente 
                                    Ronaldo Natalino, com o <strong className='text-yellow-600'>intuído gerado por Deus</strong> de <strong className='text-yellow-600'>despertar uma geração de adoradores ao Senhor</strong>. 
                                    <strong className='text-yellow-600'> Fundada em 2006</strong> no modelo tradicional de uma assembleia de Deus, uma igreja ainda 
                                    pequena, com uma visão limitada no que dizia respeito ao Reino de Deus, mas muito 
                                    fervorosa, obediente e temente a palavra do Senhor, aos poucos foi ganhando espaço 
                                    em um bairro da cidade. 
                                </span>
                            </div>
                        </div>
                        {/* Photo */}
                        <div className='w-full flex items-center
                        md:mt-0 md:w-1/2'>
                            <div className='w-full
                            md:w-5/6 md:me-10'>
                                <img 
                                className='w-full h-64 object-cover rounded-xl
                                md:h-80'
                                src={imageMemorized} 
                                alt="O Surgimento" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Transformation */}
                <div className='w-full mt-24 md:mt-32'>
                    <div className='w-full flex items-center flex-col transition-all
                    hover:scale-105 hover:cursor-default'>
                        <h1 className='quicksand text-4xl'>A Transformação</h1>
                        <h2 className='quicksand text-xl w-64 text-center'>Crescimento e Expansão Através da Visão Celular</h2>
                    </div>
                    <div className='w-full mt-8'>
                        {/* Photo */}
                        <div className='w-full flex justify-center'>
                            <div className='w-full md:w-5/6'>
                                <img 
                                className='w-full h-60 md:h-96 object-cover rounded-xl'
                                src={imageMemorized3} 
                                alt="A Transformação" />
                            </div>
                        </div>
                        <div className='w-full flex justify-center mt-6'>
                            <div className='w-full md:w-5/6 flex items-center'>
                                <span className='inter text-lg text-center 
                                md:text-start'>
                                <strong className='text-4xl'>F</strong>oi no <strong className='text-yellow-600'>ano de 2016 </strong> 
                                quando houve a mudança  para a visão celular que a ADAC começou a viver 
                                definitivamente a <strong className='text-yellow-600'>Grande Comissão (Ganhar, Consolidar e Enviar)</strong>. Diante 
                                de todas as dificuldades de uma transição, o que fortaleceu a visão na 
                                vida dos membros e agora líderes das primeiras células foi o <strong className='text-yellow-600'>ENCONTRO 
                                COM DEUS</strong>, e o <strong className='text-yellow-600'>CFL (Curso de Formação de Líderes)</strong>, que de forma avassaladora 
                                vem desde então não só impactando a vida das pessoas, mas gerando uma 
                                verdadeira transformação de vida, o que acarretou em um despertar de pessoas 
                                dispostas a liderar com amor e obediência e então ocasionou um crescimento 
                                explosivo na igreja tanto territorial como espiritual, pois de um bairro 
                                pequeno agora a ADAC está espalhada pela maioria dos bairros da cidade através das células. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Dedication */}
                <div className='w-full mt-24 mb-28 md:mt-32'>
                    {/* Title */}
                    <div className='w-full flex items-center flex-col transition-all
                    hover:scale-105 hover:cursor-default'>
                        <h1 className='quicksand text-4xl'>Dedicação</h1>
                        <h2 className='quicksand text-xl w-72 text-center'>Amor e Entrega na Conquista de Novas Vidas para Cristo</h2>
                    </div>
                    <div className='w-full mt-10 flex flex-col-reverse
                    md:flex-row'>
                        <div className='w-full flex justify-center
                        md:w-1/2'>
                            <div className='w-full mt-10 text-center flex items-center
                            md:text-start md:w-4/6 md:ms-10 md:mt-0'>
                                <span className='inter'>
                                <strong className='text-4xl'>T</strong>endo como lema a frase 
                                <strong className='text-yellow-600'> “AMOR É A NOSSA RAZÃO, ENTREGA É A NOSSA RESPOSTA”</strong>, através do cuidado 
                                individual com cada membro da igreja através de uma rede bem planejada e 
                                fortalecida, alicerçada na Palavra de Deus, todos os líderes são ensinados 
                                a amar os perdidos, de forma a se doar para que cada pessoa que entra em 
                                uma célula ou na igreja não saiam sem se sentirem queridos pelo próprio Deus. 
                                ADAC fez de cada casa aberta para uma célula, uma igreja e de cada crente 
                                disposto, um ministro do evangelho e por isso tem crescido em números, mas 
                                principalmente na qualidade no que se diz respeito a Igreja de Jesus na Terra. 
                                </span>
                            </div>
                        </div>
                        {/* Photo */}
                        <div className='w-full flex items-center
                        md:mt-0 md:w-1/2'>
                            <div className='w-full
                            md:w-5/6 md:me-10'>
                                <img 
                                className='w-full h-64 object-cover rounded-xl
                                md:h-80'
                                src={imageMemorized2} 
                                alt="O Surgimento" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}