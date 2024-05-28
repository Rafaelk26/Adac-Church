// Components
import { Button } from '../../../../components/Button/Home';
import { CellCards } from '../CellCards';

export function Cell(){
    return(
        <>
            <article className='w-full flex flex-col justify-center mb-56 mt-20 md:mt-0'>
                {/* Title Cell */}
                <div className='w-full flex flex-col items-center transition-all hover:scale-105 hover:cursor-default'>
                    <h1 className='quicksand text-5xl text-center text-white w-full'>Células</h1>
                    <p className='mt-4 inter text-center text-white max-w-96 justify-center'>
                        Localize a célula mais próxima de sua 
                        residência e entre em uma comunhão com Cristo!
                    </p>
                </div>
                {/* Cards Cell */}
                <section className='w-full flex justify-center gap-8 mt-5 flex-wrap grow'>
                    <CellCards photo='https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA' />
                    <CellCards photo='https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA' />
                    <CellCards photo='https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA' />
                    <CellCards photo='https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA '/>
                </section>
                {/* Button Cell */}
                <div className='w-full flex justify-center mt-10'>
                    <Button
                    name='Acessar'
                    path='/adac/celulas/'
                    type='button' />
                </div>
            </article>
        
        </>
    )
}