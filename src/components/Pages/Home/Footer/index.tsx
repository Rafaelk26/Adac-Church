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
                <div className="bg-transparent container mx-auto flex">
                    {/* Logo + subtitle */}
                    <div className='bg-transparent w-full md:w-2/5 flex flex-col px-4 pt-2'>
                        <img 
                        className='bg-transparent w-20 h-20'
                        src={adacLogo} 
                        alt="" />
                        <p className='bg-transparent inter font-medium text-white mt-1'>"Um lugar para você chamar de lar"</p>
                    </div>

                    {/* Nossas Redes */}
                    <div className='bg-transparent w-full flex justify-between ps-5
                    sm:flex-col sm:items-center
                    md:w-3/5 md:border-l-2'>
                        <div className='bg-transparent w-full md:w-full h-full flex flex-col items-center'>
                            <h3 className='bg-transparent text-2xl quicksand text-white
                            sm:w-full
                            md:w-full'>Nossas Redes</h3>
                            {/* Logos */}
                            <div className='bg-transparent w-full sm:justify-start md:justify-start lg:w-w-full justify-start mt-5 flex gap-3'>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoFacebook size={39} color='#0007db' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoInstagram size={39} color='#e4980c' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoYoutube size={39} color='#e20202' className='bg-transparent' />
                                </Link>
                                <Link to={"/"} className='bg-transparent transition-all hover:scale-110'>
                                    <BiLogoSpotify size={39} color='#008e13' className='bg-transparent' />
                                </Link>
                            </div>
                        {/* Contatos */}
                        </div>
                        <div className='bg-transparent w-full flex flex-col justify-end h-full lg:pe-5'>
                            <h3 className='bg-transparent text-2xl quicksand text-white text-end mt-1'>Contatos</h3>
                            {/* Endereço */}
                            <div className='bg-transparent w-full flex justify-end mt-1'>
                                <p className='bg-transparent text-white text-end w-1/2 inter'>R. Eng. João Fonseca, 70 - Centro Caraguatatuba - SP, 11660-200</p>
                            </div>
                            {/* Telefone */}
                            <div className='bg-transparent w-full flex justify-end mt-2'>
                                <p className='bg-transparent text-white text-end w-1/2 inter'>(12)98139-8573</p>
                            </div>
                            {/* Palavra do senhor */}
                            <div className='bg-transparent w-full flex flex-col justify-end mt-2'>
                                <p className='bg-transparent text-white text-end w-full inter'>“Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.”</p>
                                <p className='bg-transparent text-white text-end w-full inter font-semibold'>I Tessalonicenses 5:18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>       
        </>
    )
}
