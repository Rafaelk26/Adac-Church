// Import for development
import { useMemo } from 'react';

// Import react-slick library in project
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

// Img Slider
import imgSlider1 from '../../../../assets/Capas/Event.jpeg';
import imgSlider2 from '../../../../assets/Capas/Event2.jpeg';
import imgSlider3 from '../../../../assets/Capas/Event4.jpeg';

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


export function Slide() {

    const img1 = useMemo(()=> imgSlider1 ,[])
    const img2 = useMemo(()=> imgSlider2 ,[])
    const img3 = useMemo(()=> imgSlider3 ,[])

    return (
        <Slider {...settings}>
            <div className='w-full h-56 flex outline-none md:h-96'>
                <img 
                className='w-full h-full outline-none object-cover'
                src={img1} />
            </div>
            <div className='w-full h-56 flex outline-none md:h-96'>
                <img 
                className='w-full h-full outline-none object-cover'
                src={img2} />
            </div>
            <div className='w-full h-56 flex outline-none md:h-96'>
                <img 
                className='w-full h-full outline-none object-cover'
                src={img3} />
            </div>
        </Slider>        
    );
}