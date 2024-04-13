// Importando container para seguir com as margens que definimos no components 'Container'.
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';

// Importando hooks do react
import { useState, useEffect } from 'react';

// Componentes
import { HeaderHome } from '../../components/Header/Home';
import { Church } from '../../components/Pages/Home/Church';

// Background Logo
import backgroundLogo from '../../assets/Logo/logo-background.png';

// CSS
import './index.css';

export function Home(){

    // useState são estados, ou melhor dizendo, variáveis que são ativadas e desativadas a qualquer momento
    // durante a execuçõa do nosso código, aqui criamos uma para armazenar 'true' ou 'false' para nossa função
    // Se a função retornar 'true' o estado(valor da váriavel) muda e assim por diante.
    const [exibirImagem, setExibirImagem] = useState<boolean>(false);

    // Usamos o useEffect assim que entramos na página e queremos que ele faça algo de imediato.
    useEffect(()=> {
        function handleResizing(){
            setExibirImagem(window.innerWidth >= 767);
        }

        window.addEventListener('resize', handleResizing);
        handleResizing();

        return () => {
            window.removeEventListener('resize', handleResizing);
        }
    },[])

    return(
        <>  
            {/* Section da foto */}
            <div className="relative z-20 inset-0">
                {/* Aplica o gradiente linear transparente para preto dentro da div da imagem */}
                <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>
                
                {/* Se o exibir mensagem estiver true, ou seja, ele estiver aqui, essa imagem da logo é renderizada */}
                {exibirImagem && (
                    <img 
                    className='absolute z-30 bg-transparent w-72 top-32 right-0 flex'
                    src={backgroundLogo} 
                    alt="ADAC Church" />
                )}
                
                {/* Imagem de fundo da igreja */}
                <img 
                src="https://pr0.nicelocal.br.com/ONvL54HRTo5T9kZ04e_azg/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2WnEBIfC8NFr1TK9gtcHWbpFu1XIaKv6g_iCJljMPfIbtPw7Vk5VFXQMlL8xMgh-rQ"
                id='imagem_capa' 
                className='relative w-full h-full object-cover bg-center opacity-50'/>
            </div>

            {/* Header Settings */}
            <ContainerHeader>
                <HeaderHome  />
            </ContainerHeader>

            {/* Main Settings */}
            <ContainerMain>
                <Church />
            </ContainerMain>    
            
        </>
    )
}