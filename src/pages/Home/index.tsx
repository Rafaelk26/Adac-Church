// Importando container para seguir com as margens que definimos no components 'Container'.
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';

// Importando hooks do react
import { useState, useEffect, useMemo } from 'react';
// Library Axios
import axios from 'axios';

// Componentes
import { HeaderHome } from '../../components/Header/Home';
import { Church } from '../../components/Pages/Home/Church';
import { Ministration } from '../../components/Pages/Home/Ministration';
import { Event } from '../../components/Pages/Home/Event';
import { Cards } from '../../components/Pages/Home/Cards';
import { Cell } from '../../components/Pages/Home/Cell';
import { Footer } from '../../components/Pages/Home/Footer';

// Photos
import backgroundLogo from '../../assets/Logo/logo-background.png';
import backgroundBanner from '../../assets/foto-banner.jpeg';

// CSS
import './index.css';

// Interface para tipar o objeto de vídeo que retorna da API
export interface videoProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  videoId: string;
}

const CACHE_KEY = 'videosYouTubeCache';
const CACHE_DURATION = 60 * 60 * 1000 * 60; 

export function Home() {
  const [exibirImagem, setExibirImagem] = useState<boolean>(false);
  const [videosYouTube, setVideosYouTube] = useState<videoProps>();

  useEffect(() => {
    async function fetchVideo() {
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cacheTime = localStorage.getItem(`${CACHE_KEY}_time`);

      if (cachedData && cacheTime) {
        const age = Date.now() - parseInt(cacheTime, 10);
        if (age < CACHE_DURATION) {
          setVideosYouTube(JSON.parse(cachedData));
          console.log('Dados carregados do cache.');
          return;
        }
      }

      try {
        const response = await axios.get('https://adac-church-api.vercel.app/api/videos/');
        const data: videoProps = response.data[0];
        setVideosYouTube(data);

        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(`${CACHE_KEY}_time`, Date.now().toString());
        console.log('Dados carregados da API e salvos no cache.');
      } catch (err) {
        console.error(`Não foi possível resgatar o vídeo: ${err}`);
      }
    }

    function handleResizing() {
      setExibirImagem(window.innerWidth >= 767);
    }

    window.addEventListener('resize', handleResizing);
    handleResizing();
    fetchVideo();

    return () => {
      window.removeEventListener('resize', handleResizing);
    };
  }, []);

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
          link={`https://www.youtube.com/embed/${videosYouTube?.videoId}?si=9bVfMuZL3iZzacXc`}
        />
        <div 
          className='flex justify-center flex-col items-center gap-4 mt-16
          md:flex-row'>
          <Cards nome='Jesus' />
          <Cards nome='Alegria' />
          <Cards nome='Fé' />
        </div>
        <Event />
        <Cell />
      </ContainerMain>  
      <Footer />  
    </>
  );
}
