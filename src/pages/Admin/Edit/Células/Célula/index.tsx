import { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

import { db, storage } from '../../../../../services/server';

import { ContainerHeader } from '../../../../../components/Container/Header';
import { ContainerMain } from '../../../../../components/Container/Main';
import { HeaderPages } from '../../../../../components/Header/Pages';
import { 
    Input, 
    SelectEdit, 
    TextareaEdit, 
    InputFileEdit 
} from '../../../../../components/Input/Admin/Cell/';


const schema = z.object({
    name_cell: z.string().nonempty('Insira um nome'),
    street: z.string().nonempty('Insira uma localização'),
    neighborhood: z.string().nonempty('Insira um bairro'),
    number: z.string().nonempty('Insira um número'),
    day: z.string().nonempty('Insira um dia').min(2),
    hour: z.string().nonempty('Insira uma hora'),
    word_bible_cell: z.string().nonempty('Insira uma palavra bíblica'),
    book_bible_cell: z.string().nonempty('Insira o livro, capítulo e versículo'),
    description: z.string().nonempty('Insira uma descrição').min(2),
});

type FormData = z.infer<typeof schema>;

interface CellEditProps {
    name_cell: string;
    neighborhood: string;
    street: string;
    number: string;
    day: string;
    hour: string;
    description: string;
    word_bible_cell: string;
    book_bible_cell: string;
    photo_cell: string;
}

export function EditCelulasId() {
    const { id } = useParams();
    const [editData, setEditData] = useState<CellEditProps | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name_cell: '',
        street: '',
        neighborhood: '',
        number: '',
        day: '',
        hour: '',
        word_bible_cell: '',
        book_bible_cell: '',
        description: '',
    });

    useEffect(() => {
        const fetchEditData = async () => {
            try {
                if (id) {
                    const cellRef = doc(db, 'Celulas', id);
                    const docSnap = await getDoc(cellRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data() as CellEditProps;
                        setEditData(data);
                        setFormData({
                            name_cell: data.name_cell,
                            street: data.street,
                            neighborhood: data.neighborhood,
                            number: data.number,
                            day: data.day,
                            hour: data.hour,
                            word_bible_cell: data.word_bible_cell,
                            book_bible_cell: data.book_bible_cell,
                            description: data.description,
                        });
                        if (data.photo_cell) {
                            setImageCell(data.photo_cell);
                        }
                    } else {
                        console.error('Documento não encontrado!');
                    }
                }
            } catch (error) {
                console.error('Erro ao obter os dados');
            }
        };
        fetchEditData();
    }, [id]);


    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const [imageCell, setImageCell] = useState<string | null>(null);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageCell(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const deletePhotoFromStorage = async (photoUrl: string) => {
        try {
            const photoRef = ref(storage, photoUrl);
            await deleteObject(photoRef);
            console.log('Foto excluída do armazenamento com sucesso');
            clearImage();
        } catch (error) {
            console.error('Erro ao excluir foto do armazenamento:', error);
        }
    };
    

    const clearImage = () => {
        setImageCell(null);
    };

    const onSubmit = async (data: FormData) => {
        if (!imageCell) {
            alert('Insira uma imagem para a célula');
            return;
        }
    
        const objCell = {
            ...data,
            photo_cell: imageCell,
        };
    
        try {
            await db.collection('Celulas').doc(id).update(objCell);
            console.log('Dados da célula atualizados com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar dados da célula:', error);
        }
    
        reset();
    };
    

    return (
        <>
            <ContainerHeader>
                <HeaderPages path='/adac/admin/' name='Editar Célula' />
            </ContainerHeader>
            <ContainerMain>
                <div className='mt-40 md:mt-28'>
                    <div className='w-full mx-auto max-w-56 md:mx-0 md:max-w-max'>
                        <p className='w-full max-w-max text-center inter text-gray-300 text-xl md:w-80 md:mt-2 md:font-medium md:text-start'>
                            Edite os dados das células cadastradas em nossa plataforma.
                        </p>
                    </div>
                    <form
                        className='w-full flex flex-col max-w-96 mx-auto h-max mt-5 md:mt-8 md:max-w-4xl'
                        method='#'
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(onSubmit)();
                        }}
                    >
                        <section className='w-full'>
                            <div className='w-full'>
                                <h3 className='font-semibold text-3xl quicksand'>Dados da Célula</h3>
                            </div>
                            <div className='w-full flex flex-col md:flex-row md:mt-1'>
                                <div className='w-full md:w-8/5'>
                                    <Input
                                        type='text'
                                        name='name_cell'
                                        name_label='Nome'
                                        register={register}
                                        error={errors.name_cell?.message}
                                        value={formData.name_cell}
                                        onChange={handleInputChange}
                                    />
                                    <div className='w-full flex flex-col md:flex-row md:mt-2'>
                                        <div className='w-full md:w-1/2'>
                                            <Input
                                                type='text'
                                                name='street'
                                                name_label='Rua'
                                                register={register}
                                                error={errors.street?.message}
                                                value={formData.street}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            <SelectEdit
                                                name='neighborhood'
                                                name_label='Bairro'
                                                register={register}
                                                error={errors.neighborhood?.message}
                                                value={formData.neighborhood}
                                                onChange={handleInputChange}
                                            >
                                                <option value=""></option>
                                                <option value="Barranco Alto">Barranco Alto</option>
                                                <option value="Benfica">Benfica</option>
                                                <option value="Cantagalo">Cantagalo</option>
                                                <option value="Capricórnio I">Capricórnio I</option>
                                                <option value="Capricórnio II">Capricórnio II</option>
                                                <option value="Capricórnio III">Capricórnio III</option>
                                                <option value="Caputera">Caputera</option>
                                                <option value="Centro">Centro</option>
                                                <option value="Cidade Jardim">Cidade Jardim</option>
                                                <option value="Estrela D' Alva">Estrela D' Alva</option>
                                                <option value="Getuba">Getuba</option>
                                                <option value="Golfinho">Golfinho</option>
                                                <option value="Indaiá">Indaiá</option>
                                                <option value="Ipiranga">Ipiranga</option>
                                                <option value="Jaraguá">Jaraguá</option>
                                                <option value="Jaraguazinho">Jaraguazinho</option>
                                                <option value="Jardim Aruan">Jardim Aruan</option>
                                                <option value="Jardim Britânia">Jardim Britânia</option>
                                                <option value="Jardim Califórnia">Jardim Califórnia</option>
                                                <option value="Jardim Casa Branca">Jardim Casa Branca</option>
                                                <option value="Jardim Flecheiras">Jardim Flecheiras</option>
                                                <option value="Jardim Gaivotas">Jardim Gaivotas</option>
                                                <option value="Jardim Jaqueira">Jardim Jaqueira</option>
                                                <option value="Jardim Mariella">Jardim Mariella</option>
                                                <option value="Jardim Olaria">Jardim Olaria</option>
                                                <option value="Jardim Primavera">Jardim Primavera</option>
                                                <option value="Jardim Rio Claro">Jardim Rio Claro</option>
                                                <option value="Jardim Tarumãs">Jardim Tarumãs</option>
                                                <option value="Jardim Terralão">Jardim Terralão</option>
                                                <option value="Martim de Sá">Martim de Sá</option>
                                                <option value="Massaguaçu">Massaguaçu</option>
                                                <option value="Morro do Algodão">Morro do Algodão</option>
                                                <option value="Pegorelli">Pegorelli</option>
                                                <option value="Perequê Mirim">Perequê Mirim</option>
                                                <option value="Poiares">Poiares</option>
                                                <option value="Pontal Santa Marina">Pontal Santa Marina</option>
                                                <option value="Porto Novo">Porto Novo</option>
                                                <option value="Praia da Cocanha">Praia da Cocanha</option>
                                                <option value="Praia da Mococa">Praia da Mococa</option>
                                                <option value="Praia das Palmeiras">Praia das Palmeiras</option>
                                                <option value="Prainha">Prainha</option>
                                                <option value="Rio do Ouro">Rio do Ouro</option>
                                                <option value="Sumaré">Sumaré</option>
                                                <option value="Tabatinga">Tabatinga</option>
                                                <option value="Tinga">Tinga</option>
                                                <option value="Travessão">Travessão</option>
                                                <option value="Vila Ponte Seca">Vila Ponte Seca</option>
                                            </SelectEdit>
                                        </div>
                                    </div>
                                    <div className='w-full flex flex-col md:flex-row md:mt-2'>
                                    <div className='w-full md:w-1/3'>
                                            {/* Number */}
                                            <Input
                                            type='text'
                                            name='number'
                                            name_label='N°'
                                            register={register}
                                            error={errors.number?.message}
                                            value={formData.number}
                                            onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            <SelectEdit
                                                name='day'
                                                name_label='Dia'
                                                register={register}
                                                error={errors.day?.message}
                                                value={formData.day}
                                                onChange={handleInputChange}
                                            >
                                                <option value=""></option>
                                                <option value="Domingo">Domingo</option>
                                                <option value="Segunda-Feira">Segunda-Feira</option>
                                                <option value="Terça-Feira">Terça-Feira</option>
                                                <option value="Quarta-Feira">Quarta-Feira</option>
                                                <option value="Quinta-Feira">Quinta-Feira</option>
                                                <option value="Sexta-Feira">Sexta-Feira</option>
                                                <option value="Sábado">Sábado</option>
                                            </SelectEdit>
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            <Input
                                                type='text'
                                                name='hour'
                                                name_label='Hora'
                                                register={register}
                                                error={errors.hour?.message}
                                                value={formData.hour}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type='text'
                                        name='word_bible_cell'
                                        name_label='Palavra Bíblica'
                                        register={register}
                                        error={errors.word_bible_cell?.message}
                                        value={formData.word_bible_cell}
                                        onChange={handleInputChange}
                                    />
                                    <Input
                                        type='text'
                                        name='book_bible_cell'
                                        name_label='Livro, capítulo e versículo'
                                        register={register}
                                        error={errors.book_bible_cell?.message}
                                        value={formData.book_bible_cell}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='w-full flex flex-col md:w-2/5'>
                                    <TextareaEdit
                                        name='description'
                                        name_label='Descrição'
                                        register={register}
                                        error={errors.description?.message}
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    />
                                    <label className="px-1 mt-1 bg-transparent w-max text-md font-normal quicksand leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Foto
                                    </label>
                                    {!imageCell && (
                                        <div className='px-1 flex justify-center items-center m-0'>
                                            <div className='absolute'>
                                                <BiPhotoAlbum size={30} />
                                            </div>
                                            <div className='w-full border border-input rounded-md'>
                                                <InputFileEdit
                                                    type='file'
                                                    name='photo_cell'
                                                    name_label='Foto'
                                                    register={register}
                                                    accept='image/*'
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {imageCell && (
                                        <>
                                            <div className='px-1 flex justify-center items-center'>
                                                <div className="absolute z-10 bg-transparent cursor-pointer">
                                                    <BiTrash
                                                    onClick={()=> deletePhotoFromStorage(imageCell)}
                                                    className='bg-transparent'
                                                    size={30}
                                                    />
                                                </div>
                                                <div className='w-full border border-input rounded-md'>
                                                    <img
                                                        className='opacity-45 flex h-36 w-full rounded-md border border-input 
                                                        bg-transparent text-md ring-offset-background transition-all cursor-pointer
                                                        file:border-0 
                                                        file:bg-transparent 
                                                        file:text-sm 
                                                        file:font-medium 
                                                        placeholder:text-muted-foreground 
                                                        focus-visible:outline-none 
                                                        focus-visible:ring-2 
                                                        focus-visible:ring-ring 
                                                        focus-visible:ring-offset-2 
                                                        disabled:cursor-not-allowed'
                                                        src={imageCell}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>
                        <button
                            type="submit"
                            className="w-56 my-10 mx-auto p-2 border border-solid border-white rounded-lg transition-all font-medium
                            hover:bg-white hover:text-black hover:font-medium
                            md:my-10"
                        >
                            Editar
                        </button>
                    </form>
                </div>
            </ContainerMain>
        </>
    );
}