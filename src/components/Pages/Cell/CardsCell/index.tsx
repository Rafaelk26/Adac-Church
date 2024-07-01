import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export interface cellProps {
    id?: string;
    id_cell?: string;
    name_cell: string;
    name_leader: string;
    age_group: string;
    neighborhood: string;
    photo_cell?: string;
    photo_leader: string;
}

export const Cell = React.memo(({ id_cell, name_cell, name_leader, neighborhood, age_group, photo_cell, photo_leader }: cellProps) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    img.src = img.dataset.src!;
                    observer.unobserve(img);
                }
            });
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <Link className='m-0' to={`/adac/celulas/detalhes/${id_cell}`}>
            <div className="w-96 h-48 bg-white rounded-xl flex gap-5 pe-3 transition-all hover:scale-105 md:w-96">
                {/* Foto */}
                <div className="w-2/5 h-5/6 my-auto ms-3 bg-white">
                    <img
                    ref={imgRef}
                    data-src={photo_cell} 
                    alt="Célula"
                    className="w-full h-full object-cover rounded-lg"
                    src={photo_cell} // Placeholder enquanto a imagem não carrega
                    />
                </div>
                {/* Informations */}
                <div className='w-3/5 h-full flex justify-start items-start flex-col gap-2 bg-white'>
                    {/* Name Cell */}
                    <h1 className='mt-2 w-full overflow-y-hidden font-bold quicksand bg-white text-lg ms-1 text-black sm:text-lg md:text-xl'>
                        {name_cell}
                    </h1>
                    {/* Local Cell */}
                    <div className='flex items-center bg-white'>
                        <MdLocationPin className='bg-transparent' size={35} fill="#000" />
                        <p className='text-sm font-bold inter text-black bg-white sm:text-sm md:text-lg'>
                            {neighborhood}
                        </p>
                    </div>
                    <div className='flex items-center bg-white'>
                        <FaPeopleGroup className='bg-transparent ms-1' size={32} fill="#000" />
                        <p className='text-sm font-bold inter text-black bg-white sm:text-sm md:text-lg'>
                            {age_group}
                        </p>
                    </div>
                    {/* Leader Cell */}
                    <div className='flex items-center gap-2 bg-white'>
                        {/* Photo Leader */}
                        <div className='max-w-12 max-h-12 bg-white'>
                            <img
                                className='w-10 h-10 max-h-12 rounded-full bg-white object-cover'
                                src={photo_leader}
                                alt="Líder"
                            />
                        </div>
                        {/* Name Leader */}
                        <p className='text-sm font-bold inter text-black bg-white sm:text-sm md:text-lg'>
                            {name_leader}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
});
