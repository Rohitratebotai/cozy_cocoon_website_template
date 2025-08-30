import logo from "../src/assets/logo.png";
// common ameneties images 
import clubhouse from './assets/comon_amenities_img/Clubhouse.webp'
import pool from './assets/comon_amenities_img/Swimming pool.webp'
import yogaRoom from './assets/comon_amenities_img/Yoga Room.webp'
import spa from './assets/comon_amenities_img/Spa.webp'
import indoorgames from './assets/comon_amenities_img/Indoor Games.webp'
import partylawn from './assets/comon_amenities_img/Party Lawn.webp'
import restaurant from './assets/comon_amenities_img/Restaurant.webp'
import organicfarm from './assets/comon_amenities_img/Organic Farming.webp'

import alibaug from './assets/alibaug.jpg'
import Dapoli from './assets/Dapoli.jpg'
import apartment from './assets/apartment.jpg'
import Matheran from './assets/matheran.png'


// Property  Images soumils2 
import bannerImage_s2 from './assets/property_banners/Soumils 2.0.jpg'
import s2img1 from './assets/soumils2_images/s2_i1.jpg'
import s2img2 from './assets/soumils2_images/s2_i2.jpg'
import s2img3 from './assets/soumils2_images/s2_i3.jpg'
import s2img4 from './assets/soumils2_images/s2_i4.jpg'
import s2img5 from './assets/soumils2_images/s2_i5.jpg'
import s2img6 from './assets/soumils2_images/s2_i6.jpg'
import s2img7 from './assets/soumils2_images/s2_i7.jpg'
import s2img8 from './assets/soumils2_images/s2_i8.jpg'
import s2img9 from './assets/soumils2_images/s2_i9.jpg'
import s2img10 from './assets/soumils2_images/s2_i10.jpg'
import s2img11 from './assets/soumils2_images/s2_i11.jpg'

// Property  Images soumils4
import bannerImage_s4 from './assets/property_banners/Soumils 4.0.jpg'
import s4img1 from './assets/soumils4_images/s4_1.jpg'
import s4img2 from './assets/soumils4_images/s4_2.jpg'
import s4img3 from './assets/soumils4_images/s4_3.jpg'
import s4img4 from './assets/soumils4_images/s4_4.jpg'
import s4img5 from './assets/soumils4_images/s4_5.jpg'
import s4img6 from './assets/soumils4_images/s4_6.jpg'
import s4img7 from './assets/soumils4_images/s4_7.jpg'
import s4img8 from './assets/soumils4_images/s4_8.jpg'
import s4img9 from './assets/soumils4_images/s4_9.jpg'
import s4img10 from './assets/soumils4_images/s4_10.jpg'
import s4img11 from './assets/soumils4_images/s4_11.jpg'


// Property Images of dapoli 
import bannerImage_dapoli from './assets/property_banners/Loft Dapli.jpg'
import dplimg1 from './assets/Dapoli_Loft_images/dl_1.jpg'
import dplimg2 from './assets/Dapoli_Loft_images/dl_2.jpg'
import dplimg3 from './assets/Dapoli_Loft_images/dl_3.jpg'
import dplimg4 from './assets/Dapoli_Loft_images/dl_4.jpg'
import dplimg5 from './assets/Dapoli_Loft_images/dl_5.jpg'
import dplimg6 from './assets/Dapoli_Loft_images/dl_6.jpg'
import dplimg7 from './assets/Dapoli_Loft_images/dl_7.jpg'
import dplimg8 from './assets/Dapoli_Loft_images/dl_8.jpg'
import dplimg9 from './assets/Dapoli_Loft_images/dl_9.jpg'
import dplimg10 from './assets/Dapoli_Loft_images/dl_10.jpg'



// vardaan property images
import bannerImage_vardaan from './assets/vardaan_images/24.jpeg'
import vimg1 from './assets/vardaan_images/13.jpeg'
import vimg2 from './assets/vardaan_images/23.jpeg'
import vimg3 from './assets/vardaan_images/14.jpeg'
import vimg4 from './assets/vardaan_images/17.jpeg'
import vimg5 from './assets/vardaan_images/2.jpeg'
import vimg6 from './assets/vardaan_images/7.jpeg'
import vimg7 from './assets/vardaan_images/8.jpeg'
import vimg8 from './assets/vardaan_images/9.jpeg'
import vimg9 from './assets/vardaan_images/10.jpeg'
import vimg10 from './assets/vardaan_images/11.jpeg'
import vimg11 from './assets/vardaan_images/12.jpeg'
import vimg12 from './assets/vardaan_images/13.jpeg'
import vimg13 from './assets/vardaan_images/14.jpeg'

// All Properties Data

export const propertyData = [
    {
        id: 1,
        location: "Alibaug",
        location_image: alibaug,
        properties: [
            // Array of properties in Alibaug
            {
                id: 1,
                property_name: "Soumils 2.0",
                property_deal: "Deal Price",
                property_description: "Welcome to our premium property, nestled in a peaceful residential area, perfect for a serene getaway. This family-friendly retreat features a beautifully manicured lawn and a refreshing swimming pool, making it an ideal spot for relaxation and fun. With three spacious bedrooms, our home comfortably accommodates families and groups seeking comfort and tranquility. Experience the perfect blend of luxury and calm at our inviting oasis.",
                property_location: "Nagaon, alibag",
                property_img: [bannerImage_s2, s2img1, s2img2, s2img3, s2img4, s2img5, s2img6, s2img7, s2img8, s2img9, s2img10, s2img11],
                property_brandId: "154",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 3,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_availablity: 'available',
                //         amenities_count: 4,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Pools",
                //         amenities_availablity: 'available',
                //         amenities_icon: "pool",
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
                property_nearplaces: ["Revdanda Beach", "Alibaug Beach", "Nagaon Beach", "Mandva Jetty"],
                status: "Available",
                property_details: [
                    {
                        type: "Caretaker for Assistance",
                        value: "available"
                    },
                    {
                        type: "Security",
                        value: "available"
                    },
                    {
                        type: "Towels & Toiletries",
                        value: "available"
                    },
                    {
                        type: "Caretaker provides food",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV : ",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers : ",
                        value: "available"
                    },
                    {
                        type: "Power Backup : ",
                        value: "Invertor"
                    },
                    {
                        type: "Indoor Games : ",
                        value: "Chess , Uno"
                    },
                    {
                        type: "Outdoor Games : ",
                        value: "Cricket , Badminton"
                    },
                    {
                        type: "TV in Living Room : ",
                        value: "OTT subscriptions (Netflix,Amazon prime,Zee5,hotstar)"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Khalchi Ali Rd"
                    },
                    {
                        type: "City",
                        value: "Nagaon"
                    },
                    {
                        type: "Area",
                        value: "Varchi Ali"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "402204"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.011109577859!2d72.89679957465447!3d18.618570066174538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be871d6ab453b7d%3A0x5462ddf6cb8f378a!2zU291bWls4oCZcyAyLjA!5e0!3m2!1sen!2sin!4v1744034363957!5m2!1sen!2sin",
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
                property_name: "Soumils 4.0",
                property_deal: "Deal Price",
                property_description: "Tucked in the midst of a gorgeous location, crafted with modern décor and family- friendly living spaces, Soumils 4.0 is a Luxurious Private 3BHK Villa to Relax and Rendezvous  in Alibaug. Not to mention, 2 min drive from Varsoli beach, private open sky pool, lawn area, and cozy rooms are perfect for a quick getaway!",
                property_location: "Varsoli, alibag",
                property_img: [bannerImage_s4, s4img2, s4img3, s4img4, s4img5, s4img6, s4img7, s4img8, s4img9, s4img10, , s4img1, s4img11],
                property_brandId: "155",
                // property_amenities: [
                //     {
                //         amenities_type: "Bedrooms",
                //         amenities_count: 3,
                //         amenities_icon: "bed", // Changed to string identifier instead of React element
                //     },
                //     {
                //         amenities_type: "Washrooms",
                //         amenities_availablity: 'available',
                //         amenities_count: 4,
                //         amenities_icon: "shower",
                //     },
                //     {
                //         amenities_type: "Pools",
                //         amenities_availablity: 'available',
                //         amenities_icon: "pool",
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

                property_nearplaces: ["Versoli", "Versoli Beach", "Alibaug Beach", "Mandva Jetty", "Alibaug Fort"],
                status: "Available",
                property_details: [
                    {
                        type: "Caretaker for Assistance",
                        value: "available"
                    },
                    {
                        type: "Security",
                        value: "available"
                    },
                    {
                        type: "Towels & Toiletries",
                        value: "available"
                    },
                    {
                        type: "Caretaker provides food",
                        value: "available"
                    },
                ],
                property_aditional_details: [
                    {
                        type: "CCTV : ",
                        value: "available"
                    },
                    {
                        type: "Fire Extinguishers : ",
                        value: "available"
                    },
                    {
                        type: "Power Backup : ",
                        value: "Invertor"
                    },
                    {
                        type: "Indoor Games : ",
                        value: "Chess , Uno"
                    },
                    {
                        type: "Outdoor Games : ",
                        value: "Cricket , Badminton"
                    },
                    {
                        type: "TV in Living Room : ",
                        value: "OTT subscriptions (Netflix,Amazon prime,Zee5,hotstar)"
                    },
                ],
                property_address: [
                    {
                        type: "Place",
                        value: "Varsoli Beach"
                    },
                    {
                        type: "City",
                        value: "Alibag"
                    },
                    {
                        type: "State",
                        value: "Maharashtra"
                    },
                    {
                        type: "Postal Code",
                        value: "402201"
                    },
                    {
                        type: "Country",
                        value: "India"
                    }
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30239.8242660878!2d72.8653411!3d18.6649817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87b92a875469b%3A0x61709c6656a2b894!2sSoumil&#39;s%204.0!5e0!3m2!1sen!2sin!4v1744107566638!5m2!1sen!2sin",
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

        ]
    },
    {
        id: 2,
        location: "Dapoli",
        location_image: Dapoli,
        properties: [
            // Array of properties in Dapoli 
            {
                id: 7,
                property_name: "Loft by Soumil’s",
                property_deal: "Deal Price",
                property_description: "Scenic 2BHK Bungalow in Dapoli with 180° Beach View Unwind at this peaceful bungalow, perched atop a mountain with breathtaking 180° beach views. Designed for relaxation, this cozy retreat is part of a gated community featuring a massive clubhouse with a large swimming pool, pool table, lawn tennis, box cricket, basketball, air hockey, and more. Perfect for those looking to escape the city's hustle and soak in nature, this home offers serenity with modern recreational facilities.",
                property_location: "Kolthare, Dapoli",
                property_img: [bannerImage_dapoli, dplimg1, dplimg2, dplimg3, dplimg4, dplimg5, dplimg6, dplimg7, dplimg8, dplimg9, dplimg10],
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
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30414.71946800351!2d73.1139283!3d17.6577386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9eb003f8befcd%3A0x2fe54f1634000172!2sLoft%20%40%20Amalfi%20Isle%20of%20Bliss%20-%20Mirchandanis!5e0!3m2!1sen!2sin!4v1744120088901!5m2!1sen!2sin",
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
        id: 3,
        location: "Karjat",
        location_image: Matheran,
        properties: [
            {
                id: 11,
                property_name: "Vardaan by Soumil’s",
                property_deal: "Deal Price",
                property_description: "Welcome to Vardaan Villa, where timeless elegance meets the quiet charm of nature. Tucked away in a peaceful haven, this luxurious retreat lives up to its name—Vardaan, meaning \"blessing\"—offering a life of comfort, grace, and soulful beauty. From the moment you arrive, you're greeted by grand architecture that blends modern sophistication with classic design elements. The villa opens into spacious, light-filled interiors adorned with tasteful décor, flowing seamlessly into tranquil outdoor spaces. Every corner is thoughtfully curated to inspire warmth and well-being.",
                property_location: "Nandgaon, karjat",
                property_img: [vimg5, vimg6, bannerImage_vardaan, vimg1, vimg2, vimg3, vimg4, vimg7, vimg8, vimg9, vimg10, vimg11, vimg12, vimg13],
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
    },
    {
        id: 4,
        location: "Apartments",
        location_image: apartment,
        properties: [

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
        {
            id: 3,
            title: "Villas",
            link: "/",
        },
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
        { icon: 'IoIosMail', text: ['priyanka.cultescape@gmail.com', 'arti.cultescape@gmail.com'] },
        { icon: 'IoIosCall', text: ['+91 9515192575', '+91 7208068702'] },
    ],
    TermsandConditions: [
        { icon: 'IoIosArrowForward', text: 'Privacy Policy', link: '/privacy-policy' },
        { icon: 'IoIosArrowForward', text: 'Cancellation Policy', link: '/cancellation-policy' },
        { icon: 'IoIosArrowForward', text: 'Shipping And Delivery Policy', link: '/shipping-and-delivery-policy' },
        { icon: 'IoIosArrowForward', text: 'Terms and Conditions', link: '/terms-and-conditions-policy' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.6008373701077!2d72.87999573835884!3d18.648946737001225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be87becb25a339b%3A0x6a28373c54128853!2sSoumil&#39;s%20Stays%20Office!5e1!3m2!1sen!2sus!4v1749796488463!5m2!1sen!2sus',
    termsAndConditions: [
        { id: 1, text: "Terms of Service", },
        { id: 2, text: "Privacy Policy" },
        { id: 3, text: "Refund Policy" },
        { id: 4, text: "Cancellation Policy" },
    ]
};
