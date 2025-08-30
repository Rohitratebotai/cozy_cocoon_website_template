import React from 'react';
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import img1 from "../../assets/Banner_images/Homepage_banner7.jpg";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";

const TermsAndConditionsPolicy: React.FC = () => {
    return (
        <section className='bg-gray-800 !text-white'>
            <div className=''>
                <CommonBanner image={img2} PageName={'Terms & Conditions'} />
            </div>
            <div className="tracking-wide text-white py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* Title */}
                {/* <div>
                <span className="text-4xl font-medium">
                Terms & Conditions
                </span>
            </div> */}
                {/* Description */}
                <div className="text-base font-thin flex flex-col gap-6 pl-8 mt-8 shadow-lg shadow-gray-500 p-8 rounded-lg bg-gray-900 relative">
                    <a
                        href="/terms-and-conditions"
                        className="absolute top-3 right-4 text-sm text-blue-500 underline hover:text-blue-300 flex items-center gap-2 z-10 sm:top-6 sm:right-6 md:top-6 md:right-6"
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
                        Soumil’s Stays - Terms & Conditions
                    </h1>
                    <p className="text-justify">
                        <strong>Effective Date:</strong> April 01, 2025<br />
                        <strong>Last Updated:</strong> April 15, 2025
                    </p>
                    <p className="text-justify">
                        Welcome to Soumil’s Stays. By accessing our website and booking our stays, you agree to the following terms and conditions:
                    </p>
                    <h2 className="text-2xl font-semibold">Booking & Payment</h2>
                    <p className="text-justify">
                        All bookings are subject to availability.
                    </p>
                    <p className="text-justify">
                        Full payment must be made at the time of booking through our secure payment partner, Razorpay.
                    </p>
                    <p className="text-justify">
                        Booking confirmation will be sent via email and SMS.
                    </p>
                    <h2 className="text-2xl font-semibold">Check-in & Check-out</h2>
                    <p className="text-justify">
                        Check-in time: 12:00 PM | Check-out time: 10:00 AM
                    </p>
                    <p className="text-justify">
                        Early check-in or late check-out is subject to availability and may incur additional charges.
                    </p>
                    <h2 className="text-2xl font-semibold">Use of Property</h2>
                    <p className="text-justify">
                        Guests are expected to respect the premises, natural surroundings, and local wildlife.
                    </p>
                    <p className="text-justify">
                        Any damage to the property will be chargeable based on the repair or replacement cost.
                    </p>
                    <h2 className="text-2xl font-semibold">Children & Pets</h2>
                    <p className="text-justify">
                        Children of all ages are welcome.
                    </p>
                    <p className="text-justify">
                        Pets are allowed only with prior approval.
                    </p>
                    <h2 className="text-2xl font-semibold">Force Majeure</h2>
                    <p className="text-justify">
                        Soumil’s Stays is not responsible for delays, changes, or cancellations caused by natural disasters, weather conditions, or other unforeseen events beyond our control.
                    </p>
                    <h2 className="text-2xl font-semibold">Changes to Terms</h2>
                    <p className="text-justify">
                        We reserve the right to update or modify these terms at any time without prior notice.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditionsPolicy;