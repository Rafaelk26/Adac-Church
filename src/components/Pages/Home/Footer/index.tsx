// Import logo
import { Link } from 'react-router-dom';
import adacLogo from '../../../../assets/Logo/logo-adac.png';
// Import icons
import { BiLogoSpotify, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi'

// CSS
import './index.module.css'

export function Footer(){
    return(
        <>
            <footer className="w-full bg-transparent flex flex-wrap h-max bg-gradient-to-b from-black to-gray-600 mb-1">
                <div className="bg-transparent container mx-auto flex flex-col items-center 
                md:flex-row">
                    {/* Logo + subtitle */}
                    <div className='bg-transparent w-full items-center flex flex-col px-4 pt-2
                    md:items-start md:w-2/5'>
                        <img 
                        className='bg-transparent w-20 h-20'
                        src={adacLogo} 
                        alt="" />
                        <p className='bg-transparent inter font-medium text-white mt-1'>"Um lugar para você chamar de lar"</p>
                    </div>

                    {/* Nossas Redes */}
                    <div className='bg-transparent w-full flex flex-col justify-center
                    sm:flex-col sm:items-center
                    md:w-3/5 md:border-l-2 md:ps-5 md:items-center'>
                        <div className='bg-transparent w-full h-full flex flex-col
                        md:w-full md:items-start'>
                            <h3 className='bg-transparent text-2xl quicksand text-white flex justify-center
                            sm:w-full sm:justify-center
                            md:w-full md:justify-start'>Nossas Redes</h3>
                            {/* Logos */}
                            <div className='bg-transparent w-full justify-center flex gap-3
                            sm:justify-center 
                            md:justify-start 
                            lg:w-full'>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoFacebook size={39} fill='#0007db' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoInstagram size={39} fill='#e4980c' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoYoutube size={39} fill='#e20202' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoSpotify size={39} fill='#008e13' className='bg-transparent' />
                                </Link>
                            </div>
                        {/* Contatos */}
                        </div>
                        <div className='bg-transparent w-full flex flex-col justify-end h-full 
                        lg:pe-5'>
                            <h3 className='bg-transparent text-2xl quicksand text-white text-center mt-1
                            md:text-end'>Contatos</h3>
                            {/* Endereço */}
                            <div className='bg-transparent w-full flex justify-center mt-1
                            sm:justify-center
                            md:justify-end'>
                                <p className='bg-transparent text-white text-end inter'>R. Eng. João Fonseca, 70 - Centro Caraguatatuba - SP, 11660-200</p>
                            </div>
                            {/* Telefone */}
                            <div className='bg-transparent w-full flex mt-2 justify-center
                            md:justify-end'>
                                <p className='bg-transparent text-white text-end inter'>(12)98139-8573</p>
                            </div>
                            {/* Palavra do senhor */}
                            <div className='bg-transparent w-full flex flex-col justify-center mt-2
                            md:w-full md:justify-end'>
                                <p className='bg-transparent text-white text-end w-full inter md:w-full'>“Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.”</p>
                                <p className='bg-transparent text-white w-full text-center inter font-semibold md:text-end'>I Tessalonicenses 5:18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>       
        </>
    )
}
