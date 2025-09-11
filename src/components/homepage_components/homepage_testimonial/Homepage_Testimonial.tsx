import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import img1 from '../../../assets/testionial_reviewSection/cr1.png';
import img2 from '../../../assets/testionial_reviewSection/cr2.png';
import img3 from '../../../assets/testionial_reviewSection/cr3.png';
import img4 from '../../../assets/testionial_reviewSection/cr3.png';
import img5 from '../../../assets/testionial_reviewSection/cr5.png';
import img6 from '../../../assets/testionial_reviewSection/cr3.png';
import logo from '../../../assets/cultlogo.png';
import { FaQuoteLeft } from 'react-icons/fa';

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
            review: " vibes, refreshing stayStayed over here for 5 days with my family for a workation kinda peaceful outing.We had to search a lot before selecting an appropriate place for a longer stay, and this turned out to be just too perfect. We just relaxed, worked and had a great family time. The place was calm and soothing. The swimming pool and kitchen met our everyday requirements of an outing. The host was wonderful in helping us with the areas around the property.",
            clientName: 'nagaveni dc',
            thumbnail: img1,
            rating: 5
        },
        {
            icon: logo,
            review: "From cult interiors to top-notch service, every detail was thoughtfully arranged to make the experience feel special.Highly recommend for anyone looking to disconnect and recharge — a short stay that left a lasting impression",
            clientName: 'kanika verma',
            thumbnail: img2,
            rating: 5
        },
        {
            icon: logo,
            review: "Perfect party place Stayed over at this place with a group of friends. We had all that we required for a weekend outing and felt at home too The host was reachable to help with smallest of the things. Everything in the villa gave us a positive vibe. Loved the stay",
            clientName: 'Arjun Abrol',
            thumbnail: img3,
            rating: 5
        },
        {
            icon: logo,
            review: "A cult place , been thre with my family.Destination with beautiful interior with all required aminites. Smallest of detailing in the house reflects creative vision of the owner.Owner was very welcoming and responsive.A must visit place with family and friends, highly recommended.",
            clientName: 'Akshay Rawat',
            thumbnail: img4,
            rating: 5
        },
        {
            icon: logo,
            review: "Very nice stay , we relaxed and swimming pool as we require to stay cool and refreshing full fill our requirment . Thanks",
            clientName: 'Ashish',
            thumbnail: img5,
            rating: 5
        },
        {
            icon: logo,
            review: "Absolutely Perfect Getaway in Karjat! We had a wonderful stay at this villa in Karjat. The property is beautifully maintained, spacious, and surrounded by lush greenery—making it the perfect escape from city life. The rooms were clean, well-furnished, and had a cult vibe that made us feel right at home.",
            clientName: 'arpit oksiya',
            thumbnail: img6,
            rating: 5
        }
    ];


    const renderStars = (rating: number = 5) => {
        return (
            <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        )
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="py-10 text-primary md:py-14 tracking-wide flex justify-center items-center text-xl md:text-2xl lg:text-5xl font-medium relative">
                        <p className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-primary after:rounded-full after:transition-all after:duration-500 after:ease-in-out hover:after:w-0 cursor-pointer">
                            Hear What Our Happy Guests Are Saying
                        </p>
                    </div>
                </section>
                <div className="relative w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet bg-primary w-2 h-2 inline-block rounded-full mx-1 opacity-60 cursor-pointer transition-opacity',
                            bulletActiveClass: 'swiper-pagination-bullet-active opacity-100',
                        }}
                        navigation={{
                            nextEl: '.NextElement',
                            prevEl: '.PrevElement'
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            }
                        }}
                        className="testimonial-swiper pb-12"
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-auto min-h-72 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary">
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="mb-4">
                                            <FaQuoteLeft className="text-primary text-3xl opacity-50" />
                                        </div>
                                        <p className="text-gray-700 flex-grow mb-4">
                                            {item.review.length > 100
                                                ? item.review.substring(0, 150) + "..."
                                                : item.review}
                                        </p>
                                        <div className="mt-auto">
                                            {renderStars(item.rating)}
                                            <p className="font-medium text-gray-900 mt-3">{item.clientName}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between items-center px-2 transform -translate-y-1/2">
                        <button className="PrevElement flex justify-center items-center bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-800 border border-gray-200">
                            <GrFormPrevious className="text-xl md:text-2xl" />
                        </button>
                        <button className="NextElement flex justify-center items-center bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-800 border border-gray-200">
                            <MdOutlineNavigateNext className="text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage_Testimonial;