import Section from './Section';
import { motion } from 'framer-motion';
import { Search, Terminal, FileText, Share2, Rocket, Users, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Services = () => {
    const services = [
        {
            number: "01",
            title: "Executive Search & Talent Acquisition",
            icon: <Search className="text-[#367D8A]" size={32} />,
            items: [
                "End-to-end recruitment for specific IT verticals",
                "Direct headhunting of interview-ready talent",
                "Stakeholder engagement till final onboarding"
            ],
            color: "teal"
        },
        {
            number: "02",
            title: "Technical Interrogation & Vetting",
            icon: <Terminal className="text-[#285F6B]" size={32} />,
            items: [
                "L1 technical screening and behavioral mapping",
                "Candidate readiness coaching (Mock sessions)",
                "Full-cycle interview coordination logic"
            ],
            color: "deepTeal"
        },
        {
            number: "03",
            title: "Brand Strategy & ATS Optimization",
            icon: <FileText className="text-white" size={32} />,
            items: [
                "Resume engineering for high-traffic ATS",
                "LinkedIn narrative & profile architecture",
                "Strategic career growth consultations"
            ],
            color: "white"
        }
    ];

    return (
        <Section id="services">
            <div className="max-w-7xl mx-auto px-6">

                {/* Minimalist Section Header */}
                <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
                    <div className="space-y-6">
                        <div className="text-zinc-600 font-bold uppercase tracking-[0.5em] text-[10px]">Solutions / Offerings</div>
                        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            CORE <br /> <span className="text-[#367D8A]">SOLUTIONS</span>
                        </h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-sm">
                            Providing elite-tier recruitment frameworks tailored for startups and high-growth technical enterprises.
                        </p>
                    </div>
                </div>

                {/* Agencies-style Service Menu */}
                <div className="space-y-px bg-white/5 border-y border-white/5">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#010001] py-20 group relative overflow-hidden transition-all duration-700 hover:px-12"
                        >
                            {/* Animated Background Lottie (Visible on Hover) */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none scale-150">
                                <DotLottieReact
                                    src="https://lottie.host/57a70054-c923-4d74-b15d-85474a00777a/xYv9vN708t.json"
                                    loop
                                    autoplay
                                />
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                                {/* Service Number */}
                                <div className="lg:col-span-1 text-white/5 text-8xl font-black group-hover:text-[#367D8A]/20 transition-colors tracking-tighter">
                                    {service.number}
                                </div>

                                {/* Main Title */}
                                <div className="lg:col-span-5 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white uppercase tracking-tighter group-hover:text-[#367D8A] transition-colors">{service.title}</h3>
                                    </div>
                                </div>

                                {/* Service Items */}
                                <div className="lg:col-span-4">
                                    <ul className="space-y-4">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                                                <div className="w-1 h-1 bg-[#367D8A] rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Arrow / CTA */}
                                <div className="lg:col-span-2 flex lg:justify-end">
                                    <motion.div
                                        whileHover={{ scale: 1.2, x: 20 }}
                                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#367D8A] group-hover:text-[#367D8A] transition-all cursor-pointer"
                                    >
                                        <ArrowRight size={24} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Collaborative Narrative */}
                <div className="mt-32 p-20 bento-card border-none bg-white/[0.02] grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h3 className="text-4xl font-bold text-white tracking-tighter">WHO I <span className="text-[#367D8A]">PARTNER</span> WITH</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { text: "Elite Technical Startups", icon: <Rocket size={18} /> },
                                { text: "Visionary Founders", icon: <Users size={18} /> },
                                { text: "Growth-stage SMEs", icon: <Target size={18} /> },
                                { text: "Employer Brand Leaders", icon: <ShieldCheck size={18} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-zinc-400 group cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#367D8A]/20 group-hover:text-[#367D8A] transition-all">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#367D8A] p-12 rounded-[40px] shadow-2xl space-y-6">
                        <div className="text-black font-black uppercase tracking-[0.3em] text-[10px]">Direct Engagement</div>
                        <h4 className="text-black font-bold text-3xl leading-tight">Ready to architect your <br /> next technical milestone?</h4>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            className="inline-block bg-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest mt-6"
                        >
                            Start Consultation
                        </motion.a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
