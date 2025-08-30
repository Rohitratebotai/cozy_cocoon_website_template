import { useLocation } from 'react-router-dom';
import { FaBed, FaShower, FaSwimmingPool, FaCar, FaWifi, FaInstagram, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { propertyData } from '../../../data';
// common amenities 
import clubhouse from '../../../assets/comon_amenities_img/Clubhouse.webp';
import pool from '../../../assets/comon_amenities_img/Swimming pool.webp';
import yogaRoom from '../../../assets/comon_amenities_img/Yoga Room.webp';
import spa from '../../../assets/comon_amenities_img/Spa.webp';
import indoorgames from '../../../assets/comon_amenities_img/Indoor Games.webp';
import partylawn from '../../../assets/comon_amenities_img/Party Lawn.webp';
import restaurant from '../../../assets/comon_amenities_img/Restaurant.webp';
import organicfarm from '../../../assets/comon_amenities_img/Organic Farming.webp';

// nearbyplaces 
import peth from '../../../assets/NearByplaces/peth fort.webp'
import bhimashankar from '../../../assets/NearByplaces/2 . Bhimashankar Hills.webp'
import matheran from '../../../assets/NearByplaces/3. Matheran.webp'
import bhivpuri from '../../../assets/NearByplaces/4. Bhivpuri Waterfall.webp'
import NdStudio from '../../../assets/NearByplaces/5. ND Studio.webp'
import kondhana from '../../../assets/NearByplaces/6. Kondhana Caves.webp'
import ulhas from '../../../assets/NearByplaces/7. Ulhas Valley.webp'
import kondeshwar from '../../../assets/NearByplaces/8. Kondeshwar Temple.webp'

export const amenitiesImages = [
    { name: "Club House", img: clubhouse },
    { name: "Swimming Pool", img: pool },
    { name: "Yoga Room", img: yogaRoom },
    { name: "Spa", img: spa },
    { name: "Indoor Games", img: indoorgames },
    { name: "Party Lawn", img: partylawn },
    { name: "Restaurant", img: restaurant },
    { name: "Organic Farm", img: organicfarm }
];

const nearbyPlaceImages = [
    peth,
    bhimashankar,
    matheran,
    bhivpuri,
    NdStudio,
    kondhana,
    ulhas,
    kondeshwar
];


interface SocialLink {
    type: string;
    url: string;
}

interface HostDetails {
    name: string;
    about: string;
    languages: string[];
    profile_image: string;
}

interface ContactDetails {
    phone: string;
    email: string;
    available_hours: string;
}

interface ApiDisplay {
    icon_left: string;
    icon_right: string;
    center_text: string;
}

interface PropertyAmenity {
    amenities_icon: string;
    amenities_count?: number;
    amenities_availablity?: string;
    amenities_type: string;
}

interface PropertyDetail {
    type: string;
    value: string;
}

interface PropertyAmenityImage {
    name: string;
    image: string;
}

interface Property {
    id: number;
    property_name: string;
    property_subtitle?: string;
    property_img: string[];
    property_amenities: PropertyAmenity[];
    property_description: string;
    property_amenities_img: PropertyAmenityImage[];
    property_nearplaces: string[];
    property_details: PropertyDetail[];
    property_aditional_details: PropertyDetail[];
    property_address: PropertyDetail[];
    property_mapSrc: string;
    booking_link?: string;
    property_social_links?: SocialLink[];
    host_details?: HostDetails;
    contact_details?: ContactDetails;
    additional_cost_note?: string;
    api_display?: ApiDisplay;
}

const PropertyDetails = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const [data, setData] = useState<Property | null>(null);

    useEffect(() => {
        propertyData.forEach(item => {
            item.properties.forEach((prop: any) => {
                if (prop.id === +slug) {
                    setData(prop);
                }
            });
        });
    }, [slug]);

    if (!data) return <p>Loading...</p>;

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'bed': return <FaBed />;
            case 'shower': return <FaShower />;
            case 'pool': return <FaSwimmingPool />;
            case 'car': return <FaCar />;
            case 'wifi': return <FaWifi />;
            case 'ac': return <TbAirConditioning />;
            default: return null;
        }
    };

    const getSocialIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'instagram': return <FaInstagram />;
            case 'youtube': return <FaYoutube />;
            case 'booking': return <FaExternalLinkAlt />;
            default: return <FaExternalLinkAlt />;
        }
    };

    const handleBookNow = () => {
        if (data?.booking_link) {
            window.open(data.booking_link, '_blank');
        } else {
            alert("Booking link is not available for this property. Please contact us for more information.");
        }
    };

    return (
        <section className="w-full mt-[25vh] py-6 tracking-wide">
            <div className="w-full flex flex-col gap-8 px-8 lg:px-32">
                <div className="sm:hidden fixed bottom-9 right-4 z-50">
                    <button
                        onClick={handleBookNow}
                        className="bg-[#01B7C2] hover:bg-[#01B7C2] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
                    >
                        Book Now
                    </button>
                </div>

                <div className='w-full h-fit flex md:flex-row flex-col justify-between items-center gap-4'>
                    <div className='w-full md:flex-1 h-[60vh] flex flex-col gap-1 overflow-hidden'>
                        <div className="w-full h-[90%] relative">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                className="w-full h-full rounded-lg"
                            >
                                {data.property_img.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`Property ${index + 1}`} className="w-full h-full object-cover" />
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-prev !text-white !bg-black/30 !w-10 !h-10 !rounded-full grid place-items-center !left-2"></div>
                                <div className="swiper-button-next !text-white !bg-black/30 !w-10 !h-10 !rounded-full grid place-items-center !right-2"></div>
                            </Swiper>
                        </div>
                        <div className='w-full h-[10%] flex items-center justify-between px-2'>

                            <p className="text-3xl capitalize font-medium">{data.property_name}</p>
                            {data.property_subtitle && <p className="text-lg italic text-gray-700">{data.property_subtitle}</p>}
                        </div>

                    </div>

                    <div className='flex-1 flex flex-col gap-4 justify-start items-start h-80 self-start'>
                        <div>
                            {data.property_description && (
                                <div className="w-full h-full flex flex-col gap-3 overflow-y-auto">
                                    <h2 className="text-xl font-semibold">Description</h2>
                                    <p className='text-justify'>{data.property_description}</p>
                                </div>
                            )}
                        </div>
                        <div className='h-[10%] flex items-start justify-start'>
                            <div>
                                {data.property_social_links && (
                                    <div className="flex gap-4 mt-2">
                                        {data.property_social_links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-xl"
                                                title={link.type}
                                            >
                                                <span className='bg-red-800'> {getSocialIcon(link.type)} </span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {data.host_details && (
                    <div className="border p-6 rounded-md w-full">
                        <h2 className="text-xl font-semibold mb-2">Host Details</h2>
                        <p><strong>Name:</strong> {data.host_details.name}</p>
                        <p><strong>About:</strong> {data.host_details.about}</p>
                        <p><strong>Languages:</strong> {data.host_details.languages.join(', ')}</p>
                    </div>
                )}

                {data.contact_details && (
                    <div className="border p-6 rounded-md w-full">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p><strong>Phone:</strong> {data.contact_details.phone}</p>
                        <p><strong>Email:</strong> {data.contact_details.email}</p>
                        <p><strong>Available:</strong> {data.contact_details.available_hours}</p>
                    </div>
                )}

                {/* amenitiesImages is declared in the top  */}
                <div className="w-full flex flex-col gap-8 border p-6 rounded-md">
                    <h2 className="text-xl font-semibold ">Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        {amenitiesImages.map((feature, index) => (
                            <div
                                key={index}
                                className="w-72 grid items-center gap-4 md:even:translate-y-6 md:odd:-translate-y-6 transition-all duration-300"
                            >
                                <img
                                    className="w-64 object-contain"
                                    src={feature.img}
                                    alt={feature.name}
                                />
                                <span>{feature.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Declared on the top  */}
                <div className="w-full flex flex-col gap-8 border p-6 rounded-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">Nearby Places</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {nearbyPlaceImages.map((place, index) => (
                            <div key={index} className="group  bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={place} alt='NearbyPlaces' className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-300 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>

                {data.api_display && (
                    <div className="border p-4 rounded-md flex items-center justify-between text-xl">
                        <span>{data.api_display.icon_left}</span>
                        <span className="font-semibold">{data.api_display.center_text}</span>
                        <span>{data.api_display.icon_right}</span>
                    </div>
                )}

                <div className="w-full border p-0 rounded-md">
                    {data?.property_mapSrc && (
                        <div className='flex flex-col items-center lg:items-start'>
                            <iframe
                                src={data.property_mapSrc}
                                loading="lazy"
                                className="w-full h-56 md:h-80 rounded-md"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PropertyDetails;
