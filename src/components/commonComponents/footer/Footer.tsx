import logo from '../../../assets/cultlogo.png';
import {
    FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import {
    IoIosArrowForward
} from "react-icons/io";
import { footerData } from '../../../data';

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosArrowForward
};

const Footer = () => {
    // Contact information with WhatsApp links
    const contactInfo = [
        {
            label: 'Holiday Homes – Priyanka',
            number: '9515192575',
            whatsapp: 'https://wa.me/919515192575'
        },
        {
            label: 'Apartments – Khushboo',
            number: '7208068702',
            whatsapp: 'https://wa.me/917208068702'
        }
    ];

    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-8 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>

                    {/* Logo Section */}
                    <div className='space-y-6'>
                        <div className='flex justify-center lg:justify-start'>
                            <img
                                className='w-20 h-20 object-contain rounded-full p-2 bg-gray-800 border border-gray-600'
                                src={logo}
                                alt="The Cult Escape Logo"
                            />
                        </div>

                        <div className='flex justify-center lg:justify-start gap-4'>
                            {footerData.socialLinks.map(({ icon, link }, index) => {
                                const IconComponent = iconMap[icon as keyof typeof iconMap];
                                if (!IconComponent) return null;
                                return (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-700 transition'
                                    >
                                        <IconComponent className='w-5 h-5 text-white' />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-4">
                            {contactInfo.map(({ label, number, whatsapp }, index) => (
                                <div key={index} className='space-y-1'>
                                    <p className="text-gray-400 text-sm">{label}</p>
                                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        <a
                                            href={whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition"
                                            title="Chat on WhatsApp"
                                        >
                                            <FaWhatsapp className='w-5 h-5 text-white' />
                                        </a>
                                        <a
                                            href={`tel:${number}`}
                                            className="text-gray-300 hover:text-white"
                                        >
                                            {number}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Policies */}
                    <div className='text-center lg:text-left'>
                        <h3 className='text-lg font-semibold mb-4'>Policies</h3>
                        <div className='space-y-3'>
                            {footerData.TermsandConditions.map((item, index) => (
                                <a
                                    key={index}
                                    href={'#'}
                                    className='flex items-center gap-2 justify-center lg:justify-start text-gray-300 hover:text-white'
                                >
                                    <IoIosArrowForward className='w-4 h-4 text-gray-400' />
                                    <span>{item.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className='border-t border-gray-700 bg-gray-800'>
                <div className='max-w-7xl mx-auto px-8 py-6'>
                    <div className='text-center text-gray-400'>
                        <p>
                            © {new Date().getFullYear()} The Cult Escape. All rights reserved | Designed by{" "}
                            <a
                                className='font-semibold text-white hover:underline'
                                href="https://ratebotai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                RateBotAi
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;