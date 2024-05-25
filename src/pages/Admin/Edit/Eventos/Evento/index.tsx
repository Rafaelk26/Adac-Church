import { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom'; 
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from 'firebase/storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with Firebase
import { db, storage } from '../../../../../services/server';

// Components
import { ContainerMain } from '../../../../../components/Container/Main';
import { Input } from '../../../../../components/Input/Admin';
import { InputEvent, TextareaEvent } from '../../../../../components/Input/Admin/Event';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

const schema = z.object({
    title: z.string().nonempty('Insira um nome'),
    location: z.string().nonempty('Insira uma localização'),
    date: z.string().nonempty('Insira uma data'),
    time: z.string().nonempty('Insira um horário'),
    description: z.string().nonempty('Insira uma descrição').min(2),
    word_bible: z.string().nonempty('Insira uma palavra bíblica'),
    book_bible: z.string().nonempty('Insira o livro, cap e ver.'),
});

type FormData = z.infer<typeof schema>;

interface eventEditProps {
    title: string;
    location: string;
    date: string;
    time: string;
    description: string;
    photo: string;
    word_bible: string;
    book_bible: string;
}

export function EditarEventosId() {
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const [image, setImage] = useState<File | null>(null);
    const [event, setEvent] = useState<eventEditProps>({} as eventEditProps);
    const [isUploading, setIsUploading] = useState(false);

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
        } else {
            console.log('Erro ao cadastrar a imagem!');
        }
    };

    useEffect(() => {
        const fetchDataEvent = async () => {
            const eventRef = doc(db, "Eventos", id as string);
            const eventSnap = await getDoc(eventRef);
            const eventData = eventSnap.data() as eventEditProps;
            try {
                setEvent(eventData);
                reset(eventData);
            } catch (err) {
                toast.error('Erro ao resgatar os dados!');
                console.log('Erro ao resgatar os dados!', err);
            }
        };

        fetchDataEvent();
    }, [id, reset]);

    const handleDelete = () => {
        if (image) {
            setImage(null);
        }
    };

    const handleDeleteFromStorage = async (url: string) => {
        if (url) {
            const storageRef = ref(storage, url);
            try {
                await deleteObject(storageRef);
                setEvent((prev) => ({ ...prev, photo: '' })); // Atualizar o estado para remover a foto
                toast.success('Imagem excluída com sucesso!');
            } catch (error) {
                toast.error('Não foi possível excluir a foto!');
                console.log('Não foi possível excluir a foto!', error);
            }
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsUploading(true);
        let photoURL = event.photo;

        if (image) {
            const imageRef = ref(storage, `eventos/${id}`);
            await uploadBytes(imageRef, image);
            photoURL = await getDownloadURL(imageRef);
        }

        const updatedEvent = {
            ...data,
            photo: photoURL,
        };

        try {
            const eventRef = doc(db, "Eventos", id as string);
            await updateDoc(eventRef, updatedEvent);
            toast.success('Evento atualizado com sucesso!');
        } catch (error) {
            toast.error('Erro ao atualizar o evento!');
            console.log('Erro ao atualizar o evento!', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <>  
            <ContainerMain>
                <div className='w-full h-max mt-2'>
                    <form 
                    method='#'
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(onSubmit)(); 
                    }}>
                        <div className='w-full h-full flex flex-col justify-center gap-5 md:justify-between
                        md:flex-row md:gap-0'>
                            {/* Col 1 */}
                            <div className='w-full flex flex-col items-center md:max-w-96'>
                                {/* Title */}
                                <h1 className='w-full text-center font-bold quicksand text-4xl
                                md:text-start'>Editar Evento</h1>
                                {/* Description */}
                                <div className='w-72 text-center mb-5 mt-3 
                                md:w-full md:mt-5 md:text-start'>
                                    <p className='font-medium text-2xl inter text-gray-300 
                                    md:max-w-80'>
                                        Edite dados dos eventos 
                                        cadastrados em nossa plataforma.
                                    </p>
                                </div>
                                {/* Inputs */}
                                <div className='flex flex-col max-w-sm
                                md:gap-2 md:w-full md:mt-16'>
                                    {/* Title */}
                                    <Input
                                    type='text'
                                    name_label='Título do Evento'
                                    name='title'
                                    error={errors.title?.message}
                                    register={register}
                                    />
                                    {/* Location */}
                                    <Input
                                    type='text'
                                    name_label='Localização do Evento'
                                    name='location'
                                    error={errors.location?.message}
                                    register={register}
                                    />
                                    <div className='w-full flex gap-4'>
                                        <div className='w-1/2'>
                                            {/* Event Date */}
                                            <Input
                                            className=''
                                            type='date'
                                            name_label='Data'
                                            name='date'
                                            error={errors.date?.message}
                                            register={register}
                                            />
                                        </div>
                                        {/* Event Hour */}
                                        <div className='w-1/2'>
                                            <Input
                                            type='time'
                                            name_label='Hora'
                                            name='time'
                                            error={errors.time?.message}
                                            register={register}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Col 2 */}
                            <div className='w-full flex flex-col gap-2 
                            md:max-w-80 md:items-end'>
                                <div className='flex flex-col justify-end gap-5 md:gap-3 
                                w-full h-full'>
                                    {/* Photo */}
                                    <div className='w-full h-48 flex justify-center items-center flex-col relative'>
                                        {(!event.photo && !image) && (
                                            <>
                                                <BiPhotoAlbum className='absolute z-0' size={30} />
                                                <InputEvent
                                                name='photo'
                                                register={register}
                                                type='file'
                                                accept='image/*'
                                                onChange={(e) => handleImage(e)}
                                                />
                                            </>
                                        )}

                                        {(event.photo || image) && (
                                            <>
                                                <BiTrash 
                                                onClick={() => handleDeleteFromStorage(event.photo)}
                                                className='w-full absolute z-10 cursor-pointer bg-transparent max-w-72
                                                md:max-w-80' 
                                                size={30} />
                                                <img
                                                className='w-full max-w-72 h-full rounded-lg 
                                                outline outline-2 outline-white opacity-40 
                                                md:max-w-full md:w-full'
                                                src={image ? URL.createObjectURL(image) : event.photo}
                                                alt="Foto do evento"
                                                />
                                            </>
                                        )}
                                    </div>
                                    <div className='w-full max-w-80 h-40 flex flex-col items-center mx-auto 
                                    md:items-start'>
                                        {/* Description */}
                                        <div className='mb-2 w-full'>
                                            <label 
                                            className='
                                            bg-transparent w-max text-md font-normal quicksand leading-none ms-4
                                            peer-disabled:cursor-not-allowed
                                            peer-disabled:opacity-70
                                            md:ms-0'>
                                                Descrição do Evento
                                            </label>
                                        </div>
                                        <TextareaEvent
                                        name='description'
                                        register={register}
                                        />
                                    </div>
                                    
                                    <div className='w-full max-w-72 flex mx-auto gap-4
                                    md:max-w-max'>
                                        <div className='w-1/2'>
                                            {/* Word Bible */}
                                            <Input
                                            className=''
                                            type='text'
                                            name_label='Palavra Bíblica'
                                            name='word_bible'
                                            error={errors.word_bible?.message}
                                            register={register}
                                            />
                                        </div>
                                        {/* Book Bible */}
                                        <div className='w-1/2'>
                                            <Input
                                            type='text'
                                            name_label='Livro, cap, vers.'
                                            name='book_bible'
                                            error={errors.book_bible?.message}
                                            register={register}
                                            />
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        {/* Button submit */}
                        <div className='flex justify-center mt-10 w-full mb-5'>
                            <div className='w-full max-w-56 border border-white rounded-lg'>
                                <button
                                type="submit"
                                className="w-full p-2 border-2 bg-black rounded-lg transition-all font-medium
                                hover:bg-white hover:text-black hover:font-medium md:border-black"
                                disabled={isUploading}>         
                                    {isUploading ? 'Atualizando...' : 'Editar'}
                                </button>
                            </div>
                        </div>  
                    </form>
                </div>  
            </ContainerMain>
        </>
    );
}