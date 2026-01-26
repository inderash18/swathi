import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#010001] relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="text-3xl font-extrabold text-white">Swathi <span className="text-[#367D8A]">M</span></div>
                        <p className="text-zinc-500 text-sm max-w-xs mx-auto md:mx-0">
                            Professional IT Recruiter dedicated to connecting exceptional talent with the right opportunities.
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <a href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:swatiswathi777@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="#home" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#367D8A]/20 transition-all">
                            <ArrowUp size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 mt-12 gap-4">
                    <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
                        © {new Date().getFullYear()} Swathi M. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-zinc-600">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#services" className="hover:text-white transition-colors">Services</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
