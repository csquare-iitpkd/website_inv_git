import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
// import '../styles/header.css';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
        
        // Listen for storage changes to update login status
        const handleStorageChange = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const renderAuthLink = () => {
        if (isLoggedIn) {
            return (
                <>
                    <li>
                        <Link to="/dashboard" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600">
                            Logout
                        </button>
                    </li>
                </>
            );
        } else {
            return (
                <li>
                    <Link to="/login" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                        Login
                    </Link>
                </li>
            );
        }
    }
    
    const renderMobileAuthLink = () => {
        if (isLoggedIn) {
            return (
                <>
                    <li><Link to="/dashboard" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Dashboard</Link></li>
                     <li><button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 w-full text-left">Logout</button></li>
                </>
            );
        } else {
            return <li><Link to="/login" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Login</Link></li>;
        }
    }

    return (
        <header className="header sticky top-0 flex justify-between items-center px-4 lg:px-6 
                        bg-[#CECECE] 
                        shadow-md border-b border-gray-400 z-50">
            {/* Logo Section - Left */}
            <div className="header__left flex items-center">
                <img src="./assets/c_logo_t.png" alt="logo" className="header__logo h-16 lg:h-20 ml-6"/>
            </div>

            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:flex">
                <ul className="header__nav-list flex space-x-8">
                    {/* Updated desktop links with orange hover effect */}
                    <li>
                        <Link to="/" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/facilities" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            Facilities
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/guidline" className="relative text-gray-800 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                            Job Request
                        </Link>
                    </li>
                    {renderAuthLink()}
                </ul>
            </nav>
            <div className="header__left flex items-center">
                <img src="./assets/IITPKD_logo_t.png" alt="IITPKD logo" className="header__logo h-16 lg:h-20 mr-6" />
            </div>

            {/* Mobile Hamburger Button */}
            <button className="md:hidden text-gray-800 text-2xl p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>

            {/* Mobile Navigation Menu */}
            <nav className={`header__mobile-nav fixed top-0 left-0 w-full bg-[#CECECE] rounded-b-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-400">
                    <div className="flex items-center"><img src="./assets/c_logo_t.png" alt="logo" className="h-12"/></div>
                    <div className="flex items-center"><img src="./assets/IITPKD_logo_t.png" alt="IITPKD logo" className="h-12 ml-2" /></div>
                    <button className="text-gray-800 text-2xl" onClick={toggleMobileMenu} aria-label="Close mobile menu"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    {/* Updated mobile links with orange hover effect */}
                    <li><Link to="/" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Home</Link></li>
                    <li><Link to="/about" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>About us</Link></li>
                    <li><Link to="/facilities" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Facilities</Link></li>
                    <li><Link to="/projects" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Projects</Link></li>
                    <li><Link to="/guidline" className="relative block text-gray-800 text-lg py-2 transition-colors duration-300 hover:text-orange-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full" onClick={toggleMobileMenu}>Job Request</Link></li>
                    {renderMobileAuthLink()}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
