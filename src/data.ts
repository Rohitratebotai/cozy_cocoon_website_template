import logo from "../src/assets/cultlogo.png";
// common ameneties images 
import clubhouse from './assets/comon_amenities_img/Clubhouse.webp'
import pool from './assets/comon_amenities_img/Swimming pool.webp'
import yogaRoom from './assets/comon_amenities_img/Yoga Room.webp'
import spa from './assets/comon_amenities_img/Spa.webp'
import indoorgames from './assets/comon_amenities_img/Indoor Games.webp'
import partylawn from './assets/comon_amenities_img/Party Lawn.webp'
import restaurant from './assets/comon_amenities_img/Restaurant.webp'
import organicfarm from './assets/comon_amenities_img/Organic Farming.webp'

import Dapoli from './assets/Dapoli.jpg'
import apartment from './assets/apartment.jpg'

// All Properties Data
import img from './assets/cosy_villa_images/img_23.jpeg'

export const propertyData = [
    {
        id: 1,
        location: "kanakia",
        location_image: Dapoli,
        properties: [
            // Array of properties in Dapoli 
            {
                id: 6,
                property_name: "BKC ABC",
                property_deal: "Deal Price",
                property_description: "Scenic 2BHK Bungalow in Dapoli with 180° Beach View Unwind at this peaceful bungalow, perched atop a mountain with breathtaking 180° beach views. Designed for relaxation, this cozy retreat is part of a gated community featuring a massive clubhouse with a large swimming pool, pool table, lawn tennis, box cricket, basketball, air hockey, and more. Perfect for those looking to escape the city's hustle and soak in nature, this home offers serenity with modern recreational facilities.",
                property_location: "Kolthare, Dapoli",
                property_img: [img],
                property_brandId: "158",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 2,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_count: 3,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Parking",
                //         amenities_availablity: 'available',
                //         amenities_icon: "car",
                //     },
                //     {
                //         amenities_type: "Internet",
                //         amenities_availablity: 'available',
                //         amenities_icon: "wifi",
                //     },
                //     {
                //         amenities_type: "Air condition",
                //         amenities_availablity: 'available',
                //         amenities_icon: "ac",
                //     }
                // ],
                property_amenities_img: [
                    { name: "Club House", img: clubhouse },
                    { name: "Swimming Pool", img: pool },
                    { name: "Yoga Room", img: yogaRoom },
                    { name: "Spa", img: spa },
                    { name: "Indoor Games", img: indoorgames },
                    { name: "Party Lawn", img: partylawn },
                    { name: "Restaurant", img: restaurant },
                    { name: "Organic Farm", img: organicfarm }
                ],

                status: "Available",
                property_nearplaces: ["Kolthare Beach", "Dapoli City"],
                property_details: [
                    {
                        type: "Luggage Assistance",
                        value: "available"
                    },
                    {
                        type: "Multilingual Staff",
                        value: "available"
                    },
                    {
                        type: "Doctor on Call",
                        value: "available"
                    },
                    {
                        type: "Luggage Storage",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV :",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers :",
                        value: "available"
                    },
                    {
                        type: "Electronic Keycard :",
                        value: "available"
                    },
                    {
                        type: "Security alarms :",
                        value: "available"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Kolthare"
                    },
                    {
                        type: "City",
                        value: "Kolthare"
                    },
                    {
                        type: "Area",
                        value: "Ragvilas Society, Lane, No, C, N Main Rd"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "415712"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30414.71946800351!2d73.1139283!3d17.6577386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9eb003f8befcd%3A0x2fe54f1634000172!2sBKC ABC%20%40%20Amalfi%20Isle%20of%20Bliss%20-%20Mirchandanis!5e0!3m2!1sen!2sin!4v1744120088901!5m2!1sen!2sin",
                booking_link: "",
                property_subtitle: "Cosy Cocoon",
                property_social_links: [
                    { type: "Instagram", url: "https://instagram.com/cosy.cocoon" },
                    { type: "YouTube", url: "https://youtube.com/cosyCocoonVlogs" },
                    { type: "Booking", url: "https://booking.soumilsstays.com/hotel/hotel-details?hotel_id=41" }
                ],
                host_details: {
                    name: "Soumil Patil",
                    about: "Friendly and responsive host, passionate about travel and hospitality.",
                    languages: ["English", "Marathi", "Hindi"],
                    profile_image: "https://dummyimage.com/host.jpg"
                },
                contact_details: {
                    phone: "+91 9876543210",
                    email: "contact@soumilsstays.com",
                    available_hours: "9 AM to 9 PM"
                },
                additional_cost_note: "* Amenities like food and games may be chargeable.",
                api_display: {
                    icon_left: "📍",
                    icon_right: "ℹ️",
                    center_text: "Details"
                }
            },
            {
                id: 7,
                property_name: "BKC xyz",
                property_deal: "Deal Price",
                property_description: "Scenic 2BHK Bungalow in Dapoli with 180° Beach View Unwind at this peaceful bungalow, perched atop a mountain with breathtaking 180° beach views. Designed for relaxation, this cozy retreat is part of a gated community featuring a massive clubhouse with a large swimming pool, pool table, lawn tennis, box cricket, basketball, air hockey, and more. Perfect for those looking to escape the city's hustle and soak in nature, this home offers serenity with modern recreational facilities.",
                property_location: "Kolthare, Dapoli",
                property_img: [img],
                property_brandId: "158",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 2,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_count: 3,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Parking",
                //         amenities_availablity: 'available',
                //         amenities_icon: "car",
                //     },
                //     {
                //         amenities_type: "Internet",
                //         amenities_availablity: 'available',
                //         amenities_icon: "wifi",
                //     },
                //     {
                //         amenities_type: "Air condition",
                //         amenities_availablity: 'available',
                //         amenities_icon: "ac",
                //     }
                // ],
                property_amenities_img: [
                    { name: "Club House", img: clubhouse },
                    { name: "Swimming Pool", img: pool },
                    { name: "Yoga Room", img: yogaRoom },
                    { name: "Spa", img: spa },
                    { name: "Indoor Games", img: indoorgames },
                    { name: "Party Lawn", img: partylawn },
                    { name: "Restaurant", img: restaurant },
                    { name: "Organic Farm", img: organicfarm }
                ],

                status: "Available",
                property_nearplaces: ["Kolthare Beach", "Dapoli City"],
                property_details: [
                    {
                        type: "Luggage Assistance",
                        value: "available"
                    },
                    {
                        type: "Multilingual Staff",
                        value: "available"
                    },
                    {
                        type: "Doctor on Call",
                        value: "available"
                    },
                    {
                        type: "Luggage Storage",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV :",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers :",
                        value: "available"
                    },
                    {
                        type: "Electronic Keycard :",
                        value: "available"
                    },
                    {
                        type: "Security alarms :",
                        value: "available"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Kolthare"
                    },
                    {
                        type: "City",
                        value: "Kolthare"
                    },
                    {
                        type: "Area",
                        value: "Ragvilas Society, Lane, No, C, N Main Rd"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "415712"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30414.71946800351!2d73.1139283!3d17.6577386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9eb003f8befcd%3A0x2fe54f1634000172!2sBKC xyz%20%40%20Amalfi%20Isle%20of%20Bliss%20-%20Mirchandanis!5e0!3m2!1sen!2sin!4v1744120088901!5m2!1sen!2sin",
                booking_link: "",
                property_subtitle: "Cosy Cocoon",
                property_social_links: [
                    { type: "Instagram", url: "https://instagram.com/cosy.cocoon" },
                    { type: "YouTube", url: "https://youtube.com/cosyCocoonVlogs" },
                    { type: "Booking", url: "https://booking.soumilsstays.com/hotel/hotel-details?hotel_id=41" }
                ],
                host_details: {
                    name: "Soumil Patil",
                    about: "Friendly and responsive host, passionate about travel and hospitality.",
                    languages: ["English", "Marathi", "Hindi"],
                    profile_image: "https://dummyimage.com/host.jpg"
                },
                contact_details: {
                    phone: "+91 9876543210",
                    email: "contact@soumilsstays.com",
                    available_hours: "9 AM to 9 PM"
                },
                additional_cost_note: "* Amenities like food and games may be chargeable.",
                api_display: {
                    icon_left: "📍",
                    icon_right: "ℹ️",
                    center_text: "Details"
                }
            },
        ]
    },
    {
        id: 2,
        location: "sanskurti",
        location_image: apartment,
        properties: [
            {
                id: 1,
                property_name: "Cosy Cocoon",
                property_deal: "Deal Price",
                property_description: "Welcome to Cosy Cocoon Villa, where timeless elegance meets the quiet charm of nature. Tucked away in a peaceful haven, this luxurious retreat lives up to its name—Cosy Cocoon, meaning \"blessing\"—offering a life of comfort, grace, and soulful beauty. From the moment you arrive, you're greeted by grand architecture that blends modern sophistication with classic design elements. The villa opens into spacious, light-filled interiors adorned with tasteful décor, flowing seamlessly into tranquil outdoor spaces. Every corner is thoughtfully curated to inspire warmth and well-being.",
                property_location: "Nandgaon, karjat",
                property_img: [img],
                property_brandId: "158",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 2,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_count: 3,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Parking",
                //         amenities_availablity: 'available',
                //         amenities_icon: "car",
                //     },
                //     {
                //         amenities_type: "Internet",
                //         amenities_availablity: 'available',
                //         amenities_icon: "wifi",
                //     },
                //     {
                //         amenities_type: "Air condition",
                //         amenities_availablity: 'available',
                //         amenities_icon: "ac",
                //     }
                // ],
                property_amenities_img: [
                    { name: "Club House", img: clubhouse },
                    { name: "Swimming Pool", img: pool },
                    { name: "Yoga Room", img: yogaRoom },
                    { name: "Spa", img: spa },
                    { name: "Indoor Games", img: indoorgames },
                    { name: "Party Lawn", img: partylawn },
                    { name: "Restaurant", img: restaurant },
                    { name: "Organic Farm", img: organicfarm }
                ],
                status: "Available",
                property_nearplaces: ["Waterfalls ", "Matheran"],
                property_details: [
                    {
                        type: "Luggage Assistance",
                        value: "available"
                    },
                    {
                        type: "Multilingual Staff",
                        value: "available"
                    },
                    {
                        type: "Doctor on Call",
                        value: "available"
                    },
                    {
                        type: "Luggage Storage",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV :",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers :",
                        value: "available"
                    },
                    {
                        type: "Electronic Keycard :",
                        value: "available"
                    },
                    {
                        type: "Security alarms :",
                        value: "available"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Kolthare"
                    },
                    {
                        type: "City",
                        value: "Kolthare"
                    },
                    {
                        type: "Area",
                        value: "Ragvilas Society, Lane, No, C, N Main Rd"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "415712"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.1906460008877!2d73.50788197520595!3d19.099290582110093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA1JzU3LjUiTiA3M8KwMzAnMzcuNiJF!5e0!3m2!1sen!2sin!4v1749709735555!5m2!1sen!2sin",
                booking_link: "#",
                property_subtitle: "Cosy Cocoon",
                property_social_links: [
                    { type: "Instagram", url: "https://instagram.com/cosy.cocoon" },
                    { type: "YouTube", url: "https://youtube.com/cosyCocoonVlogs" },
                    { type: "Booking", url: "https://booking.soumilsstays.com/hotel/hotel-details?hotel_id=41" }
                ],
                host_details: {
                    name: "Soumil Patil",
                    about: "Friendly and responsive host, passionate about travel and hospitality.",
                    languages: ["English", "Marathi", "Hindi"],
                    profile_image: "https://dummyimage.com/host.jpg"
                },
                contact_details: {
                    phone: "+91 9876543210",
                    email: "contact@soumilsstays.com",
                    available_hours: "9 AM to 9 PM"
                },
                additional_cost_note: "* Amenities like food and games may be chargeable.",
                api_display: {
                    icon_left: "📍",
                    icon_right: "ℹ️",
                    center_text: "Details"
                }

            },
            {
                id: 2,
                property_name: "Rustic Charm",
                property_deal: "Deal Price",
                property_description: "Welcome to Rustic Charm Villa, where timeless elegance meets the quiet charm of nature. Tucked away in a peaceful haven, this luxurious retreat lives up to its name—Rustic Charm, meaning \"blessing\"—offering a life of comfort, grace, and soulful beauty. From the moment you arrive, you're greeted by grand architecture that blends modern sophistication with classic design elements. The villa opens into spacious, light-filled interiors adorned with tasteful décor, flowing seamlessly into tranquil outdoor spaces. Every corner is thoughtfully curated to inspire warmth and well-being.",
                property_location: "Nandgaon, karjat",
                property_img: [img],
                property_brandId: "158",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 2,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_count: 3,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Parking",
                //         amenities_availablity: 'available',
                //         amenities_icon: "car",
                //     },
                //     {
                //         amenities_type: "Internet",
                //         amenities_availablity: 'available',
                //         amenities_icon: "wifi",
                //     },
                //     {
                //         amenities_type: "Air condition",
                //         amenities_availablity: 'available',
                //         amenities_icon: "ac",
                //     }
                // ],
                property_amenities_img: [
                    { name: "Club House", img: clubhouse },
                    { name: "Swimming Pool", img: pool },
                    { name: "Yoga Room", img: yogaRoom },
                    { name: "Spa", img: spa },
                    { name: "Indoor Games", img: indoorgames },
                    { name: "Party Lawn", img: partylawn },
                    { name: "Restaurant", img: restaurant },
                    { name: "Organic Farm", img: organicfarm }
                ],
                status: "Available",
                property_nearplaces: ["Waterfalls ", "Matheran"],
                property_details: [
                    {
                        type: "Luggage Assistance",
                        value: "available"
                    },
                    {
                        type: "Multilingual Staff",
                        value: "available"
                    },
                    {
                        type: "Doctor on Call",
                        value: "available"
                    },
                    {
                        type: "Luggage Storage",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV :",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers :",
                        value: "available"
                    },
                    {
                        type: "Electronic Keycard :",
                        value: "available"
                    },
                    {
                        type: "Security alarms :",
                        value: "available"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Kolthare"
                    },
                    {
                        type: "City",
                        value: "Kolthare"
                    },
                    {
                        type: "Area",
                        value: "Ragvilas Society, Lane, No, C, N Main Rd"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "415712"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.1906460008877!2d73.50788197520595!3d19.099290582110093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA1JzU3LjUiTiA3M8KwMzAnMzcuNiJF!5e0!3m2!1sen!2sin!4v1749709735555!5m2!1sen!2sin",
                booking_link: "#",
                property_subtitle: "Cosy Cocoon",
                property_social_links: [
                    { type: "Instagram", url: "https://instagram.com/cosy.cocoon" },
                    { type: "YouTube", url: "https://youtube.com/cosyCocoonVlogs" },
                    { type: "Booking", url: "https://booking.soumilsstays.com/hotel/hotel-details?hotel_id=41" }
                ],
                host_details: {
                    name: "Soumil Patil",
                    about: "Friendly and responsive host, passionate about travel and hospitality.",
                    languages: ["English", "Marathi", "Hindi"],
                    profile_image: "https://dummyimage.com/host.jpg"
                },
                contact_details: {
                    phone: "+91 9876543210",
                    email: "contact@soumilsstays.com",
                    available_hours: "9 AM to 9 PM"
                },
                additional_cost_note: "* Amenities like food and games may be chargeable.",
                api_display: {
                    icon_left: "📍",
                    icon_right: "ℹ️",
                    center_text: "Details"
                }

            },
            // Array of properties in Dapoli 
        ]
    }
]

export const navbarData = {
    details: [
        {
            id: 1,
            icon: 'IoIosMail',
            data: 'SSGRANDSIRCILLA@gmail.com'
        },
        {
            id: 2,
            icon: 'IoIosCall',
            data: '9394607407'
        },
    ],
    logo: [
        {
            id: 1,
            image: logo, // Replace with the actual logo image path
            alt: "Company Logo"
        }
    ],
    navmenu: [
        {
            id: 1,
            title: "Home",
            link: "/",
            submenu: []
        },
        {
            id: 2,
            title: "Destinations",
            link: "/",
            submenu: []
        },
        // {
        //     id: 3,
        //     title: "Villas",
        //     link: "/",
        // },
        // {
        //     id: 4,
        //     title: "Apartments",
        //     link: "/",
        //     submenu: []
        // },
        {
            id: 5,
            title: "About",
            link: "/about",
            submenu: []
        },
        {
            id: 6,
            title: "List Your Property",
            link: "/contact",
            submenu: []
        },
        {
            id: 7,
            title: "Near By Locations",
            link: "/nearbylocations",
            submenu: []
        },
    ],
    button: [
        {
            id: 1,
            type: "primary",
            text: "Login"
        }

    ]
};

import {
    FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { IoIosMail, IoIosCall, IoIosArrowForward } from 'react-icons/io';
// import { p } from "framer-motion/client";
// import ExclusiveService_Card from "./components/homepage_components/homepage_exclusiveservice/ExclusiveService_Card";

// Define icon keys as a union type
export type IconKey =
    | 'FaFacebook'
    | 'FaTwitter'
    | 'FaInstagram'
    | 'FaYoutube'
    | 'ImGithub'
    | 'IoIosMail'
    | 'IoIosCall'
    | 'IoIosArrowForward';

// Icon mapping interface
export interface IconMapping {
    [key: string]: React.ComponentType<{ className?: string }>;
}

// Social Links Interface
export interface SocialLink {
    icon: IconKey;
    link: string;
}

// Contact Info Interface
export interface ContactInfo {
    icon: IconKey;
    text: any;
}

// Villa Links Interface
export interface VillaLink {
    icon: IconKey;
    text: string;
    link: string;
}

// Footer Data Interface
export interface FooterDataInterface {
    socialLinks: SocialLink[];
    address: string;
    contactInfo: ContactInfo[];
    TermsandConditions: VillaLink[];
    mapSrc: string;
    termsAndConditions: { id: number; text: string }[];
}

// Icon Mapping
export const iconMap: IconMapping = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    ImGithub,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

export const footerData: FooterDataInterface = {
    socialLinks: [
        // { icon: 'FaFacebook', link: 'https://facebook.com' },
        // { icon: 'FaTwitter', link: 'https://twitter.com' },
        // { icon: 'FaInstagram', link: 'https://www.instagram.com/soumils_stays/' },
        // { icon: 'FaYoutube', link: 'https://youtube.com' },
    ],
    address: "opposite amba maata madir, Shribag No.2, Alibag, Maharashtra 402201",
    contactInfo: [
        { icon: 'IoIosMail', text: ['arti.cultescape@gmail.com', 'priyanka.cultescape@gmail.com',] },
        { icon: 'IoIosCall', text: ['+91 9515192575', '+91 7208068702'] },
    ],
    TermsandConditions: [
        { icon: 'IoIosArrowForward', text: 'Privacy Policy', link: '/privacy-policy' },
        { icon: 'IoIosArrowForward', text: 'Cancellation Policy', link: '/cancellation-policy' },
        { icon: 'IoIosArrowForward', text: 'Shipping And Delivery Policy', link: '/shipping-and-delivery-policy' },
        { icon: 'IoIosArrowForward', text: 'Terms and Conditions', link: '/terms-and-conditions-policy' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5182298644313!2d73.40671337466331!3d18.996872654452947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f7cc9d9addd7%3A0x2350efff780ce1c5!2sCosy%20Cocoon%20by%20Cult%20Escape!5e0!3m2!1sen!2sin!4v1757498927349!5m2!1sen!2sin',
    termsAndConditions: [
        { id: 1, text: "Terms of Service", },
        { id: 2, text: "Privacy Policy" },
        { id: 3, text: "Refund Policy" },
        { id: 4, text: "Cancellation Policy" },
    ]
};