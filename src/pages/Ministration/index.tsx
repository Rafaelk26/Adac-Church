import { useState, useEffect } from 'react';

// Components
import { ContainerHeader } from '../../components/Container/Header';
import { ContainerMain } from '../../components/Container/Main';
import { HeaderPages } from '../../components/Header/Pages';
import { CardYouTube } from '../../components/Pages/Ministration/CardsYouTube';

// Interface Vídeo
import { videoProps } from '../../pages/Home';

// Cache
import  videoData  from '../../cache.json';

// Logo loading
import logoLoading from '../../assets/Logo/logo-adac.png';

export function Ministration() {
  const [dataVideo, setDataVideo] = useState<videoProps[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  
  useEffect(() => {
    setIsUploading(true);

    setDataVideo(videoData);
    
    setIsUploading(false);
  }, []);

  return (
    <>
      <ContainerHeader>
        <HeaderPages name='Ministrações' path='/' />
      </ContainerHeader>

      {/* Main */}
      <ContainerMain>
        <div className='w-full mt-48 flex justify-center md:mt-40'>
          <h1 className='inter text-xl'>Algumas ministrações abaixo</h1>
        </div>
        {/* Cards Video YouTube */}
        <div className='w-full mt-10 mb-20 flex justify-center items-center gap-5 flex-col'>
          {dataVideo.map(data => (
            <CardYouTube
              key={data.videoId}
              title={data.title}
              thumbnail={data.thumbnail}
              videoId={data.videoId}
              description={data.description}
            />
          ))}
        </div>

        {/* Div loading */}
        {isUploading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <img
              className='w-24 fixed'
              src={logoLoading}
              alt="Logo Adac"
            />
            <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-white"></div>
          </div>
        )}
      </ContainerMain>
    </>
  );
}
