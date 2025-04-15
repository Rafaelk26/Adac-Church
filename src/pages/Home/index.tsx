// Importando container para seguir com as margens que definimos no components 'Container'.
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';

// Importando hooks do react
import { useState, useEffect, useMemo } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/server';

// Componentes
import { HeaderHome } from '../../components/Header/Home';
import { Church } from '../../components/Pages/Home/Church';
import { Ministration } from '../../components/Pages/Home/Ministration';
import { Event } from '../../components/Pages/Home/Event';
import { CardSlide } from '../../components/Pages/Ministérios/CardSlide';
import { Cards } from '../../components/Pages/Home/Cards';
import { Cell } from '../../components/Pages/Home/Cell';
import { Footer } from '../../components/Pages/Home/Footer';

// Photos
import backgroundLogo from '../../assets/Logo/logo-adac-2025.png';
import backgroundBanner from '../../assets/foto-banner.jpeg';

// CSS
import './index.css';


// Interface para tipar o objeto de vídeo que retorna
export interface videoProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  videoId: string;
}

export function Home() {

  const [exibirImagem, setExibirImagem] = useState<boolean>(false);
  const [linkVideoYoutube, setLinkVideoYoutube] = useState<string[]>([]);


  useEffect(() => {

    function handleResizing() {
      setExibirImagem(window.innerWidth >= 767);
    }

    window.addEventListener('resize', handleResizing);
    handleResizing();

    return () => {
      window.removeEventListener('resize', handleResizing);
    }
  }, [])


  useEffect(()=> {


    async function getLinkYouTube(){
      const docRef = doc(db, "Ministracao", "atual");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const { videoLink } = docSnap.data();
        setLinkVideoYoutube([videoLink]);
      }

    }

    getLinkYouTube()
    console.log(linkVideoYoutube)

  }, [])

  const memorizedLogoAdac = useMemo(() => backgroundLogo, []);

  return (
    <>
      {/* Section da foto */}
      <div className="relative z-20 inset-0">
        {/* Aplica o gradiente linear transparente para preto dentro da div da imagem */}
        <div className="absolute z-30 w-full h-full bg-transparent bg-gradient-to-b from-transparent via-transparent to-black"></div>

        {/* Se o exibir mensagem estiver true, ou seja, ele estiver aqui, essa imagem da logo é renderizada */}
        {exibirImagem && (
          <img
            className='absolute z-30 bg-transparent w-72 top-32 right-0 flex'
            src={memorizedLogoAdac}
            alt="ADAC Church" />
        )}

        {/* Imagem de fundo da igreja */}
        <img
          src={backgroundBanner}
          id='imagem_capa'
          className='relative w-full h-full object-cover bg-top opacity-65 md:opacity-50' />
      </div>

      {/* Header Settings */}
      <ContainerHeader>
        <HeaderHome />
      </ContainerHeader>

      {/* Main Settings */}
      <ContainerMain>
        <Church />
        <Ministration
          link_page='/adac/ministracao/'
          link={`https://www.youtube.com/embed/${linkVideoYoutube}?si=9bVfMuZL3iZzacXc`}
        />
        <div
          className='flex justify-center flex-col items-center gap-4 mt-16
            md:flex-row'>
          <Cards nome='Jesus' />
          <Cards nome='Alegria' />
          <Cards nome='Fé' />
        </div>
        <CardSlide />
        <Event />
        <Cell />
      </ContainerMain>
      <Footer />
    </>
  )
}
