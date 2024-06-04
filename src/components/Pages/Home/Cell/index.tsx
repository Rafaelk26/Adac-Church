// Import for development
import { useMemo } from 'react';

// Components
import { Button } from '../../../../components/Button/Home';
import { CellCards } from '../CellCards';

// Photos CardsCell
import image1 from '../../../../assets/Capas/Célula Anjos do Rei.png';
import image2 from '../../../../assets/Capas/Células Féminina.png';
import image3 from '../../../../assets/Capas/Célula Elegidos.png';
import image4 from '../../../../assets/Capas/Célula Fontes de Luz.png';

export function Cell(){

    const memorizedImage1 = useMemo(()=> image1, []);
    const memorizedImage2 = useMemo(()=> image2, []);
    const memorizedImage3 = useMemo(()=> image3, []);
    const memorizedImage4 = useMemo(()=> image4, []);

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
                    <CellCards 
                    link='/adac/celulas/detalhes/8hSSiMi8pco7TxV15Pr5'
                    photo={memorizedImage1} />

                    <CellCards 
                    link='/adac/celulas/detalhes/SQJxuWnVJlVMijPL7xcH'
                    photo={memorizedImage2} />
                    
                    <CellCards 
                    link='/adac/celulas/detalhes/D674TveVXM6XgokdUrjL'
                    photo={memorizedImage3} />
                    
                    <CellCards 
                    link='/adac/celulas/detalhes/zwsNuTHPZhvIfQ402CHc'
                    photo={memorizedImage4} />
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