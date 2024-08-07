// Import for development
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidV4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

// Connection with Firebase
import { db, storage } from '../../../../services/server';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';
import { HeaderPages } from '../../../../components/Header/Pages';
import { Input, Textarea, InputFile, Select } from '../../../../components/Input/Admin/Cell/';

// Icon
import { BiPhotoAlbum, BiTrash } from 'react-icons/bi';

// Image loading 
import logoLoading from '../../../../assets/Logo/logo-adac.png';

const schema = z.object({
    // Cell
    name_cell: z.string().nonempty('Insira um nome'),
    street: z.string().nonempty('Insira uma rua'),
    neighborhood: z.string().nonempty('Insira um bairro'),
    age_group: z.string().nonempty('Insira a faixa etária!'),
    number: z.string().nonempty('Insira um número'),
    day: z.string().nonempty('Insira um dia').min(2),
    hour: z.string().nonempty('Insira uma hora'),
    word_bible_cell: z.string().nonempty('Insira uma palavra bíblica.'),
    book_bible_cell: z.string().nonempty('Insira o livro, cap e ver.'),
    description: z.string().nonempty('Insira uma descrição').min(2),
    participants: z.string(),
    baptizeds: z.string(),
    // Leader
    name_leader: z.string().nonempty('Insira um nome'),
    phone_leader: z.string().nonempty('Insira um telefone'),
    office: z.string().nonempty('Insira um cargo'),
})

type FormData = z.infer<typeof schema>

export function CriarCelulas(){

    const [photoCell, setPhotoCell] = useState<File | null>(null);
    const [photoLeader, setPhotoLeader] = useState<File | null>(null);

    // Loading
    const [isUploading, setIsUploading] = useState(false);


    const { register, handleSubmit, formState: { errors }, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const handlePhotoCellChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setPhotoCell(file);
    };

    const handlePhotoLeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setPhotoLeader(file);
    };

    const handleDelete = (image1: string, image2: string) => {
        if(image1){
            setPhotoCell(null)
        }
        if(image2){
            setPhotoLeader(null)
        }
    }

    const handleDeleteLeader = () => {
        if(photoLeader){
            // Toast de sucesso
            toast.success('Foto excluída com sucesso!');
            setPhotoLeader(null);
        }
    }

    const handleDeleteCell = () => {
        if(photoCell){
            // Toast de sucesso
            toast.success('Foto excluída com sucesso!');
            setPhotoCell(null);
        }
    }

    const generateLeaderId = (name: string): string => {
        const formattedName = name.toLowerCase().replace(/\s/g, '');
        const randomNumbers = Math.floor(1000 + Math.random() * 9000);
        
        return formattedName + randomNumbers;
    }
    

    const onSubmit = async (data: FormData) => {
        try {
        const leaderId = generateLeaderId(data.name_leader);

        if(!photoCell){
            // Toast de erro
            toast.error('Inserir imagem da Célula!');
            return;
        }

        if(!photoLeader){
            // Toast de erro
            toast.error('Inserir imagem do Líder!');
            return;
        }

        // Start loading upload archives
        setIsUploading(true);

        // Upload das imagens para o Firebase Storage
        let photoCellUrl = '';
        let photoLeaderUrl = '';
        if (photoCell) {
            const photoCellRef = ref(storage, `celulas/${uuidV4()}_${photoCell.name}`);
            await uploadBytes(photoCellRef, photoCell);
            photoCellUrl = await getDownloadURL(photoCellRef);
        }
        if (photoLeader) {
            const photoLeaderRef = ref(storage, `celulas/${uuidV4()}_${photoLeader.name}`);
            await uploadBytes(photoLeaderRef, photoLeader);
            photoLeaderUrl = await getDownloadURL(photoLeaderRef);
        }
    
        // Construção do objeto de dados para o Firestore
        const cellData = {
            // Cell data
            name_cell: data.name_cell,
            street: data.street,
            neighborhood: data.neighborhood,
            age_group: data.age_group,
            day: data.day,
            hour: data.hour,
            photo_cell: photoCellUrl,
            description: data.description,
            word_bible_cell: data.word_bible_cell,
            book_bible_cell: data.book_bible_cell,
            // Leader Data
            id_leader: leaderId,
            name_leader: data.name_leader,
            pass_leader: 'jesusvive',
            phone_leader: data.phone_leader,
            office: data.office,
            photo_leader: photoLeaderUrl,
            participants: data.participants,
            baptizeds: data.baptizeds,
        };
        // Envio dos dados para o Firestore
        await addDoc(collection(db, 'Celulas'), cellData);
    
        handleDelete(photoCellUrl, photoLeaderUrl);
        reset();
        
        // End loading for upload archives
        setIsUploading(false);
        
        // Toast de sucesso
        toast.success('Cadastrado com sucesso!');
    } catch (error) {
        // Toast de erro
        toast.error('Erro ao enviar os dados!');
        console.log(error);
    }
    };

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
                                        <div className='w-full md:w-1/3'>
                                            {/* Street */}
                                            <Input
                                            type='text'
                                            name='street'
                                            name_label='Rua'
                                            register={register}
                                            error={errors.street?.message}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Neighborhood */}
                                            <Select
                                            name='neighborhood'
                                            name_label='Bairro'
                                            register={register}
                                            error={errors.neighborhood?.message}>
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
                                            />
                                        </div>
                                        <div className='w-full md:w-1/3'>
                                            {/* Day */}
                                            <Select
                                            name='day'
                                            name_label='Dia'
                                            register={register}
                                            error={errors.day?.message}
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
                                            type='time'
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

                                    {!photoCell && (
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
                                                    onChange={handlePhotoCellChange}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {photoCell && (
                                        <>
                                            <div className='px-1 flex justify-center items-center'>
                                                <div className="absolute z-10 bg-transparent cursor-pointer">
                                                    <BiTrash
                                                    onClick={handleDeleteCell}
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
                                                    src={photoCell ? URL.createObjectURL(photoCell) : ''}
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
                                    name='name_leader'
                                    name_label='Nome'
                                    register={register}
                                    error={errors.name_leader?.message}
                                    />
                                    <div className='w-full flex flex-col md:flex-row md:mt-9'>
                                        <div className='w-full md:w-1/2'>
                                            {/* Phone Leader */}
                                            <Input
                                            type='text'
                                            name='phone_leader'
                                            name_label='WhatsApp'
                                            register={register}
                                            error={errors.phone_leader?.message}
                                            />
                                        </div>
                                        <div className='w-full md:w-1/2'>
                                            {/* Cargo */}
                                            <Select
                                            name='office'
                                            name_label='Cargo'
                                            register={register}
                                            error={errors.office?.message}>
                                                <option value=""></option>
                                                <option value="Coordenador">Coordenador</option>
                                                <option value="Supervisor">Supervisor</option>
                                                <option value="Líder">Líder</option>
                                                <option value="Pastor">Pastor</option>
                                            </Select>
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

                                    {!photoLeader && (
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
                                                onChange={handlePhotoLeaderChange}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {photoLeader && (
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
                                                src={photoLeader ? URL.createObjectURL(photoLeader) : ''}
                                                alt=''
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                        
                        {/* Just leader can change. */}
                        <div className='hidden'>
                            <Input 
                            name_label='Participantes'
                            type='text'
                            value={0}
                            name='participants'
                            register={register}
                            error={errors.participants?.message}
                            />
                            <Input 
                            name_label='Batizados'
                            type='text'
                            value={0}
                            name='baptizeds'
                            register={register}
                            error={errors.baptizeds?.message}
                            />
                        </div>

                        {/* Button submit */}
                        <button
                        type="submit"
                        className="w-56 my-10 mx-auto p-2 border border-solid border-white rounded-lg transition-all font-medium
                        hover:bg-white hover:text-black hover:font-medium
                        md:my-10">         
                            Cadastrar
                        </button>

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
                    </form>
                </div>
            </ContainerMain>
        </>
    )
}