// Import for development

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMain } from '../../../components/Container/Main';
import { HeaderPages } from '../../../components/Header/Pages';
import { cardService } from '../../../components/Pages/Admin/CardsService';

export function Administration(){
    return(
        <>
            <div>
                <ContainerHeader>
                    <HeaderPages name='Administrador' />
                </ContainerHeader>
                {/* Content */}
                <ContainerMain>
                    {/* Subtitle */}
                    <div className='max-w-lg md:mt-28'>
                        <p className='text-gray-200 text-2xl'>Você como administrador tem como papel 
                        coordenar o site na criação, edição e exclusão 
                        de conteúdos.</p>
                    </div>

                    <div className='w-full mt-5'>
                        {/* Title Adm */}
                        <div className='w-full flex justify-center'>
                            <h2 className='font-semibold quicksand text-3xl'>Serviços</h2>
                        </div>
                    </div>
                </ContainerMain>
            </div>
        </>
    )
}