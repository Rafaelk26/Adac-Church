// Import for development
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { ContainerMain } from '../../../../components/Container/Main';
import { Input } from '../../../../components/Input/Admin';

// Icon
import { BiPhotoAlbum } from 'react-icons/bi';

// const schema = z.object({
//     title: z.string().nonempty('insira um nome'),
//     location: z.string().nonempty('insira uma localização'),
//     date: z.string().nonempty('insira uma data'),
//     word_bible: z.string().nonempty('insira uma palavra bíblica'),
//     book_bible: z.string().nonempty('insira o capítulo'),
// })

// type FormData = z.infer<typeof schema>

// const { register, handleSubmit, formState: { errors }}: useForm<FormData>({
//     resolver: zodResolver(schema),
//     mode: "onChange"
// })

export function CriarEventos(){

    // function onSubmit(data: FormData){
    //     console.log(data)
    // }

    return(
        <>  
            <ContainerMain>
                <div className='w-full h-max'>
                    <form className='w-full flex'>
                        {/* Col 1 */}
                        <div className='w-full 
                        md:w-1/2'>
                            {/* Title */}
                            <h1 className='font-bold quicksand text-6xl'>Cadastrar Evento</h1>
                            {/* Description */}
                            <div className='w-full 
                            md:w-2/3 md:mt-5'>
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
                                error=''
                                />
                                {/* Location */}
                                <Input
                                type='text'
                                name_label='Localização do Evento'
                                name='location'
                                error=''
                                />
                                <div className='w-full flex gap-4'>
                                    <div className='w-1/2'>
                                        {/* Event Date */}
                                        <Input
                                        className=''
                                        type='date'
                                        name_label='Data'
                                        name='date'
                                        error=''
                                        />
                                    </div>
                                    {/* Event Hour */}
                                    <div className='w-1/2'>
                                        <Input
                                        type='time'
                                        name_label='Hora'
                                        name='Hora'
                                        error=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className='max-w-2xl flex flex-col md:w-1/2 md:justify-end md:me-5 gap-5'>
                            <div className='w-full flex md:justify-end md:ml-auto'>
                                {/* Photo */}
                                <div className='w-1/2 h-48 border border-white 
                                rounded-xl flex flex-col justify-center items-center'>
                                    <div className='absolute'>
                                        <BiPhotoAlbum size={35} />
                                    </div>
                                    <input
                                    className='opacity-0 w-full h-full rounded-xl cursor-pointer' 
                                    type="file" 
                                    name="photo_cell" 
                                    id="photo_cell" />
                                </div>
                            </div>
                            <div className='flex md:justify-end'>
                                {/* Description */}
                                <div className='w-1/2 flex flex-col gap-1 md:justify-end'>
                                    <label className='
                                    bg-transparent w-max text-md font-bold inter leading-none 
                                    peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70
                                    '>Descrição</label>
                                    <textarea
                                    className='border border-1 border-white w-full rounded-xl p-2 
                                    flex border-input bg-transparent px-3 py-2 text-md ring-offset-background transition-all 
                                    file:border-0 
                                    file:bg-transparent 
                                    file:text-sm 
                                    file:font-medium 
                                    placeholder:text-muted-foreground 
                                    focus-visible:outline-none 
                                    focus-visible:ring-2 
                                    focus-visible:ring-ring 
                                    focus-visible:ring-offset-2 
                                    disabled:cursor-not-allowed 
                                    disabled:opacity-50' 
                                    name="description" 
                                    id="description"
                                    rows={5}>
                                    </textarea>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex gap-4 ml-auto'>
                                <div className='w-1/2'>
                                    {/* Word_bible */}
                                    <Input
                                    type='text'
                                    name_label='Palavra Bíblica'
                                    name='word_bible'
                                    error=''
                                    />
                                </div>
                                <div className='w-1/2'>
                                    {/* Book_bible */}
                                    <Input
                                    type='text'
                                    name_label='Livro, Cap, Vers.'
                                    name='book_bible'
                                    error=''
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>  
            </ContainerMain>
        </>
    )
}