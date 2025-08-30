import { useLocation } from "react-router-dom"
// import Slider from "../slider/Slider"
import Heading from "../../commonComponents/heading/Heading"
import '../../../App.css'
// import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
import CommonBanner from "../../commonComponents/banner/CommonBanner";
import img from '../../../assets/Banner_images/Homepage_banner7.jpg'

const Homepage_LocationDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const locationViseData = location.state?.property.properties;

    console.log(locationViseData)

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
        console.log(property), 'abc';

        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    console.log(locationViseData, "loactionViseData")
    // Add a check to handle cases where property data might not exist
    if (locationViseData.length === 0) {
        return (
            <section className=" py-8 pb-10 md:pb-20">
                <div>
                    <CommonBanner image={img} PageName={"Our Destinations"} />
                </div>
                <div className="mt-10 text-3xl font-bold text-center">
                    Exciting Properties Arriving Soon!
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black text-white">
            <div>
                {/* <Slider /> */}
                <CommonBanner image={img} PageName={"Our Destinations"} />
            </div>
            <section className="px-4 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title="Explore Our Villas" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {locationViseData?.map((data: any) => (
                        // property.properties?.map((data: any) => (
                        <div key={data.id} className="group bg-white shadow-lg rounded-lg ">
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    navigation
                                    // loop={true}
                                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    className="h-full w-full cursor-pointer"
                                >
                                    {data?.property_img.map((image: any, index: any) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                onClick={() => handleNavigate(data?.id)}
                                                className="h-full w-full"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${data.property_name} - Image ${index + 1}`}
                                                    className="object-cover rounded-t-lg w-full h-full overflow-hidden transform transition-all duration-300 hover:scale-115"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Modal View Button */}
                                <span
                                    onClick={handleModal(data)}
                                    className="absolute right-3 bottom-3 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-black/50 flex justify-center items-center rounded-full"
                                >
                                    <RxOpenInNewWindow />
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col gap-3">
                                <h2 className="text-lg font-semibold text-gray-800">{data.property_name}</h2>

                                {/* Amenities */}
                                {/* <div className="flex flex-wrap items-center gap-3">
                                    {data?.property_amenities.slice(0, 3).map((amenity: any, index: any) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-600">
                                            <span className="text-lg">{renderIcon(amenity.amenities_icon)}</span>
                                            <span className="text-sm">
                                                {amenity.amenities_count ? ` ${amenity.amenities_count}` : ` ${amenity.amenities_availablity}`}
                                            </span>
                                        </div>
                                    ))}
                                </div> */}

                                {/* Location */}
                                <p className="text-sm text-gray-500">{data.property_location}</p>
                            </div>
                        </div>
                        // ))
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
                )}
            </section>
        </section>
    )
}

export default Homepage_LocationDetails