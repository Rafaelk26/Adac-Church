interface cellCardsProps{
    photo: string;
}

export function CellCards({photo}: cellCardsProps){
    return(
        <>
            <div className='w-1/5 h-80 min-w-56 max-w-64'>
                <img
                className='cards w-full h-full object-cover rounded-2xl transition-all cursor-pointer 
                hover:shadow-lg hover:shadow-slate-600
                hover:scale-110' 
                src={photo} 
                alt="Cell" />
            </div>    
        </>
    )
}