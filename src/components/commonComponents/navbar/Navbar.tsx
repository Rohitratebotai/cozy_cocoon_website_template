import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import './navbar.css';
import { IoIosCall } from 'react-icons/io';
import { navbarData } from '../../../data';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

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

    console.log(isDestinationsDropdownOpen,isApartmentsDropdownOpen,isVillasDropdownOpen,"build");
    

    const handleScroll = (id: any) => {
        // If already on home page
        if (location.pathname === "/") {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with state
            navigate("/", { state: { scrollTo: id } });
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
     console.log(handleDestinationNavigate,handleVillaNavigate,"build");
     

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
                                                            handleScroll("karjat");
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
                                                        {/* Karjat */}
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
                                                                Karjat <span className="ml-2">→</span>
                                                            </div>

                                                            {/* Submenu appears to the RIGHT */}
                                                            {isSanskritiOpen && (
                                                                <div
                                                                    className={`absolute left-full top-0 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                        } border shadow-2xl rounded-md min-w-[180px] overflow-visible z-[10000]`}
                                                                    style={{ marginLeft: '-1px' }}
                                                                >
                                                                    <ul className='text-sm'>
                                                                        <li>
                                                                            <Link
                                                                                to="/essentials/karjat/tourism"
                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Tourism
                                                                            </Link>
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
                                                                                                to="/essentials/karjat/food"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Food
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/karjat/railwaystations"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Railway
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/karjat/hospitals"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Hospitals & chemist
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/karjat/petrolpumps"
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

                                                        {/* BKC */}
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
                                                                BKC <span className="ml-2">→</span>
                                                            </div>

                                                            {/* Submenu appears to the RIGHT */}
                                                            {iskanakiaOpen && (
                                                                <div
                                                                    className={`absolute left-full top-0 ${isScrolled ? "bg-black text-white border-white/20" : "bg-white text-black border-gray-200"
                                                                        } border shadow-2xl rounded-md min-w-[180px] overflow-visible z-[10000]`}
                                                                    style={{ marginLeft: '-1px' }}
                                                                >
                                                                    <ul className='text-sm'>
                                                                        <li >
                                                                            <Link
                                                                                to="/essentials/bkc/business"
                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                onClick={closeMenu}
                                                                            >
                                                                                Business
                                                                            </Link>
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
                                                                                                to="/essentials/bkc/food"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Food
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/bkc/attractions"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Major Attractions
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/bkc/shopping"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Shopping
                                                                                            </Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link
                                                                                                to="/essentials/bkc/hospitals"
                                                                                                className={`block px-4 py-2 ${isScrolled ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
                                                                                                onClick={closeMenu}
                                                                                            >
                                                                                                Hospitals & chemist
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

            {isMenuOpen && (
                <div className={`md:hidden fixed inset-0 z-[9999] bg-black/40`}>
                    <div className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-full h-full overflow-y-auto`}>

                        {/* Header */}
                        <div className="flex justify-between items-center px-4 py-4 border-b">
                            {/* Logo */}
                            <Link to='/'>
                                <img className='w-14 h-14 md:w-20 md:h-16 rounded-full' src={navbarData.logo[0].image} alt='Logo' />
                            </Link>
                            <button onClick={closeMenu} className="text-2xl">✕</button>
                        </div>

                        <ul className="flex flex-col">



                            {/* Other normal links */}
                            {navbarData.navmenu
                                .filter(item => item.title !== "Near By Locations")
                                .map(item => (
                                    <li key={item.id} className="border-b">
                                        <Link
                                            to={item.link}
                                            onClick={closeMenu}
                                            className="block px-4 py-4 font-bold hover:bg-gray-50"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            {/* Near By Locations */}
                            <li className="border-b">
                                <button
                                    className="w-full flex justify-between px-4 py-4 font-bold"
                                    onClick={() => setIsNearbyOpen(p => !p)}
                                >
                                    Near By Locations
                                    <span>{isNearbyOpen ? "▲" : "▼"}</span>
                                </button>

                                {isNearbyOpen && (
                                    <div className="bg-gray-50">

                                        {/* Karjat */}
                                        <button
                                            className="w-full px-6 py-3 flex justify-between font-semibold"
                                            onClick={() => setIsSanskritiOpen(p => !p)}
                                        >
                                            Karjat <span>{isSanskritiOpen ? "▲" : "▼"}</span>
                                        </button>

                                        {isSanskritiOpen && (
                                            <div className="bg-gray-100">
                                                <Link
                                                    to="/essentials/karjat/tourism"
                                                    className="block px-8 py-2 text-sm"
                                                    onClick={closeMenu}
                                                >
                                                    Tourism
                                                </Link>

                                                <button
                                                    className="w-full px-8 py-2 flex justify-between text-sm"
                                                    onClick={() => setIsSanskritiEssentialsOpen(p => !p)}
                                                >
                                                    Essentials <span>{isSanskritiEssentialsOpen ? "▲" : "▼"}</span>
                                                </button>

                                                {isSanskritiEssentialsOpen && (
                                                    <div className="bg-gray-200">
                                                        <Link to="/essentials/karjat/food" className="block px-10 py-2 text-xs" onClick={closeMenu}>Food</Link>
                                                        <Link to="/essentials/karjat/railwaystations" className="block px-10 py-2 text-xs" onClick={closeMenu}>Railway</Link>
                                                        <Link to="/essentials/karjat/hospitals" className="block px-10 py-2 text-xs" onClick={closeMenu}>Hospitals</Link>
                                                        <Link to="/essentials/karjat/petrolpumps" className="block px-10 py-2 text-xs" onClick={closeMenu}>Petrol Pumps</Link>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* BKC */}
                                        <button
                                            className="w-full px-6 py-3 flex justify-between font-semibold border-t"
                                            onClick={() => setIskanakiaOpen(p => !p)}
                                        >
                                            BKC <span>{iskanakiaOpen ? "▲" : "▼"}</span>
                                        </button>

                                        {iskanakiaOpen && (
                                            <div className="bg-gray-100">
                                                <Link
                                                    to="/essentials/bkc/business"
                                                    className="block px-8 py-2 text-sm"
                                                    onClick={closeMenu}
                                                >
                                                    Business
                                                </Link>

                                                <button
                                                    className="w-full px-8 py-2 flex justify-between text-sm"
                                                    onClick={() => setIskanakiaEssentialsOpen(p => !p)}
                                                >
                                                    Essentials <span>{iskanakiaEssentialsOpen ? "▲" : "▼"}</span>
                                                </button>

                                                {iskanakiaEssentialsOpen && (
                                                    <div className="bg-gray-200">
                                                        <Link to="/essentials/bkc/food" className="block px-10 py-2 text-xs" onClick={closeMenu}>Food</Link>
                                                        <Link to="/essentials/bkc/attractions" className="block px-10 py-2 text-xs" onClick={closeMenu}>Attractions</Link>
                                                        <Link to="/essentials/bkc/shopping" className="block px-10 py-2 text-xs" onClick={closeMenu}>Shopping</Link>
                                                        <Link to="/essentials/bkc/hospitals" className="block px-10 py-2 text-xs" onClick={closeMenu}>Hospitals</Link>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}


        </section >
    );
};

export default Navbar;