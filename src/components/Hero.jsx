import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Linkedin, Phone, Mail, MapPin, Briefcase, GraduationCap, TrendingUp, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    const stats = [
        { value: "1.5+", label: "Years Experience", color: "text-white" },
        { value: "100+", label: "Candidates Screened", color: "text-[#367D8A]" },
        { value: "90%", label: "Success Rate", color: "text-[#285F6B]" }
    ];

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content - Designer Minimalism */}
                <motion.div
                    style={{ y: y1, opacity }}
                    className="space-y-10"
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 text-[#367D8A] font-medium tracking-[0.2em] uppercase text-xs"
                        >
                            <span className="w-12 h-[1px] bg-[#367D8A]"></span>
                            Available for Elite Recruitment
                            <Sparkles size={14} className="animate-pulse" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-7xl lg:text-9xl font-bold leading-[0.85] tracking-tighter"
                        >
                            <span className="block text-white">SWATHI</span>
                            <span className="block italic bg-gradient-to-r from-[#367D8A] via-white to-[#367D8A] bg-clip-text text-transparent">MUTHUKUMAR</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-2"
                        >
                            <p className="text-2xl font-light text-zinc-400 max-w-lg leading-relaxed">
                                Redefining <span className="text-white font-medium">Technical Sourcing</span> through the lens of precision and professional intuition.
                            </p>
                            <div className="h-1 w-20 bg-[#367D8A] mt-4"></div>
                        </motion.div>
                    </div>

                    {/* Designer CTA Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-6 items-center"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="bg-white text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-4 group transition-all"
                        >
                            Hire Talent
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#367D8A]/10 hover:border-[#367D8A]/50 transition-all"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </motion.div>

                    {/* Stat Grid */}
                    <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                            >
                                <div className={`text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Parallax Profile Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="relative"
                >
                    <motion.div
                        style={{ scale }}
                        className="relative z-10 bento-card border-white/10 p-0 overflow-hidden group"
                    >
                        {/* Immersive Lottie Background */}
                        <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                            <DotLottieReact
                                src="https://lottie.host/81b2bf1d-0453-43d0-8f64-90a887b6058c/7fI0vN708t.json"
                                loop
                                autoplay
                            />
                        </div>

                        <div className="relative z-10 p-12">
                            {/* Floating Card Content */}
                            <div className="aspect-square w-full bg-black/40 rounded-[32px] mb-10 flex items-center justify-center border border-white/5 backdrop-blur-2xl relative overflow-hidden group">
                                <DotLottieReact
                                    src="https://lottie.host/ffec674c-cf17-4ed0-b134-859485066ff3/GG6zXcDvV9.lottie"
                                    loop
                                    autoplay
                                    className="w-full h-full scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div className="space-y-1">
                                        <div className="text-white font-bold text-xl tracking-tight">Active Recruitment</div>
                                        <div className="flex items-center gap-2 text-[#367D8A] text-xs font-bold uppercase tracking-widest">
                                            <span className="w-2 h-2 bg-[#367D8A] rounded-full animate-ping"></span>
                                            Live in Session
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Micro-labels */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Briefcase size={16} />, label: "IT Recruiter", sub: "Codingmart" },
                                    { icon: <MapPin size={16} />, label: "Remote", sub: "Tamil Nadu" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/5 p-5 rounded-3xl border border-white/5 flex flex-col gap-3"
                                    >
                                        <div className="text-[#367D8A]">{item.icon}</div>
                                        <div>
                                            <div className="text-white text-sm font-bold">{item.label}</div>
                                            <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{item.sub}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Shapes */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#367D8A]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#285F6B]/15 rounded-full blur-[100px] -z-10 floating-shape"></div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#367D8A] to-transparent"></div>
                <span className="text-[10px] text-[#367D8A] uppercase tracking-[0.4em] font-bold">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
