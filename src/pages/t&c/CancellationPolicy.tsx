import React from 'react';
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import img1 from "../../assets/Banner_images/Homepage_banner7.jpg";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";

const CancellationPolicy: React.FC = () => {
    return (
        <section className='bg-gray-800 text-white'>
            <div>
                <CommonBanner image={img2} PageName={'Refund Policy'} />
            </div>
            <div className="tracking-wide text-white py-10 px-4 sm:px-8 lg:px-32 flex flex-col gap-8 text-justify">
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
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back
                    </a>
                    <h1 className="text-justify text-2xl sm:text-3xl font-bold">
                        Soumil’s Stays - Cancellation & Refund Policy
                    </h1>
                    <p className="text-justify text-sm sm:text-base">
                        <strong>Effective Date:</strong> April 01, 2025<br />
                        <strong>Last Updated:</strong> April 15, 2025
                    </p>
                    <p className="text-justify text-sm sm:text-base">
                        At Soumil’s Stays, we understand that plans can change. This policy outlines the terms and conditions for cancellations:
                    </p>
                    <h2 className="text-xl sm:text-2xl font-semibold">Refundable Cancellations</h2>
                    <p className="text-justify text-sm sm:text-base">
                        100% of the paid amount is refundable within 2 buisness working days if the booking is cancelled at least 7 days prior to the check-in date.
                    </p>
                    <h2 className="text-xl sm:text-2xl font-semibold">Non-Refundable Cancellations</h2>
                    <p className="text-justify text-sm sm:text-base">
                        No refunds will be provided for cancellations made within 7 days of the check-in date. Bookings made within this period, including the day before check-in, are non-refundable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CancellationPolicy;