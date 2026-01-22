import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import './navbar.css';
import { IoIosCall } from 'react-icons/io';
import { navbarData, propertyData } from '../../../data';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

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
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (id: any) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpenDropdown(false);
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
        setIsNearbyOpen(false);
        setIsSanskritiOpen(false);
        setIskanakiaOpen(false);
        setIsSanskritiEssentialsOpen(false);
        setIskanakiaEssentialsOpen(false);
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
        const handleScrollEvent = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    return (
        <section className='navbar-container w-full h-fit fixed top-0 z-50 shadow-md'>
            {/* Email and Phone */}
            <div className="bg-white flex items-center justify-between px-2 md:p-4">
                {/* Left Spacer (keeps center alignment) */}
                <div className="hidden md:block w-1/3" />

                {/* Center Text */}
                <div className="flex-1 text-center">
                    <h2 style={{
                        fontFamily: "'Caveat', cursive"
                    }} className="py-2 md:py-0 font-semibold text-lg md:text-2xl">
                        Welcome to Cult Escape, experience redefined
                    </h2>
                </div>

                {/* Right Section */}
                <div className="hidden md:flex items-center gap-2 md:gap-3 w-1/3 justify-end">
                    {/* Phone */}
                    <div className="flex items-center gap-1 font-medium">
                        <IoIosCall className="text-base md:text-xl" />
                        <a
                            href="tel:+919515192575"
                            className="text-xs md:text-base hover:underline"
                        >
                            +91 9515192575
                        </a>
                    </div>

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
                            <li key={item.id} className='relative'>
                                {
                                    item.title === 'Destinations' ? (
                                        <div
                                            key={item.id}
                                            className="relative"
                                            onMouseEnter={() => setOpenDropdown(true)}
                                            onMouseLeave={() => setOpenDropdown(false)}
                                        >
                                            <button
                                                className="text-sm md:text-xl flex items-end font-bold cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenDropdown(!openDropdown);
                                                }}
                                                aria-expanded={openDropdown}
                                                aria-haspopup="true"
                                            >
                                                {item.title} {openDropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                            </button>

                                            {/* Dropdown */}
                                            {openDropdown && (
                                                <div
                                                    className={`absolute top-full left-0 ${isScrolled
                                                        ? "bg-black text-white border-primary"
                                                        : "bg-white text-black"
                                                        } shadow-lg rounded-md w-36 z-[9999]`}
                                                    style={{ marginTop: '0px' }}
                                                    role="menu"
                                                >
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleScroll("sanskruti");
                                                            setOpenDropdown(false);
                                                        }}
                                                        className={`px-4 py-2 cursor-pointer ${isScrolled ? "hover:bg-gray-700" : "hover:bg-gray-100"
                                                            }`}
                                                        role="menuitem"
                                                    >
                                                        Karjat
                                                    </div>
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleScroll("BKC");
                                                            setOpenDropdown(false);
                                                        }}
                                                        className={`px-4 py-2 cursor-pointer ${isScrolled ? "hover:bg-gray-700" : "hover:bg-gray-100"
                                                            }`}
                                                        role="menuitem"
                                                    >
                                                        BKC
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : item.title === 'Near By Locations' ? (
                                        <div
                                            className='relative'
                                            onMouseEnter={() => setIsNearbyOpen(true)}
                                            onMouseLeave={() => {
                                                setIsNearbyOpen(false);
                                                setIsSanskritiOpen(false);
                                                setIsSanskritiEssentialsOpen(false);
                                                setIskanakiaOpen(false);
                                                setIskanakiaEssentialsOpen(false);
                                            }}
                                        >
                                            <span className='text-sm md:text-xl flex items-end gap-0 font-bold cursor-pointer'>
                                                {item.title}{isNearbyOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                            </span>

                                            {isNearbyOpen && (
                                                <div
                                                    id='dropmenus'
                                                    className={`absolute top-full left-0 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                        } border shadow-2xl rounded-md min-w-[180px] max-h-80 overflow-visible z-[9999]`}
                                                    style={{ marginTop: '0px' }}
                                                >
                                                    <ul className='text-sm'>
                                                        {/* Sanskriti */}
                                                        <li
                                                            className='relative'
                                                            onMouseEnter={() => {
                                                                setIsSanskritiOpen(true);
                                                                setIskanakiaOpen(false);
                                                                setIskanakiaEssentialsOpen(false);
                                                            }}
                                                            onMouseLeave={() => {
                                                                setIsSanskritiOpen(false);
                                                                setIsSanskritiEssentialsOpen(false);
                                                            }}
                                                        >
                                                            <div className={`px-4 py-2.5 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer font-semibold flex justify-between items-center`}>
                                                                Sanskriti <span className="ml-2">→</span>
                                                            </div>

                                                            {/* Submenu appears to the RIGHT */}
                                                            {isSanskritiOpen && (
                                                                <div
                                                                    className={`absolute left-full top-0 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                        } border shadow-2xl rounded-md min-w-[180px] overflow-visible z-[10000]`}
                                                                    style={{ marginLeft: '-1px' }}
                                                                >
                                                                    <ul className='text-sm'>
                                                                        <li className={`px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                                                                            Tourism
                                                                        </li>

                                                                        {/* Essentials - another level to the right */}
                                                                        <li
                                                                            className='relative'
                                                                            onMouseEnter={() => setIsSanskritiEssentialsOpen(true)}
                                                                            onMouseLeave={() => setIsSanskritiEssentialsOpen(false)}
                                                                        >
                                                                            <div className={`px-4 py-2.5 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer  flex justify-between items-center`}>
                                                                                Essentials {isNearbyOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                                                            </div>

                                                                            {isSanskritiEssentialsOpen && (
                                                                                <div
                                                                                    className={`absolute bottom-full top-9 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                                        } border shadow-2xl rounded-md min-w-[180px] z-[10001]`}
                                                                                    style={{ marginLeft: '-1px' }}
                                                                                >
                                                                                    <ul className={`py-0 text-xs ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'} rounded-md`}>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/sanskruti/food"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Food
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/sanskruti/railwaystations"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Railway
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/sanskruti/hospitals"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Hospitals & chemist
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/sanskruti/petrolpumps"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Petrol Pumps
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>

                                                        {/* Kanakia */}
                                                        <li
                                                            className='relative'
                                                            onMouseEnter={() => {
                                                                setIskanakiaOpen(true);
                                                                setIsSanskritiOpen(false);
                                                                setIsSanskritiEssentialsOpen(false);
                                                            }}
                                                            onMouseLeave={() => {
                                                                setIskanakiaOpen(false);
                                                                setIskanakiaEssentialsOpen(false);
                                                            }}
                                                        >
                                                            <div className={`px-4 py-2.5  ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer font-semibold flex justify-between items-center`}>
                                                                Kanakia <span className="ml-2">→</span>
                                                            </div>

                                                            {/* Submenu appears to the RIGHT */}
                                                            {iskanakiaOpen && (
                                                                <div
                                                                    className={`absolute left-full top-0 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                        } border shadow-2xl rounded-md min-w-[180px] overflow-visible z-[10000]`}
                                                                    style={{ marginLeft: '-1px' }}
                                                                >
                                                                    <ul className='text-sm'>
                                                                        <li className={`px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}>
                                                                            Business
                                                                        </li>

                                                                        {/* Essentials */}
                                                                        <li
                                                                            className='relative'
                                                                            onMouseEnter={() => setIskanakiaEssentialsOpen(true)}
                                                                            onMouseLeave={() => setIskanakiaEssentialsOpen(false)}
                                                                        >
                                                                            <div className={`px-4 py-2.5 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer flex justify-between items-center`}>
                                                                                Essentials {isNearbyOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                                                                            </div>

                                                                            {iskanakiaEssentialsOpen && (
                                                                                <div
                                                                                    className={`absolute bottom-full top-9 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                                        } border shadow-2xl rounded-md min-w-[180px] z-[10001]`}
                                                                                    style={{ marginLeft: '-1px' }}
                                                                                >
                                                                                    <ul className={`text-xs ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'} rounded-md`}>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/Mumbai/food"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Food
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/Mumbai/railwaystations"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Railway
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/Mumbai/hospitals"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Hospitals & chemist
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/Mumbai/petrolpumps"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Petrol Pumps
                                                                                            </Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            )}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) :
                                        <Link onClick={closeMenu} to={item.link} className='text-sm md:text-xl font-bold cursor-pointer'>
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
                    <div className='md:hidden bg-white w-52 absolute top-full left-0 z-50 shadow-lg min-h-screen overflow-y-auto border-t border-gray-200'>
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
                                                        <li>
                                                            <div
                                                                className='px-6 py-3 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center border-b border-gray-200'
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsSanskritiOpen(!isSanskritiOpen);
                                                                }}
                                                            >
                                                                Sanskriti <span className="text-xs">{isSanskritiOpen ? '▲' : '▼'}</span>
                                                            </div>
                                                            {isSanskritiOpen && (
                                                                <ul className='bg-gray-100'>
                                                                    <li className='px-8 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300'>Tourism</li>
                                                                    <li>
                                                                        <div
                                                                            className='px-8 py-2 hover:bg-gray-200 cursor-pointer  flex justify-between items-center border-b border-gray-300'
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setIsSanskritiEssentialsOpen(!isSanskritiEssentialsOpen);
                                                                            }}
                                                                        >
                                                                            Essentials <span className="text-xs">{isSanskritiEssentialsOpen ? '▲' : '▼'}</span>
                                                                        </div>
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
                                                                    </li>
                                                                </ul>
                                                            )}

                                                            {/* kanakia */}
                                                            <li
                                                                className='px-6 py-3 hover:bg-gray-100 cursor-pointer font-semibold flex justify-between items-center border-b border-gray-200'
                                                                onClick={() => setIskanakiaOpen(!iskanakiaOpen)}
                                                            >
                                                                Kanakia <span className="text-xs">{iskanakiaOpen ? '▲' : '▼'}</span>
                                                            </li>
                                                            {iskanakiaOpen && (
                                                                <ul className='bg-gray-100'>
                                                                    <li className='px-8 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300'>Business</li>
                                                                    <li
                                                                        className='px-8 py-2  hover:bg-gray-200 cursor-pointer flex justify-between items-center border-b border-gray-300'
                                                                        onClick={() => setIskanakiaEssentialsOpen(!iskanakiaEssentialsOpen)}
                                                                    >
                                                                        Essentials <span className="text-xs">{iskanakiaEssentialsOpen ? '▲' : '▼'}</span>
                                                                    </li>
                                                                    {iskanakiaEssentialsOpen && (
                                                                        <ul className='bg-gray-200 py-2'>
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
                                                        </li>
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