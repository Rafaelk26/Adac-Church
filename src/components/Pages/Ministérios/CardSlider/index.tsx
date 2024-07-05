interface cardProps{
    foto: string;
    nameAlt: string;
}

export function Card({nameAlt, foto}: cardProps){
    return(
        <>
            <div className="w-48 h-64 mt-10 flex-shrink-0 rounded-lg border-2 border-white">
                <img
                    className='w-full h-full object-cover rounded-lg'
                    src={foto}
                    alt={nameAlt} />
            </div>
        </>
    )
}