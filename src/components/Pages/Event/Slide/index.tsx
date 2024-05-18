// Import for deelopment
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

// Connection with Firebase
import { db } from '../../../../services/server';
// Import react-slick library in project
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

// Img Slider
import imgSliderFixed from '../../../../assets/leao.png';

// Config Slider
const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    className: 'rounded-slide',
    adaptiveHeight: true,
};

interface imageSlideProps{
    photo: string;
}


export function Slide() {
    
    const [contentSlide, setContentSlide] = useState<imageSlideProps[]>([]);

    // Loading
    const [isUploading, setIsUploading] = useState(false);

    useEffect(()=> {
        const fetchImageSlide = async () => {
            setIsUploading(true);
            const imageSlideRef = collection(db, 'Eventos');
            const imageSlideShot = await getDocs(imageSlideRef);
            const imageSlideData = imageSlideShot.docs.map((doc)=>{
                const data = doc.data() as imageSlideProps
                return {photo: data.photo};
            })
            setIsUploading(false);
            setContentSlide(imageSlideData);
        }
        fetchImageSlide()
    }, [])
    
    return (
        <Slider {...settings}>
            {contentSlide.length === 0 ? (
                <div className='w-full flex outline-none'>
                    <img 
                    className='w-full outline-none'
                    src={imgSliderFixed} />
                </div>
            ):(
                contentSlide.map((cSlide, index)=> (
                    <div key={index} className='w-full flex outline-none'>
                        <img 
                        className='w-full outline-none'
                        src={cSlide.photo} />
                    </div>
                ))
            )}
            {/* Div loading */}
            {isUploading && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
                </div>
            )}
        </Slider>        
    );
}
