import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Phone, Mail, MapPin, Briefcase, GraduationCap, TrendingUp, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#367D8A]/10 border border-[#367D8A]/20 text-[#367D8A] text-sm font-semibold"
                        >
                            <Sparkles size={16} className="text-[#367D8A]" />
                            <span>IT Recruiter & Talent Specialist</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl lg:text-7xl font-extrabold text-white leading-tight"
                        >
                            Hi, I'm <span className="text-[#367D8A]">Swathi</span>
                            Let's find your <span className="italic font-light">next star</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-zinc-400 max-w-xl leading-relaxed"
                        >
                           IT Recruiter with 1.6 years  <span className="text-white font-medium">of experience handling the end-to-end recruitment lifecycle, including sourcing, screening, interview coordination, and client management.</span>
                            Experienced in understanding technical requirements and delivering suitable candidates while ensuring a smooth hiring experience for both clients and candidates.
                        </motion.p>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#contact"
                            className="bg-[#367D8A] hover:bg-[#285F6B] text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 shadow-lg shadow-[#367D8A]/20"
                        >
                            Get in Touch
                            <ArrowRight size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/"
                            target="_blank"
                            className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5"
                    >
                        <div>
                            <div className="text-3xl font-bold text-white">1.6+</div>
                            <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Years Exp</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#367D8A]">100+</div>
                            <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Screened</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">90%</div>
                            <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Success</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content - Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="bento-card border-[#367D8A]/20 overflow-hidden relative group p-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#133336]/20 to-transparent z-0"></div>

                        <div className="relative z-10 space-y-8">
                            {/* Profile Animation Section */}
                            <div className="aspect-square w-full max-w-[320px] mx-auto bg-black/40 rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-4">
                                <DotLottieReact
                                    src="https://lottie.host/ffec674c-cf17-4ed0-b134-859485066ff3/GG6zXcDvV9.lottie"
                                    loop
                                    autoplay
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Info Quick Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
                                    <Briefcase size={20} className="text-[#367D8A]" />
                                    <div>
                                        <div className="text-white text-sm font-bold">IT Recruiter</div>
                                        <div className="text-zinc-500 text-[10px] uppercase font-bold">Codingmart</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col gap-2">
                                    <MapPin size={20} className="text-[#367D8A]" />
                                    <div>
                                        <div className="text-white text-sm font-bold">Tamil Nadu</div>
                                        <div className="text-zinc-500 text-[10px] uppercase font-bold">India</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#367D8A]/10 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
