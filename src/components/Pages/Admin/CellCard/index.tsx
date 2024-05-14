import { MdLocationPin } from "react-icons/md";


export interface cellProps {
    id_cell?: string;
    name_cell: string;
    name_leader: string;
    neighborhood: string;
    photo_cell: string;
    photo_leader: string;
}


export function Cell({id_cell , name_cell, name_leader, neighborhood, photo_cell, photo_leader}:cellProps){
    return(
        <>
            <div id={id_cell} className="w-96 h-36 bg-white rounded-xl flex gap-5 pe-3 transition-all
            hover:scale-105
            md:w-96">
                {/* Foto */}
                <div className="w-2/5 h-5/6 my-auto ms-3 bg-white">
                    <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={photo_cell} 
                    alt="Célula" />
                </div>
                {/* Informations */}
                <div className='w-3/5 h-full flex justify-start items-start flex-col gap-2 bg-white'>
                    {/* Name Cell */}
                    <h1 className='mt-2 w-max font-bold quicksand bg-white
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
                    {/* Leader Cell */}
                    <div className='flex items-center gap-2 bg-white'>
                        {/* Photo Leader */}
                        <div className='max-w-12 max-h-12 bg-white'>
                            <img 
                            className='w-10 h-10 max-h-12 rounded-full bg-white object-cover'
                            src={photo_leader} 
                            alt="Líder" />
                        </div>
                        {/* Name Leader */}
                        <p className='text-md font-bold inter text-black bg-white
                        sm:text-md
                        md:text-lg'>{name_leader}</p>
                    </div>
                </div>
            </div>
        </>
    )
}