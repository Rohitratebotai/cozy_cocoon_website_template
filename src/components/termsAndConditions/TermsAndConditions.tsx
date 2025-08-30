import { Link } from "react-router-dom";
import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
import img2 from "../../assets/Banner_images/Homepage_banner5.jpg";

const TermsAndConditions = () => {
    return (
        <section className='bg-black text-white'>
            <div>
                <CommonBanner image={img2} PageName={'Policies'} />
            </div>
            <div className="tracking-wide text-white py-10 px-4 sm:px-8 lg:px-32 flex flex-col text-justify">
                {/* Title */}
                <div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                        Policies
                    </span>
                </div>
                {/* Description */}
                <div className="text-sm sm:text-base font-thin flex flex-col sm:flex-row gap-4 sm:gap-8 px-2 sm:px-4 lg:px-16 xl:px-20 py-8 max-w-7xl">
                    <div className="flex flex-col gap-4 mt-4 sm:mt-8">
                        <Link to="/privacy-policy" className="text-sky-400 hover:underline text-base sm:text-lg">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 sm:mt-8">
                        <Link to="/cancellation-policy" className="text-sky-400 hover:underline text-base sm:text-lg">
                            Cancellation Policy
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 sm:mt-8">
                        <Link to="/shipping-and-delivery-policy" className="text-sky-400 hover:underline text-base sm:text-lg">
                            Shipping And Delivery Policy
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 sm:mt-8">
                        <Link to="/terms-and-conditions-policy" className="text-sky-400 hover:underline text-base sm:text-lg">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
