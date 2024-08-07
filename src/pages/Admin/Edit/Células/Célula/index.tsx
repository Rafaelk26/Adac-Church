// Import for development
import { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

// Connection with Firebase
import { db } from '../../../../../services/server';

// Components
import { ContainerHeader } from '../../../../../components/Container/Header';
import { ContainerMain } from '../../../../../components/Container/Main';
import { HeaderPages } from '../../../../../components/Header/Pages';
import { Input, Textarea, InputFile, Select } from '../../../../../components/Input/Admin/Cell/';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

// Image loading 
import logoLoading from '../../../../../assets/Logo/logo-adac.png';

const schema = z.object({
    // Cell
    name_cell: z.string().nonempty('insira um nome'),
    street: z.string().nonempty('insira uma localização'),
    neighborhood: z.string().nonempty('insira uma data'),
    age_group: z.string().nonempty('Insira uma faixa etária!'),
    number: z.string().nonempty('insira um horário'),
    day: z.string().nonempty('insira um dia').min(2),
    hour: z.string().nonempty(''),
    word_bible_cell: z.string().nonempty('insira uma palavra bíblica.'),
    book_bible_cell: z.string().nonempty('insira o livro, cap e ver.'),
    description: z.string().nonempty('insira uma descrição').min(2),
});

type FormData = z.infer<typeof schema>;

type DataLeader = FormData & {
    photo_cell: string;
}

export function EditCelulasId() {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [imageCell, setImageCell] = useState<string | null>(null);
    const [newImageFile, setNewImageFile] = useState<File | null>(null);

    const [isUploading, setIsUploading] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        setIsUploading(true);
        const fetchCellData = async () => {
            const docRef = doc(db, "Celulas", id as string);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data() as DataLeader;
                setFormData(data);
                setImageCell(data?.photo_cell || null);
                reset(data);
                setIsUploading(false);
            } else {
                toast.error("Não existe documento de imagem!");
            }
        };

        fetchCellData();
    }, [id, reset]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNewImageFile(file);
        }
    };

    const deletePhotoFromStorage = async (imageUrl: string) => {
        const storage = getStorage();
        const imageRef = ref(storage, imageUrl);
        try {
            await deleteObject(imageRef);
            setImageCell(null);
        } catch (error) {
            toast.error("Erro ao deletar a imagem");
        }
    };

    const uploadImage = async (file: File): Promise<string> => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/cell/${file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    const onSubmit = async (data: FormData) => {
        setIsUploading(true);
        let photoCellUrl = imageCell;

        if (newImageFile) {
            if (imageCell) {
                await deletePhotoFromStorage(imageCell);
            }
            photoCellUrl = await uploadImage(newImageFile);
        }

        const updatedData = {
            ...data,
            photo_cell: photoCellUrl,
        };

        const docRef = doc(db, "Celulas", id as string);
        await updateDoc(docRef, updatedData);
        reset();
        setNewImageFile(null);
        toast.success('Célula atualizada com sucesso!');
        setIsUploading(false);
        nav('/adac/admin/editar/celulas');
    };

    return (
        <>
            <ContainerHeader>
                <HeaderPages path='/adac/admin/' name='Editar Célula' />
            </ContainerHeader>
            {/* Content */}
            <ContainerMain>
                <div className='mt-40 md:mt-28'>
                    {/* Subtitle */}
                    <div className='w-full mx-auto max-w-56 md:mx-0 md:max-w-max'>
                        <p className='w-full max-w-max text-center inter text-gray-300 text-xl md:w-80 md:mt-2 md:font-medium md:text-start'>
                            Edite dados das célula cadastradas em nossa plataforma.
                        </p>
                    </div>

                    {/* Form */}
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
                            {/* Cell */}
                            <div className='w-full flex flex-col md:flex-row md:mt-1'>
                                {/* Cell data - group 1 */}
                                <div className='w-full md:w-8/5'>
                                    {/* Name Cell */}
                                    <Input
                                        type='text'
                                        name='name_cell'
                                        name_label='Nome'
                                        register={register}
                                        error={errors.name_cell?.message}
                                        value={formData.name_cell || ''}
                                        onChange={(e) => setFormData({ ...formData, name_cell: e.target.value })}
                                    />
                                    <div className='w-full flex flex-col md:flex-row md:mt-2'>
                                        <div className='w-full md:w-1/3'>
                                            {/* Street */}
                                            <Input
                                                type='text'
                                                name='street'
                                                name_label='Rua'
                                                register={register}
                                                error={errors.street?.message}
                                                value={formData.street || ''}
                                                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Neighborhood */}
                                            <Select
                                            type='text'
                                            name='neighborhood'
                                            name_label='Bairro'
                                            register={register}
                                            error={errors.neighborhood?.message}
                                            value={formData.neighborhood || ''}
                                            onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                                            >
                                                <option value="All">Filtre por bairro</option>
                                                <option value="All" selected>Todos os Bairros</option>
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
                                                <option value="Jardim Rio Santos">Jardim Rio Santos</option>
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
                                            </Select>
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Age_group */}
                                            <Select
                                                name='age_group'
                                                name_label='Faixa Etária'
                                                register={register}
                                                error={errors.age_group?.message}>
                                                <option value=""></option>
                                                <option value="03 a 12 anos">03 a 12 anos</option>
                                                <option value="12 a 17 anos">12 a 17 anos</option>
                                                <option value="18 a 40 anos">18 a 40 anos</option>
                                                <option value="40 +">40 +</option>
                                            </Select>
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
                                                value={formData.number || ''}
                                                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Day */}
                                            <Select
                                                type='text'
                                                name='day'
                                                name_label='Dia'
                                                register={register}
                                                error={errors.day?.message}
                                                value={formData.day || ''}
                                                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                                            >
                                                <option value=""></option>
                                                <option value="Segunda-Feira">Segunda-Feira</option>
                                                <option value="Terça-Feira">Terça-Feira</option>
                                                <option value="Quinta-Feira">Quinta-Feira</option>
                                                <option value="Sexta-Feira">Sexta-Feira</option>
                                                <option value="Sábado">Sábado</option>
                                            </Select>
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Hour */}
                                            <Input
                                                type='text'
                                                name='hour'
                                                name_label='Hora'
                                                register={register}
                                                error={errors.hour?.message}
                                                value={formData.hour || ''}
                                                onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type='text'
                                        name='word_bible_cell'
                                        name_label='Palavra Bíblica'
                                        register={register}
                                        error={errors.word_bible_cell?.message}
                                        value={formData.word_bible_cell || ''}
                                        onChange={(e) => setFormData({ ...formData, word_bible_cell: e.target.value })}
                                    />
                                    <Input
                                        type='text'
                                        name='book_bible_cell'
                                        name_label='Livro, capítulo e versículo'
                                        register={register}
                                        error={errors.book_bible_cell?.message}
                                        value={formData.book_bible_cell || ''}
                                        onChange={(e) => setFormData({ ...formData, book_bible_cell: e.target.value })}
                                    />
                                </div>
                                {/* Cell data - group 2 */}
                                <div className='w-full flex flex-col md:w-2/5'>
                                    <Textarea
                                        name='description'
                                        name_label='Descrição'
                                        register={register}
                                        error={errors.description?.message}
                                        value={formData.description || ''}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    />

                                    <label
                                        className="px-1 mt-1 bg-transparent w-max text-md font-normal quicksand leading-none 
                                    peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70">Foto</label>

                                    {!newImageFile && imageCell && (
                                        <>
                                            <div className='px-1 flex justify-center items-center'>
                                                <div className="absolute z-10 bg-transparent cursor-pointer">
                                                    <BiTrash
                                                        onClick={() => deletePhotoFromStorage(imageCell)}
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
                                                        onClick={() => deletePhotoFromStorage(imageCell)}
                                                        alt=''
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {!newImageFile && !imageCell && (
                                        <div className='px-1 flex justify-center items-center m-0'>
                                            <div className='absolute'>
                                                <BiPhotoAlbum size={30} />
                                            </div>
                                            <div className='w-full border border-input rounded-md'>
                                                <InputFile
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

                                    {newImageFile && (
                                        <div className='px-1 flex justify-center items-center'>
                                            <div className="absolute z-10 bg-transparent cursor-pointer">
                                                <BiTrash
                                                    onClick={() => setNewImageFile(null)}
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
                                                    src={URL.createObjectURL(newImageFile)}
                                                    onClick={() => setNewImageFile(null)}
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                        {/* Button submit */}
                        <button
                            type="submit"
                            className="w-56 my-10 mx-auto p-2 border border-solid border-white rounded-lg transition-all font-medium
                        hover:bg-white hover:text-black hover:font-medium
                        md:my-10"
                        >
                            Editar
                        </button>
                    </form>
                    {/* Div loading */}
                    {isUploading && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <img 
                            className='w-24 fixed'
                            src={logoLoading} 
                            alt="Logo Adac" />
                            <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-white"></div>
                        </div>
                    )}
                </div>
            </ContainerMain>
        </>
    );
}
