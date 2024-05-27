import { useEffect, useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, getStorage, deleteObject, uploadBytes } from 'firebase/storage';

// Connection with Firebase
import { db } from '../../../../../services/server';

// Components
import { ContainerHeader } from '../../../../../components/Container/Header';
import { ContainerMainDetails } from '../../../../../components/Container/MainDetails';
import { HeaderPages } from '../../../../../components/Header/Pages';
import { Input, Select } from '../../../../../components/Input/Admin/Cell';
import { Button } from '../../../../../components/Button/Login';

// Icon
import { BiCloudDownload, BiTrash } from 'react-icons/bi';

const schema = z.object({
    name_leader: z.string().nonempty('Obrigatório Nome do líder!'),
    phone_leader: z.string().nonempty('Obrigatório telefone do líder'),
    office: z.string().nonempty('Obrigatório cargo!'),
});

type FormData = z.infer<typeof schema>;

type DataLeader = FormData & {
    photo_leader: string;
};


export function EditLideresId(){

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    }); 

    const { id } = useParams();

    const [dataForm, setDataForm] = useState<FormData>({} as FormData);
    const [imageOld, setImageOld] = useState<string>('');
    const [imageNew, setImageNew] = useState<File | null | boolean>(false);
    const [imgSend, setImgSend] = useState<string>('');

    // Resgata os dados do id referente
    useEffect(()=> {
        const fetchEditIdLeader = async () => {
            const refId = doc(db, "Celulas", id as string);
            const snapId = await getDoc(refId);
            const dataId = snapId.data() as DataLeader;
            setDataForm(dataId);
            reset(dataId);  // Resetar os valores do formulário
            if (dataId?.photo_leader) {
                setImageOld(dataId?.photo_leader);
            } else {
                setImageNew(true);
            }
        }
        fetchEditIdLeader();
    }, [id, reset]);

    // Função de excluir do firebase storage      
    const handleDeleteImageStorage = async (url: string) => {        
        const storage = getStorage();
        const storageRef = ref(storage, url);
        try{
            await deleteObject(storageRef);
            setImageNew(true);

            const leaderRef = doc(db, "Celulas", id as string);
            await updateDoc(leaderRef, { photo_leader: '' });

            setImageOld('');
            setImgSend('');
        } catch(err){
            toast.error('Erro ao excluir a foto!');
            console.log(`Erro ao excluir a foto: ${err}`);
        }
    }

    // Função de atualização de imagem
    const updateImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageNew(file);
            setImgSend(URL.createObjectURL(file));
        }
    }

    // Função de envio de dados para o banco novamente
    const onSubmit = async (data: FormData) => {
        let photoUrl = imageOld;
        
        if (imageNew && typeof imageNew !== 'boolean') {
            const storage = getStorage();
            const storageRef = ref(storage, `leaders/${imageNew.name}`);
            await uploadBytes(storageRef, imageNew);
            photoUrl = await getDownloadURL(storageRef);
        }

        const updatedData = {
            ...data,
            photo_leader: photoUrl,
        };

        const docRef = doc(db, "Celulas", id as string);
        await updateDoc(docRef, updatedData);
        
        setImageNew(false);
        setImgSend('');
        setImageOld(photoUrl || '');
        reset();
        toast.success('Dados atualizados com sucesso!');
    }

    return(
        <>  
            {/* Header */}
            <ContainerHeader>
                <HeaderPages
                name='Editar Líderes'
                path='/adac/admin/editar/lideres/' 
                />
            </ContainerHeader> 
            {/* Main content */}
            <ContainerMainDetails>
                <div 
                className='w-full flex mt-48 justify-center
                md:mt-40 md:h-96 md:items-center md:justify-center'>
                    {/* Card Edit Leader */}
                    <form 
                    className='w-96 h-full flex border-2 border-solid border-white rounded-2xl
                    md:max-w-2xl md:flex-row md:w-full'
                    method='#'
                    onSubmit={(e)=> { 
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                    }}>
                        <div 
                        className="w-full h-full flex flex-col
                        md:max-w-2xl md:flex-row">
                            {/* Image leader */}
                            {(imageOld && !imgSend) && (
                                <div
                                className='w-full h-72 flex justify-center items-center relative
                                md:w-5/12 md:h-full'>
                                    <div className="absolute z-30">
                                        <BiTrash
                                        onClick={()=> handleDeleteImageStorage(imageOld)}
                                        className='cursor-pointer'
                                        size={40}
                                        color='#fff'
                                        />
                                    </div>
                                    <img
                                    className='w-full h-full object-cover rounded-s-xl opacity-55' 
                                    src={imageOld} 
                                    alt="Foto Líder" />
                                </div>
                            )}

                            {!imageOld && !imgSend && imageNew === true && (
                                <div
                                className='w-full h-72 flex justify-center items-center relative
                                md:w-5/12 md:h-full'>
                                    <div className="absolute z-30">
                                        <BiCloudDownload
                                        className='cursor-pointer'
                                        size={40}
                                        color='#fff'
                                        />
                                    </div>
                                    <div className='absolute z-20'>
                                        <input 
                                        className='w-64 h-80 opacity-0 cursor-pointer'
                                        type="file" 
                                        name="photo_leader"
                                        accept='image/*'
                                        onChange={updateImage} />
                                    </div>
                                </div>
                            )}

                            {imgSend && (
                                <div
                                className='w-full h-72 flex justify-center items-center relative
                                md:w-5/12 md:h-full'>
                                    <img
                                    className='w-full h-full object-cover rounded-s-xl opacity-55' 
                                    src={imgSend} 
                                    alt="Nova Foto Líder" />
                                    <div className="absolute z-30">
                                        <BiTrash
                                        onClick={() => {
                                            setImageNew(true);
                                            setImgSend('');
                                        }}
                                        className='cursor-pointer'
                                        size={40}
                                        color='#fff'
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Info leader */}
                            <div
                            className='w-full h-full mb-8
                            md:w-7/12 md:ms-5'>
                                
                                <h1 className='text-center text-4xl quicksand mt-2'>Dados do Líder</h1>
                                
                                <div
                                className='w-full h-full px-5 flex flex-col mt-4 gap-2 items-center'>
                                    <Input
                                    type='text' 
                                    name='name_leader'
                                    name_label='Nome do Líder'
                                    register={register}
                                    error={errors.name_leader?.message}
                                    value={dataForm.name_leader || ''}
                                    onChange={(e)=> setDataForm({...dataForm, name_leader: e.target.value})}
                                    />
                                    <Input
                                    name='phone_leader'
                                    name_label='Telefone do Líder'
                                    type='text' 
                                    register={register}
                                    error={errors.phone_leader?.message}
                                    value={dataForm.phone_leader || ''}
                                    onChange={(e)=> setDataForm({...dataForm, phone_leader: e.target.value})}
                                    />
                                    <Select
                                    name='office'
                                    name_label='Cargo do Líder'
                                    register={register}
                                    error={errors.office?.message}
                                    value={dataForm.office || ''}
                                    onChange={(e)=> setDataForm({...dataForm, office: e.target.value})}
                                    >
                                        <option value="Líder">Líder</option>
                                        <option value="Coordenador">Coordenador</option>
                                        <option value="Supervisor">Supervisor</option>
                                    </Select>
                                    <div 
                                    className='w-40 mt-8'>
                                        <Button
                                        name='Alterar'
                                        type='submit'
                                        />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </ContainerMainDetails>
        </>
    );
}
