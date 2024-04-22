// Import react-slick library in project
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

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
    return (
        <Slider {...settings}>
            <div className='w-full flex outline-none'>
                <img 
                className='w-full outline-none'
                src='https://picsum.photos/400/250' />
            </div>
            <div className='w-full flex outline-none'>
            <img 
                className='w-full outline-none'
                src='https://picsum.photos/400/250' />
            </div>
            <div className='w-full flex outline-none'>
                <img 
                className='w-full outline-none'
                src='https://picsum.photos/400/250' />
            </div>
        </Slider>        
    );
}
