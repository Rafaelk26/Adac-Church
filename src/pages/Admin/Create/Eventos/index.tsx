// Import for development
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidV4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with Firebase
import { db, storage } from '../../../../services/server';

// Components
import { ContainerMain } from '../../../../components/Container/Main';
import { Input } from '../../../../components/Input/Admin';
import { InputEvent, TextareaEvent } from '../../../../components/Input/Admin/Event';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

// Image loading 
import logoLoading from '../../../../assets/Logo/logo-adac.png';

// Event
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

export function CriarEventos(){

    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const [image, setImage] = useState<File | null>(null);
       
    // Loading
    const [isUploading, setIsUploading] = useState(false);
    
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setImage(file);
    };

    const handleDelete = () => {
        if(image){
            setImage(null);
        }
    }

    async function onSubmit(data: FormData) {
        try{
            // Variáveis para armazenar as url das fotos no storage do Firebase
            let imageEventUrl = '';

            if(!image){
                // Toast de erro
                toast.error('Inserir imagem do evento!');
                return;
            }

            // Inicializa tela de carregamento de dados
            setIsUploading(true);

            if(image){
                // Cria a referência do caminho para o storage seguir
                const imageRef = ref(storage, `eventos/${uuidV4()}_${image.name}`);
                // Aguarda o caminho e a imagem serem inseridas
                await uploadBytes(imageRef, image);
                // Pega a URL da imagem e faz o download do path e insere na variável vazia
                imageEventUrl = await getDownloadURL(imageRef);
            }
            
            // Cria-se o objeto com base nos campos que queria adicionar ao banco
            const objEvent = {
                title: data.title,
                location: data.location,
                date: data.date,
                time: data.time,
                photo: imageEventUrl,
                description: data.description,
                word_bible: data.word_bible,
                book_bible: data.book_bible,
            };

            // Conexão com o firebase e adicionando nosso objeto passando o nosso database, 
            // nome da collection e o nosso objeto para serem adicionados.
            await addDoc(collection(db, 'Eventos'), objEvent);
            
            // Reseta todos os campos do schema
            reset();
            // Função para remover remover as imaagens do campo de img
            handleDelete();
    
            // Toast de sucesso
            toast.success('Cadastrado com sucesso!');
            setIsUploading(false);
        }
        catch(error){
            // Toast de erro
            toast.error('Erro ao enviar os dados!');
            console.log(error);
        }
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
                                <div className='flex flex-col w-72
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
                                        {!image && (
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

                                        {image && (
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
                                                src={image ? URL.createObjectURL(image) : ''}
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
    )
}





