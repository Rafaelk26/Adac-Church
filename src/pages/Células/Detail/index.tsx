import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection
import { db } from '../../../services/server';

// Components
import { ContainerHeader } from '../../../components/Container/Header';
import { ContainerMainDetails } from '../../../components/Container/MainDetails';
import { HeaderDetails } from '../../../components/Header/Details/Cell';

// Icon
import { BiLogoWhatsapp } from 'react-icons/bi';

// CSS
import './index.css'

interface CellData {
    name_cell: string;
    street: string;
    number: string;
    neighborhood: string;
    age_group: string;
    day: string;
    hour: string;
    description: string;
    phone_leader: string;
    name_leader: string;
    word_bible_cell: string;
    book_bible_cell: string;
    photo_cell: string;
    photo_leader: string;
}

export function DetalhesCelula() {
    const [data, setData] = useState<CellData | null>(null);
    const [address, setAddress] = useState<string | undefined>('');
    const [whatsapp, setWhatsapp] = useState<string | undefined>('');

    const { id } = useParams();

    useEffect(() => {
        const fetchCellData = async () => {
            try {
                if (id) {
                    // Referência ao documento com o ID específico
                    const cellRef = doc(db, 'Celulas', id);
                    // Obtenção dos dados do documento
                    const docSnap = await getDoc(cellRef);
                    // Verifica se o documento existe
                    if (docSnap.exists()) {
                        // Dados encontrados, define o estado
                        setData(docSnap.data() as CellData);
                    } else {
                        // Documento não encontrado
                        toast.error('Documento não encontrado!');
                    }
                }
            } catch (error) {
                // Tratamento de erros
                toast.error('Erro ao obter os dados');
            }
        };

        fetchCellData();
    }, [id]);

    useEffect(() => {
        if (data) {
            setAddress(generateAddress(data.street, data.neighborhood));
            generateMsgWhatsapp(data.phone_leader, data.name_leader, data.name_cell);
        }
    }, [data]);

    const generateAddress = useCallback((street: string | undefined, neighborhood: string | undefined) => {
        if (street && neighborhood) {
            const address = `${street}, ${neighborhood}`;
            const encodedAddress = encodeURIComponent(address);
            return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        }
    }, []);

    const generateMsgWhatsapp = useCallback((phone: string | undefined, name: string | undefined, cell: string | undefined) => {
        if (phone && name && cell) {
            const encodedMessage = encodeURIComponent(`Olá ${name}, gostaria de saber mais sobre a célula ${cell}`);
            return setWhatsapp(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`);
        }
    }, []);

    return (
        <>
            {/* Imagem de fundo da célula */}
            <div className="relative z-20 inset-0">
                {/* Aplica o gradiente linear */}
                <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <img
                    src={data?.photo_cell}
                    id='imagem_capa_celula'
                    className='w-full h-full object-cover opacity-80'
                    alt='Capa da célula'
                />
            </div>
            <ContainerHeader>
                <HeaderDetails />
                <div className='bg-transparent relative z-10 top-44 flex justify-center sm:top-40 md:top-32 md:justify-start'>
                    {/* Image Card */}
                    <Link to={address || ''} target='_blank'>
                        <div className='w-60 h-36 max-h-36 outline outline-2 outline-white rounded-lg bg-transparent transition-all hover:scale-105'>
                            <img
                                className='w-full h-full rounded-lg'
                                src={data?.photo_cell}
                                alt="Casa da Célula"
                            />
                        </div>
                    </Link>
                </div>
            </ContainerHeader>
            {/* Content */}
            <ContainerMainDetails>
                <div className='flex flex-col w-full justify-center mt-14 md:flex-row'>
                    <div className='mt-28 md:w-1/2 md:mt-0'>
                        <div className='w-full flex justify-start flex-col gap-2 sm:mt-8 md:mt-6'>
                            <h1 className='font-bold quicksand text-3xl text-center sm:text-4xl sm:text-center md:text-5xl md:text-start'>
                                {data?.name_cell}
                            </h1>
                            <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto sm:text-2xl md:text-start md:mx-0 md:max-w-xl md:mt-10'>
                                {data?.description}
                            </h3>
                        </div>
                        <div className='w-full mt-10 flex flex-col justify-start mb-10 md:mt-12 md:mb-0'>
                            <h3 className='font-normal inter text-xl max-w-80 text-center mx-auto sm:text-2xl md:text-start md:mx-0 md:max-w-2xl'>
                                “{data?.word_bible_cell}”
                            </h3>
                            <h3 className='font-bold inter text-xl max-w-80 text-center mx-auto sm:text-xl md:text-start md:mx-0 md:max-w-2xl'>
                                {data?.book_bible_cell}
                            </h3>
                        </div>
                    </div>
                    <div className='w-full h-max flex justify-center md:w-1/2 md:mt-6 md:justify-end'>
                        <div className='card-cell outline outline-1 outline-white rounded-xl px-6 pt-10 pb-6 mb-6'>
                            <h1 className='font-bold quicksand text-4xl'>Detalhes</h1>
                            <Link className='hover:scale-105' target='_blank' to={whatsapp || ''}>
                                <div className='w-full mt-8 flex flex-col gap-2'>
                                    <label className='font-semibold quicksand text-lg'>Líder da Célula</label>
                                    <div className='w-full rounded-xl outline outline-1 outline-white px-2 py-1.5 flex gap-6'>
                                        <div className='w-max border border-1 border-white rounded-full'>
                                            <img
                                                className='w-14 h-14 rounded-full object-cover'
                                                src={data?.photo_leader}
                                                alt="Líder da Célula"
                                            />
                                        </div>
                                        <div className='w-2/3'>
                                            <span className='font-bold inter text-xl'>{data?.name_leader}</span>
                                            <div className='flex'>
                                                <BiLogoWhatsapp size={25} fill='#3dca49' />
                                                <span className='font-medium inter text-lg'>{data?.phone_leader}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='w-full flex flex-col mt-3'>
                                <label className='font-semibold quicksand text-lg'>Endereço</label>
                                <div className='w-full rounded-lg outline outline-1 outline-white px-3 py-2 flex gap-6'>
                                    <span className='inter font-medium text-xl'>
                                        {data?.street}, {data?.number}
                                    </span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col mt-3'>
                                <label className='font-semibold quicksand text-lg'>Faixa Etária</label>
                                <div className='w-full rounded-lg outline outline-1 outline-white px-3 py-2 flex gap-6'>
                                    <span className='inter font-medium text-xl'>
                                        {data?.age_group}
                                    </span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col mt-3'>
                                <label className='font-semibold quicksand text-lg'>Bairro</label>
                                <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5 flex gap-6'>
                                    <span className='inter font-medium text-xl'>
                                        {data?.neighborhood}
                                    </span>
                                </div>
                            </div>
                            <div className='w-full flex gap-8 mt-3'>
                                <div className='w-2/3'>
                                    <label className='font-semibold quicksand text-lg'>Toda</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5 flex gap-6 justify-center'>
                                        <span className='inter font-medium text-xl'>
                                            {data?.day}
                                        </span>
                                    </div>
                                </div>
                                <div className='w-1/3'>
                                    <label className='font-semibold quicksand text-lg'>Hora</label>
                                    <div className='w-full rounded-lg outline outline-1 outline-white px-2 py-1.5 flex gap-6 justify-center'>
                                        <span className='inter font-medium text-xl'>
                                            {data?.hour}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerMainDetails>
        </>
    );
}
