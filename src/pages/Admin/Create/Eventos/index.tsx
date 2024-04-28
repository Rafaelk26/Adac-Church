// Import for development
import { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
// import { addDoc, collection } from 'firebase/firestore';

// Connection with Firebase
// import { db, storage } from '../../../../services/server';

// Components
import { ContainerMain } from '../../../../components/Container/Main';
import { Input } from '../../../../components/Input/Admin';
import { InputEvent, TextareaEvent } from '../../../../components/Input/Admin/Event';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';


const schema = z.object({
    title: z.string().nonempty('insira um nome'),
    location: z.string().nonempty('insira uma localização'),
    date: z.string().nonempty('insira uma data'),
    time: z.string().nonempty('insira um horário'),
    description: z.string().nonempty('insira uma descrição').min(2),
    word_bible: z.string().nonempty('insira uma palavra bíblica'),
    book_bible: z.string().nonempty('insira o livro, cap e ver.'),
})

type FormData = z.infer<typeof schema>

interface imageInfo {
    file: File | null;
    url: string | null;
}

export function CriarEventos(){

    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const [image, setImage] = useState<imageInfo>({ file: null, url: null });
    
    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file instanceof File) {
            const url = file.name
            setImage(
                { file, url: `images/event/${url}` }
            );
        } else {
            setImage(
                {file: null, url: null}
            )
            // Toast de erro
            console.log('Arquivo de imagem vazio!');
        }
    };

    const handleDelete = () => {
        if(image.file){
            // Toast de erro
            setImage(
                {
                    file: null,
                    url: null
                }
            )
        }
    }

    useEffect(() => {
        const handleUpload = async () => {
            if (image.file) {
                // Toast de sucesso
            }
        };

        handleUpload();
    }, [image.file]);

    function onSubmit(data: FormData) {

        if(!image.url){
            // Toast de erro
            alert('inserir imagem')
            return;
        }

        const objEvent = {
            title: data.title,
            location: data.location,
            date: data.date,
            time: data.time,
            photo: image.url,
            description: data.description,
            word_bible: data.word_bible,
            book_bible: data.book_bible,
        };
        reset();
        handleDelete();

        // Toast de sucesso
        console.log(objEvent);
    }


    return(
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
                                md:text-start'>Cadastrar Evento</h1>
                                {/* Description */}
                                <div className='w-72 text-center mb-5 mt-3 
                                md:w-full md:mt-5 md:text-start'>
                                    <p className='font-medium text-2xl inter text-gray-300 
                                    md:max-w-80'>
                                        Faça o cadastro do evento abaixo 
                                        com algumas informações.
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
                                    <div className='w-full h-48 flex justify-center items-center flex-col'>
                                        {!image.file && (
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

                                        {image.file && (
                                            <>
                                                <BiTrash 
                                                onClick={handleDelete}
                                                className='w-full absolute z-10 cursor-pointer bg-transparent max-w-72
                                                md:max-w-80' 
                                                size={30} />
                                                <img
                                                className='w-full max-w-72 h-full rounded-lg 
                                                outline outline-2 outline-white opacity-40 
                                                md:max-w-full md:w-full'
                                                src={image.file ? URL.createObjectURL(image.file) : ''}
                                                alt=""
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
                            hover:bg-white hover:text-black hover:font-medium md:border-black">         
                                Cadastrar
                            </button>
                            </div>
                        </div>  
                    </form>
                </div>  
            </ContainerMain>
        </>
    )
}





