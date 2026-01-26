const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#010001] relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="space-y-4">
                        <div className="text-white font-bold text-4xl tracking-tighter">SWATHI <span className="text-[#367D8A]">MUTHUKUMAR</span></div>
                        <p className="text-zinc-600 text-xs uppercase tracking-[0.4em] font-black">Strategic technical talent partner</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Navigation</div>
                            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                                <li><a href="#home" className="hover:text-[#367D8A] transition-colors">Origins</a></li>
                                <li><a href="#about" className="hover:text-[#367D8A] transition-colors">Philosophy</a></li>
                                <li><a href="#experience" className="hover:text-[#367D8A] transition-colors">Journey</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Connect</div>
                            <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                                <li><a href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/" target="_blank" className="hover:text-[#367D8A] transition-colors">LinkedIn</a></li>
                                <li><a href="mailto:swatiswathi777@gmail.com" className="hover:text-[#367D8A] transition-colors">Direct Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
                        © {new Date().getFullYear()} Aesthetic Architecture. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.3em]">Built for high-growth teams</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
