// Icons
import { BiCalendar } from 'react-icons/bi';

// Components
import { ButtonDelete } from '../../../Button/Event/Delete';

export interface eventoProps{
    id_event?: string;
    name: string;
    photo?: string;
    date: string;
}

export function EventDelete({ id_event, name, photo, date}: eventoProps){

    return(
        <>  
            <div id={id_event} className="max-w-4xl w-96 h-max px-1 py-1 bg-white 
            rounded-lg flex flex-col justify-between
            sm:px-4 sm:w-96
            md:items-center md:flex-row md:px-4 md:w-full">
                {/* Information 1 */}
                <div className="h-20 bg-transparent flex gap-4 items-center
                md:w-1/2">
                    {/* Image */}
                    <img
                    className="max-w-20 object-cover w-full h-full rounded-full" 
                    src={photo} 
                    alt="Event Image" />
                    {/* Title */}
                    <span className='font-bold inter text-2xl text-black bg-transparent
                    sm:text-2xl'>
                        {name}
                    </span>
                </div>
                {/* Information 2 */}
                <div className='w-full bg-transparent flex justify-between gap-5 px-1
                md:w-1/2 md:justify-end md:gap-10'>
                    <div className='flex justify-end items-center gap-2 bg-transparent
                    md:w-3/5'>
                        {/* Icon Calendar */}
                        <BiCalendar 
                        className='bg-transparent'
                        size={30} 
                        fill='#000' />
                        {/* Date */}
                        <span className='font-bold text-xl inter 
                        text-gray-700 bg-transparent'>
                            {date}
                        </span>
                    </div>
                    <div className='w-full max-w-32 bg-transparent
                    md:w-2/5'>
                        {/* Button */}
                        <ButtonDelete
                        id_event={id_event}
                        name='Deletar'
                        type='button' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}