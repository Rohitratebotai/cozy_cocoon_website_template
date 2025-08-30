import React from 'react';
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
import img1 from "../../assets/Banner_images/Homepage_banner7.jpg";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";
import Parallax from "../../components/commonComponents/parallax/Parallax";
// import NearByPlaces from "../../components/aboutpage_component/nearbyplaces/NearByPlaces";

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-sky-400">
            <div className="text-4xl text-sky-500 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );
};

const About = () => {
    return (
        <section className='bg-black !text-white'>
            <div className=''>
                <CommonBanner image={img2} PageName={'About Us'} />
            </div>
            <div className="tracking-wide text-white py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* Title */}
                <div>
                    <span className="text-4xl font-medium">
                        Welcome to Cosy Villa
                    </span>
                </div>
                {/* Description */}
                <div className="text-base font-thin flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 max-w-7xl mx-auto">
                    <p className=" text-justify">
                        Welcome to Cosy Villa, where luxury and tranquility converge to create an unparalleled escape. Our journey began with a passion for redefining hospitality, establishing a retreat that goes beyond accommodation to offer an immersive experience.
                    </p>
                    <p className=" text-justify">
                        At the heart of our ethos is a commitment to excellence. We pride ourselves on delivering exceptional hospitality, from the moment you step through our doors to the conclusion of your stay. Every detail, meticulously curated, reflects our dedication to providing a stay that exceeds expectations.
                    </p>
                    <p className=" text-justify">
                        Immerse yourself in the serenity of Soumil's stay, where a guest-centric approach ensures your comfort and satisfaction. From lavishly designed bedrooms to thoughtful amenities and a harmonious connection with nature, each element is crafted to elevate your experience.
                    </p>
                    <p className=" text-justify">
                        Join us and embark on a journey where luxury meets a profound sense of tranquility, creating moments that linger long after your departure.
                    </p>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 ">Our Core Values</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>}
                            title="Excellence in Hospitality"
                            description="At Cosy Villa, we are committed to delivering unparalleled hospitality. From the moment you arrive until your departure, our focus is on ensuring every aspect of your stay exceeds expectations."
                        />

                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M9 11H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path><path d="M9 5H4"></path><path d="M9 8H4"></path><path d="M22 11h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5"></path><path d="M22 5h-5"></path><path d="M22 8h-5"></path><path d="M9 22h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z"></path><path d="M9 16h5"></path><path d="M9 19h5"></path></svg>}
                            title="Attention to Detail"
                            description="We believe that luxury lies in the details. From the meticulously designed bedrooms to the thoughtful amenities and personalized service, we take pride in creating an environment where every detail enhances your experience."
                        />

                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}
                            title="Guest-Centric Approach"
                            description="Guest-centricity goes beyond providing exceptional service; it involves a deep understanding of guests' desires, anticipating their needs, and personalizing their experiences."
                        />

                        <ValueCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>}
                            title="Harmony with Nature"
                            description="Harmony with nature represents a profound and essential principle for living a life that not only respects our planet but also acknowledges our intrinsic connection to it."
                        />
                    </div>
                </div>
            </section>

            {/* Parallax */}
            <div>
                <Parallax image={img1} title={"Cosy Villa – Where Luxury Meets Tranquility"} description={`Escape to Cosy Villa, a sanctuary where elegance and serenity blend seamlessly. Experience unmatched hospitality, thoughtfully designed spaces, and a deep connection with nature—crafted to create moments that last a lifetime.`} />
            </div>
            {/* Nearby Places */}
            <div>
                {/* <NearByPlaces /> */}
            </div>

        </section>
    );
};

export default About;