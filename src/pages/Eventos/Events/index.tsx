// Import for development
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

// Connection with Firebase
import { db } from '../../../services/server';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainCard } from '../../../components/Container/MainCard';
import { HeaderPages } from '../../../components/Header/Pages';
import { EventCards } from '../../../components/Pages/Event/EventCards';
import { eventoProps } from '../../../components/Pages/Event/EventCards';


// Icon
import { BiArrowBack } from 'react-icons/bi';

// Logo loading
import logoLoading from '../../../assets/Logo/logo-adac.png'


export function ViewsEventos(){
    
    const [events, setEvents] = useState<eventoProps[]>([]);
    
    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(()=> {
        const fetchEventsData = async () => {
            setIsUploading(true);
            const eventRef = collection(db, 'Eventos');
            const snapShotEvent = await getDocs(eventRef);
            const eventData = snapShotEvent.docs.map((doc)=> {
                const data = doc.data() as eventoProps
                return {
                    id: doc.id, 
                    title: data.title,
                    photo: data.photo,
                    date: data.date
                }
            })
            setIsUploading(false);
            setEvents(eventData);
            console.log(eventData);
        }
        fetchEventsData()
    }, [])

    return(
        <>
            {/* Header Event */}
            <ContainerHeader>
                <HeaderPages 
                path='/'
                name='Eventos Confirmados' />
            </ContainerHeader>
            {/* Events Cards */}
            <ContainerMainCard>
                <div className='mt-40 flex flex-col w-full items-center
                md:items-start'>
                    <div className="w-max flex items-center
                    md:items-start">
                        {/* Arrow back page */}
                        <Link to={'/adac/eventos/'}>
                            <BiArrowBack size={35}/>
                        </Link>
                    </div>
                    <div className='w-full mt-12 flex flex-col items-center gap-4'>
                        {events.length === 0 ? (
                            <p className="text-center text-md w-full h-full flex justify-center md:text-lg">
                            Nenhum evento encontrado
                        </p>
                        ) : (
                            events.map(event=>(
                                <EventCards
                                id={event.id} 
                                key={event.id}
                                title={event.title}
                                date={event.date}
                                photo={event.photo} />
                            ))
                        )}
                        

                        
                        
                    </div>
                </div>
                {/* Div loading */}
                {isUploading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <img 
                        className='w-24 fixed'
                        src={logoLoading} 
                        alt="Logo Adac" />
                        <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-white"></div>
                    </div>
                )}
            </ContainerMainCard>
        </>
    )
}