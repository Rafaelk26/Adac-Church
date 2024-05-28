// Components
import { Button } from '../../../Button/Home/index';

interface ministrationProps{
    link: string;
}

export function Ministration({ link }: ministrationProps) {
  return (
    <>
        <main className='w-full h-max mt-20 bg-transparent
        md:mb-10 md:mt-16'>
            <div className="w-full flex flex-col transition-all
            hover:scale-95">
                <h1 className='text-5xl quicksand text-center
                md:text-start'>Ministração</h1>
                <h2 className='text-md inter font-medium mt-3 text-center
                md:max-w-lg md:text-start'>Acompanhe a nossa última transmissão pela página ou pelo YouTube também!</h2>
            </div>
            <article className='w-full h-96 rounded-2xl mt-10
            md:rounded-2xl md:max-w-4xl md:mx-auto'>
                <iframe
                className='w-full h-full rounded-2xl
                md:rounded-2xl' 
                src={link}
                title="Ministração ADAC Church" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </article>
            <div className='w-full mt-8 flex justify-center
            md:mt-10'>
                <Button
                type='button'
                name='Ver no YouTube'
                path={link}
                />
            </div>
        </main>
    </>
  )
}
