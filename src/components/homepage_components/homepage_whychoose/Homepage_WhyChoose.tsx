import img2 from '../../../assets/cosy_villa_images/img_3.jpeg';
import img1 from '../../../assets/cosy_villa_images/img_4.jpeg';
import { MdOutlineDone } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface FeatureData {
    images: string[]; // Array of image paths (strings)
    title: string;
    description: string;
    features: {
        title: string;
        description: string;
    }[]; // Array of feature objects with title and description
}

const Homepage_WhyChoose = () => {
    const featureData: FeatureData = {
        images: [img1, img2],
        title: "Why Choose Cosy Villa?",
        description: "At Cosy Villa, we believe that where you stay is just as important as where you go.Here’s why choosing us will make your journey",
        features: [
            {
                title: "Effortless Comfort, Always",
                description: "At Cosy Villa, comfort isn’t an afterthought—it’s the foundation. Every space is crafted to feel both familiar and elevated, blending plush textures, calming tones, and thoughtful details that make you feel instantly at home."
            },
            {
                title: "Genuine, Heartfelt Hospitality",
                description: "Our dedicated team isn’t just here to serve—you’ll feel genuinely cared for. From your arrival to departure, expect intuitive service, tailored touches, and a warm smile at every turn."
            },
            {
                title: "Exceptional Locations, Endless Possibilities",
                description: "Cosy Villa properties are nestled in handpicked neighborhoods—whether it's the peaceful hum of the countryside or the vibrant pulse of the city. Wherever you choose, you’re always close to what matters most."
            },
            {
                title: "Luxury Within Reach",
                description: "We believe indulgence shouldn’t be out of reach. Cosy Villa brings you elevated experiences, elegant design, and premium amenities—at rates that make sense."
            },
            {
                title: "Stay for the Stories",
                description: "At Cosy Villa, your stay is just the beginning. We offer curated local adventures, dining suggestions, and cultural gems, so every visit becomes a cherished memory."
            }
        ]
    };


    return (
        <section className="py-10 lg:py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 tracking-widest">
                {/* Left side - Images */}
                <div className="flex-1 flex justify-center items-center relative">
                    <img
                        src={img1}
                        alt="Pool view with people"
                        className="w-3/5 sm:w-2/3 rounded-lg shadow-lg object-cover"
                    />
                    <img
                        src={img2}
                        alt="Garden swing area"
                        className="w-56 sm:w-72 absolute -bottom-8 right-8 sm:-bottom-10 sm:right-10 rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                    {featureData?.title && (
                        <h1 className="text-2xl text-white sm:text-3xl font-bold text-navy-900 mb-4">
                            {featureData.title}
                        </h1>
                    )}

                    {featureData?.description && (
                        <p className="text-white mb-6 text-sm sm:text-base">
                            {featureData.description}
                        </p>
                    )}

                    <ul className="space-y-4 mb-8">
                        {featureData?.features?.map((feature, index) => (
                            <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <span className="text-primary text-xl sm:text-2xl"><MdOutlineDone /></span>
                                <div>
                                    <h3 className=" font-semibold text-sm sm:text-base">{feature.title}</h3>
                                    <p className="text-white text-xs sm:text-sm">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center lg:justify-start">
                        <Link
                            to={'/contact'}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors hover:bg-primary-dark"
                        >
                            <span>Contact</span>
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage_WhyChoose;
