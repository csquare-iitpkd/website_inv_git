import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';

const Header = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleSearchChange = (e) => {
    // setSearchTerm(e.target.value);
    // };

    // const handleSearchSubmit = (e) => {
    // e.preventDefault();
    // alert(`Searching for: ${searchTerm}`);
    // };

    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="header sticky top-0 flex justify-between items-center px-4 lg:px-6 
                        bg-gradient-to-r from-gray-900 via-black to-gray-900 
                        shadow-lg border-b border-gray-800 z-50">
                    {/* Logo Section - Left */}
            <div className="header__left flex items-center">
                <img src="./assets/c_logo_t.png" alt="logo" className="header__logo h-16 lg:h-20 ml-6"/>
                {/* <h1 className="header__title">CSQUARE IITPKD</h1> */}
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="header__nav hidden md:flex">
                <ul className="header__nav-list flex space-x-6">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">Home</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/about" className="header__nav-link">About us</Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/facilities" className="header__nav-link">Facilities</Link>
                    </li>
                    {/* <li className="header__nav-item">
                        <a href="/log_registration" className="header__nav-link">Log/Equipment Register</a>
                    </li> */}
                    {/* <li className="header__nav-item">
                        <Link to="/ta_schedule" className="header__nav-link">TA</Link>
                    </li> */}
                    <li className="header__nav-item">
                        <Link to="/guidline" className="header__nav-link">GuidLine</Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="header__left flex items-center">
                <img src="./assets/IITPKD_logo_t.png" alt="IITPKD logo" className="header__logo h-16 lg:h-20 mr-6" />
                {/* <h1 className="header__title">CSQUARE IITPKD</h1> */}
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden text-white text-2xl p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>

            {/* Mobile Navigation Menu */}
            <nav className={`header__mobile-nav fixed top-0 left-0 w-full bg-gray-900 rounded-b-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center p-4 bg-black border-b border-gray-700">
                    <div className="flex items-center">
                        <img src="./assets/c_logo_t.png" alt="logo" className="h-12"/>
                    </div>
                    <div className="flex items-center">
                        <img src="./assets/IITPKD_logo_t.png" alt="IITPKD logo" className="h-12 ml-2" />
                    </div>
                    <button 
                        className="text-white text-2xl"
                        onClick={toggleMobileMenu}
                        aria-label="Close mobile menu"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <Link 
                        to="/" 
                        onClick={toggleMobileMenu}
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/about" 
                        className="relative block text-white text-lg py-2 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[2px] after:w-0 after:bg-blue-400 
                                    after:transition-all after:duration-300 
                                    hover:after:w-full" 
                        onClick={toggleMobileMenu}
                        >
                        About us
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to="/facilities" 
                        className="relative block text-white text-lg py-2 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[2px] after:w-0 after:bg-blue-400 
                                    after:transition-all after:duration-300 
                                    hover:after:w-full" 
                        onClick={toggleMobileMenu}
                        >
                        Facilities
                        </Link>
                    </li>
                    {/* <li>
                        <Link 
                        to="/ta_schedule" 
                        className="relative block text-white text-lg py-2 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:h-[2px] after:w-0 after:bg-blue-400 
                                    after:transition-all after:duration-300 
                                    hover:after:w-full" 
                        onClick={toggleMobileMenu}
                        >
                        TA
                        </Link>
                    </li> */}
                </ul>

            </nav>

            {/* Commented Search Bar Section */}
            {/* <div className="header__right">
                <form className="header__search-form" onSubmit={handleSearchSubmit}>
                    <input type="text" className="header__search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                    <button type="submit" className="header__search-btn">
                        <FontAwesomeIcon icon={faSearch} className="header__search-icon" />
                    </button>
                </form>
            </div> */}
        </header>
    );
};

export default Header;
