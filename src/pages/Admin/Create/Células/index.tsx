// Import for development
import { ChangeEvent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';
import { HeaderPages } from '../../../../components/Header/Pages';
import { Input, Textarea, InputFile } from '../../../../components/Input/Admin/Cell/';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

interface imageInfo {
    file: File | null;
    url: string | null;
}

const schema = z.object({
    // Cell
    name_cell: z.string().nonempty('insira um nome'),
    street: z.string().nonempty('insira uma localização'),
    neighborhood: z.string().nonempty('insira uma data'),
    number: z.string().nonempty('insira um horário'),
    day: z.string().nonempty('insira um dia').min(2),
    hour: z.string().nonempty(''),
    word_bible_cell: z.string().nonempty('insira uma palavra bíblica.'),
    book_bible_cell: z.string().nonempty('insira o livro, cap e ver.'),
    description: z.string().nonempty('insira uma descrição').min(2),
    // Leader
    name_leader: z.string().nonempty('insira um nome'),
    phone_leader: z.string().nonempty('insira um telefone'),
})

type FormData = z.infer<typeof schema>

export function CriarCelulas(){

    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const [imageCell, setImageCell] = useState<imageInfo>({ file: null, url: null });
    const [imageLeader, setImageLeader] = useState<imageInfo>({ file: null, url: null });
    
    const handleImageCell = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file instanceof File) {
            const url = file.name
            setImageCell(
                { file, url: `images/cell/${url}` }
            );
        } else {
            setImageCell(
                {file: null, url: null}
            )
            // Toast de erro
            console.log('Arquivo de imagem vazio!');
        }
    };

    const handleImageLeader = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file instanceof File) {
            const url = file.name
            setImageLeader(
                { file, url: `images/cell/${url}` }
            );
        } else {
            setImageCell(
                {file: null, url: null}
            )
            // Toast de erro
            console.log('Arquivo de imagem vazio!');
        }
    };

    const handleDelete = () => {
        if(imageCell.file){
            // Toast de erro
            setImageCell({ file: null, url: null })
        }
    }

    const handleDeleteLeader = () => {
        if(imageLeader.file){
            // Toast de erro
            setImageLeader({ file: null, url: null })
        }
    }

    useEffect(() => {
        const handleUpload = async () => {
            if (imageCell.file) {
                // Toast de sucesso
            }
        };

        handleUpload();
    }, [imageCell.file]);

    function onSubmit(data: FormData) {

        if(!imageCell.url){
            // Toast de erro
            alert('inserir imagem célula')
            return;
        }

        if(!imageLeader.url){
            // Toast de erro
            alert('inserir imagem líder')
            return;
        }

        const objCell = {
            // Cell
            name_cell: data.name_cell,
            street: data.street,
            day: data.day,
            hour: data.hour,
            photo_cell: imageCell.url,
            description: data.description,
            word_bible_cell: data.word_bible_cell,
            book_bible_cell: data.book_bible_cell,
            
            // Leader
            name_leader: data.name_leader,
            phone_leader: data.phone_leader,
            // Cargo
            photo_leader: imageLeader.url,
        };
        reset();
        handleDelete();
        handleDeleteLeader();

        // Toast de sucesso
        console.log(objCell);
    }

    return(
        <>
            <ContainerHeader>
                <HeaderPages 
                path='/adac/admin/'
                name='Cadastrar Célula'/>
            </ContainerHeader>
            {/* Content */}
            <ContainerMain>
                <div 
                className='mt-40 md:mt-28'>
                    {/* Subtitle */}
                    <div 
                    className='w-full mx-auto max-w-56 
                    md:mx-0 md:max-w-max'>
                        <p 
                        className='w-full max-w-max text-center inter text-gray-300 text-xl
                        md:w-80 md:mt-2 md:font-medium md:text-start'>Cadastre dados da nova célula em nossa plataforma.</p>
                    </div>

                    {/* Form */}
                    <form 
                    className='w-full flex flex-col max-w-96 mx-auto h-max mt-5
                    md:mt-8 md:max-w-4xl'
                    method='#'
                    onSubmit={(e) => { 
                        e.preventDefault(); 
                        handleSubmit(onSubmit)(); 
                    }}>
                        <section 
                        className='w-full'>
                            <div className='w-full'>
                                <h3 
                                className='font-semibold text-3xl quicksand'>Dados da Célula</h3>
                            </div>
                            {/* Cell */}
                            <div 
                            className='w-full flex flex-col md:flex-row md:mt-1'>
                                {/* Cell data - group 1 */}
                                <div 
                                className='w-full md:w-8/5'>
                                    {/* Name Cell */}
                                    <Input
                                    type='text'
                                    name='name_cell'
                                    name_label='Nome'
                                    register={register}
                                    error={errors.name_cell?.message}
                                    />
                                    <div className='w-full flex flex-col md:flex-row md:mt-2'>
                                        <div className='w-full md:w-1/2'>
                                            {/* Street */}
                                            <Input
                                            type='text'
                                            name='street'
                                            name_label='Rua'
                                            register={register}
                                            error={errors.street?.message}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            {/* Neighborhood */}
                                            <Input
                                            type='text'
                                            name='neighborhood'
                                            name_label='Bairro'
                                            register={register}
                                            error={errors.neighborhood?.message}
                                            />
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
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Day */}
                                            <Input
                                            type='text'
                                            name='day'
                                            name_label='Dia'
                                            register={register}
                                            error={errors.day?.message}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Hour */}
                                            <Input
                                            type='text'
                                            name='hour'
                                            name_label='Hora'
                                            register={register}
                                            error={errors.hour?.message}
                                            />
                                        </div>
                                    </div>
                                    <Input
                                    type='text'
                                    name='word_bible_cell'
                                    name_label='Palavra Bíblica'
                                    register={register}
                                    error={errors.word_bible_cell?.message}
                                    />
                                    <Input
                                    type='text'
                                    name='book_bible_cell'
                                    name_label='Livro, capítulo e versículo'
                                    register={register}
                                    error={errors.book_bible_cell?.message}
                                    />
                                </div>
                                {/* Cell data - group 2 */}
                                <div 
                                className='w-full flex flex-col md:w-2/5'>
                                    <Textarea
                                    name='description'
                                    name_label='Descrição'
                                    register={register}
                                    error={errors.description?.message}
                                    />
                                    
                                    <label
                                    className="px-1 mt-1 bg-transparent w-max text-md font-normal quicksand leading-none 
                                    peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70">Foto</label>

                                    {!imageCell.file && (
                                        <>
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
                                                    onChange={(e) => handleImageCell(e)}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {imageCell.file && (
                                        <>
                                            <div className='px-1 flex justify-center items-center'>
                                                <div className="absolute z-10 bg-transparent cursor-pointer">
                                                    <BiTrash
                                                    onClick={handleDelete} 
                                                    className='bg-transparent' 
                                                    size={30} />
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
                                                    src={imageCell.file ? URL.createObjectURL(imageCell.file) : ''}
                                                    onClick={handleDelete}
                                                    alt=''
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Leader */}

                        <section 
                        className='w-full max-w-96 mx-auto h-max mt-5
                        md:mt-12 md:max-w-full'>
                            <div className='w-full'>
                                <h3 
                                className='font-semibold text-3xl quicksand'>Dados do Líder</h3>
                            </div>
                            <div 
                            className='w-full flex flex-col md:flex-row md:mt-1'>
                                {/* Leader data - group 1 */}
                                <div 
                                className='w-full md:w-4/5'>
                                    <Input
                                    type='text'
                                    name='name'
                                    name_label='Nome'
                                    register={register}
                                    />
                                    <div className='w-full flex flex-col md:flex-row md:mt-9'>
                                        <div className='w-full md:w-1/2'>
                                            {/* Phone Leader */}
                                            <Input
                                            type='text'
                                            name='phone_leader'
                                            name_label='WhatsApp'
                                            register={register}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            {/* Cargo */}
                                            <Input
                                            type='text'
                                            name='cargo'
                                            name_label='Cargo'
                                            register={register}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Leader data - group 2 */}
                                <div 
                                className='w-full flex flex-col md:w-1/5'>
                                    {/* Photo leader */}
                                    <label
                                    className="px-1 mt-1 ms-32 absolute z-0 bg-transparent w-max text-md font-normal quicksand leading-none 
                                    peer-disabled:cursor-not-allowed 
                                    peer-disabled:opacity-70
                                    md:ms-5 md:static">Foto</label>

                                    {!imageLeader.file && (
                                        <div className='mt-6 px-1 md:mt-1 flex justify-center items-center'>
                                            <div className='absolute'>
                                                <BiPhotoAlbum size={30} />
                                            </div>
                                            <div className='w-32 border border-input rounded-md'>
                                                <InputFile
                                                type='file'
                                                name='photo_leader'
                                                name_label='Foto'
                                                register={register}
                                                onChange={(e) => handleImageLeader(e)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {imageLeader.file && (
                                        <div className='mt-6 px-1 md:mt-1 flex justify-center items-center'>
                                            <div className="absolute z-10 bg-transparent cursor-pointer">
                                                    <BiTrash
                                                    onClick={handleDeleteLeader} 
                                                    className='bg-transparent' 
                                                    size={30} />
                                                </div>
                                            <div className='w-32 border border-input rounded-md'>
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
                                                src={imageLeader.file ? URL.createObjectURL(imageLeader.file) : ''}
                                                onClick={handleDeleteLeader}
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
                        md:my-10">         
                            Cadastrar
                        </button>
                    </form>
                </div>
            </ContainerMain>
        </>
    )
}