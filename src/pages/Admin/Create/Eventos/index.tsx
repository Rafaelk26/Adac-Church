// Import for development
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { ContainerMain } from '../../../../components/Container/Main';
import { Input } from '../../../../components/Input/Admin';
import { InputEvent, TextareaEvent } from '../../../../components/Input/Admin/Event';
import { Button } from '../../../../components/Button/Event';

// Icon
import { BiPhotoAlbum } from 'react-icons/bi';

const schema = z.object({
    title: z.string().nonempty('insira um nome'),
    location: z.string().nonempty('insira uma localização'),
    date: z.string().nonempty('insira uma data'),
    time: z.string().nonempty('insira um horário'),
    photo: z.string().nonempty('insira uma foto'),
    decription: z.string().nonempty('insira uma descrição'),
    word_bible: z.string().nonempty('insira uma palavra bíblica'),
    book_bible: z.string().nonempty('insira o livro, cap e ver.'),
})

type FormData = z.infer<typeof schema>

export function CriarEventos(){

    const { register, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    function onSubmit(data: FormData){
        console.log(data)
    }

    return(
        <>  
            <ContainerMain>
                <div className='w-full h-max mt-2'>
                    <form 
                    onSubmit={handleSubmit(onSubmit)}>
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
                                <div className='flex flex-col gap-5 md:gap-3 
                                w-full h-full'>
                                    {/* Photo */}
                                    <div className='w-full h-48 flex justify-center items-center'>
                                        <BiPhotoAlbum className='absolute z-0' size={30}/>
                                        <InputEvent
                                        name='photo'
                                        register={register}
                                        type='file'
                                        error={errors.photo?.message}
                                        />
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
                                        error={errors.decription?.message} 
                                        register={register}
                                        name='description'
                                        type='text'
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
                        <div className='flex justify-center mt-10'>
                            <div className='w-56 border border-white rounded-lg'>
                                <Button
                                type='submit'
                                name='Cadastrar'
                                path='/adac/admin/'
                                />
                            </div>
                        </div>  
                    </form>
                </div>  
            </ContainerMain>
        </>
    )
}





