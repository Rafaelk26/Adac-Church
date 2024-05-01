// Import for development
import { useNavigate } from 'react-router-dom';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMain } from '../../../components/Container/Main';
import { HeaderPages } from '../../../components/Header/Pages';
import { CardService } from '../../../components/Pages/Admin/CardsService';
import { Links } from '../../../components/Button/Home/Links';

// Icon
import { BiUser } from 'react-icons/bi';


export function Administration(){

    const nav = useNavigate()

    const handleLogout = () => {
        alert('deslogado');
        nav('/');
        return;
    }

    
    return(
        <>
            <div>
                <ContainerHeader>
                    <HeaderPages
                    path='/adac/admin' 
                    name='Administrador' />
                </ContainerHeader>
                {/* Content */}
                <ContainerMain>
                    {/* Subtitle */}
                    <div className='max-w-sm mx-auto mt-40 
                    md:max-w-lg md:mt-28 md:mx-0'>
                        <p className='text-gray-200 text-2xl text-center
                        md:text-start'>Você como administrador tem como papel 
                        coordenar o site na criação, edição e exclusão 
                        de conteúdos.</p>
                    </div>

                    <section className='w-full mt-10 md:mt-5'>
                        {/* Title Adm */}
                        <div className='w-full flex justify-center mb-5'>
                            <h2 className='font-semibold quicksand text-3xl'>Serviços</h2>
                        </div>

                        {/* Cards Services */}
                        <div className='mt-8 flex flex-col justify-center items-center gap-8 
                        md:flex-row md:gap-10'>
                            {/* Eventos */}
                            <CardService
                            name='Eventos'
                            name_link='eventos'
                            />
                            {/* Células */}
                            <CardService
                            name='Células'
                            name_link='celulas'
                            />
                            {/* Líderes */}
                            <div className='w-60 h-80 outline outline-white outline-2 rounded-lg px-4'>
                                <div className='w-full flex justify-between items-center'>
                                    <h2 className='pt-4 font-semibold quicksand text-3xl'>Líderes</h2>
                                    <BiUser
                                    className='mt-4'
                                    fill='#fff' 
                                    size={30} />
                                </div>
                                
                                {/* Buttons */}
                                <div className='mt-4 flex flex-col justify-center gap-4 h-56'>
                                    <Links
                                    className='bg-transparent border border-solid 
                                    border-white rounded-lg w-full px-5 py-2 m-0 
                                    flex justify-center items-center quicksand text-xl
                                    transition-all
                                    hover:bg-gray-800'
                                    to='/adac/admin/visualizar/lideres' 
                                    nome_link='Visualizar' 
                                    />
                                    <Links
                                    className='bg-transparent border border-solid 
                                    border-white rounded-lg w-full px-5 py-2 m-0 
                                    flex justify-center items-center quicksand text-xl
                                    transition-all
                                    hover:bg-yellow-700'
                                    to='/adac/admin/editar/lideres'
                                    nome_link='Editar' 
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Logout Button */}
                        <div className='w-full my-10 flex justify-center'>
                            <button
                            className='w-36 border border-input p-2 text-center
                            text-white rounded-md transition-all inter
                            hover:bg-slate-50 hover:text-black hover:font-semibold hover:scale-105'
                            type='button'
                            onClick={handleLogout}>
                                Sair
                            </button>
                        </div>
                    </section>
                </ContainerMain>
            </div>
        </>
    )
}