// Icon
import { BiUser } from 'react-icons/bi';

// Components
import { Links } from '../../../../components/Button/Home/Links';

interface cardServiceProps{
    name: string;
    name_link: string;
}

export function cardService({ name, name_link }: cardServiceProps){
    return(
        <>
            <div className='w-60 h-80 outline outline-white outline-2 rounded-lg px-4'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='pt-4 font-semibold quicksand text-3xl'>{name}</h2>
                    <BiUser 
                    className='mt-4'
                    fill='#fff' 
                    size={30} />
                </div>
                
                {/* Buttons */}
                <div className='mt-4 flex flex-col gap-4'>
                    <Links
                    className='bg-transparent border border-solid 
                    border-white rounded-lg w-full px-5 py-2 m-0 
                    flex justify-center items-center quicksand text-xl
                    transition-all
                    hover:bg-blue-600'
                    to={`/adac/admin/criar/${name_link}`} 
                    nome_link='Criar' 
                    />
                    <Links
                    className='bg-transparent border border-solid 
                    border-white rounded-lg w-full px-5 py-2 m-0 
                    flex justify-center items-center quicksand text-xl
                    transition-all
                    hover:bg-gray-800'
                    to={`/adac/admin/visualizar/${name_link}`} 
                    nome_link='Visualizar' 
                    />
                    <Links
                    className='bg-transparent border border-solid 
                    border-white rounded-lg w-full px-5 py-2 m-0 
                    flex justify-center items-center quicksand text-xl
                    transition-all
                    hover:bg-yellow-700'
                    to={`/adac/admin/editar/${name_link}`}
                    nome_link='Editar' 
                    />
                    <Links
                    className='bg-transparent border border-solid 
                    border-white rounded-lg w-full px-5 py-2 m-0 
                    flex justify-center items-center quicksand text-xl
                    transition-all
                    hover:bg-red-700'
                    to={`/adac/admin/deletar/${name_link}`} 
                    nome_link='Deletar' 
                    />
                </div>
            </div>
        </>
    )
}