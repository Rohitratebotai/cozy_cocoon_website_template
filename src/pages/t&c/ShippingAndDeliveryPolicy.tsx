import React from 'react';
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import img1 from "../../assets/Banner_images/Homepage_banner7.jpg";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";

const ShippingAndDeliveryPolicy: React.FC = () => {
    return (
        <section className='bg-gray-800 !text-white'>
            <div className=''>
            <CommonBanner image={img2} PageName={'Shipping and Delivery Policy'} />
            </div>
            <div className="tracking-wide text-white py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* Title */}
                {/* <div>
                    <span className="text-4xl font-medium">
                    Shipping Policy
                    </span>
                </div> */}
                {/* Description */}
                <div className="text-base font-thin flex flex-col gap-6 pl-8 mt-8 shadow-lg shadow-gray-500 p-8 rounded-lg bg-gray-900 relative">
                <a 
                    href="/terms-and-conditions" 
                    className="absolute top-3 right-4 text-sm text-blue-500 underline hover:text-blue-300 flex items-center gap-2 z-10 sm:top-4 sm:right-4 md:top-6 md:right-6"
                >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 19l-7-7 7-7" 
                            />
                        </svg>
                        Back
                    </a>
                    <h1 className="text-justify text-3xl font-bold">
                    Soumil’s Stays - Shipping And delivery Policy
                    </h1>
                    <p className="text-justify">
                    <strong>Effective Date:</strong> April 01, 2025<br />
                    <strong>Last Updated:</strong> April 15, 2025
                    </p>
                    <p className="text-justify">
                    As we provide stay experiences and not physical products, the following shipping policy applies:
                    </p>
                    <h2 className="text-2xl font-semibold">No Physical Goods</h2>
                    <p className="text-justify">
                    Soumil’s Stays does not ship any physical goods.
                    </p>
                    <h2 className="text-2xl font-semibold">Digital Delivery</h2>
                    <p className="text-justify">
                    Booking confirmations and related details are delivered digitally via email and SMS immediately after successful payment.
                    </p>
                    <h2 className="text-2xl font-semibold">No Shipping Charges</h2>
                    <p className="text-justify">
                    No shipping charges apply.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ShippingAndDeliveryPolicy;