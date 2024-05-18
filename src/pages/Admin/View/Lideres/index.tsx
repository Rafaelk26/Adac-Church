// Import for development
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Connection with Firebase
import { db } from '../../../../services/server';

// Icon
import { BiArrowBack } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';

// Components
import { HeaderPages } from '../../../../components/Header/Pages';
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';


interface leaderProps{
    name_leader: string;
    photo_leader: string;
    phone_leader: string;
    office: string;
}

export function ViewLideres(){

    const [useSearch, setUseSearch] = useState<string>('');
    const [useActive, setUseActive] = useState<boolean>(false);
    
    // Leaders
    const [leader, setLeader] = useState<leaderProps[]>([])
    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(()=> {
        const fetchEventsData = async () => {
            setIsUploading(true);
            // Fazendo a conexão com a collection
            const eventCollection = collection(db, 'Celulas');
            const snapCelulasLeader = await getDocs(eventCollection);
            const leaderData = snapCelulasLeader.docs.map((doc)=> {
                const data = doc.data() as leaderProps
                return {
                    id: doc.id,
                    name_leader: data.name_leader,
                    photo_leader: data.photo_leader,
                    phone_leader: data.phone_leader,
                    office: data.office
                }
            });
            setIsUploading(false);
            setLeader(leaderData);
        }

        fetchEventsData();
    },[])
    
    const handleSearch = () => {
        alert(`Palavra procurada: ${useSearch}`);
        setUseSearch('');
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
                        <Link className='bg-transparent mx-auto md:mx-0' to={'/adac/admin/'}>
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
                {
                    leader.length === 0 ? (
                        <p className="text-center text-md w-full h-full flex justify-center md:text-lg md:mt-20 ">Nenhum líder encontrado</p>
                    ) : (
                        leader.map((lead)=> (
                            <section className='w-full max-w-96 flex flex-col gap-3 mx-auto mt-8 
                            md:max-w-xl md:mt-6'>
                                {/* Card Leader */}
                                <div className='w-full flex justify-between gap-2 py-1 rounded-xl 
                                outline outline-2 outline-white'>
                                    {/* Photo, name, cargo */}
                                    <div className='w-max flex gap-3 ps-2'>
                                        {/* Photo */}
                                        <img
                                        className='w-10 h-10 object-cover rounded-full border border-input
                                        md:w-14 md:h-14' 
                                        src={lead.photo_leader} 
                                        alt={lead.name_leader} />
                                        <div className='w-max flex flex-col'>
                                            {/* Name */}
                                            <h1 className='quicksand -mt-1 text-md 
                                            md:text-2xl'>{lead.name_leader}</h1>
                                            {/* Cargo */}
                                            <p className='quicksand -mt-1 text-sm text-gray-500
                                            md:text-md'>{lead.office}</p>
                                        </div>
                                    </div>
                                    <div className='w-max flex items-center justify-end pe-4'>
                                        {/* Phone number */}
                                        <h2 className='quicksand text-md 
                                        md:text-xl'>{lead.phone_leader}</h2>
                                    </div>
                                </div>
                            </section>
                        ))
                    )
                }
                {/* Div loading */}
                {isUploading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
                    </div>
                )}
            </ContainerMain>
        </>
    )
}