import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Career' },
        { id: 'skills', label: 'Skills' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-6 ${isScrolled ? 'py-4' : ''
                }`}
        >
            <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled
                    ? 'bg-[#133336]/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-3 shadow-2xl'
                    : 'bg-transparent px-2'
                }`}>
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-[#367D8A] flex items-center justify-center shadow-lg shadow-[#367D8A]/20 transition-transform group-hover:scale-105">
                        <span className="text-xl font-bold text-white">S</span>
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block">Swathi <span className="text-[#367D8A]">M</span></span>
                </a>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#367D8A] group-hover:w-full transition-all"></span>
                        </a>
                    ))}
                </div>

                {/* Contact CTA */}
                <a
                    href="#contact"
                    className="bg-[#367D8A]/10 hover:bg-[#367D8A] border border-[#367D8A]/20 hover:border-transparent text-[#367D8A] hover:text-white px-6 py-2.5 rounded-2xl font-bold text-sm transition-all"
                >
                    Let's Talk
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
