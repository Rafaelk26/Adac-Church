// Components
import { Button } from '../../../Button/index';

export function Event(){
    return(
        <article className="bg-transparent flex flex-col justify-center items-center mb-52 h-96 mt-40 md:mt-10">   
            {/* The Event */}
            <section className='bg-transparent w-full mt-20 md:flex md:justify-center md:gap-5'>
                {/* Photo Event */}
                <div className='w-full h-max flex flex-col items-center transition-all md:w-1/2 hover:scale-105 hover:cursor-default'>
                    <a className='h-full' href="/adac/eventos">
                        <img className="w-full h-full max-w-xl rounded-2xl" src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA" alt="Foto Evento" />
                    </a>
                </div>
                {/* Informations */}
                <div className='flex flex-col w-full items-center md:w-1/3 md:items-start overflow-hidden'>
                    <h1 className='quicksand text-5xl text-center text-white w-full m-0 mb-5 mt-3 md:text-start md:mt-0'>
                        Eventos
                    </h1>
                    <div className="h-48 overflow-y-auto mb-4">
                        <p className='text-white text-lg inter mb-5 sm:text-sm md:text-base md:max-w-96'>
                            Lorem ipsum dolor sit amet consectetur. 
                            Eu turpis mauris at accumsan condimentum et. 
                            At mauris non quis in aliquam. Sed non ut leo 
                            elit egestas convallis pharetra at. Mauris viverra 
                            id proin amet nunc dignissim metus quis. Ac elementum 
                            sagittis sodales nunc. Sed risus erat orci tempus 
                            lectus mi at. Nisi amet urna suspendisse egestas. 
                            Ut vel dolor amet non lorem. Aliquet ac posuere 
                            pretium praesent arcu ipsum quis montes. 
                        </p>
                    </div>
                    <div className='ms-2'>
                        <Button 
                        type='button' 
                        path='/adac/eventos' 
                        name='Conferir' />
                    </div>
                </div>
            </section>
        </article>
    )
}
