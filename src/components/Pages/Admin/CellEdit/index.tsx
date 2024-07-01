import { MdLocationPin } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

import { Link } from 'react-router-dom';

export interface cellProps {
    id_cell?: string;
    name_cell: string;
    name_leader: string;
    neighborhood: string;
    age_group: string;
    photo_cell?: string;
    photo_leader: string;
}


export function CellEdit({id_cell , name_cell, name_leader, neighborhood, age_group, photo_cell, photo_leader}:cellProps){
    return(
        <>
            <div id={id_cell} className="w-96 h-max bg-white rounded-xl px-1 flex gap-5 
            py-1 transition-all
            md:w-96">
                {/* Foto */}
                <div className="w-2/5 h-44 my-auto ms-3 bg-white">
                    <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={photo_cell} 
                    alt="Célula" />
                </div>
                {/* Informations */}
                <div className='w-3/5 h-full flex justify-start items-start flex-col gap-2 bg-white'>
                    {/* Name Cell */}
                    <h1 className='mt-2 w-52 font-bold quicksand bg-white
                    text-lg ms-1 text-black
                    sm:text-lg
                    md:text-xl'>{name_cell}</h1>
                    {/* Local Cell */}
                    <div className='flex items-center bg-white'>
                        <MdLocationPin
                        className='bg-transparent' 
                        size={35}
                        fill="#000" />
                        <p className='text-md font-bold inter text-black bg-white
                        sm:text-md
                        md:text-lg'>{neighborhood}</p>
                    </div>
                    {/* Age_group */}
                    <div className='flex items-center bg-white'>
                        <FaPeopleGroup className='bg-transparent ms-1' size={32} fill="#000" />
                        <p className='text-sm font-bold inter text-black bg-white sm:text-sm md:text-lg'>
                            {age_group}
                        </p>
                    </div>
                    {/* Leader Cell */}
                    <div className='flex flex-col items-center gap-2 bg-white'>
                        {/* Photo Leader */}
                        <div className='max-w-full max-h-12 bg-white 
                        flex items-center gap-2'>
                            <img 
                            className='w-10 h-10 max-h-12 rounded-full bg-white object-cover'
                            src={photo_leader} 
                            alt="Líder" />
                            {/* Name Leader */}
                            <p className='text-md font-bold inter text-black bg-white
                            sm:text-md
                            md:text-lg'>{name_leader}</p>
                        </div>
                        <div className="w-full flex justify-start bg-transparent">
                            {/* Button */}
                            <Link
                            to={`/adac/admin/editar/celulas/${id_cell}`} 
                            className="w-full max-w-28 bg-orange-500 rounded-md 
                            flex justify-center p-1 text-white font-semibold
                            hover:scale-105">
                                Editar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}