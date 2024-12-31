import React, { useState, useEffect } from 'react';
import Link from './Link'; // Import your custom Link component

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://pbs.twimg.com/media/FTaAbsHVUAEVW46?format=jpg&name=small"
                            alt="Profile"
                            className="w-8 h-8 rounded-full none hidden sm:block"
                        />
                        <Link href="/" className="text-white pl-4 font-bold text-xl">
                            Shruti Kapoor
                        </Link>
                    </div>
                    {/* Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <Link
                                href="/blogs"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Blog
                            </Link>
                            <Link
                                href="https://www.oreilly.com/library/view/react-fundamentals-building/0636920981428/"
                                className="text-gray-300 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Courses
                            </Link>
                            <Link
                                href="/talks"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                Talks
                            </Link>
                            <Link
                                href="https://discord.gg/8TNEQR7H"
                                className="hover:text-cyan-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                Discord
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/75 text-white">
                    <div className="px-4 py-4 space-y-4">
                        <Link
                            href="/blogs"
                            className="block text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="https://www.oreilly.com/library/view/react-fundamentals-building/0636920981428/"
                            className="block text-gray-300 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Courses
                        </Link>
                        <Link
                            href="/talks"
                            className="block text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Talks
                        </Link>
                        <Link
                            href="https://discord.gg/8TNEQR7H"
                            className="block hover:text-cyan-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Discord
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;