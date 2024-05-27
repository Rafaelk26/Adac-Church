// Import for development
import { Link } from 'react-router-dom';

// Components
import { ContainerMain } from '../../components/Container/Main';

// Icon 
import { RiArrowDropRightLine } from "react-icons/ri";

// Image 404
import img404 from '../../assets/404.png';

export function Error(){
    return(
        <>
            <ContainerMain>
                <div className='w-full flex flex-col mt-20
                md:mt-36 md:flex-row md:items-center md:justify-around'>
                    {/* Group 1 */}
                    <div className="w-full flex justify-center flex-col gap-1  
                    md:w-1/3 md:justify-start md:gap-2">
                        <div className='md:flex md:flex-col md:gap-3'>
                            <h1 className='w-full inter text-4xl text-center 
                            md:text-7xl md:text-start'>
                                Erro 404
                            </h1>
                            <h2 className='w-full inter text-md text-center 
                            md:text-xl md:text-start'>
                                Ops! Não foi possível encontrar a página...
                            </h2>
                        </div>

                        <div className='w-full mt-8 md:mt-14'> 
                            <h2 className='w-full text-sm text-center inter 
                            md:text-start md:text-lg'>
                                Continue navegando em nosso site por essas opções abaixo:
                            </h2>

                            <div className='w-full justify-center items-center mt-5 flex flex-col gap-2
                            md:items-start'>
                                <div className='flex items-center'>
                                    <RiArrowDropRightLine 
                                    fill='#6ca9fde2'
                                    size={30} />
                                    <Link 
                                    className='underline text-blue-400'
                                    to={'/'}>
                                        Página Inicial
                                    </Link> 
                                </div>

                                <div className='flex items-center'>
                                    <RiArrowDropRightLine 
                                    fill='#6ca9fde2'
                                    size={30} />
                                    <Link 
                                    className='underline text-blue-400'
                                    to={'/adac/eventos/'}>
                                        Página Eventos
                                    </Link> 
                                </div>

                                <div className='flex items-center'>
                                    <RiArrowDropRightLine 
                                    fill='#6ca9fde2'
                                    size={30} />
                                    <Link 
                                    className='underline text-blue-400'
                                    to={'/adac/celulas/'}>
                                        Página Células
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* Group 2 */}
                    <div className="w-full mt-2 
                    md:w-1/3 md:mt-2">
                        <div className='w-full flex justify-center'>
                            <img 
                            className='w-72 
                            md:w-full md:max-w-md'
                            src={img404} 
                            alt="Error 404"/>
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}