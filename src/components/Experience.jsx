import Section from './Section';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Briefcase, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <div className="text-[#367D8A] font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Evolution</div>
                        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">THE JOURNEY</h2>
                    </div>
                    <div className="max-w-xs text-zinc-500 text-sm font-light leading-relaxed">
                        A timeline of technical placement expertise and professional growth in the evolving HR ecosystem.
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Experience Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bento-card p-0 h-[600px] overflow-hidden relative group"
                    >
                        {/* Background Animation */}
                        <div className="absolute inset-0 z-0 opacity-10">
                            <DotLottieReact
                                src="https://lottie.host/8e6c757c-17e1-450f-a912-88f5a65796f3/251mG0u79b.json"
                                loop
                                autoplay
                            />
                        </div>

                        {/* Experience Content Overlay */}
                        <div className="relative z-10 h-full p-12 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <div className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">
                                        Current Role
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-white leading-none">IT RECRUITER</h3>
                                    <p className="text-[#367D8A] text-xl font-medium">Codingmart Technology</p>
                                </div>
                                <a href="https://www.linkedin.com/company/codingmart/" target="_blank" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                    <ArrowUpRight size={24} />
                                </a>
                            </div>

                            <div className="space-y-8 max-w-2xl">
                                <p className="text-zinc-400 text-2xl font-light italic leading-snug">
                                    "Sculpting technical teams by identifying high-growth engineers and mobile talent across global pools."
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
                                    {[
                                        { l: "Timeline", v: "2022 -" },
                                        { l: "Focus", v: "Tech" },
                                        { l: "Success", v: "90%" },
                                        { l: "Scale", v: "100+" }
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div className="text-white font-bold text-lg">{s.v}</div>
                                            <div className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education / Certification Side */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bento-card border-[#367D8A]/20 bg-[#133336]/20 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#367D8A] group-hover:bg-[#367D8A] group-hover:text-white transition-all">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Master's Degree</div>
                                    <h4 className="text-white font-bold text-xl uppercase tracking-tighter leading-none">MBA in HR</h4>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-[#367D8A] rounded-full animate-ping"></span>
                                <span className="text-zinc-400 text-sm font-medium">Currently Pursuing - Continuous Learning</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bento-card border-white/5 h-full flex flex-col justify-end"
                        >
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#285F6B]">
                                    <ArrowUpRight size={24} />
                                </div>
                                <h4 className="text-white font-bold text-xl uppercase tracking-tighter leading-none">BSc IT GRADUATE</h4>
                                <p className="text-zinc-500 text-sm font-light">Foundation in technical frameworks and digital ecosystems.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
