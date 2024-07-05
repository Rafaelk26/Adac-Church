import { useState } from 'react';
import { BiX } from 'react-icons/bi';
import Imagem from '../../../../assets/Logo/adac-logo-black.png';

export interface CardMinisterioProps {
    name: string;
    nameDetail: string;
    image: string;
    description: string;
    responsavelFoto?: string;
    responsavelName?: string;
    palavra?: string;
    versiculo?: string;
}

export function CardMinisterio({ name, nameDetail, image, description, responsavelFoto, responsavelName, palavra, versiculo }: CardMinisterioProps) {
    const [showDetails, setShowDetails] = useState(false);

    const imagePath = image;

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className="w-56 flex flex-col rounded-2xl relative border-2 border-white">
                <img
                    className="w-full h-72 object-cover rounded-2xl opacity-60"
                    src={imagePath}
                    alt={name} />
                <div className='w-48 absolute bottom-3 left-2 flex items-center'>
                    <p className='quicksand'>{name}</p>
                </div>
                <button
                    className='absolute bottom-2 right-3 bg-zinc-500 p-2 rounded-md text-sm'
                    onClick={handleToggleDetails}
                >
                    Detalhes
                </button>
            </div>

            {showDetails && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full max-w-md bg-white pb-8 flex flex-col rounded-xl md:max-w-2xl">
                        <div className='h-28 relative rounded-b-lg flex justify-center md:w-full'>
                            <div className='w-full h-28 relative bg-black'>
                                <img
                                    className='w-full h-32 object-cover blur-sm'
                                    src={imagePath}
                                    alt={name} />
                                <BiX
                                    className='absolute z-10 top-3 right-3 cursor-pointer'
                                    size={50}
                                    color='#ff000c'
                                    fill='#ff000c'
                                    onClick={() => setShowDetails(false)} />
                            </div>
                            <img
                                className='w-48 h-32 -bottom-8 rounded-lg absolute object-cover outline outline-1 outline-stone-800 
                                md:w-40 md:h-28 md:-bottom-8 md:left-4'
                                src={imagePath}
                                alt="" />
                        </div>

                        <div className='w-full flex flex-col gap-2 mt-10 px-4 justify-center md:flex-row'>
                            <div className='w-full md:w-2/3'>
                                <div className='w-full'>
                                    <h1 className='w-full quicksand text-black font-semibold text-center text-lg md:text-xl md:text-start'>{nameDetail}</h1>
                                </div>
                                <div className='w-full mt-2'>
                                    <h1 className='quicksand text-black text-center md:text-lg md:text-start'>Descrição</h1>
                                    <div className='w-full mt-2 inter font-semibold text-black text-center md:mt-1 md:text-start'>
                                        {description}
                                    </div>
                                </div>
                                {palavra && (
                                    <div className='w-full mt-2'>
                                        <div className='w-full mt-4 text-black font-bold text-center md:text-start'>
                                            "{palavra}"
                                        </div>
                                        <div className='w-full mt-1 text-gray-800 font-bold text-center md:text-start'>
                                            {versiculo}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="w-full mt-3 flex flex-col items-center md:w-2/6 md:mt-0 md:items-start">
                                {responsavelName && (
                                    <>
                                        <h1 className='quicksand text-black text-lg'>Responsável</h1>
                                        <div className='w-full flex items-center justify-center mt-2 gap-2 md:items-start md:justify-start'>
                                            <img
                                                className='w-8 h-8 rounded-full outline outline-2 outline-black'
                                                src={responsavelFoto ? responsavelFoto : Imagem}
                                                alt="Responsável" />
                                            <h1 className='w-max quicksand text-black text-md'>{responsavelName}</h1>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
