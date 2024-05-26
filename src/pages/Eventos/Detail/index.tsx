// Import for development
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with Firebase
import { db } from '../../../services/server';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainDetails } from '../../../components/Container/MainDetails';
import { HeaderDetails } from '../../../components/Header/Details/Event';

// Icons
import { BiMap, BiCalendar } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa';

// CSS
import './index.css';


interface eventProps{
    book_bible: string;
    date: string;
    description: string;
    title: string;
    location: string;
    photo: string;
    time: string;
    word_bible: string;
}

export function DetalhesEvento(){

    const [event, setEvent] = useState<eventProps>();
    
    const { id } = useParams();

    useEffect(()=> {
        const fetchEventId = async () => {
            if(id){
                const eventRef = doc(db, 'Eventos', id);
                const eventSnap = await getDoc(eventRef);
                if(eventSnap.exists()){
                    setEvent(eventSnap.data() as eventProps)
                }
            } else{
                toast.error('Erro ao encontrar os dados!');
            }
        }
        fetchEventId()
    },[])

    return(
        <>
            {/* Imagem de fundo do evento */}
            <div className="relative z-20 inset-0">
                {/* Aplica o gradiente linear */}
                <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <img 
                src={event?.photo}
                id='imagem_capa_detalhes' 
                className='w-full h-full object-cover opacity-50'/>
            </div>
            <ContainerHeader>
                <HeaderDetails />
                <div className='bg-transparent relative z-10 top-44 flex justify-center
                sm:top-40
                md:top-32 md:justify-start'>
                    {/* Image Card */}
                    <div className='w-60 h-36 outline outline-2 outline-white rounded-lg bg-transparent'>
                        <img 
                        className='w-full h-full rounded-lg'
                        src={event?.photo} 
                        alt="Banner do Evento" />
                    </div>
                </div>
            </ContainerHeader>
            {/* Content */}
            <ContainerMainDetails>
                <div className='w-full flex justify-start flex-col gap-2 mt-28 
                sm:mt-28
                md:mt-6'>
                    <h1 className='font-bold quicksand text-3xl text-center
                    sm:text-4xl sm:text-center
                    md:text-5xl md:text-start'>
                        {/* Title */}
                        {event?.title}
                    </h1>
                    <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto
                    sm:text-2xl
                    md:text-start md:mx-0 md:max-w-xl'>
                        {/* Description */}
                        {event?.description}
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
                        md:text-start md:w-full'>{event?.location}</p>
                    </div>
                    <div className='w-1/2 flex items-center flex-col gap-3
                    md:flex-row md:gap-5'>
                        {/* Day */}
                        <div className='flex items-center gap-2'>
                            <BiCalendar size={30} />
                            <p className='font-semibold inter text-2xl'>{event?.date}</p>
                        </div>
                        {/* Hour */}
                        <div className='flex items-center gap-2'>
                            <FaClock size={30} />
                            <p className='font-semibold inter text-2xl'>{event?.time}</p>
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
                        “{event?.word_bible}”
                    </h3>
                    <h3 className='font-bold inter text-xl max-w-80 text-center mx-auto
                    sm:text-xl
                    md:text-start md:mx-0 md:max-w-2xl'>
                        {/* Word */}
                        {event?.book_bible}
                    </h3>
                </div>
            </ContainerMainDetails>
        </>
    )
}
