import { ButtonMinistration } from '../../../Button/Ministration';

// Interface Vídeo
import { videoProps } from '../../../../pages/Home';

export function CardYouTube({title, videoId, description, thumbnail}:videoProps) {
  return (
    <>
        <div className="w-full p-1 gap-3 rounded-lg flex outline outline-white outline-2 
          md:max-w-3xl md:p-2 md:gap-3">
            {/* Group 1 */}
            <div className="w-1/3 rounded-2xl
            md:w-32 md:h-24 md:rounded-2xl">
              {/* Image */}
              <img
                className='w-full h-full rounded-xl object-cover'
                src={thumbnail}
                alt="Ministração"
              />
            </div>
            {/* Group 2 */}
            <div className='w-2/3 flex flex-col pe-1
            md:flex-row md:max-w-4xl'>
              <div className='w-full flex-grow'>
                <h1 className='w-full text-sm quicksand whitespace-nowrap overflow-hidden text-ellipsis text-selectable
                md:text-lg md:whitespace-nowrap md:overflow-hidden md:text-ellipsis md:text-selectable'>
                  {title}
                </h1>
                <p className='text-sm inter text-gray-500 whitespace-nowrap
                overflow-hidden text-ellipsis text-selectable
                md:text-md md:mt-1 md:whitespace-nowrap'>
                  {description}
                </p>

                {/* Group 3 */}
                <div className='w-32 flex flex-col justify-center 
                md:w-36'>
                    <ButtonMinistration 
                    path={`https://www.youtube.com/embed/${videoId}?si=9bVfMuZL3iZzacXc`} 
                    type='button' />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
