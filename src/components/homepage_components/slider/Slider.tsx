import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../../../App.css';
import './Slider.css'
import img1 from '../../../assets/cosy_villa_images/img_7.jpeg';
import img2 from '../../../assets/cosy_villa_images/img_20.jpeg';
import img3 from '../../../assets/cosy_villa_images/img_21.jpeg';
import img4 from '../../../assets/cosy_villa_images/img_10.jpeg';
import img5 from '../../../assets/cosy_villa_images/img_16.jpeg';
import img6 from '../../../assets/cosy_villa_images/img_4.jpeg';
// import Homepage_form from '../homepage_form/Homepage_form';

const Slider = () => {

    const images = [
        { id: 1, src: img1, alt: 'Image 1' },
        { id: 2, src: img2, alt: 'Image 2' },
        { id: 3, src: img3, alt: 'Image 3' },
        { id: 4, src: img4, alt: 'Image 4' },
        { id: 5, src: img5, alt: 'Image 5' },
        { id: 6, src: img6, alt: 'Image 6' },
    ];

    return (
        <section className="relative text-black w-full flex justify-center items-center">
            <div className='h-[50vh] md:h-[110vh] w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-[70vh] md:h-[110vh] w-full">
                                <img src={image.src} alt={image.alt} className="object-contain md:object-cover -mt-2  md:mt-0 object-center w-[100%]  md:w-full h-[100%] md:h-full " />
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