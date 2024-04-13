import { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';

// Importando imagem do diretório
import logoAdac from '../../../assets/Logo/logo-adac.png';

// Componentes
import { Links } from '../../../components/Button/Links';

// Font Quicksand
import "@fontsource/quicksand/600.css";
// Font Inter
import "@fontsource/inter/300.css";

// Css
import './index.css'

export function HeaderHome(){
    

    const [exibirMenu, setExibirMenu] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<boolean>(false);

    useEffect(() => {
        // Função que checa se o tamanho da tela é menor que 450px
        function handleResize() {
            setExibirMenu(window.innerWidth <= 450);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Checa a largura da tela ao carregar o componente

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return(
        <>
        
            <header
            id="header_home" 
            className="
            relative w-full flex flex-row 
            sm:flex sm:justify-between
            md:flex md:justify-between
            lg:flex lg:justify-between
            ">
                {/* Logo ADAC */}
                <a 
                href="/" 
                className='relative bg-transparent z-20 w-20 m-0'
                >
                    <img src={logoAdac} alt="ADAC Church" 
                    className='
                    absolute bg-transparent mt-5 z-20 w-20
                    sm:w-20 
                    md:w-20
                    lg:w-24
                    xl:w-24' />
                </a>

                {/* Navegação para dispositivos mobile */}
                {exibirMenu && !activeMenu &&(
                    <button
                    type='button' 
                    onClick={() => setActiveMenu(true)} 
                    className='cursor-pointer flex justify-center h-10 absolute z-30 top-12 right-10'>
                        <BiMenu 
                        color='#fff' 
                        className='absolute top-auto right-auto bg-transparent'
                        size={32} />
                    </button>
                )}
                {activeMenu && (
                    <nav className='absolute w-screen p-6 m-0 h-screen overflow-hidden z-40 bg-black opacity-90'>
                        <ul className='bg-transparent flex flex-col gap-6 justify-center overflow-hidden'>
                            <button 
                            onClick={()=> setActiveMenu(false)}
                            className='font-extrabold flex text-red-300 justify-center text-2xl'
                            >X</button>

                            <div className='bg-transparent flex flex-col gap-6 justify-center overflow-hidden'>
                                <Links 
                                to='/adac/eventos' 
                                nome_link='Eventos' 
                                />
                                
                                <Links
                                className='w-full' 
                                to='/adac/celulas' 
                                nome_link='Células' 
                                />

                                <Links
                                to='/adac/igreja' 
                                nome_link='À Igreja' />
                                
                                <Links
                                className='bg-transparent border-2 border-solid 
                                border-white rounded-2xl w-full p-1 flex justify-center'
                                to='/adac/login' 
                                nome_link='Login' 
                                />
                            </div> 
                        </ul>
                        <footer 
                        className='mt-14 flex justify-center text-white overflow-hidden'>
                            <p className='w-52 flex justify-center text-center'>
                            ADAC Church 2024 <br />
                            Todos os Direitos Resevados
                            </p>
                        </footer>
                    </nav>
                )}

                {/* Nav para desktops e notebooks */}
                {!activeMenu && !exibirMenu && (
                    <nav className='z-20 bg-transparent absolute top-10 right-0'>
                        <ul className='bg-transparent flex flex-row gap-8 justify-center items-center'>
                            <Links
                            className='bg-transparent quicksand text-xl transition-all
                            hover:scale-110' 
                            to='/adac/eventos' 
                            nome_link='Eventos' 
                            />
                                    
                            <Links
                            className='bg-transparent quicksand text-xl transition-all
                            hover:scale-110' 
                            to='/adac/celulas' 
                            nome_link='Células' 
                            />

                            <Links
                            className='bg-transparent quicksand text-xl transition-all
                            hover:scale-110'
                            to='/adac/igreja' 
                            nome_link='À Igreja' />
                            
                            <a 
                            href="/adac/login"
                            className='bg-transparent'
                            >
                                <Links
                                className='bg-transparent border border-solid 
                                border-white rounded-lg w-28 px-5 py-2 m-0 
                                flex justify-center items-center quicksand text-xl
                                transition-all
                                hover:bg-blue-600 hover:w-32 hover:scale-110'
                                to='/adac/login' 
                                nome_link='Login' 
                                />
                            </a>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Conteúdo do Header */}
            <main 
            className="absolute z-10 mt-40 bg-transparent flex flex-col justify-center"
            >
                <h1 
                className="relative z-10 w-full h-min 
                bg-transparent text-white text-3xl quicksand
                text-center
                sm:w-1/2 sm:text-3xl sm:text-start
                md:w-2/3 md:text-4xl md:text-start
                lg:w-1/2 lg:text-5xl lg:text-start"
                >
                    ADAC Church<br />
                    Lugar onde existem pessoas imperfeitas! 
                    Menos uma...
                </h1>
                <p 
                className='bg-transparent mt-5 w-full text-white text-center text-xl inter
                sm:w-3/4 sm:text-start
                md:w-8/12 md:text-start
                lg:w-5/12 lg:text-start'
                >
                    Lorem ipsum dolor sit amet consectetur. 
                    Sem ac orci imperdiet cursus. Imperdiet ut cursus senectus arcu tellus elit neque faucibus tincidunt.
                    Sed pellentesque quisque vitae risus id sit. Laoreet nulla aliquet et nec ut accumsan.
                </p> 
            </main>
        </>
    )
}