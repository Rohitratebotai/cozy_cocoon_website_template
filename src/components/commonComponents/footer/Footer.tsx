import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/cosylogo.jpeg';
import {
    FaFacebook, FaTwitter, FaYoutube, FaInstagram
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import {
    IoIosMail, IoIosCall, IoIosArrowForward
} from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { footerData, propertyData } from '../../../data';

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};
// type IconKey = keyof typeof iconMap;

const Footer = () => {
    const navigate = useNavigate();
    const handleNavigate = (property: any) => {
        navigate(`/property_LocationDetails/${property.id}`, { state: { property } });
    }

    return (
        <div className='py-10 md:py-10 px-4 lg:px-8 bg-[#1A2B48] text-[#949494]'>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8'>
                {/* Logo Section */}
                <div className='flex flex-col gap-7 items-center lg:items-center'>
                    <img className='w-24 rounded-md' src={logo} alt="paymentlogo" />
                    <div className='flex text-lg gap-6'>
                        {footerData.socialLinks.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                    <IconComponent className='hover:text-white duration-300 cursor-pointer' />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Information */}
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl text-white font-semibold mb-4">Locate Us</h2>
                    <p className='pb-6 flex gap-2 cursor-pointer hover:text-white duration-100'><span className='text-lg mt-2'><ImLocation2 /></span>{footerData.address}</p>
                    <div className="text-base flex flex-col gap-3">
                        {footerData.contactInfo.map(({ icon, text }, index) => {
                            const IconComponent = iconMap[icon];

                            return (
                                <div key={index} className=" flex flex-col gap-2 cursor-pointer">
                                    {Array.isArray(text) ? (
                                        text.map((line, idx) => (
                                            <p
                                                key={idx}
                                                className="flex gap-2 justify-center lg:justify-start items-center"
                                            >
                                                <div className='flex gap-2 items-center justify-center hover:text-white duration-100 cursor-pointer'>
                                                    <span><IconComponent /></span>
                                                    <a href={`tel:${line}`}>{line}</a>
                                                </div>
                                            </p>
                                        ))
                                    ) : (
                                        <a href={`mailto:${text}`} className="flex gap-2 hover:text-white duration-100 justify-center lg:justify-start items-center">
                                            <span><IconComponent /></span>
                                            <span>{text}</span>
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Villas Links */}
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl text-white font-semibold mb-4'>Villas at a glance</h2>
                    <div className='flex flex-col gap-3 text-base'>
                        {
                            propertyData?.filter((property) => property.location !== 'Apartments')
                                ?.map((data) => {
                                    return (
                                        <>
                                            <div className='flex flex-col cursor-pointer gap-1 hover:text-white duration-300' key={data.id}>
                                                <div onClick={() => handleNavigate(data)} className='flex gap-2 justify-center lg:justify-start items-center'>
                                                    <span><IoIosArrowForward /></span>
                                                    {data.location}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl text-white font-semibold mb-4'>Policies</h2>
                    <div className='flex items-center md:items-start flex-col gap-3 text-base'>
                        {footerData.TermsandConditions.map((item, index) => (
                            <a key={index} href={item.link} className='flex gap-1 items-center cursor-pointer hover:text-white duration-300'>
                                <span><IoIosArrowForward /></span>
                                {item.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Google Maps */}
                <div className='flex flex-col items-center lg:items-start'>
                    <iframe
                        src={footerData.mapSrc}
                        loading="lazy"
                        className="w-full h-40"
                    ></iframe>
                </div>
            </div>

            {/* Copyright */}
            <div className='text-base text-slate-300 text-center mt-10'>
                © 2025 The Cosy Villa All rights reserved | Designed By {" "}
                <a className='text-base font-semibold text-slate-300' href="https://ratebotai.com" target="_blank" rel="noopener noreferrer" >
                    RateBotAi
                </a>
            </div>

        </div>
    );
};

export default Footer;
