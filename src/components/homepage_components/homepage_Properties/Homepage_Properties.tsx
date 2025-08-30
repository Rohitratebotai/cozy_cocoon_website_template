// import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import Heading from "../../commonComponents/heading/Heading";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";

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

    const handleBookNow = (property: any) => (e: any) => {
        e.stopPropagation(); // Prevent triggering other click events
        if (property.booking_link) {
            window.open(property.booking_link, '_blank');
        } else {
            // console.log("No booking link available for:", property.property_name);
            alert(`Booking link is not available for, ${property.property_name}. Please contact us for Booking Details.`);
        }
    };

    return (

        <>
            {/* Karjat Section */}
            <section className="px-8 lg:px-20 py-8 pb-10 md:pb-8">
                <Heading title="Karjat" />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
                    {propertyData
                        ?.filter((property) => property.location === "Karjat")
                        ?.map((property) =>
                            property?.properties.filter((data: any) => data.id !== 9)
                                ?.map((data: any) => (
                                    <div key={data.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300">
                                        {/* Image Container */}
                                        <div className="relative h-64 md:h-80">
                                            <div onClick={() => handleNavigate(data.id)} className="h-full w-full">
                                                <img
                                                    src={data.property_img[0]}
                                                    alt={`${data.property_name} - Image 1`}
                                                    className="object-cover cursor-pointer w-full h-full transition-transform duration-300 overflow-hidden"
                                                />
                                            </div>
                                            {/* Modal View Button */}
                                            <span
                                                onClick={handleModal(data)}
                                                className="absolute right-3 bottom-3 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-black/50 flex justify-center items-center rounded-full"
                                            >
                                                <RxOpenInNewWindow />
                                            </span>
                                        </div>
                                        {/* Content */}
                                        <div className="p-4 flex flex-col gap-1 md:gap-3">
                                            <div className="flex justify-between items-center gap-1 md:gap-4">
                                                <div className="flex-1">
                                                    <h2 className="text-sm md:text-base font-semibold text-gray-800">{data.property_name}</h2>
                                                    <p className="text-xs md:text-sm text-gray-500">{data.property_location}</p>
                                                </div>
                                                {/* Book Now Button */}
                                                <div className="sm:flex">
                                                    <button
                                                        onClick={handleBookNow(data)}
                                                        className="bg-[#01B7C2] hover:bg-[#01B7C2] text-white font-semibold py-2 px-3 md:py-2 md:px-5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        )}
                </div>
                <div className="py-10 text-primary md:py-14 tracking-wide flex justify-start items-center text-xl md:text-2xl lg:text-5xl font-medium relative">
                    
                </div>
            </section>

            {/* Alibaug Section */}
            <section className="px-8 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title="Alibaug" />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
                    {propertyData
                        ?.filter((property) => property.location === "Alibaug")
                        ?.map((property) =>
                            property?.properties.filter((data: any) => data.id !== 9)
                                ?.map((data: any) => (
                                    <div key={data.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300">
                                        {/* Image Container */}
                                        <div className="relative h-64 md:h-80">
                                            <div onClick={() => handleNavigate(data.id)} className="h-full w-full">
                                                <img
                                                    src={data.property_img[0]}
                                                    alt={`${data.property_name} - Image 1`}
                                                    className="object-cover cursor-pointer w-full h-full transition-transform duration-300 overflow-hidden"
                                                />
                                            </div>
                                            {/* Modal View Button */}
                                            <span
                                                onClick={handleModal(data)}
                                                className="absolute right-3 bottom-3 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-black/50 flex justify-center items-center rounded-full"
                                            >
                                                <RxOpenInNewWindow />
                                            </span>
                                        </div>
                                        {/* Content */}
                                        <div className="p-4 flex flex-col gap-1 md:gap-3">
                                            <div className="flex justify-between items-center gap-1 md:gap-4">
                                                <div className="flex-1">
                                                    <h2 className="text-sm md:text-base font-semibold text-gray-800">{data.property_name}</h2>
                                                    <p className="text-xs md:text-sm text-gray-500">{data.property_location}</p>
                                                </div>
                                                {/* Book Now Button */}
                                                <div className="sm:flex">
                                                    <button
                                                        onClick={handleBookNow(data)}
                                                        className="bg-[#01B7C2] hover:bg-[#01B7C2] text-white font-semibold py-2 px-3 md:py-2 md:px-5 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base whitespace-nowrap"
                                                    >
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        )}
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}
        </>
    );
};

export default Homepage_Properties;