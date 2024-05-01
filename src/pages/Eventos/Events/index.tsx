// Import for development
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainCard } from '../../../components/Container/MainCard';
import { HeaderPages } from '../../../components/Header/Pages';
import { EventCards } from '../../../components/Pages/Event/EventCards';
import { eventoProps } from '../../../components/Pages/Event/EventCards';

// Image
import logoEx from '../../../assets/leao.png';

// Icon
import { BiArrowBack } from 'react-icons/bi';

// Test Object
const obj:eventoProps[] = [
    {
        id:"1",
        name: "Célulão da ADAC",
        date: "16/03/2024",
        photo: "",
    },
    {
        id:"2",
        name: "CFL 18",
        date: "29/10/2024",
        photo: "",
    },
    {
        id:"3",
        name: "Café em Família",
        date: "10/11/2024",
        photo: "",
    },
]

export function ViewsEventos(){
    
    const [events, setEvents] = useState<eventoProps[]>(obj)

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
                        {
                        events.map(event=>(
                            <EventCards
                            id={event.id} 
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