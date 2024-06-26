import CruzImagem from '../../../../assets/Cruz.png';

interface cardsProps{
    nome: string;
}
export function Cards({nome}: cardsProps){
    return(
        <>
            <div 
            className='w-max border border-white rounded-3xl flex items-center gap-3 px-2 py-1 transition-all
            hover:scale-105'>
                <img
                className='w-6 h-6' 
                src={CruzImagem} 
                alt="Cruz" />
                <p className='text-white text-2xl quicksand'>{nome}</p>
            </div>
        
        </>
    )
}