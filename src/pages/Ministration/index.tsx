// Import for development
import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';
import { HeaderPages } from '../../components/Header/Pages';
import { CardYouTube } from '../../components/Pages/Ministration/CardsYouTube';

// Interface Vídeo
import { videoProps } from '../../pages/Home';

// Logo loading
import logoLoading from '../../assets/Logo/logo-adac.png';

export function Ministration() {

  const [dataVideo, setDataVideo] = useState<videoProps[]>([]);
  // Loading
  const [isUploading, setIsUploading] = useState(false);

  useEffect(()=> {
    const fetchVideo = async () => {
      try{
        setIsUploading(true);
        const response = await axios.get('https://adac-church-api.vercel.app/api/videos/')
        setDataVideo(response.data); 
        setIsUploading(false);
      }
      catch(e){
        console.error(`Não foi possível resgatar os vídeos: ${e}`);
      }
    }

    fetchVideo();
  }, [])

  return (
    <>
      <ContainerHeader>
        <HeaderPages name='Ministrações' path='/' />
      </ContainerHeader>

      {/* Main */}
      <ContainerMain>
        <div className='w-full mt-48 flex justify-center md:mt-40'>
          <h1 className='inter text-xl'>Últimas ministrações abaixo</h1>
        </div>
        {/* Cards Video YouTube */}
        <div className='w-full mt-10 mb-20 flex justify-center items-center gap-5 flex-col'>
          {dataVideo.map(data=> (
            <>
              <CardYouTube
              title={data.title}
              thumbnail={data.thumbnail}
              videoId={data.videoId}
              description={data.description}
              />
            </>
          ))}
        </div>

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
      </ContainerMain>
    </>
  );
}
