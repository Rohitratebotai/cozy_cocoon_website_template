import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import './navbar.css';
import { IoIosMail, IoIosCall } from 'react-icons/io';
import { navbarData, propertyData } from '../../../data';
import { IoLogoWhatsapp } from "react-icons/io";

// const cityOptions = ["sanskruti", "Mumbai", "Alibaug"];

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDestinationsDropdownOpen, setIsDestinationsDropdownOpen] = useState(false);
    const [isVillasDropdownOpen, setIsVillasDropdownOpen] = useState(false);
    const [isApartmentsDropdownOpen, setIsApartmentsDropdownOpen] = useState(false);
    const [isNearbyOpen, setIsNearbyOpen] = useState(false);
    const [isSanskritiOpen, setIsSanskritiOpen] = useState(false);
    const [iskanakiaOpen, setIskanakiaOpen] = useState(false);
    const [isSanskritiEssentialsOpen, setIsSanskritiEssentialsOpen] = useState(false);
    const [iskanakiaEssentialsOpen, setIskanakiaEssentialsOpen] = useState(false);
    // const [selectedCity, setSelectedCity] = useState(cityOptions[0]);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (id: any) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpenDropdown(false); // close dropdown after selecting
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsVillasDropdownOpen(false);
        setIsDestinationsDropdownOpen(false);
        setIsApartmentsDropdownOpen(false);
    };

    const handleDestinationNavigate = (property: any) => {
        navigate(`/property_LocationDetails/${property.id}`, { state: { property } });
        closeMenu();
    };

    const handleVillaNavigate = (property: any) => {
        navigate(`/property_details/${property.id}`, { state: { property } });
        closeMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className='navbar-container w-full h-fit fixed top-0 z-50 shadow-md'>
            {/* Email and Phone */}
            <div className="bg-Bg_Primary flex flex-wrap text-primary justify-between items-center gap-2 p-2 md:p-4 md:flex-nowrap">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full md:w-auto">
                    {/* Email */}
                    <div className="flex flex-col md:flex-row gap-2 text-center md:text-left">
                        <div className="flex items-center gap-1 font-semibold md:font-medium">
                            <IoIosMail className="text-base md:text-2xl" />
                            <a href="mailto:priyanka.cultescape@gmail.com" className="text-xs md:text-base hover:text-gray-300">
                                priyanka.cultescape@gmail.com
                            </a>
                            {/* <IoIosMail className="text-base md:text-2xl" />
                            <a href="mailto:arti.cultescape@gmail.com" className="text-xs md:text-base hover:text-gray-300">
                                arti.cultescape@gmail.com
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-2 w-full md:w-auto'>
                    {/* Contact Section */}
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 w-full md:w-auto'>
                        {/* Contact Section */}
                        <div className="flex flex-row flex-wrap justify-center items-center gap-2 w-full md:w-auto">
                            {/* Phone 1 */}
                            <div className="flex items-center gap-1 font-semibold md:font-medium">
                                <IoIosCall className="text-base md:text-xl" />
                                <a href="tel:+919515192575" className="text-xs md:text-base hover:underline">
                                    +91 9515192575
                                </a>
                            </div>
                            {/* <span className="text-slate-400 hidden md:block">|</span> */}

                            {/* Phone 2 */}
                            {/* <div className="flex items-center gap-1 font-semibold md:font-medium">
                                <IoIosCall className="text-base md:text-xl" />
                                <a href="tel:+917208068702" className="text-xs md:text-base hover:underline">
                                    +91 7208068702
                                </a>
                            </div> */}
                        </div>
                    </div>


                    <div className='flex flex-row flex-wrap justify-center items-center gap-2 w-full md:w-auto'>
                        <span className="text-slate-400 hidden md:block">|</span>
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/9515192575"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 text-xl md:text-2xl"
                        >
                            <IoLogoWhatsapp />
                        </a>
                        <span className="text-slate-400 hidden md:block">|</span>

                        {/* Instagram */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="md:w-6 md:h-6"
                            >
                                <path
                                    d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM7 4H17C18.66 4 20 5.34 20 7V17C20 18.66 18.66 20 17 20H7C5.34 20 4 18.66 4 17V7C4 5.34 5.34 4 7 4ZM17 6C16.45 6 16 6.45 16 7C16 7.55 16.45 8 17 8C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z"
                                    fill="#E4405F"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div id='navbar_container' className={`transition-all ${isScrolled ? "bg-Bg_Primary text-white border-primary" : "bg-white text-black"
                } duration-300 w-full h-full flex items-center justify-between px-4 py-3 md:px-12 md:justify-between md:gap-40 overflow-visible`}>
                {/* Menu Toggle Button (for mobile) */}
                <button className={`md:hidden ${isScrolled ? "text-primary" : "text-Bg_Primary"} text-2xl`} onClick={toggleMenu}>
                    {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                <div className="flex items-center">
                    {/* Logo */}
                    <Link to='/'>
                        <img className='w-14 h-14 md:w-20 md:h-16 rounded-full' src={navbarData.logo[0].image} alt='Logo' />
                    </Link>
                </div>

                {/* Nav Links (Desktop) */}
                <div id='navlinks' className={`hidden md:flex items-center gap-4 ${isScrolled ? "text-white" : "text-black"} md:gap-8 static`}>
                    <ul className='flex items-center gap-4 md:gap-8 static'>
                        {navbarData?.navmenu?.map((item) => (
                            <li key={item.id} className='relative '>
                                {
                                    item.title === 'Destinations' ? (
                                        <div
                                            key={item.id}
                                            className="relative"
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <button className=" text-sm md:text-xl font-bold cursor-pointer">
                                                {item.title}
                                            </button>

                                            {/* Dropdown */}
                                            {openDropdown && (
                                                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48">
                                                    <div
                                                        onClick={() => handleScroll("sanskruti")}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        Destination 1
                                                    </div>
                                                    <div
                                                        onClick={() => handleScroll("BKC")}
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        Destination 2
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        // <div className='relative group flex flex-col items-start gap-2 '>
                                        //     <Link
                                        //         onClick={closeMenu}
                                        //         to={item.link}
                                        //         className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                        //     >
                                        //         {item.title}
                                        //     </Link>
                                        //     <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[200px] z-[9999] transition-all duration-300 mt-1'>
                                        //         <ul className='py-2'>
                                        //             {propertyData?.filter((item) => item.location !== "Apartments")
                                        //                 ?.map((property, index) => (
                                        //                     <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                        //                         <div onClick={() => handleDestinationNavigate(property)} className='block text-black'>
                                        //                             {property.location}
                                        //                         </div>
                                        //                     </li>
                                        //                 ))}
                                        //         </ul>
                                        //     </div>
                                        // </div>

                                        // ) : item.title === 'Villas' ? (

                                        //     <div className='relative group flex flex-col items-start gap-2 static'>
                                        //         <Link
                                        //             onClick={closeMenu}
                                        //             to={item.link}
                                        //             className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                        //         >
                                        //             {item.title}
                                        //         </Link>
                                        //         <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[200px] max-h-60 overflow-y-auto z-[9999] transition-all duration-300 mt-1'>
                                        //             <ul className='py-2'>
                                        //                 {propertyData
                                        //                     ?.filter((property) => property.location !== "Apartments")
                                        //                     ?.map((property) =>
                                        //                         property.properties?.map((data) => (
                                        //                             <li key={data.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        //                                 <div onClick={() => handleVillaNavigate(data)} className="block text-black">
                                        //                                     {data.property_name}
                                        //                                 </div>
                                        //                             </li>
                                        //                         ))
                                        //                     )}
                                        //             </ul>
                                        //         </div>
                                        //     </div>
                                        // ) : item.title === 'Apartments' ? (

                                        //     <div className='relative group flex flex-col items-start gap-2 static'>
                                        //         <Link
                                        //             onClick={closeMenu}
                                        //             to={item.link}
                                        //             className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                        //         >
                                        //             {item.title}
                                        //         </Link>
                                        //         <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-lg rounded-md min-w-[200px] max-h-60 overflow-y-auto z-[9999] transition-all duration-300 mt-1'>
                                        //             <ul className='py-2'>
                                        //                 {propertyData?.slice(2).map((property, index) =>
                                        //                     property?.properties.map((data) =>
                                        //                         <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                        //                             <div onClick={() => handleVillaNavigate(data)} className='block text-black'>
                                        //                                 {data.property_name}
                                        //                             </div>
                                        //                         </li>
                                        //                     ))}
                                        //             </ul>
                                        //         </div>
                                        //     </div>
                                    ) : item.title === 'Near By Locations' ? (
                                        <div className='relative group flex flex-col items-start gap-2 '>
                                            <span
                                                className=' text-sm md:text-xl font-bold cursor-pointer'
                                                onClick={() => setIsNearbyOpen(!isNearbyOpen)}
                                            >
                                                {item.title} <span className="text-xs ml-1">{isNearbyOpen ? '▲' : '▼'}</span>
                                            </span>

                                            {isNearbyOpen && (
                                                <div id='dropmenus' className={`absolute top-full left-0 ${isScrolled ? "bg-black text-white border-primary" : "bg-white text-black"} border shadow-lg rounded-md min-w-[220px] max-h-80 overflow-y-auto z-[9999] transition-all duration-300 mt-1`}>
                                                    <ul className='py-2 text-sm'>

                                                        {/* Sanskriti */}
                                                        <li
                                                            className='px-4 py-2 hover:bg-gray-500 cursor-pointer font-semibold flex justify-between items-center'
                                                            onClick={() => setIsSanskritiOpen(!isSanskritiOpen)}
                                                        >
                                                            Sanskriti <span>{isSanskritiOpen ? '▲' : '▼'}</span>
                                                        </li>
                                                        {isSanskritiOpen && (
                                                            <ul className='pl-6 text-sm'>
                                                                <li className='hover:bg-gray-500 px-2 py-1 cursor-pointer'>Tourism</li>
                                                                <li
                                                                    className='px-4 py-2 hover:bg-gray-500 cursor-pointer font-semibold flex justify-between items-center'
                                                                    onClick={() => setIsSanskritiEssentialsOpen(!isSanskritiEssentialsOpen)}
                                                                >
                                                                    Essentials <span>{isSanskritiEssentialsOpen ? '▲' : '▼'}</span>
                                                                </li>
                                                                {isSanskritiEssentialsOpen && (
                                                                    <ul className='pl-4 text-xs'>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/sanskruti/food"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Food
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/sanskruti/railwaystations"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Railway
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/sanskruti/hospitals"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Hospitals & chemist
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/sanskruti/petrolpumps"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Petrol Pumps
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                )}
                                                            </ul>
                                                        )}

                                                        {/* kanakia */}
                                                        <li
                                                            className='px-4 py-2 hover:bg-gray-500 cursor-pointer font-semibold flex justify-between items-center'
                                                            onClick={() => setIskanakiaOpen(!iskanakiaOpen)}
                                                        >
                                                            Kanakia <span>{iskanakiaOpen ? '▲' : '▼'}</span>
                                                        </li>
                                                        {iskanakiaOpen && (
                                                            <ul className='pl-6 text-sm'>
                                                                <li className='hover:bg-gray-500 px-2 py-1 cursor-pointer'>Business</li>
                                                                <li
                                                                    className='px-4 py-2 hover:bg-gray-500 cursor-pointer font-semibold flex justify-between items-center'
                                                                    onClick={() => setIskanakiaEssentialsOpen(!iskanakiaEssentialsOpen)}
                                                                >
                                                                    Essentials <span>{iskanakiaEssentialsOpen ? '▲' : '▼'}</span>
                                                                </li>
                                                                {iskanakiaEssentialsOpen && (
                                                                    <ul className='pl-4 text-xs'>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/Mumbai/food"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Food
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/Mumbai/railwaystations"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Railway
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/Mumbai/hospitals"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Hospitals & chemist
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/Mumbai/petrolpumps"
                                                                                className='hover:bg-gray-500 px-2 py-1 cursor-pointer block'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Petrol Pumps
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                )}
                                                            </ul>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) :
                                        <Link onClick={closeMenu} to={item.link} className=' text-sm md:text-xl font-bold cursor-pointer'>
                                            {item.title}
                                        </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu - Fixed positioning */}
            {
                isMenuOpen && (
                    <div className='md:hidden bg-white w-full absolute top-full left-0 z-50 shadow-lg max-h-[70vh] overflow-y-auto border-t border-gray-200'>
                        <ul className='flex flex-col items-start gap-0'>
                            {navbarData?.navmenu?.map((item) => (
                                <li key={item.id} className='w-full border-b border-gray-100'>
                                    {item.title === 'Destinations' ? (
                                        <>
                                            <div
                                                className='flex justify-between items-center w-full p-4 font-bold cursor-pointer text-black hover:bg-gray-50'
                                                onClick={() => setIsDestinationsDropdownOpen(!isDestinationsDropdownOpen)}
                                            >
                                                {item.title} <span className="text-sm">{isDestinationsDropdownOpen ? '▲' : '▼'}</span>
                                            </div>
                                            {isDestinationsDropdownOpen && (
                                                <ul className='bg-gray-50'>
                                                    {propertyData?.filter((property) => property.location !== "Apartments")
                                                        ?.map((property, index) => (
                                                            <li key={index} className='px-6 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0'>
                                                                <div
                                                                    onClick={() => handleDestinationNavigate(property)}
                                                                    className='block text-black text-sm'
                                                                >
                                                                    {property.location}
                                                                </div>
                                                            </li>
                                                        ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : item.title === 'Villas' ? (
                                        <>
                                            <div
                                                className='flex justify-between items-center w-full p-4 font-bold cursor-pointer text-black hover:bg-gray-50'
                                                onClick={() => setIsVillasDropdownOpen(!isVillasDropdownOpen)}
                                            >
                                                {item.title} <span className="text-sm">{isVillasDropdownOpen ? '▲' : '▼'}</span>
                                            </div>
                                            {isVillasDropdownOpen && (
                                                <ul className='bg-gray-50 max-h-48 overflow-y-auto'>
                                                    {propertyData
                                                        ?.filter((property) => property.location !== "Apartments")
                                                        ?.map((property) =>
                                                            property.properties?.map((data) => (
                                                                <li key={data.id} className='px-6 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0'>
                                                                    <div
                                                                        onClick={() => handleVillaNavigate(data)}
                                                                        className='block text-black text-sm'
                                                                    >
                                                                        {data.property_name}
                                                                    </div>
                                                                </li>
                                                            ))
                                                        )}
                                                </ul>
                                            )}
                                        </>
                                    ) : item.title === 'Apartments' ? (
                                        <>
                                            <div
                                                className='flex justify-between items-center w-full p-4 font-bold cursor-pointer text-black hover:bg-gray-50'
                                                onClick={() => setIsApartmentsDropdownOpen(!isApartmentsDropdownOpen)}
                                            >
                                                {item.title} <span className="text-sm">{isApartmentsDropdownOpen ? '▲' : '▼'}</span>
                                            </div>
                                            {isApartmentsDropdownOpen && (
                                                <ul className='bg-gray-50 max-h-48 overflow-y-auto'>
                                                    {propertyData?.slice(2).map((property, index) =>
                                                        property?.properties.map((data, dataIndex) => (
                                                            <li key={`${index}-${dataIndex}`} className='px-6 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0'>
                                                                <div
                                                                    onClick={() => handleVillaNavigate(data)}
                                                                    className='block text-black text-sm'
                                                                >
                                                                    {data.property_name}
                                                                </div>
                                                            </li>
                                                        ))
                                                    )}
                                                </ul>
                                            )}
                                        </>
                                    ) : item.title === 'Near By Locations' ? (
                                        <>
                                            <div
                                                className='flex justify-between items-center w-full p-4 font-bold cursor-pointer text-black hover:bg-gray-50'
                                                onClick={() => setIsNearbyOpen(!isNearbyOpen)}
                                            >
                                                {item.title} <span className="text-sm">{isNearbyOpen ? '▲' : '▼'}</span>
                                            </div>
                                            {isNearbyOpen && (
                                                <div className='bg-gray-50 max-h-80 overflow-y-auto'>
                                                    <ul className='text-sm'>
                                                        {/* Sanskriti */}
                                                        <li
                                                            className='px-6 py-3 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center border-b border-gray-200'
                                                            onClick={() => setIsSanskritiOpen(!isSanskritiOpen)}
                                                        >
                                                            Sanskriti <span className="text-xs">{isSanskritiOpen ? '▲' : '▼'}</span>
                                                        </li>
                                                        {isSanskritiOpen && (
                                                            <ul className='bg-gray-100'>
                                                                <li className='px-8 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300'>Tourism</li>
                                                                <li
                                                                    className='px-8 py-2 hover:bg-gray-200 cursor-pointer font-medium flex justify-between items-center border-b border-gray-300'
                                                                    onClick={() => setIsSanskritiEssentialsOpen(!isSanskritiEssentialsOpen)}
                                                                >
                                                                    Essentials <span className="text-xs">{isSanskritiEssentialsOpen ? '▲' : '▼'}</span>
                                                                </li>
                                                                {isSanskritiEssentialsOpen && (
                                                                    <ul className='bg-gray-200'>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/sanskruti/food"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Food
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/sanskruti/railwaystations"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Railway
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/sanskruti/hospitals"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Hospitals & chemist
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/sanskruti/petrolpumps"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Petrol Pumps
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                )}
                                                            </ul>
                                                        )}

                                                        {/* kanakia */}
                                                        <li
                                                            className='px-6 py-3 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center border-b border-gray-200'
                                                            onClick={() => setIskanakiaOpen(!iskanakiaOpen)}
                                                        >
                                                            kanakia <span className="text-xs">{iskanakiaOpen ? '▲' : '▼'}</span>
                                                        </li>
                                                        {iskanakiaOpen && (
                                                            <ul className='bg-gray-100'>
                                                                <li className='px-8 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300'>Business</li>
                                                                <li
                                                                    className='px-8 py-2 hover:bg-gray-200 cursor-pointer font-medium flex justify-between items-center border-b border-gray-300'
                                                                    onClick={() => setIskanakiaEssentialsOpen(!iskanakiaEssentialsOpen)}
                                                                >
                                                                    Essentials <span className="text-xs">{iskanakiaEssentialsOpen ? '▲' : '▼'}</span>
                                                                </li>
                                                                {iskanakiaEssentialsOpen && (
                                                                    <ul className='bg-gray-200'>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/kanakia/food"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Food
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/kanakia/railwaystations"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Railway
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/kanakia/hospitals"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Hospitals & chemist
                                                                            </Link>
                                                                        </li>
                                                                        <li className='px-10 py-2 hover:bg-gray-300 border-b border-gray-400 last:border-b-0'>
                                                                            <Link
                                                                                to="/essentials/kanakia/petrolpumps"
                                                                                className='block text-black text-xs'
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Petrol Pumps
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                )}
                                                            </ul>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            onClick={closeMenu}
                                            to={item.link}
                                            className='block w-full p-4 font-bold cursor-pointer text-black hover:bg-gray-50 hover:text-primary transition-all duration-300'
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </section >
    );
};

export default Navbar;