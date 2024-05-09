// Import for development
import { BiCalendar } from 'react-icons/bi';

export interface eventoProps{
    id?: string;
    name: string;
    photo?: string;
    date: string;
}

export function EventViews({ id, name, photo, date}: eventoProps){
    return(
        <>  
            <div id={id} className="max-w-4xl w-72 h-max px-1 py-1 bg-white 
            rounded-lg flex flex-col justify-between transition-all
            hover:scale-105
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
                        {name}
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
                </div>
            </div>
        </>
    )
}