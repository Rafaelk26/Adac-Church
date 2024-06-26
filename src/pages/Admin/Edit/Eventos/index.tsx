// Import for development
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMainCard } from '../../../../components/Container/MainCard';
import { HeaderPages } from '../../../../components/Header/Pages';
import { EventEdits } from '../../../../components/Pages/Event/EventEdits';
import { eventoProps } from '../../../../components/Pages/Event/EventCards';

// Icon
import { BiArrowBack } from 'react-icons/bi';

// Connection with Firebase
import { db } from '../../../../services/server';

// Image loading 
import logoLoading from '../../../../assets/Logo/logo-adac.png';


export function EditEventos(){

    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(()=> {
        const getEvents = async () => {
            setIsUploading(true);
            const dataCollection = collection(db, 'Eventos')
            const dataSnapshot = await getDocs(dataCollection)
            const eventData = dataSnapshot.docs.map(doc => {
                const data = doc.data() as eventoProps
                return { 
                    id: doc.id,
                    title: data.title,
                    photo: data.photo,
                    date: data.date,
                }
            })
            setIsUploading(false);
            setEvents(eventData)
        }
        getEvents()
    }, [])
    
    const [events, setEvents] = useState<eventoProps[]>([]);
    
    const memorizedEventsImage = useMemo(()=> {
        return events.map(event => event.photo);
    }, [events]);

    console.log(memorizedEventsImage);

    return(
        <>
            {/* Header Event */}
            <ContainerHeader>
                <HeaderPages 
                path='/adac/admin/'
                name='Editar Eventos' />
            </ContainerHeader>
            {/* Events Cards */}
            <ContainerMainCard>
                <div className='mt-40 flex flex-col w-full items-center
                md:items-start'>
                    <div className="w-max flex items-center
                    md:items-start">
                        {/* Arrow back page */}
                        <Link to={'/adac/admin/'}>
                            <BiArrowBack size={35}/>
                        </Link>
                    </div>
                    <div className='w-full mt-12 flex flex-col items-center gap-4'>
                        { events.length === 0 ? (
                            <p className="text-center text-md w-full h-full flex justify-center md:text-lg ">Nenhum evento encontrado</p>
                        ) : (
                            events?.map((event)=>(
                                <EventEdits
                                id_event={event?.id} 
                                key={event.id}
                                name={event.title}
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