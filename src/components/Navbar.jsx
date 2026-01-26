import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'Philosophy' },
        { id: 'experience', label: 'Journey' },
        { id: 'skills', label: 'Dashboard' },
        { id: 'services', label: 'Solutions' },
        { id: 'contact', label: 'Initiate' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-8 ${isScrolled ? 'py-4' : ''
                }`}
        >
            <div className={`max-w-[700px] mx-auto transition-all duration-700 ${isScrolled
                    ? 'bg-[#133336]/60 backdrop-blur-3xl border border-white/5 shadow-2xl rounded-full px-8 py-3'
                    : 'bg-transparent'
                }`}>
                <div className="flex items-center justify-between">
                    {/* Minimal Logo */}
                    <a href="#home" className="flex items-center gap-4 group">
                        <div className="text-white font-black text-xl leading-none tracking-tighter">
                            S<span className="text-[#367D8A]">M</span>
                        </div>
                    </a>

                    {/* Navigation Items - Floating Pill Style */}
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-[10px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-[0.3em] relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#367D8A] group-hover:w-full transition-all"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
