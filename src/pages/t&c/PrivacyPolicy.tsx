import React from 'react';
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import img1 from "../../assets/Banner_images/Homepage_banner7.jpg";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";

const PrivacyPolicy: React.FC = () => {
    return (
        <section className='bg-gray-800 !text-white'>
            <div className=''>
            <CommonBanner image={img2} PageName={'Privacy Policy'} />
            </div>
            <div className="tracking-wide text-white py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* Title */}
                {/* <div>
                    <span className="text-4xl font-medium">
                    Privacy Policy
                    </span>
                </div> */}
                {/* Description */}
                <div className="relative text-base font-thin flex flex-col gap-6 pl-8 mt-8 shadow-lg shadow-gray-500 p-8 rounded-lg bg-gray-900">
                <a 
                    href="/terms-and-conditions" 
                    className="absolute top-4 right-4 text-sm text-blue-500 underline hover:text-blue-300 flex items-center gap-2 z-10 sm:top-4 sm:right-4 md:top-6 md:right-6"
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
                        Soumil’s Stays - Privacy Policy
                    </h1>
                    <p className="text-justify">
                        <strong>Effective Date:</strong> April 01, 2025<br />
                        <strong>Last Updated:</strong> April 15, 2025
                    </p>
                    <p className="text-justify">
                        At Soumil’s Stays, we value your privacy. This policy outlines how we collect, use, and safeguard your information:
                    </p>
                    <h2 className="text-2xl font-semibold">Information We Collect</h2>
                    <p className="text-justify">
                        Name, contact number, email address, and payment details at the time of booking.
                    </p>
                    <h2 className="text-2xl font-semibold">Usage</h2>
                    <p className="text-justify">
                        Your information is used solely to process bookings, handle payments, and enhance our services.
                    </p>
                    <p className="text-justify">
                        We do not sell or share your personal information with third parties.
                    </p>
                    <h2 className="text-2xl font-semibold">Data Security</h2>
                    <p className="text-justify">
                        All transactions are securely processed through Razorpay using industry-standard encrypted technology.
                    </p>
                    <h2 className="text-2xl font-semibold">Your Rights</h2>
                    <p className="text-justify">
                        You may request the deletion of your personal data at any time by contacting us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;