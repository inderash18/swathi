import Section from './Section';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Briefcase, MapPin, GraduationCap, Calendar, Sparkles } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#367D8A]/10 border border-[#367D8A]/20 text-[#367D8A] text-xs font-bold uppercase tracking-widest"
                    >
                        <Sparkles size={14} />
                        My Career Path
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white">Experience & <span className="text-[#367D8A]">Education</span></h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Primary Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bento-card p-0 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 z-0 opacity-10 bg-[#367D8A]">
                            <DotLottieReact
                                src="https://lottie.host/8e6c757c-17e1-450f-a912-88f5a65796f3/251mG0u79b.json"
                                loop
                                autoplay
                            />
                        </div>
                        <div className="relative z-10 p-10 space-y-8">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div className="space-y-1">
                                    <div className="inline-block px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest mb-2">Current Role</div>
                                    <h3 className="text-3xl font-extrabold text-white">IT Recruiter</h3>
                                    <p className="text-[#367D8A] font-semibold text-lg">Codingmart Technology</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 px-5 py-2 rounded-2xl text-white font-bold text-sm">
                                    2022 — Present
                                </div>
                            </div>

                            <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                                "Managing full-cycle recruitment for diverse technical roles, from sourcing top engineers to successful onboarding."
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5">
                                {[
                                    { label: "Closures", value: "8/mo" },
                                    { label: "Success Rate", value: "90%" },
                                    { label: "Screened", value: "100+" },
                                    { label: "Roles", value: "10+" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Info */}
                    <div className="space-y-8">
                        {/* Education 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[32px] group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#367D8A]/10 text-[#367D8A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <GraduationCap size={24} />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-1">MBA (HRM)</h4>
                            <p className="text-zinc-500 text-sm mb-4">Human Resource Management</p>
                            <span className="inline-flex items-center gap-2 text-[#367D8A] text-xs font-bold uppercase">
                                <span className="w-2 h-2 bg-[#367D8A] rounded-full animate-pulse"></span>
                                Pursuing
                            </span>
                        </motion.div>

                        {/* Education 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[32px] group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 text-zinc-400 flex items-center justify-center mb-6">
                                <GraduationCap size={24} />
                            </div>
                            <h4 className="text-white font-bold text-xl mb-1">BSc IT</h4>
                            <p className="text-zinc-500 text-sm">Information Technology</p>
                            <div className="mt-4 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Completed</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
