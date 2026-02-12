import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 max-w-7xl mx-auto px-4 ${isScrolled ? 'translate-y-0' : 'translate-y-2'
                    }`}
            >
                <div
                    className={`flex justify-between items-center rounded-full px-6 py-3 transition-all duration-500 ${isScrolled
                        ? 'bg-theme-background/80 backdrop-blur-xl border border-theme-surface/50 shadow-lg'
                        : 'bg-transparent backdrop-blur-sm border border-transparent'
                        }`}
                >
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-1 group"
                    >
                        <span className="text-theme-text group-hover:text-theme-primary transition-colors">Ayush</span>
                        <span className="text-theme-primary group-hover:text-theme-secondary transition-colors">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-theme-surface/30 p-1 rounded-full border border-theme-surface/20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                activeClass="bg-theme-background text-theme-primary shadow-sm"
                                className="px-5 py-2 rounded-full text-sm font-medium text-theme-muted hover:text-theme-text transition-all duration-300 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Social icons removed from desktop header as requested */}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-theme-text p-2 rounded-full hover:bg-theme-surface focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay / Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-y-0 right-0 z-50 bg-theme-background w-[75%] max-w-sm shadow-2xl md:hidden border-l border-theme-surface flex flex-col"
                        >
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full bg-theme-surface text-theme-text hover:bg-theme-primary hover:text-white transition-colors"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col items-start gap-6 px-8 mt-4 w-full">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-theme-text hover:text-theme-primary transition-colors cursor-pointer w-full text-left py-2 border-b border-theme-surface/50 last:border-0"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>


                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
