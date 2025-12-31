// import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
// import { RxOpenInNewWindow } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
import HighlightedHeading from "../../commonComponents/heading/HighlightedHeading";

const Homepage_Properties = () => {
    const navigate = useNavigate();
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const renderIcon = (iconName: any) => {
    //     switch (iconName) {
    //         case 'bed':
    //             return <FaBed />;
    //         case 'shower':
    //             return <FaShower />;
    //         case 'pool':
    //             return <FaSwimmingPool />;
    //         case 'car':
    //             return <FaCar />;
    //         default:
    //             return null;
    //     }
    // };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (id: any) => {
        navigate(`/property_details/${id}`);
    };

    const handleModal = (property: any) => () => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };
    console.log(handleModal, "handleModal");

    const handleBookNow = (property: any) => (e: any) => {
        e.stopPropagation(); // Prevent triggering other click events
        if (property.booking_link) {
            window.open(property.booking_link, '_blank');
        } else {
            // console.log("No booking link available for:", property.property_name);
            alert(`Booking link is not available for, ${property.property_name}. Please contact us for Booking Details.`);
        }
    };
    console.log(handleBookNow, "handleBookNow");

    return (
        <>
            <div className="bg-Bg_Primary text-white flex flex-col gap-10 px-8 md:gap-10 py-8 md:pt-0">
                {/* Sanskruti Section */}
                <section id="sanskruti" className="">
                    <div className="">
                        <style>
                            {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:wght@400;700;900&display=swap');
        `}
                        </style>
                        {/* Heading 4 - Green Highlight */}
                        <HighlightedHeading
                            beforeText="Your dream home in"
                            highlightedText="Karjat, Kashele"
                            description="Explore exclusive properties offering luxury and serenity!"
                            highlightColor="#7DD3FC"
                            textColor="#fff"
                            descriptionColor="#7DD3FC"
                        />
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 place-items-center">
                        {propertyData
                            ?.filter((property) => property.location === "sanskruti")
                            ?.map((property) =>
                                property?.properties.filter((data: any) => data.id !== 9)
                                    ?.map((data: any) => (
                                        <div
                                            key={data.id}
                                            className="group w-full relative bg-white rounded-md overflow-hidden  transition-all duration-300 hover:shadow-2xl"
                                        >
                                            {/* Image Container */}
                                            <div className="relative h-72 overflow-hidden">
                                                <img
                                                    src={data.property_img[0]}
                                                    alt={`${data.property_name}`}
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-6 flex flex-col gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <h2 className="text-xl font-bold text-gray-900 text-center tracking-tight">
                                                        {data.property_name}
                                                    </h2>
                                                    <p className="text-sm text-gray-500 text-center">
                                                        {data.property_location}
                                                    </p>
                                                </div>

                                                {/* Explore Now Button */}
                                                <button
                                                    onClick={() => handleNavigate(data.id)}
                                                    className="w-full bg-[#01B7C2] hover:bg-[#0198A1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                                >
                                                    Explore Now
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            )}
                    </div>
                </section>
                {/* Karadya BKC Section */}
                <section id="BKC" className="">
                    <HighlightedHeading
                        beforeText="Your dream home in"
                        highlightedText="BKC, Mumbai"
                        description="Explore exclusive properties offering luxury and serenity!"
                        highlightColor="#7DD3FC"
                        textColor="#fff"
                        descriptionColor="#7DD3FC"
                    />
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 place-items-center">
                        {propertyData
                            ?.filter((property) => property.location === "BKC")
                            ?.map((property) =>
                                property?.properties
                                    .filter((data) => data.id !== 9)
                                    ?.map((data) => (
                                        <div
                                            key={data.id}
                                            className="group w-full relative bg-white rounded-md overflow-hidden  transition-all duration-300 hover:shadow-2xl"
                                        >
                                            {/* Image Container */}
                                            <div className="relative h-72 overflow-hidden">
                                                <img
                                                    src={data.property_img[0]}
                                                    alt={`${data.property_name}`}
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-6 flex flex-col gap-4">
                                                <div className="flex flex-col gap-1">
                                                    <h2 className="text-xl font-bold text-gray-900 text-center tracking-tight">
                                                        {data.property_name}
                                                    </h2>
                                                    <p className="text-sm text-gray-500 text-center">
                                                        {data.property_location}
                                                    </p>
                                                </div>

                                                {/* Explore Now Button */}
                                                <button
                                                    onClick={() => handleNavigate(data.id)}
                                                    className="w-full bg-[#01B7C2] hover:bg-[#0198A1] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                                >
                                                    Explore Now
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            )}
                    </div>
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}
        </>
    );
};

export default Homepage_Properties;