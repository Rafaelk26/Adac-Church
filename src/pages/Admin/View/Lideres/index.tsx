// Import for development
import { Link } from 'react-router-dom';

// Icon
import { BiArrowBack } from 'react-icons/bi';

// Components
import { HeaderPages } from '../../../../components/Header/Pages';
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';

export function ViewLideres(){
    return(
        <>  
            <ContainerHeader>
                <HeaderPages
                path='/adac/admin/'
                name='Líderes'
                />
            </ContainerHeader>
            {/* Content */}
            <ContainerMain>
                <div className='w-full flex flex-col mt-28 
                md:flex-row md:mt-36'>
                    <div className='w-full'>
                        <div className='w-full h-max flex justify-center items-center bg-transparent'>
                            {/* Arrow back page */}
                            <Link className='bg-transparent absolute z-0 left-8' to={'/adac/celulas/'}>
                                <BiArrowBack className='bg-transparent' size={35}/>
                            </Link>

                            <div className='w-full flex justify-center'>
                                <input
                                className='w-full border border-input p-2 rounded-lg
                                md:max-w-md
                                placeholder:ps-2
                                placeholder:text-lg'
                                placeholder='Procure um líder específico' 
                                type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </>
    )
}