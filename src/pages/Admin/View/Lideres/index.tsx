// Import for development
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon
import { BiArrowBack } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';

// Image Test
import imgTest from '../../../../assets/Perfil/IMG-20211121-WA0092_resized - Robson Soares floriano.jpg';

// Components
import { HeaderPages } from '../../../../components/Header/Pages';
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';


export function ViewLideres(){

    const [useSearch, setUseSearch] = useState<string>('');
    const [useActive, setUseActive] = useState<boolean>(false);

    const handleSearch = () => {
        alert(`Palavra procurada: ${useSearch}`)
        setUseSearch('')
    }

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
                <div className='w-full flex mt-40
                md:flex-row md:mt-36'>
                    <div className='w-full'>
                        {/* Arrow back page */}
                        <Link className='bg-transparent mx-auto md:mx-0' to={'/adac/celulas/'}>
                            <BiArrowBack className='bg-transparent w-full md:w-max' size={35}/>
                        </Link>
                        <div className='w-full max-w-96 mx-auto h-max flex mt-5 justify-center items-center 
                        bg-transparent flex-col md:-mt-10 md:max-w-full
                        md:flex-row'>
                            <div className={useActive ? `w-full flex mx-auto outline outline-2 outline-white 
                            p-2 pe-3 rounded-2xl transition-all md:max-w-xl` : `w-full flex mx-auto 
                            outline outline-1 outline-white transition-all p-2 pe-3 rounded-2xl md:max-w-xl`}>
                                <input
                                onFocus={() => setUseActive(true)}
                                onBlur={() => setUseActive(false)}
                                value={useSearch}
                                onChange={(e)=> setUseSearch(e.target.value)}
                                className='w-full
                                md:max-w-full
                                focus:outline-none
                                placeholder:ps-2
                                placeholder:text-lg'
                                placeholder='Procure um líder específico' 
                                type="text" />

                                <BiSearch 
                                className='bg-transparent cursor-pointer'
                                onClick={handleSearch} 
                                size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='w-full max-w-96 flex flex-col gap-3 mx-auto mt-8 
                md:max-w-xl md:mt-10'>
                    {/* Card Leader */}
                    <div className='w-full flex justify-between gap-2 py-1 rounded-xl 
                    outline outline-2 outline-white'>
                        {/* Photo, name, cargo */}
                        <div className='w-max flex gap-3 ps-2'>
                            {/* Photo */}
                            <img
                            className='w-10 h-10 object-cover rounded-full border border-input
                            md:w-14 md:h-14' 
                            src={imgTest} 
                            alt="foto líder" />
                            <div className='w-max flex flex-col'>
                                {/* Name */}
                                <h1 className='quicksand -mt-1 text-md 
                                md:text-2xl'>Robson Soares</h1>
                                {/* Cargo */}
                                <p className='quicksand -mt-1 text-sm text-gray-500
                                md:text-md'>Leader</p>
                            </div>
                        </div>
                        <div className='w-max flex items-center justify-end pe-4'>
                            {/* Phone number */}
                            <h2 className='quicksand text-md 
                            md:text-xl'>(12)90000-0000</h2>
                        </div>
                    </div>
                </section>
            </ContainerMain>
        </>
    )
}