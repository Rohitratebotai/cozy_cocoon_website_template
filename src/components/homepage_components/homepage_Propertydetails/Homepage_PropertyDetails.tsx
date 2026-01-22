import { Link, useLocation } from 'react-router-dom';
import { FaBed, FaShower, FaSwimmingPool, FaCar, FaWifi, FaCheckCircle } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
// import { MdLocationOn } from "react-icons/md";

import { propertyData } from '../../../data';
import hotelbookingSVG from '../../../assets/Hotel Booking-rafiki.svg'
// common amenities 
import clubhouse from '../../../assets/comon_amenities_img/Clubhouse.webp';
import pool from '../../../assets/comon_amenities_img/Swimming pool.webp';
import yogaRoom from '../../../assets/comon_amenities_img/Yoga Room.webp';
import spa from '../../../assets/comon_amenities_img/Spa.webp';
import indoorgames from '../../../assets/comon_amenities_img/Indoor Games.webp';
import partylawn from '../../../assets/comon_amenities_img/Party Lawn.webp';
import restaurant from '../../../assets/comon_amenities_img/Restaurant.webp';
import organicfarm from '../../../assets/comon_amenities_img/Organic Farming.webp';


// fancybox 
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { FaChevronUp } from "react-icons/fa";
import {
    FaTv,
    FaLeaf,
    FaBroom,
    FaPaw
} from "react-icons/fa";

import { TbMicrowave } from "react-icons/tb";
import { MdKitchen, MdPower, MdBalcony } from "react-icons/md";

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

// const nearbyPlaceImages = [
//     peth,
//     bhimashankar,
//     matheran,
//     bhivpuri,
//     NdStudio,
//     kondhana,
//     ulhas,
//     kondeshwar
// ];


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
    img: string;
    icon: string;
    points: string[];
}

interface PropertyNearPlace {
    name: string;
    img: string;
}

interface Property {
    id: number;
    property_name: string;
    property_logo?: string;
    property_subtitle?: string;
    property_img: string[];
    property_amenities: PropertyAmenity[];
    property_overview: string;
    property_description: string;
    property_socialicons: {
        media: SocialLink[];
        otas: SocialLink[];
    };
    property_amenities_img: PropertyAmenityImage[];
    property_nearplaces: PropertyNearPlace[]; // <-- FIXED HERE
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
    house_rules?: string[];
}

const PropertyDetails = () => {
    const location = useLocation();
    const slug = location.pathname.split('/')[2];
    const [data, setData] = useState<Property | null>(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showAllAmenities, setShowAllAmenities] = useState(false);

    const renderIcon: Record<string, JSX.Element> = {
        bed: <FaBed className="text-xl" />,
        shower: <FaShower className="text-xl" />,
        pool: <FaSwimmingPool className="text-xl" />,
        car: <FaCar className="text-xl" />,
        wifi: <FaWifi className="text-xl" />,
        ac: <TbAirConditioning className="text-xl" />,
        kitchen: <MdKitchen className="text-xl" />,
        fridge: <MdKitchen className="text-xl" />,
        paw: <FaPaw className="text-xl" />,
        microwave: <TbMicrowave className="text-xl" />,
        tv: <FaTv className="text-xl" />,
        power: <MdPower className="text-xl" />,
        garden: <FaLeaf className="text-xl" />,
        balcony: <MdBalcony className="text-xl" />,
        housekeeping: <FaBroom className="text-xl" />,
        pet: <FaPaw className="text-xl" />,
    };

    // Refs for each section
    const overviewRef = useRef(null);
    const amenitiesRef = useRef(null);
    const locationRef = useRef(null);
    const rulesRef = useRef(null);
    const hostRef = useRef(null);
    const propertyRef = useRef(null);
    const nearbyRef = useRef(null);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'host', label: 'Host' },
        { id: 'amenities', label: 'Amenities' },
        { id: 'property', label: 'Property' },
        { id: 'nearby', label: 'Nearby' },
        { id: 'location', label: 'Location' },
        { id: 'rules', label: 'House Rules' },
    ];

    // Map tab IDs to refs
    const tabRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        overview: overviewRef,
        amenities: amenitiesRef,
        property: propertyRef,
        location: locationRef,
        nearby: nearbyRef,
        rules: rulesRef,
        host: hostRef,
    };

    useEffect(() => {
        propertyData.forEach(item => {
            item.properties.forEach((prop: any) => {
                if (prop.id === +slug) {
                    setData(prop);
                }
            });
        });
    }, [slug]);

    useEffect(() => {
        Fancybox.bind("[data-fancybox='property-gallery']", {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: ["zoom", "fullscreen", "close"],
            },
        } as any);

        return () => {
            Fancybox.destroy();
        };
    }, []);

    if (!data) return <p>Loading...</p>;

    const scrollToSection = (sectionRef: any, tabId: any) => {
        setActiveTab(tabId);
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="w-full min-h-screen bg-Bg_Primary pt-44 pb-8 px-4">
            <div className="w-[90%] mx-auto relative">
                {/* Header */}
                {/* <div className="flex gap-4 items-center mb-6">
                    {data.property_logo && (
                        <img
                            src={data.property_logo}
                            alt={data.property_name}
                            className="h-20 w-20 object-cover rounded-full border-4 border-gray-200 shadow-md"
                        />
                    )}
                    <div className="flex-1">
                        <h1 className="text-4xl font-serif font-light text-primary tracking-wide">
                            {data.property_name}
                        </h1>
                        <p className="text-sm text-primary mt-1 flex items-center gap-1">
                            <MdLocationOn className="text-red-500" /> Karjat, Maharashtra
                        </p>
                    </div>
                </div> */}
                <div className='my-2 pb-4'>
                    <Link to="/"><span style={{
                        fontFamily: "'Caveat', cursive"
                    }} className='rounded-md bg-white text-Bg_Primary text-2xl px-4 py-1'>Take me home</span></Link>
                </div>

                {/* Slider and Description Combo */}
                <div className="w-full flex md:flex-row flex-col justify-between items-start gap-4 mb-8">
                    {/* Left side swiper */}
                    <div className="w-full md:flex-1 h-[70vh] flex flex-col gap-1 overflow-hidden">
                        <div className="w-full h-full relative overflow-hidden rounded-xl">
                            {/* Elegant Border Frame */}
                            <div className="pointer-events-none absolute inset-0 z-20">
                                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8),inset_0_0_0_5px_rgba(139,69,19,0.9),inset_0_0_0_6px_rgba(218,165,32,0.6)] border-[6px] border-amber-900/80" />
                            </div>

                            {/* Image Slider */}
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                className="w-full h-full rounded-xl"
                                style={{ height: '100%' }}
                            >
                                {data.property_img.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <a
                                            href={img}
                                            data-fancybox="property-gallery"
                                            data-caption={`Photo ${idx + 1}`}
                                            className="block w-full h-full"
                                        >
                                            <img
                                                src={img}
                                                alt={`Property ${idx + 1}`}
                                                className="w-full h-full object-cover rounded-xl"
                                                loading="lazy"
                                            />
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Show More Button */}
                            <button className="absolute bottom-4 right-4 z-20 bg-black/60 text-white text-sm px-4 py-2 rounded-md hover:bg-black transition">
                                Show more photos
                            </button>
                        </div>
                    </div>

                    {/* Right side description */}
                    <div className="flex-1 flex flex-col gap-4 justify-start items-start h-auto md:h-[70vh] self-start">
                        <div className="relative w-full h-full bg-amber-50 rounded-xl border-2 border-amber-900 shadow-lg overflow-hidden"
                            style={{
                                boxShadow: '6px 6px 0px rgba(120, 53, 15, 0.2)',
                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(120, 53, 15, 0.04) 28px, rgba(120, 53, 15, 0.04) 29px)'
                            }}>

                            {/* Washi tape at top */}
                            <div className="absolute -top-3 left-12 w-24 h-7 bg-blue-300 opacity-60 rotate-[-3deg] border border-blue-500 z-10"></div>
                            <div className="absolute -top-3 right-12 w-24 h-7 bg-pink-300 opacity-60 rotate-[3deg] border border-pink-500 z-10"></div>

                            {/* Corner decorations */}
                            <div className="absolute top-3 left-3 w-10 h-10 border-l-2 border-t-2 border-amber-900 opacity-25"></div>
                            <div className="absolute top-3 right-3 w-10 h-10 border-r-2 border-t-2 border-amber-900 opacity-25"></div>

                            {/* Red margin line like notebook */}
                            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-400 opacity-30"></div>

                            <div className="w-full h-full p-3 sm:p-3 pl-16 flex flex-col gap-4 overflow-y-auto"
                                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgb(120, 53, 15) transparent' }}>

                                {/* Title with hand-drawn underline */}
                                <h2
                                    style={{
                                        fontFamily: "'Caveat', cursive"
                                    }}
                                    className="text-3xl sm:text-4xl font-bold text-amber-900 relative inline-block w-fit">
                                    Description
                                    <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 150 6">
                                        <path d="M 0 3 Q 37.5 1, 75 3 T 150 3"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            opacity="0.4"
                                            strokeLinecap="round" />
                                    </svg>
                                    {/* Small star decoration */}
                                    <span className="absolute -right-8 -top-2 text-amber-900 text-xl">✦</span>
                                </h2>

                                {/* Description text with journal style */}
                                <div className="relative bg-white rounded-lg border border-amber-300 p-4 shadow-sm">
                                    {/* Small corner fold */}
                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-amber-200 border-r-transparent"></div>

                                    <p className="text-justify text-gray-800 leading-relaxed text-base"
                                        style={{
                                            textIndent: '2em',
                                            hyphens: 'auto'
                                        }}>
                                        {data.property_description.slice(0, 500)}...
                                    </p>

                                    {/* Decorative dots at end */}
                                    <div className="flex gap-1 mt-2 justify-end">
                                        <div className="w-1.5 h-1.5 bg-amber-900 rounded-full opacity-30"></div>
                                        <div className="w-1.5 h-1.5 bg-amber-900 rounded-full opacity-30"></div>
                                        <div className="w-1.5 h-1.5 bg-amber-900 rounded-full opacity-30"></div>
                                    </div>
                                </div>
                                {/* social icons  */}
                                <div className='flex justify-between'>
                                    {/* Media Links: */}
                                    <div className="flex gap-4 mt-4">
                                        {data.property_socialicons.media.map((social, index) => (
                                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                                <img src={social.type} alt={social.type} className="w-10 h-10 rounded-full object-cover" />
                                            </a>
                                        ))}
                                    </div>
                                    {/* Ota links  */}
                                    <div className="flex gap-4 mt-4">
                                        {data.property_socialicons.otas.map((social, index) => (
                                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                                <img src={social.type} alt={social.type} className="w-10 h-10 rounded-full object-cover" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Hand-drawn button */}
                                <button className="relative cursor-pointer text-lg sm:text-xl font-bold bg-amber-100 text-amber-900 px-6 py-3 w-fit rounded-lg border-2 border-amber-900 hover:bg-amber-200 transition-all hover:scale-105 hover:-rotate-1 shadow-md group"
                                    style={{
                                        boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.3)',
                                        fontFamily: "'Caveat', cursive"
                                    }}>
                                    {/* Arrow decoration */}
                                    <span className="inline-block mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                    Take a Tour
                                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">←</span>

                                    {/* Dashed border decoration */}
                                    <div className="absolute inset-0 border-2 border-dashed border-amber-900 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>

                                    {/* Small stars around button */}
                                    <span className="absolute -top-2 -left-2 text-amber-900 text-sm opacity-50">✦</span>
                                    <span className="absolute -bottom-2 -right-2 text-amber-900 text-sm opacity-50">✦</span>
                                </button>

                            </div>

                            {/* Bottom corner decorations */}
                            <div className="absolute bottom-3 left-3 w-10 h-10 border-l-2 border-b-2 border-amber-900 opacity-25"></div>
                            <div className="absolute bottom-3 right-3 w-10 h-10 border-r-2 border-b-2 border-amber-900 opacity-25"></div>
                        </div>
                    </div>
                </div>

                {/* Sticky Tabs Navigation */}
                <div className="sticky top-36 z-40 mb-6">
                    {/* Notebook tab style container */}
                    <div className="relative bg-amber-50 rounded-xl border-2 border-amber-900 shadow-lg overflow-hidden"
                        style={{
                            boxShadow: '0 6px 0px rgba(120, 53, 15, 0.2)',
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(120, 53, 15, 0.02) 40px, rgba(120, 53, 15, 0.02) 41px)'
                        }}>

                        {/* Spiral binding decoration */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-amber-100 border-r-2 border-amber-900 flex flex-col justify-around py-2">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-500 mx-auto shadow-inner"></div>
                            ))}
                        </div>

                        {/* Washi tape decoration at top */}
                        <div className="absolute -top-2 left-1/4 w-20 h-6 bg-yellow-300 opacity-60 rotate-[-2deg] border border-yellow-500 z-10"></div>
                        <div className="absolute -top-2 right-1/4 w-20 h-6 bg-pink-300 opacity-60 rotate-[2deg] border border-pink-500 z-10"></div>

                        {/* Corner decorations */}
                        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-900 opacity-20"></div>

                        {/* Tabs container */}
                        <div className="flex border-b-2 border-amber-900 overflow-x-auto pl-8 bg-white"
                            style={{ scrollbarWidth: 'thin' }}>
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        style={{
                                            fontFamily: "'Caveat', cursive"
                                        }}
                                        key={tab.id}
                                        onClick={() => scrollToSection(tabRefs[tab.id], tab.id)}
                                        className={`relative px-4 py-2 sm:px-8 sm:py-5 text-base sm:text-2xl font-bold whitespace-nowrap transition-all ${isActive
                                            ? 'text-amber-900 bg-amber-100 -mb-0.5'
                                            : 'text-gray-600 hover:text-amber-900 hover:bg-amber-50'
                                            }`}
                                    >
                                        {/* Tab label */}
                                        <span className="relative z-10">
                                            {tab.label}
                                        </span>

                                        {/* Hand-drawn underline for active tab */}
                                        {isActive && (
                                            <>
                                                <svg className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5" height="6" viewBox="0 0 100 6">
                                                    <path d="M 0 3 Q 25 1, 50 3 T 100 3"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        opacity="0.5"
                                                        strokeLinecap="round" />
                                                </svg>

                                                {/* Tab divider lines */}
                                                <div className="absolute -left-px top-2 bottom-2 w-0.5 bg-amber-900 opacity-20"></div>
                                                <div className="absolute -right-px top-2 bottom-2 w-0.5 bg-amber-900 opacity-20"></div>
                                            </>
                                        )}

                                        {/* Sketchy top border for active tab */}
                                        {isActive && (
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-amber-900 opacity-30"
                                                style={{
                                                    clipPath: 'polygon(0 0, 5% 80%, 15% 20%, 25% 70%, 35% 30%, 45% 60%, 55% 40%, 65% 75%, 75% 25%, 85% 65%, 95% 35%, 100% 0)'
                                                }}></div>
                                        )}

                                        {/* Hover state decoration */}
                                        {!isActive && (
                                            <div className="absolute inset-0 border-2 border-transparent hover:border-amber-300 hover:border-dashed rounded transition-all"></div>
                                        )}

                                        {/* Small corner fold effect for active tab */}
                                        {isActive && (
                                            <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-amber-200 border-r-transparent opacity-50"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Bottom paper texture */}
                        <div className="absolute bottom-0 left-8 right-0 h-1 bg-gradient-to-r from-amber-900/10 via-transparent to-amber-900/10"></div>
                    </div>

                    {/* Bookmark ribbon decoration */}
                    <div className="absolute -bottom-8 right-12 w-8 h-12 bg-red-500 shadow-lg z-0"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
                            borderLeft: '1px solid rgba(139, 0, 0, 0.3)',
                            borderRight: '1px solid rgba(139, 0, 0, 0.3)'
                        }}></div>
                </div>

                {/* Overview Section */}
                <div ref={overviewRef} className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{
                        boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)',
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(120, 53, 15, 0.04) 30px, rgba(120, 53, 15, 0.04) 31px)'
                    }}>

                    {/* Sketch-style corner decorations */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30"></div>
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30"></div>

                    {/* Washi tape at top */}
                    <div className="absolute -top-3 left-20 w-24 h-7 bg-green-300 opacity-60 rotate-[-3deg] border border-green-500 z-10"></div>
                    <div className="absolute -top-3 right-20 w-24 h-7 bg-purple-300 opacity-60 rotate-[3deg] border border-purple-500 z-10"></div>

                    {/* Pushpin decoration */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                            <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-blue-700 shadow-lg"></div>
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-blue-700"></div>
                        </div>
                    </div>

                    {/* Red margin line */}
                    <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-400 opacity-30"></div>

                    {/* Title with hand-drawn underline and badge */}
                    <div className="mb-6 pl-8">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h2
                                style={{
                                    fontFamily: "'Caveat', cursive"
                                }}
                                className="text-4xl md:text-5xl font-semibold text-amber-900 relative inline-block">
                                Overview
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 150 8">
                                    <path d="M 0 4 Q 37.5 6, 75 4 T 150 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        opacity="0.4"
                                        strokeLinecap="round" />
                                </svg>
                            </h2>
                            {/* Small banner badge */}
                            <div className="inline-block px-3 py-1 bg-amber-900 text-amber-50 text-xs font-bold rounded-full transform rotate-2 shadow-md">
                                ★ FEATURED ★
                            </div>
                        </div>
                    </div>

                    <div className="pl-8">
                        {/* Text content with journal style */}
                        <div className="relative bg-white rounded-lg border-2 border-amber-900 p-3 mb-6 shadow-md"
                            style={{ boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.15)' }}>

                            {/* Corner fold effect */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-amber-200 border-r-transparent"></div>

                            {/* Small decorative corner */}
                            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-900 opacity-20"></div>
                            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-900 opacity-20"></div>

                            {/* Highlighter effect on first line */}
                            <div className="absolute top-3 left-6 right-24 h-7 bg-yellow-200 opacity-30 rounded"></div>

                            <p className={`relative text-gray-800 leading-relaxed text-justify text-base z-10 ${showFullDescription ? '' : 'line-clamp-4'}`}
                                style={{ textIndent: '2em' }}>
                                {data.property_overview}
                            </p>

                            {/* Decorative dots if text is collapsed */}
                            {!showFullDescription && data.property_overview.length > 300 && (
                                <div className="flex gap-1 mt-2 justify-center">
                                    <div className="w-2 h-2 bg-amber-900 rounded-full opacity-40"></div>
                                    <div className="w-2 h-2 bg-amber-900 rounded-full opacity-40"></div>
                                    <div className="w-2 h-2 bg-amber-900 rounded-full opacity-40"></div>
                                </div>
                            )}
                        </div>

                        {/* Toggle button with sketch style */}
                        {data.property_overview.length > 300 && (
                            <button
                                style={{
                                    fontFamily: "'Caveat', cursive"
                                }}
                                className="relative cursor-pointer text-xl font-bold bg-amber-100 text-amber-900 px-6 py-3 w-fit rounded-lg border-2 border-amber-900 hover:bg-amber-200 transition-all hover:scale-105 hover:rotate-1 shadow-md group"
                                onClick={() => setShowFullDescription((prev: boolean) => !prev)}
                            >
                                {/* Icon decoration */}
                                <span className="inline-block mr-2 text-xl group-hover:scale-110 transition-transform">
                                    {showFullDescription ? '↑' : '↓'}
                                </span>
                                {showFullDescription ? 'View Less' : 'View More'}
                                <span className="inline-block ml-2 text-xl group-hover:scale-110 transition-transform">
                                    {showFullDescription ? '↑' : '↓'}
                                </span>

                                {/* Shadow effect */}
                                <div className="absolute inset-0 border-2 border-dashed border-amber-900 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>

                                {/* Button shadow */}
                                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-amber-900 rounded-lg opacity-20 -z-20"></div>

                                {/* Small decorative stars */}
                                <span className="absolute -top-1 -left-1 text-amber-900 text-xs opacity-50">✦</span>
                                <span className="absolute -bottom-1 -right-1 text-amber-900 text-xs opacity-50">✦</span>
                            </button>
                        )}
                    </div>

                    {/* Bottom corner decorations */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-amber-900 opacity-30"></div>
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-30"></div>

                    {/* Bookmark decoration */}
                    <div className="absolute -bottom-8 right-16 w-8 h-12 bg-red-500 shadow-lg"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
                            borderLeft: '1px solid rgba(139, 0, 0, 0.4)',
                            borderRight: '1px solid rgba(139, 0, 0, 0.4)'
                        }}></div>

                    {/* Optional sticky note decoration */}
                    {showFullDescription && (
                        <div className="absolute -right-6 top-1/4 w-28 h-28 bg-pink-200 shadow-lg transform rotate-12 border border-pink-300 flex items-center justify-center"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,0,0,0.04) 18px, rgba(0,0,0,0.04) 19px)'
                            }}>
                            <div className="text-center">
                                <span className="text-2xl block">📖</span>
                                <span className="text-xs text-gray-700 font-bold"
                                    style={{ fontFamily: "'Caveat', cursive" }}>
                                    Full Story
                                </span>
                            </div>
                            {/* Pin on sticky note */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-red-700 shadow-sm">
                                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-red-700"></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Host details Section */}
                <div
                    ref={hostRef}
                    className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{
                        boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)',
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(120, 53, 15, 0.04) 30px, rgba(120, 53, 15, 0.04) 31px)',
                    }}
                >
                    {/* Corner sketch */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30" />
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30" />

                    {/* Washi tape */}
                    <div className="absolute -top-3 left-24 w-28 h-7 bg-purple-300 opacity-60 rotate-[-2deg] border border-purple-500 z-10" />
                    <div className="absolute -top-3 right-24 w-28 h-7 bg-green-300 opacity-60 rotate-[2deg] border border-green-500 z-10" />

                    {/* Red margin line */}
                    <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-400 opacity-30" />

                    {/* Title */}
                    <div className="mb-3 pl-8">
                        <h2
                            style={{ fontFamily: "'Caveat', cursive" }}
                            className="text-4xl md:text-5xl font-semibold text-amber-900 relative inline-block"
                        >
                            Host & Contact
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 150 8">
                                <path
                                    d="M 0 4 Q 37.5 6, 75 4 T 150 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h2>
                    </div>

                    <div className="pl-8 space-y-8">
                        {/* Host Card */}
                        {data.host_details && (
                            <div
                                className="relative bg-white rounded-lg border-2 border-amber-900 p-3 shadow-md"
                                style={{ boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.15)' }}
                            >
                                {/* Fold */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[22px] border-r-[22px] border-t-amber-200 border-r-transparent" />

                                <div className="flex justify-between items-start gap-4">
                                    <div className='flex gap-5'>
                                        <div className="w-16 h-16 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center text-2xl font-bold shadow">
                                            {data.host_details.name.charAt(0)}
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-800">
                                                {data.host_details.name}
                                            </h4>
                                            <p className="text-gray-600 text-sm mt-1">
                                                {data.host_details.about}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                <span className="font-medium">Languages:</span>{' '}
                                                {data.host_details.languages.join(', ')}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            data.contact_details && (
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3 bg-amber-100 px-4 py-3 rounded-lg border border-amber-900/30">
                                                        <span className="font-medium text-amber-900">📞 Phone:</span>
                                                        <span className="text-gray-700">{data.contact_details.phone}</span>
                                                    </div>

                                                    <div className="flex items-center gap-3 bg-amber-100 px-4 py-3 rounded-lg border border-amber-900/30">
                                                        <span className="font-medium text-amber-900">✉️ Email:</span>
                                                        <span className="text-gray-700">{data.contact_details.email}</span>
                                                    </div>
                                                </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom corners */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-amber-900 opacity-30" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-30" />
                </div>


                {/* Amenities Section */}
                <div
                    ref={amenitiesRef}
                    className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{
                        boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)',
                        backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(120, 53, 15, 0.04) 30px, rgba(120, 53, 15, 0.04) 31px)',
                    }}
                >
                    {/* Sketch corners */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30" />
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30" />

                    {/* Washi tape */}
                    <div className="absolute -top-3 left-20 w-28 h-7 bg-yellow-300 opacity-60 rotate-[-2deg] border border-yellow-500 z-10" />
                    <div className="absolute -top-3 right-24 w-28 h-7 bg-blue-300 opacity-60 rotate-[2deg] border border-blue-500 z-10" />

                    {/* Margin line */}
                    <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-400 opacity-30" />

                    {/* Title */}
                    <div className="mb-4 pl-8">
                        <h2
                            style={{ fontFamily: "'Caveat', cursive" }}
                            className="text-4xl md:text-5xl font-semibold text-amber-900 relative inline-block"
                        >
                            Amenities
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 150 8">
                                <path
                                    d="M 0 4 Q 37.5 6, 75 4 T 150 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </h2>
                    </div>

                    {/* Amenities grid */}
                    <div className="pl-8 grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
                        {(showAllAmenities
                            ? data.property_amenities
                            : data.property_amenities.slice(0, 6)
                        ).map((amenity, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-lg border-2 border-amber-900 p-4 flex items-center gap-4 shadow-md hover:rotate-1 transition-transform"
                                style={{ boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.15)' }}
                            >
                                {/* Paper fold */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-r-[18px] border-t-amber-200 border-r-transparent" />

                                {/* Icon */}
                                <div className="w-8 h-8 bg-amber-900 rounded-full flex items-center justify-center text-white text-xl shadow">
                                    {renderIcon[amenity.amenities_icon]}
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">
                                        {amenity.amenities_type}
                                    </p>
                                </div>

                                {/* Check */}
                                <FaCheckCircle className="text-green-600 text-xl" />
                            </div>
                        ))}
                    </div>

                    {/* View more / less */}
                    {data.property_amenities.length > 6 && (
                        <div className="pl-8">
                            <button
                                style={{ fontFamily: "'Caveat', cursive" }}
                                onClick={() => setShowAllAmenities((prev) => !prev)}
                                className="relative bg-amber-100 text-amber-900 px-6 py-3 rounded-lg border-2 border-amber-900 font-bold text-xl hover:bg-amber-200 hover:scale-105 transition-all shadow-md group"
                            >
                                <span className="mr-2">
                                    {showAllAmenities ? '↑' : '↓'}
                                </span>
                                {showAllAmenities ? 'View Less' : 'View More'}
                                <span className="ml-2">
                                    {showAllAmenities ? '↑' : '↓'}
                                </span>

                                {/* Sketch shadow */}
                                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-amber-900 rounded-lg opacity-20 -z-10" />
                            </button>
                        </div>
                    )}

                    {/* Bottom corners */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-amber-900 opacity-30" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-30" />
                </div>


                {/* property amenities images section */}
                <div ref={propertyRef} className="bg-white rounded-xl shadow-sm p-3 mb-6 scroll-mt-32">
                    <h3
                        style={{
                            fontFamily: "'Caveat', cursive"
                        }}
                        className="text-4xl font-semibold mb-4 text-BgPrimary">Discover the property</h3>

                    <div className="relative px-8 py-12">
                        {/* Sketch-style decorative elements */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30"></div>
                        <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30"></div>

                        {/* Navigation arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
                            <button className="property-amenities-swiper-prev bg-white border-2 border-amber-900 text-amber-900 rounded-full p-3 shadow-lg hover:bg-amber-50 transition-all hover:scale-110 hover:-translate-x-1">
                                <FaChevronUp className="rotate-[-90deg] w-4 h-4" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
                            <button className="property-amenities-swiper-next bg-white border-2 border-amber-900 text-amber-900 rounded-full p-3 shadow-lg hover:bg-amber-50 transition-all hover:scale-110 hover:translate-x-1">
                                <FaChevronUp className="rotate-90 w-4 h-4" />
                            </button>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.property-amenities-swiper-prev',
                                nextEl: '.property-amenities-swiper-next',
                            }}
                            className="w-full"
                        >
                            {data.property_amenities_img.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full px-4 md:px-12 lg:px-20">
                                        {/* Sketch-style tape effect */}
                                        <div className="relative">
                                            <div className="absolute -top-4 left-1/4 w-20 h-8 bg-amber-200 opacity-60 rotate-[-3deg] border border-amber-400 z-10"></div>
                                            <div className="absolute -top-4 right-1/4 w-20 h-8 bg-amber-200 opacity-60 rotate-[3deg] border border-amber-400 z-10"></div>
                                        </div>

                                        {/* Image section with sketch border */}
                                        <div className="relative mb-8">
                                            <div className="border-2 border-dashed border-amber-900 rounded-lg overflow-hidden"
                                                style={{ boxShadow: '6px 6px 0px rgba(120, 53, 15, 0.15)' }}>
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-72 md:h-96 p-4 object-cover grayscale-[15%] contrast-[1.05]"
                                                    style={{ filter: 'sepia(0.15) brightness(1.03)' }}
                                                />
                                                {/* Sketch overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-900 opacity-5 pointer-events-none"></div>
                                            </div>
                                        </div>

                                        {/* Content section */}
                                        <div className="relative">
                                            {/* Title with icon */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-4xl">{renderIcon[item.icon]}</span>
                                                <h3 className="font-bold text-2xl md:text-3xl text-amber-900 relative inline-block">
                                                    {item.name}
                                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-900 opacity-20"></span>
                                                </h3>
                                            </div>

                                            {/* Points list with notebook style */}
                                            <div className="relative bg-amber-50 rounded-lg border-2 border-amber-900 p-3 md:p-8"
                                                style={{
                                                    boxShadow: '4px 4px 0px rgba(120, 53, 15, 0.1)',
                                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(120, 53, 15, 0.04) 28px, rgba(120, 53, 15, 0.04) 29px)'
                                                }}>
                                                {/* Corner decorations */}
                                                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-900 opacity-30"></div>
                                                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-900 opacity-30"></div>

                                                <ul className="space-y-3">
                                                    {item.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-gray-800">
                                                            <span className="text-amber-900 font-bold text-lg mt-0.5">✓</span>
                                                            <span className="text-base md:text-lg leading-relaxed">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Bottom corner decoration */}
                                        <div className="absolute bottom-4 right-8 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-20"></div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Location Section */}
                <div ref={locationRef} className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{ boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)' }}>

                    {/* Sketch-style corner decorations */}
                    <div className="absolute top-3 left-3 w-16 h-16 border-l-2 border-t-2 border-amber-900 opacity-30"></div>
                    <div className="absolute top-3 right-3 w-16 h-16 border-r-2 border-t-2 border-amber-900 opacity-30"></div>
                    <div className="absolute bottom-3 left-3 w-16 h-16 border-l-2 border-b-2 border-amber-900 opacity-30"></div>
                    <div className="absolute bottom-3 right-3 w-16 h-16 border-r-2 border-b-2 border-amber-900 opacity-30"></div>

                    {/* Tape effect at top */}
                    <div className="absolute -top-4 left-1/4 w-24 h-8 bg-amber-200 opacity-70 rotate-[-2deg] border border-amber-400 z-10"></div>
                    <div className="absolute -top-4 right-1/4 w-24 h-8 bg-amber-200 opacity-70 rotate-[2deg] border border-amber-400 z-10"></div>

                    {/* Title with hand-drawn underline */}
                    <h2
                        style={{
                            fontFamily: "'Caveat', cursive"
                        }}
                        className="text-4xl md:text-5xl font-semibold mb-8 text-amber-900 relative inline-block">
                        Location & Nearby
                        <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                            <path d="M 0 4 Q 50 6, 100 4 T 200 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.4"
                                strokeLinecap="round" />
                        </svg>
                    </h2>

                    {/* Map container with sketch frame */}
                    <div className="relative">
                        {/* Pin/thumbtack decoration */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                            <div className="relative">
                                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 shadow-lg"></div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-red-700"></div>
                            </div>
                        </div>

                        {/* Map frame with multiple borders */}
                        <div className="relative p-3 bg-white rounded-lg border-4 border-amber-900"
                            style={{ boxShadow: '6px 6px 0px rgba(120, 53, 15, 0.2)' }}>

                            {/* Inner dashed border */}
                            <div className="border-2 border-dashed border-amber-700 rounded overflow-hidden h-96 md:h-[28rem] relative">
                                <iframe
                                    src={data.property_mapSrc}
                                    className="w-full h-full"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                                {/* Sketch overlay effect */}
                                <div className="absolute inset-0 pointer-events-none border-4 border-transparent"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(120,53,15,0.05) 100%)'
                                    }}></div>
                            </div>

                            {/* Corner stamps/decorations */}
                            <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-amber-900 opacity-25 rounded-tr"></div>
                            <div className="absolute bottom-2 left-2 w-10 h-10 border-l-2 border-b-2 border-amber-900 opacity-25 rounded-bl"></div>
                        </div>

                        {/* Compass decoration */}
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-100 rounded-full border-2 border-amber-900 flex items-center justify-center shadow-lg z-10"
                            style={{ transform: 'rotate(15deg)' }}>
                            <div className="relative w-full h-full flex items-center justify-center">
                                <span className="absolute top-1 text-amber-900 font-bold text-xs">N</span>
                                <span className="absolute bottom-1 text-amber-900 font-bold text-xs">S</span>
                                <span className="absolute left-1 text-amber-900 font-bold text-xs">W</span>
                                <span className="absolute right-1 text-amber-900 font-bold text-xs">E</span>
                                <div className="w-1 h-6 bg-amber-900 absolute"></div>
                                <div className="w-6 h-1 bg-amber-900 absolute"></div>
                                <div className="w-2 h-2 bg-red-500 rounded-full border border-amber-900"></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Nearby Places Section */}
                <div ref={nearbyRef} className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{ boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)' }}>

                    {/* Sketch-style corner decorations */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30"></div>
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30"></div>

                    {/* Washi tape effect */}
                    <div className="absolute -top-3 left-20 w-20 h-7 bg-amber-300 opacity-50 rotate-[-4deg] border border-amber-500"></div>
                    <div className="absolute -top-3 right-20 w-20 h-7 bg-amber-300 opacity-50 rotate-[4deg] border border-amber-500"></div>

                    {/* Title with hand-drawn underline */}
                    <h3
                        style={{
                            fontFamily: "'Caveat', cursive"
                        }}
                        className="text-4xl md:text-5xl font-semibold mb-8 text-amber-900 relative inline-block">
                        Nearby Places
                        <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                            <path d="M 0 4 Q 50 2, 100 4 T 200 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.4"
                                strokeLinecap="round" />
                        </svg>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {data.property_nearplaces.map((place, index) => {
                            // Alternate rotations for variety
                            const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '0'];
                            const rotation = rotations[index % rotations.length];

                            return (
                                <div key={index} className={`group relative ${rotation} transition-transform hover:scale-105 hover:rotate-0`}>
                                    {/* Polaroid-style photo frame */}
                                    <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-amber-900"
                                        style={{
                                            boxShadow: '6px 6px 0px rgba(120, 53, 15, 0.2)',
                                        }}>

                                        {/* Tape at top */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-7 bg-amber-200 opacity-70 rotate-[-3deg] border border-amber-400 z-10"></div>

                                        {/* Photo */}
                                        <div className="relative border-2 border-dashed border-amber-700 rounded overflow-hidden aspect-[4/3] bg-gray-100">
                                            <img
                                                src={place.img}
                                                alt={place.name}
                                                className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                                style={{ filter: 'sepia(0.1) brightness(1.02)' }}
                                            />
                                            {/* Sketch overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-amber-900 opacity-5 pointer-events-none"></div>
                                        </div>

                                        {/* Caption area with notebook lines */}
                                        <div className="p-1 bg-amber-50 rounded border border-amber-300 relative"
                                            style={{
                                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(120, 53, 15, 0.08) 22px, rgba(120, 53, 15, 0.08) 23px)'
                                            }}>
                                            {/* <p className="text-base md:text-xl font-medium text-amber-900 relative"
                                                style={{ fontFamily: "'Caveat', cursive" }}>
                                                {place.name}
                                            </p> */}

                                            {/* Small decorative corner */}
                                            {/* <div className="absolute bottom-1 right-1 w-4 h-4 border-r border-b border-amber-900 opacity-30"></div> */}
                                        </div>

                                        {/* Corner stamp effect */}
                                        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-900 opacity-20 rounded-tr"></div>
                                    </div>

                                    {/* Optional: Add a pin icon */}
                                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-red-700 shadow-md z-20 group-hover:scale-110 transition-transform">
                                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-red-700"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom corner decorations */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-amber-900 opacity-30"></div>
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-30"></div>

                    {/* Optional: Add a decorative stamp/seal */}
                    <div className="absolute -bottom-4 right-12 w-20 h-20 rounded-full border-3 border-amber-900 opacity-20 flex items-center justify-center text-xs text-amber-900 font-bold"
                        style={{ transform: 'rotate(-15deg)' }}>
                        <span className="text-center leading-tight">NEARBY<br />PLACES</span>
                    </div>
                </div>

                {/* House Rules Section */}
                <div ref={rulesRef} className="relative bg-amber-50 rounded-xl p-8 md:p-5 mb-6 scroll-mt-32 border-2 border-amber-900"
                    style={{ boxShadow: '8px 8px 0px rgba(120, 53, 15, 0.15)' }}>

                    {/* Sketch-style corner decorations */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-l-2 border-t-2 border-amber-900 opacity-30"></div>
                    <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-amber-900 opacity-30"></div>

                    {/* Clipboard clip at top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <div className="w-24 h-8 bg-gray-700 rounded-t-lg shadow-lg relative">
                            <div className="absolute inset-x-2 top-2 h-3 bg-gray-600 rounded"></div>
                        </div>
                    </div>

                    {/* Washi tape effect */}
                    <div className="absolute -top-3 left-16 w-20 h-7 bg-yellow-300 opacity-50 rotate-[-3deg] border border-yellow-500"></div>
                    <div className="absolute -top-3 right-16 w-20 h-7 bg-yellow-300 opacity-50 rotate-[3deg] border border-yellow-500"></div>

                    {/* Title with hand-drawn underline */}
                    <div className="mb-8">
                        <h2
                            style={{
                                fontFamily: "'Caveat', cursive"
                            }}
                            className="text-4xl md:text-5xl font-semibold text-amber-900 relative inline-block">
                            House Rules
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                                <path d="M 0 4 Q 50 6, 100 4 T 200 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.4"
                                    strokeLinecap="round" />
                            </svg>
                        </h2>
                        {/* Small banner decoration */}
                        <div className="inline-block ml-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded transform -rotate-2 shadow">
                            IMPORTANT
                        </div>
                    </div>

                    {/* Rules list with notebook style */}
                    <div className="relative bg-white rounded-lg border-2 border-amber-900 p-3 md:p-8"
                        style={{
                            boxShadow: '6px 6px 0px rgba(120, 53, 15, 0.2)',
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(120, 53, 15, 0.05) 32px, rgba(120, 53, 15, 0.05) 33px)'
                        }}>

                        {/* Red margin line like notebook paper */}
                        <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-400 opacity-40"></div>

                        {/* Corner decorations */}
                        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-amber-900 opacity-25"></div>
                        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-amber-900 opacity-25"></div>

                        <div className="space-y-4 relative pl-6">
                            {data.house_rules?.map((rule, index) => (
                                <div key={index}
                                    className="flex items-start gap-4 p-2 bg-amber-50 rounded border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow"
                                    style={{
                                        transform: index % 2 === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)',
                                        backgroundImage: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, transparent 100%)'
                                    }}>

                                    {/* Custom checkmark */}
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="relative w-6 h-6">
                                            <FaCheckCircle className="text-green-600 text-xl" />
                                            {/* Hand-drawn circle around check */}
                                            <svg className="absolute -inset-1" width="32" height="32" viewBox="0 0 32 32">
                                                <circle cx="16" cy="16" r="14"
                                                    stroke="rgb(22, 163, 74)"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    opacity="0.3"
                                                    strokeDasharray="2,2" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Rule text */}
                                    <p className="text-gray-800 text-base leading-relaxed flex-1">
                                        {rule}
                                    </p>

                                    {/* Small decorative dot */}
                                    <div className="w-2 h-2 bg-amber-900 rounded-full opacity-20 mt-2 flex-shrink-0"></div>
                                </div>
                            ))}
                        </div>

                        {/* Signature line at bottom */}
                        {/* <div className="mt-8 pt-6 border-t-2 border-dashed border-amber-300">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span style={{ fontFamily: "'Caveat', cursive" }} className="text-lg">
                                    Please follow these rules
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs">✓ Acknowledged</span>
                                    <div className="w-32 border-b-2 border-amber-900 opacity-30"></div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Bottom corner decorations */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 border-l-2 border-b-2 border-amber-900 opacity-30"></div>
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-r-2 border-b-2 border-amber-900 opacity-30"></div>

                    {/* Sticky note decoration */}
                    <div className="absolute -bottom-6 -right-4 w-24 h-24 bg-yellow-200 shadow-lg transform rotate-12 border border-yellow-300 flex items-center justify-center"
                        style={{
                            boxShadow: '4px 4px 8px rgba(0,0,0,0.15)',
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,0,0,0.05) 18px, rgba(0,0,0,0.05) 19px)'
                        }}>
                        <span className="text-2xl">📋</span>
                    </div>
                </div>
            </div>

            {/* Promotional Banner */}
            <div className="w-full bg-Bg_Primary py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-5 lg:p-16 overflow-hidden border-4 border-dashed border-cyan-200 shadow-xl">
                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-dashed border-purple-300 rounded-full opacity-40"></div>
                        <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-dashed border-orange-300 rounded-lg opacity-40 rotate-12"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center relative z-10">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-teal-900 leading-tight">
                                    Discover stays across{' '}
                                    <span className="italic text-cyan-600">
                                        multiple premium hotels
                                    </span>
                                </h1>

                                <p className="text-lg text-teal-800 leading-relaxed max-w-xl">
                                    Choose from a curated collection of hotels and vacation properties, each
                                    offering comfort, convenience, and exceptional hospitality — all managed by
                                    trusted hotel owners.
                                </p>

                            </div>

                            {/* House Illustration */}
                            <div className="flex justify-center lg:justify-end">
                                <img src={hotelbookingSVG} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertyDetails;
