import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

// Connection with Firebase
import { db } from '../../../../services/server';

// Icon
import { BiArrowBack, BiSearch } from 'react-icons/bi';

// Image loading 
import logoLoading from '../../../../assets/Logo/logo-adac.png';

// Components
import { HeaderPages } from '../../../../components/Header/Pages';
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';

interface editLeaderProps {
    id: string;
    name_leader: string;
    photo_leader: string;
    office: string;
}

export function EditLideres() {
    const [useSearch, setUseSearch] = useState<string>('');
    const [useActive, setUseActive] = useState<boolean>(false);
    const [editLeader, setEditLeader] = useState<editLeaderProps[]>([]);
    const [filteredLeaders, setFilteredLeaders] = useState<editLeaderProps[]>([]);

    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        const fetchEditLeader = async () => {
            setIsUploading(true);
            const leaderRef = collection(db, 'Celulas');
            const leaderSnap = await getDocs(leaderRef);
            const leaderData = leaderSnap.docs.map((doc) => {
                const data = doc.data() as editLeaderProps;
                return {
                    id: doc.id,
                    name_leader: data.name_leader,
                    photo_leader: data.photo_leader,
                    office: data.office,
                };
            });
            setIsUploading(false);
            setEditLeader(leaderData);
            setFilteredLeaders(leaderData);
        };

        fetchEditLeader();
    }, []);

    useEffect(() => {
        const results = editLeader.filter((leader) =>
            leader.name_leader.toLowerCase().includes(useSearch.toLowerCase())
        );
        setFilteredLeaders(results);
    }, [useSearch, editLeader]);

    const memorizedEditLeaderImage = useMemo(()=> {
        return editLeader.map(leader => leader.photo_leader);
    }, [editLeader])

    return (
        <>
            <ContainerHeader>
                <HeaderPages
                    path='/adac/admin/'
                    name='Editar Líderes'
                />
            </ContainerHeader>
            {/* Content */}
            <ContainerMain>
                <div className='w-full flex mt-40 md:flex-row md:mt-36'>
                    <div className='w-full'>
                        {/* Arrow back page */}
                        <Link className='bg-transparent mx-auto md:mx-0' to={'/adac/admin/'}>
                            <BiArrowBack className='bg-transparent w-full md:w-max' size={35} />
                        </Link>
                        <div className='w-full max-w-96 mx-auto h-max flex mt-5 justify-center items-center bg-transparent flex-col md:-mt-10 md:max-w-full md:flex-row'>
                            <div className={useActive ? `w-full flex mx-auto outline outline-2 outline-white p-2 pe-3 rounded-2xl transition-all md:max-w-xl` : `w-full flex mx-auto outline outline-1 outline-white transition-all p-2 pe-3 rounded-2xl md:max-w-xl`}>
                                <input
                                    onFocus={() => setUseActive(true)}
                                    onBlur={() => setUseActive(false)}
                                    value={useSearch}
                                    onChange={(e) => setUseSearch(e.target.value)}
                                    className='w-full md:max-w-full focus:outline-none placeholder:ps-2 placeholder:text-lg'
                                    placeholder='Procure um líder específico'
                                    type="text"
                                />
                                <BiSearch
                                    className='bg-transparent cursor-pointer'
                                    size={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <section className='w-full max-w-96 flex flex-col gap-3 mx-auto mt-8 md:max-w-xl md:mt-10'>
                    {filteredLeaders.length === 0 ? (
                        <p className="text-center text-md w-full h-full flex justify-center md:text-lg">Nenhum líder encontrado</p>
                    ) : (
                        filteredLeaders.map((leader) => (
                            <div key={leader.id} className='w-full flex justify-between gap-2 py-1 rounded-xl outline outline-2 outline-white'>
                                {/* Photo, name, cargo */}
                                <div className='w-max flex gap-3 ps-2'>
                                    {/* Photo */}
                                    <img
                                        className='w-10 h-10 object-cover rounded-full border border-input md:w-14 md:h-14'
                                        src={leader.photo_leader}
                                        alt="foto líder"
                                    />
                                    <div className='w-max flex flex-col'>
                                        {/* Name */}
                                        <h1 className='quicksand -mt-1 text-md md:text-2xl'>{leader.name_leader}</h1>
                                        {/* Cargo */}
                                        <p className='quicksand -mt-1 text-sm text-gray-500 md:text-md'>{leader.office}</p>
                                    </div>
                                </div>
                                <div className='w-max flex items-center justify-end pe-4'>
                                    {/* Link edit */}
                                    <Link
                                        to={`/adac/admin/editar/lideres/${leader.id}`}
                                        className='flex justify-center p-1 bg-orange-500 rounded-md outline outline-white outline-2 transition-all hover:scale-105 md:w-24'
                                    >
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </section>
                {/* Div loading */}
                {isUploading && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <img 
                        className='w-24 fixed'
                        src={logoLoading} 
                        alt="Logo Adac" />
                        <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-white"></div>
                    </div>
                )}
            </ContainerMain>
        </>
    );
}
