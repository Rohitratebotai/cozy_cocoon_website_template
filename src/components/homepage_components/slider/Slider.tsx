import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../../../App.css';
import './Slider.css'
import img1 from '../../../assets/cosy_cocoon_images/img_6.jpg';
import img2 from '../../../assets/cosy_cocoon_images/img_18.jpg';
import img3 from '../../../assets/cosy_cocoon_images/img_9.jpg';
import img4 from '../../../assets/cosy_cocoon_images/img_16.jpg';
import img5 from '../../../assets/cosy_cocoon_images/img_13.jpg';

import mimg1 from '../../../assets/cosy_cocoon_images/img_8.jpg';
import mimg2 from '../../../assets/cosy_cocoon_images/img_17.jpg';
import mimg3 from '../../../assets/cosy_cocoon_images/img_14.jpg';
import mimg4 from '../../../assets/cosy_cocoon_images/img_7.jpg';
import mimg5 from '../../../assets/cosy_cocoon_images/img_5.jpg';
import { useEffect, useState } from 'react';
// import Homepage_form from '../homepage_form/Homepage_form';

const Slider = () => {
    const [images, setImages] = useState<{ id: number; src: string; alt: string }[]>([]);

    const DesktopImages = [
        { id: 1, src: img1, alt: 'Image 1' },
        { id: 2, src: img2, alt: 'Image 2' },
        { id: 3, src: img3, alt: 'Image 3' },
        { id: 4, src: img4, alt: 'Image 4' },
        { id: 5, src: img5, alt: 'Image 5' },
    ];

    const MobileBannerImages = [
        { id: 1, src: mimg1, alt: 'Image 1' },
        { id: 2, src: mimg2, alt: 'Image 2' },
        { id: 3, src: mimg3, alt: 'Image 3' },
        { id: 4, src: mimg4, alt: 'Image 4' },
        { id: 5, src: mimg5, alt: 'Image 5' },
    ]

    useEffect(() => {
        const handleBannerImage = () => {
            setImages(window.innerWidth > 750 ? DesktopImages : MobileBannerImages);
        }
        handleBannerImage();
        window.addEventListener('resize', handleBannerImage);
        return () => {
            window.removeEventListener('resize', handleBannerImage);
        };
    }, []);

    return (
        <section className="relative text-black w-full flex justify-center items-center">
            <div className='mt-28 h-[70vh] md:h-[90vh] w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-[70vh] md:h-[90vh] w-full">
                                <img src={image.src} alt={image.alt} className="object-cover md:mt-0 object-center w-full 
                                h-[70vh]  md:w-full  md:h-full " />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Overlay Form */}
            {/* <div className='z-20 absolute inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
                <div className='flex flex-col items-center gap-5 text-center tracking-wide capitalize'>
                    <p className='text-3xl hidden md:block font-medium text-[#fff] '>Your Dream Escape Awaits</p>
                    <div>
                        <Homepage_form />
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Slider;