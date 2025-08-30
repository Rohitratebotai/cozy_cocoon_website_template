import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import img1 from '../../../assets/testionial_reviewSection/review1.jpg';
import img2 from '../../../assets/testionial_reviewSection/soumils_review2.jpg';
import img3 from '../../../assets/testionial_reviewSection/soumils_review3.jpg';
import img4 from '../../../assets/testionial_reviewSection/review4.jpg';
import img5 from '../../../assets/testionial_reviewSection/review5.jpg';
import img6 from '../../../assets/testionial_reviewSection/review6.jpg';
import Heading from '../../commonComponents/heading/Heading';
import logo from '../../../assets/cosylogo.jpeg';

interface reviews {
    icon: any;
    review: string;
    clientName: string;
    thumbnail: string;
    rating: number;
}

const Homepage_Testimonial = () => {
    const data: reviews[] = [
        {
            icon: logo,
            review: "Cosy Villa was a perfect weekend escape. Just a 10-minute walk from the beach and in a peaceful neighborhood. The pool was sparkling clean, and Mr. Mokal, the caretaker, was always ready to help. Would definitely return!",
            clientName: 'Abhijit',
            thumbnail: img1,
            rating: 4.5
        },
        {
            icon: logo,
            review: "Visited with my family and we had a relaxing stay. The villa is spacious and cozy, with plenty of indoor and outdoor games for everyone. The homemade food by the caretaker was a highlight—fresh, simple, and delicious!",
            clientName: 'Snehal',
            thumbnail: img2,
            rating: 5
        },
        {
            icon: logo,
            review: "Such a comfortable stay! The caretaker was super helpful. I’d recommend trying the home-cooked meals, especially the prawns fry and sol kadhi—they were mouthwatering. Worth every rupee.",
            clientName: 'Archit',
            thumbnail: img3,
            rating: 4.7
        },
        {
            icon: logo,
            review: "Everything was clean and well-maintained—from the rooms to the pool. The caretaker went above and beyond to make sure we were comfortable. Definitely one of the better villa experiences I’ve had.",
            clientName: 'Shatayu',
            thumbnail: img4,
            rating: 4.5
        },
        {
            icon: logo,
            review: "Akshay’s villa was ideal for our group of 8. Spacious, quiet, and well-equipped. We didn’t have to worry about food either—the caretaker arranged amazing home-cooked meals. Felt like a home away from home!",
            clientName: 'Ashish',
            thumbnail: img5,
            rating: 4.8
        },
        {
            icon: logo,
            review: "Stayed here with family and absolutely loved it. The garden area is peaceful and perfect for morning walks. The villa has a great vibe, and the food arranged by Mr. Mokal was a real treat. Will be back soon!",
            clientName: 'Marci',
            thumbnail: img6,
            rating: 5
        }
    ];

    return (
        <div className=''>
            <span className='text-center'>
                <Heading title='Hear What Our Happy Guests Are Saying' />
            </span>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-10 pb-10 ">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{ nextEl: '.NextElement', prevEl: '.PrevElement' }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        468: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 }
                    }}
                    className="w-full"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border-2 bg-sky-100 border-sky-300 shadow-lg rounded-lg p-4 lg:p-6 flex flex-col gap-4 transform transition duration-300 h-[300px] md:h-[350px]">
                                {/* Logo Section */}
                                <div className="flex items-center gap-3">
                                    <img className="w-12 h-12 md:w-16 md:h-16 border rounded-full bg-black" src={logo} alt="Logo" />
                                </div>

                                {/* ⭐ Rating Section */}
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i}>{i + 1 <= Math.floor(item.rating) ? '★' : '☆'}</span>
                                    ))}
                                    <span className="text-gray-600 text-sm">({item.rating})</span>
                                </div>

                                {/* Review Text */}
                                <p className="text-sm text-gray-600 lg:text-lg leading-relaxed">
                                    {item.review.substring(0, 100)}...
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center justify-between border-t pt-3">
                                    <p className="font-medium text-sm lg:text-base text-gray-700">{item.clientName}</p>
                                    <img className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border" src={item.thumbnail} alt="Client Image" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='absolute top-1/2 left-0 right-0 z-20 flex justify-between items-center px-1 md:px-5 transform -translate-y-1/2'>
                    <div className='PrevElement flex text-xl md:text-2xl border justify-center items-center bg-white cursor-pointer h-10 w-10 md:h-14 md:w-14 rounded-full text-black'>
                        <GrFormPrevious />
                    </div>
                    <div className='NextElement flex text-xl md:text-2xl border justify-center items-center bg-white cursor-pointer h-10 w-10 md:h-14 md:w-14 rounded-full text-black'>
                        <MdOutlineNavigateNext />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage_Testimonial;
