import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../services/server';

// Components
import { ContainerHeader } from '../../../../components/Container/Header';
import { ContainerMain } from '../../../../components/Container/Main';
import { HeaderPages } from '../../../../components/Header/Pages';

export function InserirMinistracao() {
    const [ytLink, setYtLink] = useState<string>("");

    async function handleSendLink() {
        const videoId = ytLink.split('v=')[1]?.split('&')[0] ||
            ytLink.split('youtu.be/')[1]?.split('?')[0] ||
            ytLink.split('/live/')[1]?.split('?')[0];

        if (!videoId) {
            toast.error("Link inválido");
            return;
        }

        const resultado = {
            videoLink: videoId
        };

        try {
            await setDoc(doc(db, "Ministracao", "atual"), resultado);
            toast.success("Ministração atualizada com sucesso!");
        } catch (err) {
            console.error(err);
            toast.error("Erro ao atualizar a ministração");
        }
    }

    return (
        <>
            <ContainerHeader>
                <HeaderPages
                    path='/adac/admin/'
                    name='Adicionar Ministração'
                />
            </ContainerHeader>

            <ContainerMain>
                <div className='mt-40 md:mt-28'>
                    <div className='w-full mx-auto max-w-56 md:mx-0 md:max-w-max'>
                        <p className='w-full max-w-max text-center inter text-gray-300 text-xl md:w-80 md:mt-2 md:font-medium md:text-start'>
                            Insira o link da ministração atual no campo abaixo!
                        </p>
                    </div>

                    <div className="max-w-lg w-full items-center gap-6 mx-auto mt-32 flex flex-col">
                        <h1 className='inter text-2xl text-center'>Inserir aqui ministração</h1>
                        <input
                            placeholder='Ex: https://www.youtube.com/live/8FIasgpBAQc?si=v5RNx7gasFTGDS#4'
                            className='w-full outline outline-white outline-1 p-2 rounded-md placeholder:inter placeholder:opacity-25'
                            type="text"
                            value={ytLink}
                            onChange={(e) => setYtLink(e.target.value)}
                        />
                        <button
                            className='w-36 border border-input p-2 text-center text-white rounded-md transition-all inter hover:bg-slate-50 hover:text-black hover:font-semibold hover:scale-105'
                            type='button'
                            onClick={handleSendLink}
                        >
                            Inserir
                        </button>
                    </div>
                </div>
            </ContainerMain>
        </>
    );
}
