// Import for development
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMainCard } from '../../../../components/Container/MainCard';
import { HeaderPages } from '../../../../components/Header/Pages';
import { EventDelete } from '../../../../components/Pages/Event/EventDelete';
import { eventoProps } from '../../../../components/Pages/Event/EventCards';

// Image
import logoEx from '../../../../assets/leao.png';

// Icon
import { BiArrowBack } from 'react-icons/bi';

// Connection
import { db } from '../../../../services/server';


export function DeleteEventos(){

    useEffect(()=> {
        const getEvents = async () => {
            const dataCollection = collection(db, 'Eventos')
            const dataSnapshot = await getDocs(dataCollection)
            const eventData = dataSnapshot.docs.map(doc => {
                const data = doc.data() as eventoProps
                return { id: doc.id, ...data }
            })
            setEvents(eventData)
        }
        getEvents()
    }, [])
    
    const [events, setEvents] = useState<eventoProps[]>([])

    return(
        <>
            {/* Header Event */}
            <ContainerHeader>
                <HeaderPages 
                path='/adac/admin/'
                name='Deletar Eventos' />
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
                        {
                        events.map(event=>(
                            <EventDelete
                            id_event={event?.id} 
                            key={event.id}
                            name={event.name}
                            date={event.date}
                            photo={event.photo ? event.photo : logoEx} />
                        ))} 
                    </div>
                </div>
            </ContainerMainCard>
        </>
    )
}