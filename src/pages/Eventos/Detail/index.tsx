// Import for development
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainDetails } from '../../../components/Container/MainDetails';
import { HeaderDetails } from '../../../components/Header/Details';

// Image
import imgEx  from '../../../assets/leao.png';

// Icons
import { BiMap, BiCalendar } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa';

// CSS
import './index.css'

export function DetalhesEvento(){
    // const { id } = useParams()
    return(
        <>
            {/* Imagem de fundo da igreja */}
            <div className="relative z-20 inset-0">
                {/* Aplica o gradiente linear */}
                <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>
                
                <img 
                src={imgEx}
                id='imagem_capa_detalhes' 
                className='w-full h-full object-cover opacity-50'/>
            </div>
            <ContainerHeader>
                <HeaderDetails />
                <div className='bg-transparent relative z-10 top-44 flex justify-center
                sm:top-40
                md:top-32 md:justify-start'>
                    {/* Image Card */}
                    <div className='w-60 outline outline-2 outline-white rounded-lg bg-transparent'>
                        <img 
                        className='w-full h-full rounded-lg'
                        src={imgEx} 
                        alt="Banner do Evento" />
                    </div>
                </div>
            </ContainerHeader>
            {/* Content */}
            <ContainerMainDetails>
                <div className='w-full flex justify-start flex-col gap-2 
                sm:mt-8
                md:mt-6'>
                    <h1 className='font-bold quicksand text-3xl text-center
                    sm:text-4xl sm:text-center
                    md:text-5xl md:text-start'>
                        {/* Title */}
                        Célulão da ADAC
                    </h1>
                    <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto
                    sm:text-2xl
                    md:text-start md:mx-0 md:max-w-xl'>
                        {/* Description */}
                        Venha fazer parte de nosso culto e entre 
                        em uma comunhão com Cristo jamais vista antes, 
                        traga um acompanhante com você!
                    </h3>
                </div>
                {/* Informations Address, Day and Hour */}
                <div className='w-full mt-12 flex-col flex items-center justify-center gap-3 
                md:flex-row md:mt-5 md:gap-1'>
                    {/* Address */}
                    <div className='w-full flex justify-center
                    md:justify-start'>
                        <BiMap size={30} />
                        <p className='font-semibold inter text-2xl text-center
                        md:text-start md:w-full'>Rua Maestro Pedro Alves de Souza, 16 - Benfica</p>
                    </div>
                    <div className='w-1/2 flex items-center flex-col gap-3
                    md:flex-row md:gap-5'>
                        {/* Day */}
                        <div className='flex items-center gap-2'>
                            <BiCalendar size={30} />
                            <p className='font-semibold inter text-2xl'>10/01/2024</p>
                        </div>
                        {/* Hour */}
                        <div className='flex items-center gap-2'>
                            <FaClock size={30} />
                            <p className='font-semibold inter text-2xl'>20:00</p>
                        </div>
                    </div>
                </div>
                {/* Words Bible */}
                <div className='w-full mt-10 flex flex-col justify-start mb-10
                md:mt-5 md:mb-0'>
                    <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto
                    sm:text-2xl
                    md:text-start md:mx-0 md:max-w-2xl'>
                        {/* Word */}
                        “Deem graças em todas as circunstâncias, 
                        pois esta é a vontade de Deus para vocês 
                        em Cristo Jesus.”
                    </h3>
                    <h3 className='font-bold inter text-xl max-w-80 text-center mx-auto
                    sm:text-xl
                    md:text-start md:mx-0 md:max-w-2xl'>
                        {/* Word */}
                        I Tessalonicenses 5:18
                    </h3>
                </div>
            </ContainerMainDetails>
        </>
    )
}
