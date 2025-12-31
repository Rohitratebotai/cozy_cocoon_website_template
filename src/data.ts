import logo from "../src/assets/cultlogo.png";
import dummylogo from "../src/assets/cosylogo.jpeg";
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

// cosy cocoon property images
import cimg1 from './assets/cosy_cocoon_images/img_1.jpg'
import cimg2 from './assets/cosy_cocoon_images/img_2.jpg'
import cimg3 from './assets/cosy_cocoon_images/img_3.jpg'
import cimg4 from './assets/cosy_cocoon_images/img_4.jpg'
import cimg5 from './assets/cosy_cocoon_images/img_5.jpg'
import cimg6 from './assets/cosy_cocoon_images/img_6.jpg'
import cimg7 from './assets/cosy_cocoon_images/img_7.jpg'
import cimg8 from './assets/cosy_cocoon_images/img_8.jpg'
import cimg9 from './assets/cosy_cocoon_images/img_9.jpg'
import cimg10 from './assets/cosy_cocoon_images/img_10.jpg'
import cimg11 from './assets/cosy_cocoon_images/img_11.jpg'
import cimg12 from './assets/cosy_cocoon_images/img_12.jpg'


export const propertyData = [
    {
        id: 1,
        location: "BKC",
        location_image: Dapoli,
        properties: [
            {
                id: 3,
                property_name: "BKC ABC",
                property_deal: "Deal Price",
                property_logo: dummylogo,
                property_description: "Scenic 2BHK Bungalow in Dapoli with 180° Beach View Unwind at this peaceful bungalow, perched atop a mountain with breathtaking 180° beach views. Designed for relaxation, this cozy retreat is part of a gated community featuring a massive clubhouse with a large swimming pool, pool table, lawn tennis, box cricket, basketball, air hockey, and more. Perfect for those looking to escape the city's hustle and soak in nature, this home offers serenity with modern recreational facilities.",
                property_location: "Kolthare, Dapoli",
                property_img: [img],
                property_brandId: "158",
                property_amenities: [
                    { amenities_type: "Bedrooms", amenities_count: 2, amenities_icon: "bed" },
                    { amenities_type: "Washrooms", amenities_count: 3, amenities_icon: "shower" },
                    { amenities_type: "Parking", amenities_availablity: "available", amenities_icon: "car" },
                    { amenities_type: "Internet", amenities_availablity: "available", amenities_icon: "wifi" },
                    { amenities_type: "Air condition", amenities_availablity: "available", amenities_icon: "ac" },
                    { amenities_type: "Swimming Pool", amenities_availablity: "available", amenities_icon: "pool" },
                    { amenities_type: "Kitchen", amenities_availablity: "available", amenities_icon: "kitchen" },
                    { amenities_type: "Refrigerator", amenities_availablity: "available", amenities_icon: "fridge" },
                    { amenities_type: "Microwave", amenities_availablity: "available", amenities_icon: "microwave" },
                    { amenities_type: "TV", amenities_availablity: "available", amenities_icon: "tv" },
                    { amenities_type: "Power Backup", amenities_availablity: "available", amenities_icon: "power" },
                    { amenities_type: "Garden", amenities_availablity: "available", amenities_icon: "garden" },
                    { amenities_type: "Balcony", amenities_availablity: "available", amenities_icon: "balcony" },
                    { amenities_type: "Housekeeping", amenities_availablity: "available", amenities_icon: "housekeeping" },
                    { amenities_type: "Pet Friendly", amenities_availablity: "available", amenities_icon: "pet" }
                ],
                property_amenities_img: [
                    {
                        name: "Club House",
                        img: clubhouse,
                        icon: "clubhouse",
                        points: [
                            "Premium indoor lounge",
                            "Community gatherings",
                            "Modern seating areas",
                        ],
                    },
                    {
                        name: "Swimming Pool",
                        img: pool,
                        icon: "swimming_pool",
                        points: [
                            "Temperature controlled pool",
                            "Kids & adults section",
                            "Poolside seating",
                        ],
                    },
                    {
                        name: "Yoga Room",
                        img: yogaRoom,
                        icon: "yoga",
                        points: [
                            "Calm & peaceful ambiance",
                            "Natural ventilation",
                            "Daily yoga sessions",
                        ],
                    },
                    {
                        name: "Spa",
                        img: spa,
                        icon: "spa",
                        points: [
                            "Relaxation therapies",
                            "Professional staff",
                            "Private rooms",
                        ],
                    },
                    {
                        name: "Indoor Games",
                        img: indoorgames,
                        icon: "indoor_games",
                        points: [
                            "Table tennis & carrom",
                            "Family-friendly games",
                            "Indoor entertainment",
                        ],
                    },
                    {
                        name: "Party Lawn",
                        img: partylawn,
                        icon: "party_lawn",
                        points: [
                            "Open-air celebrations",
                            "Event lighting setup",
                            "Spacious lawn area",
                        ],
                    },
                    {
                        name: "Restaurant",
                        img: restaurant,
                        icon: "restaurant",
                        points: [
                            "Multi-cuisine menu",
                            "Fresh ingredients",
                            "Indoor & outdoor seating",
                        ],
                    },
                    {
                        name: "Organic Farm",
                        img: organicfarm,
                        icon: "organic_farm",
                        points: [
                            "Farm-to-table concept",
                            "Organic vegetables",
                            "Eco-friendly living",
                        ],
                    },],
                status: "Available",
                property_nearplaces: [
                    { name: "Peth Fort", img: peth },
                    { name: "Bhimashankar Hills", img: bhimashankar },
                    { name: "Matheran", img: matheran },
                    { name: "Bhivpuri Waterfall", img: bhivpuri },
                    { name: "ND Studio", img: NdStudio },
                    { name: "Kondhana Caves", img: kondhana },
                    { name: "Ulhas Valley", img: ulhas },
                    { name: "Kondeshwar Temple", img: kondeshwar }
                ],
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
                    email: "contact@support.com",
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
                id: 4,
                property_name: "BKC xyz",
                property_deal: "Deal Price",
                property_logo: dummylogo,
                property_description: "Scenic 2BHK Bungalow in Dapoli with 180° Beach View Unwind at this peaceful bungalow, perched atop a mountain with breathtaking 180° beach views. Designed for relaxation, this cozy retreat is part of a gated community featuring a massive clubhouse with a large swimming pool, pool table, lawn tennis, box cricket, basketball, air hockey, and more. Perfect for those looking to escape the city's hustle and soak in nature, this home offers serenity with modern recreational facilities.",
                property_location: "Kolthare, Dapoli",
                property_img: [img],
                property_brandId: "158",
                property_amenities: [
                    { amenities_type: "Bedrooms", amenities_count: 2, amenities_icon: "bed" },
                    { amenities_type: "Washrooms", amenities_count: 3, amenities_icon: "shower" },
                    { amenities_type: "Parking", amenities_availablity: "available", amenities_icon: "car" },
                    { amenities_type: "Internet", amenities_availablity: "available", amenities_icon: "wifi" },
                    { amenities_type: "Air condition", amenities_availablity: "available", amenities_icon: "ac" },
                    { amenities_type: "Swimming Pool", amenities_availablity: "available", amenities_icon: "pool" },
                    { amenities_type: "Kitchen", amenities_availablity: "available", amenities_icon: "kitchen" },
                    { amenities_type: "Refrigerator", amenities_availablity: "available", amenities_icon: "fridge" },
                    { amenities_type: "Microwave", amenities_availablity: "available", amenities_icon: "microwave" },
                    { amenities_type: "TV", amenities_availablity: "available", amenities_icon: "tv" },
                    { amenities_type: "Power Backup", amenities_availablity: "available", amenities_icon: "power" },
                    { amenities_type: "Garden", amenities_availablity: "available", amenities_icon: "garden" },
                    { amenities_type: "Balcony", amenities_availablity: "available", amenities_icon: "balcony" },
                    { amenities_type: "Housekeeping", amenities_availablity: "available", amenities_icon: "housekeeping" },
                    { amenities_type: "Pet Friendly", amenities_availablity: "available", amenities_icon: "pet" }
                ],
                property_amenities_img: [
                    {
                        name: "Club House",
                        img: clubhouse,
                        icon: "clubhouse",
                        points: [
                            "Premium indoor lounge",
                            "Community gatherings",
                            "Modern seating areas",
                        ],
                    },
                    {
                        name: "Swimming Pool",
                        img: pool,
                        icon: "swimming_pool",
                        points: [
                            "Temperature controlled pool",
                            "Kids & adults section",
                            "Poolside seating",
                        ],
                    },
                    {
                        name: "Yoga Room",
                        img: yogaRoom,
                        icon: "yoga",
                        points: [
                            "Calm & peaceful ambiance",
                            "Natural ventilation",
                            "Daily yoga sessions",
                        ],
                    },
                    {
                        name: "Spa",
                        img: spa,
                        icon: "spa",
                        points: [
                            "Relaxation therapies",
                            "Professional staff",
                            "Private rooms",
                        ],
                    },
                    {
                        name: "Indoor Games",
                        img: indoorgames,
                        icon: "indoor_games",
                        points: [
                            "Table tennis & carrom",
                            "Family-friendly games",
                            "Indoor entertainment",
                        ],
                    },
                    {
                        name: "Party Lawn",
                        img: partylawn,
                        icon: "party_lawn",
                        points: [
                            "Open-air celebrations",
                            "Event lighting setup",
                            "Spacious lawn area",
                        ],
                    },
                    {
                        name: "Restaurant",
                        img: restaurant,
                        icon: "restaurant",
                        points: [
                            "Multi-cuisine menu",
                            "Fresh ingredients",
                            "Indoor & outdoor seating",
                        ],
                    },
                    {
                        name: "Organic Farm",
                        img: organicfarm,
                        icon: "organic_farm",
                        points: [
                            "Farm-to-table concept",
                            "Organic vegetables",
                            "Eco-friendly living",
                        ],
                    },],

                status: "Available",
                property_nearplaces: [
                    { name: "Peth Fort", img: peth },
                    { name: "Bhimashankar Hills", img: bhimashankar },
                    { name: "Matheran", img: matheran },
                    { name: "Bhivpuri Waterfall", img: bhivpuri },
                    { name: "ND Studio", img: NdStudio },
                    { name: "Kondhana Caves", img: kondhana },
                    { name: "Ulhas Valley", img: ulhas },
                    { name: "Kondeshwar Temple", img: kondeshwar }
                ],
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
                    email: "contact@support.com",
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
        location: "sanskruti",
        location_image: apartment,
        properties: [
            {
                id: 1,
                property_name: "Cosy Cocoon",
                property_logo: dummylogo,
                property_subtitle: "Luxury Villa in Karjat",
                property_img: [cimg1, cimg2, cimg3, cimg4, cimg5, cimg6, cimg7, cimg8, cimg9, cimg10, cimg11, cimg12
                ],
                property_description: `Welcome to Cosy Cocoon Villa, your luxurious escape nestled in the heart of Karjat. This elegant 3-bedroom villa offers a harmonious blend of modern comfort and natural beauty, making it the perfect destination for families, friends, or couples seeking relaxation and rejuvenation. Enjoy spacious living areas filled with natural light, tastefully decorated interiors, and seamless access to tranquil outdoor spaces. The villa features a private swimming pool, lush gardens, and scenic views of the surrounding hills. Guests can unwind in the cozy lounge, prepare meals in a fully equipped kitchen, and dine al fresco on the patio. With amenities like high-speed WiFi, air conditioning, secure parking, and attentive host support, every detail is designed for your comfort. Nearby attractions include Peth Fort, Bhimashankar Hills, and Matheran, offering opportunities for adventure and exploration. Whether you’re planning a peaceful retreat or a memorable celebration, Cosy Cocoon Villa promises an unforgettable stay in a serene setting.`,
                property_amenities: [
                    { amenities_type: "Bedrooms", amenities_count: 3, amenities_icon: "bed" },
                    { amenities_type: "Washrooms", amenities_count: 2, amenities_icon: "shower" },
                    { amenities_type: "Swimming Pool", amenities_availablity: "available", amenities_icon: "pool" },
                    { amenities_type: "Parking", amenities_availablity: "available", amenities_icon: "car" },
                    { amenities_type: "WiFi", amenities_availablity: "available", amenities_icon: "wifi" },
                    { amenities_type: "Air Conditioning", amenities_availablity: "available", amenities_icon: "ac" },
                    { amenities_type: "Kitchen", amenities_availablity: "available", amenities_icon: "kitchen" },
                    { amenities_type: "Refrigerator", amenities_availablity: "available", amenities_icon: "fridge" },
                    { amenities_type: "Microwave", amenities_availablity: "available", amenities_icon: "microwave" },
                    { amenities_type: "TV", amenities_availablity: "available", amenities_icon: "tv" },
                    { amenities_type: "Power Backup", amenities_availablity: "available", amenities_icon: "power" },
                    { amenities_type: "Garden", amenities_availablity: "available", amenities_icon: "garden" },
                    { amenities_type: "Balcony", amenities_availablity: "available", amenities_icon: "balcony" },
                    { amenities_type: "Housekeeping", amenities_availablity: "available", amenities_icon: "housekeeping" },
                    { amenities_type: "Pet Friendly", amenities_availablity: "available", amenities_icon: "pet" }
                ],
                property_amenities_img: [
                    {
                        name: "Club House",
                        img: clubhouse,
                        icon: "clubhouse",
                        points: [
                            "Premium indoor lounge",
                            "Community gatherings",
                            "Modern seating areas",
                        ],
                    },
                    {
                        name: "Swimming Pool",
                        img: pool,
                        icon: "swimming_pool",
                        points: [
                            "Temperature controlled pool",
                            "Kids & adults section",
                            "Poolside seating",
                        ],
                    },
                    {
                        name: "Yoga Room",
                        img: yogaRoom,
                        icon: "yoga",
                        points: [
                            "Calm & peaceful ambiance",
                            "Natural ventilation",
                            "Daily yoga sessions",
                        ],
                    },
                    {
                        name: "Spa",
                        img: spa,
                        icon: "spa",
                        points: [
                            "Relaxation therapies",
                            "Professional staff",
                            "Private rooms",
                        ],
                    },
                    {
                        name: "Indoor Games",
                        img: indoorgames,
                        icon: "indoor_games",
                        points: [
                            "Table tennis & carrom",
                            "Family-friendly games",
                            "Indoor entertainment",
                        ],
                    },
                    {
                        name: "Party Lawn",
                        img: partylawn,
                        icon: "party_lawn",
                        points: [
                            "Open-air celebrations",
                            "Event lighting setup",
                            "Spacious lawn area",
                        ],
                    },
                    {
                        name: "Restaurant",
                        img: restaurant,
                        icon: "restaurant",
                        points: [
                            "Multi-cuisine menu",
                            "Fresh ingredients",
                            "Indoor & outdoor seating",
                        ],
                    },
                    {
                        name: "Organic Farm",
                        img: organicfarm,
                        icon: "organic_farm",
                        points: [
                            "Farm-to-table concept",
                            "Organic vegetables",
                            "Eco-friendly living",
                        ],
                    },],
                property_nearplaces: [
                    { name: "Peth Fort", img: peth },
                    { name: "Bhimashankar Hills", img: bhimashankar },
                    { name: "Matheran", img: matheran },
                    { name: "Bhivpuri Waterfall", img: bhivpuri },
                    { name: "ND Studio", img: NdStudio },
                    { name: "Kondhana Caves", img: kondhana },
                    { name: "Ulhas Valley", img: ulhas },
                    { name: "Kondeshwar Temple", img: kondeshwar }
                ],
                nearby_images: [
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400"
                ],
                property_mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.1906460008877!2d73.50788197520595!3d19.099290582110093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA1JzU3LjUiTiA3M8KwMzAnMzcuNiJF!5e0!3m2!1sen!2sin!4v1749709735555!5m2!1sen!2sin",
                house_rules: [
                    "Check-in: 2:00 PM",
                    "Check-out: 11:00 AM",
                    "No smoking inside the property",
                    "Pets allowed with prior permission",
                    "Maximum occupancy: 6 guests",
                    "Parties/events require approval"
                ],
                host_details: {
                    name: "Soumil Patil",
                    about: "Friendly and responsive host, passionate about travel and hospitality.",
                    languages: ["English", "Marathi", "Hindi"]
                },
                contact_details: {
                    phone: "+91 9876543210",
                    email: "contact@support.com"
                }
            },
            {
                id: 2,
                property_name: "Rustic Charm",
                property_deal: "Deal Price",
                property_logo: dummylogo,
                property_description: "Welcome to Rustic Charm Villa, where timeless elegance meets the quiet charm of nature. Tucked away in a peaceful haven, this luxurious retreat lives up to its name—Rustic Charm, meaning \"blessing\"—offering a life of comfort, grace, and soulful beauty. From the moment you arrive, you're greeted by grand architecture that blends modern sophistication with classic design elements. The villa opens into spacious, light-filled interiors adorned with tasteful décor, flowing seamlessly into tranquil outdoor spaces. Every corner is thoughtfully curated to inspire warmth and well-being.",
                property_location: "Nandgaon, karjat",
                property_img: [img],
                property_brandId: "158",
                property_amenities: [
                    { amenities_type: "Bedrooms", amenities_count: 2, amenities_icon: "bed" },
                    { amenities_type: "Washrooms", amenities_count: 3, amenities_icon: "shower" },
                    { amenities_type: "Parking", amenities_availablity: "available", amenities_icon: "car" },
                    { amenities_type: "Internet", amenities_availablity: "available", amenities_icon: "wifi" },
                    { amenities_type: "Air condition", amenities_availablity: "available", amenities_icon: "ac" },
                    { amenities_type: "Swimming Pool", amenities_availablity: "available", amenities_icon: "pool" },
                    { amenities_type: "Kitchen", amenities_availablity: "available", amenities_icon: "kitchen" },
                    { amenities_type: "Refrigerator", amenities_availablity: "available", amenities_icon: "fridge" },
                    { amenities_type: "Microwave", amenities_availablity: "available", amenities_icon: "microwave" },
                    { amenities_type: "TV", amenities_availablity: "available", amenities_icon: "tv" },
                    { amenities_type: "Power Backup", amenities_availablity: "available", amenities_icon: "power" },
                    { amenities_type: "Garden", amenities_availablity: "available", amenities_icon: "garden" },
                    { amenities_type: "Balcony", amenities_availablity: "available", amenities_icon: "balcony" },
                    { amenities_type: "Housekeeping", amenities_availablity: "available", amenities_icon: "housekeeping" },
                    { amenities_type: "Pet Friendly", amenities_availablity: "available", amenities_icon: "pet" }
                ],
                property_amenities_img: [
                    {
                        name: "Club House",
                        img: clubhouse,
                        icon: "clubhouse",
                        points: [
                            "Premium indoor lounge",
                            "Community gatherings",
                            "Modern seating areas",
                        ],
                    },
                    {
                        name: "Swimming Pool",
                        img: pool,
                        icon: "swimming_pool",
                        points: [
                            "Temperature controlled pool",
                            "Kids & adults section",
                            "Poolside seating",
                        ],
                    },
                    {
                        name: "Yoga Room",
                        img: yogaRoom,
                        icon: "yoga",
                        points: [
                            "Calm & peaceful ambiance",
                            "Natural ventilation",
                            "Daily yoga sessions",
                        ],
                    },
                    {
                        name: "Spa",
                        img: spa,
                        icon: "spa",
                        points: [
                            "Relaxation therapies",
                            "Professional staff",
                            "Private rooms",
                        ],
                    },
                    {
                        name: "Indoor Games",
                        img: indoorgames,
                        icon: "indoor_games",
                        points: [
                            "Table tennis & carrom",
                            "Family-friendly games",
                            "Indoor entertainment",
                        ],
                    },
                    {
                        name: "Party Lawn",
                        img: partylawn,
                        icon: "party_lawn",
                        points: [
                            "Open-air celebrations",
                            "Event lighting setup",
                            "Spacious lawn area",
                        ],
                    },
                    {
                        name: "Restaurant",
                        img: restaurant,
                        icon: "restaurant",
                        points: [
                            "Multi-cuisine menu",
                            "Fresh ingredients",
                            "Indoor & outdoor seating",
                        ],
                    },
                    {
                        name: "Organic Farm",
                        img: organicfarm,
                        icon: "organic_farm",
                        points: [
                            "Farm-to-table concept",
                            "Organic vegetables",
                            "Eco-friendly living",
                        ],
                    },],
                status: "Available",
                property_nearplaces: [
                    { name: "Peth Fort", img: peth },
                    { name: "Bhimashankar Hills", img: bhimashankar },
                    { name: "Matheran", img: matheran },
                    { name: "Bhivpuri Waterfall", img: bhivpuri },
                    { name: "ND Studio", img: NdStudio },
                    { name: "Kondhana Caves", img: kondhana },
                    { name: "Ulhas Valley", img: ulhas },
                    { name: "Kondeshwar Temple", img: kondeshwar }
                ],
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
                    email: "contact@support.com",
                    available_hours: "9 AM to 9 PM"
                },
                additional_cost_note: "* Amenities like food and games may be chargeable.",
                api_display: {
                    icon_left: "📍",
                    icon_right: "ℹ️",
                    center_text: "Details"
                },
                house_rules: [
                    "Check-in: 2:00 PM",
                    "Check-out: 11:00 AM",
                    "No smoking inside the property",
                    "Pets allowed with prior permission",
                    "Maximum occupancy: 6 guests",
                    "Parties/events require approval"
                ]

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
import peth from './assets/NearByplaces/peth fort.webp';
import bhimashankar from './assets/NearByplaces/2 . Bhimashankar Hills.webp';
import matheran from './assets/NearByplaces/3. Matheran.webp';
import bhivpuri from './assets/NearByplaces/4. Bhivpuri Waterfall.webp';
import NdStudio from './assets/NearByplaces/5. ND Studio.webp';
import kondhana from './assets/NearByplaces/6. Kondhana Caves.webp';
import ulhas from './assets/NearByplaces/7. Ulhas Valley.webp';
import kondeshwar from './assets/NearByplaces/8. Kondeshwar Temple.webp';
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