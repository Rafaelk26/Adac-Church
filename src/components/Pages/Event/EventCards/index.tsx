// Import for development
import { BiCalendar } from 'react-icons/bi';

// Components
import { Button } from '../../../Button/Event';

export interface eventoProps{
    id?: string;
    title: string;
    photo?: string;
    date: string;
}

export function EventCards({ id, title, photo, date}: eventoProps){
    return(
        <>  
            <div className="max-w-4xl w-80 h-max px-1 ps-3 py-1 bg-white 
            rounded-lg flex flex-col justify-between transition-all
            hover:scale-105 hover:cursor-pointer
            sm:px-4 sm:w-80
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
                    <span className='font-bold inter text-xl text-black bg-transparent
                    sm:text-2xl'>
                        {title}
                    </span>
                </div>
                {/* Information 2 */}
                <div className='w-full bg-transparent flex justify-center gap-5
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
                        <Button
                        path={`/adac/eventos/detalhes/${id}`}
                        name='Conferir'
                        type='button' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}