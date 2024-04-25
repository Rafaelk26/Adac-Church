// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainDetails } from '../../../components/Container/MainDetails';
import { HeaderDetails } from '../../../components/Header/Details/Cell';

// Image
import imgBackground  from '../../../assets/Perfil/IMG-20240120-WA0105 - Robson Soares floriano.jpg';
import imgRobson from '../../../assets/Perfil/IMG-20211121-WA0092_resized - Robson Soares floriano.jpg';

// Icon
import { BiLogoWhatsapp } from 'react-icons/bi';

// CSS
import './index.css'

export function DetalhesCelula(){

    const batizados = 8;
    const participantes = 16;

    return(
        <>
            {/* Imagem de fundo da célula */}
            <div className="relative z-20 inset-0">
                {/* Aplica o gradiente linear */}
                <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>
                
                <img 
                src={imgBackground}
                id='imagem_capa_celula' 
                className='w-full h-full object-cover opacity-80'/>
            </div>
            <ContainerHeader>
                <HeaderDetails />
                <div className='bg-transparent relative z-10 top-44 flex justify-center
                sm:top-40
                md:top-32 md:justify-start'>
                    {/* Image Card */}
                    <div className='w-60 outline outline-2 outline-white rounded-lg bg-transparent transition-all
                    hover:scale-105'>
                        <img 
                        className='w-full h-full rounded-lg'
                        src={imgBackground} 
                        alt="Casa da Célula" />
                    </div>
                </div>
            </ContainerHeader>
            {/* Content */}
            <ContainerMainDetails>
                <div className='flex flex-col w-full justify-center
                md:flex-row'>
                    <div className='mt-28 
                    md:w-1/2 md:mt-0'>
                        <div className='w-full flex justify-start flex-col gap-2 
                        sm:mt-8
                        md:mt-6'>
                            <h1 className='font-bold quicksand text-3xl text-center
                            sm:text-4xl sm:text-center
                            md:text-5xl md:text-start'>
                                {/* Title */}
                                Anjos do Rei
                            </h1>
                            <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto
                            sm:text-2xl
                            md:text-start md:mx-0 md:max-w-xl md:mt-10'>
                                {/* Description */}
                                Venha fazer parte da nossa família de homens cheios do Espírito Santo 
                                e serão muito bem recebidos!
                            </h3>
                        </div>
                        {/* Words Bible */}
                        <div className='w-full mt-10 flex flex-col justify-start mb-10
                        md:mt-12 md:mb-0'>
                            <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto
                            sm:text-2xl
                            md:text-start md:mx-0 md:max-w-2xl'>
                                {/* Word */}
                                “Ide por todo o mundo, pregai o evangelho a toda criatura”
                            </h3>
                            <h3 className='font-bold inter text-xl max-w-80 text-center mx-auto
                            sm:text-xl
                            md:text-start md:mx-0 md:max-w-2xl'>
                                {/* Word */}
                                Marcos 16:15
                            </h3>
                        </div>
                    </div>
                    <div className='w-full h-max flex justify-center
                    md:w-1/2 md:mt-6 md:justify-end'>
                        {/* CardDetails Cell */}
                        <div className='card-cell outline outline-1 outline-white rounded-xl px-6 pt-10 pb-6 mb-6'>
                            <h1 className='font-bold quicksand text-4xl'>Detalhes</h1>
                            <div className='w-full mt-8 flex flex-col gap-2'>
                                {/* Leader of cell */}
                                <label className='font-semibold quicksand text-lg'>Líder da Célula</label>
                                <div className='w-full rounded-xl outline outline-1 outline-white px-2 py-1.5
                                flex gap-6'>
                                    <div className='w-max border border-1 border-white rounded-full'>
                                        {/* Image Leader */}
                                        <img
                                        className='w-14 h-14 rounded-full' 
                                        src={imgRobson} 
                                        alt="Robson Soares" />
                                    </div>
                                    <div className='w-2/3'>
                                        {/* Name Leader */}
                                        <span className='font-bold inter text-xl'>Robson Soares</span>
                                        <div className='flex'>
                                            {/* Icon Whatsapp */}
                                            <BiLogoWhatsapp size={25} fill='#3dca49' />
                                            <span className='font-medium inter text-lg'>(12)00000-0000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex gap-3 mt-1'>
                                <div className='w-1/2'>
                                    {/* Participantes */}
                                    <label className='font-semibold quicksand text-lg'>Participantes</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5
                                    flex gap-6 justify-center'>
                                        <span className='inter text-sm text-center md:text-lg'>
                                        <span className='font-bold text-md md:text-lg'>{participantes}</span> {participantes > 1 ? 'Membros' : 'Membro'}
                                        </span>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    {/* Batizados */}
                                    <label className='font-semibold quicksand text-lg'>Batizados</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5
                                    flex gap-6 justify-center'>
                                        <span className='inter text-sm text-center md:text-lg'>
                                            <span className='font-bold text-md md:text-lg'>{batizados}</span> {batizados > 1 ? 'Membros' : 'Membro'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex flex-col mt-3'>
                                {/* Street */}
                                <label className='font-semibold quicksand text-lg'>Endereço</label>
                                <div className='w-full rounded-lg outline outline-1 outline-white px-3 py-2
                                flex gap-6'>
                                    <span className='inter font-medium text-xl'>
                                        Rua Pedro Galdino dos Santos, 76
                                    </span>
                                </div>
                            </div>

                            <div className='w-full flex flex-col mt-3'>
                                {/* Neighberhood */}
                                <label className='font-semibold quicksand text-lg'>Bairro</label>
                                <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5
                                flex gap-6'>
                                    <span className='inter font-medium text-xl'>
                                        Caputera
                                    </span>
                                </div>
                            </div>

                            <div className='w-full flex gap-8 mt-3'>
                                <div className='w-2/3'>
                                    {/* Day and Hour */}
                                    <label className='font-semibold quicksand text-lg'>Toda</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5
                                    flex gap-6 justify-center'>
                                        <span className='inter font-medium text-xl'>
                                            Terça-feira
                                        </span>
                                    </div>
                                </div>

                                {/* Day and Hour */}
                                <div className='w-1/3'>
                                    {/* Day and Hour */}
                                    <label className='font-semibold quicksand text-lg'>Hora</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5
                                    flex gap-6 justify-center'>
                                        <span className='inter font-medium text-xl'>
                                            20:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMainDetails>
        </>
    )
}