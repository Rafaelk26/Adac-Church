// Import for development
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Connection
import { db } from '../../../../services/server';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMainCard } from '../../../../components/Container/MainCard';
import { HeaderPages } from '../../../../components/Header/Pages';
import { EventViews } from '../../../../components/Pages/Event/EventView';
import { eventoProps } from '../../../../components/Pages/Event/EventCards';

// Image
import logoEx from '../../../../assets/leao.png';

// Icon
import { BiArrowBack } from 'react-icons/bi';

export function ViewEventos(){
    const [events, setEvents] = useState<eventoProps[]>([]);
    
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
                    date: data.date
                
                }
        })
        setIsUploading(false);
            setEvents(eventData)
        }
        getEvents()
    }, [])
    
    

    return(
        <>
            {/* Header Event */}
            <ContainerHeader>
                <HeaderPages 
                path='/adac/admin/'
                name='Visualizar Eventos' />
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
                        {events.length === 0 ? (
                            <p className="text-center text-md w-full h-full flex justify-center md:text-lg ">Nenhum evento encontrado</p>
                        ) : (
                            events?.map((event)=>(
                                <EventViews
                                id={event?.id} 
                                name={event.title}
                                date={event.date}
                                photo={event.photo ? event.photo : logoEx} />
                            ))
                        )}
                    </div>
                </div>
                {/* Div loading */}
                {isUploading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
                    </div>
                )}
            </ContainerMainCard>
        </>
    )
}
                        