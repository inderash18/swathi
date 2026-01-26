import Section from './Section';
import { motion } from 'framer-motion';
import { Search, Terminal, FileText, Share2, Rocket, Users, Target, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Services = () => {
    const services = [
        {
            title: "Recruitment Support",
            icon: <Search className="text-[#367D8A]" size={28} />,
            items: [
                "Full-cycle technical recruitment",
                "Talent sourcing and headhunting",
                "Candidate engagement from start to join"
            ]
        },
        {
            title: "Technical Screening",
            icon: <Terminal className="text-[#367D8A]" size={28} />,
            items: [
                "Technical and behavioral vetting",
                "Mock interview coordination",
                "Role proficiency mapping"
            ]
        },
        {
            title: "Personal Branding",
            icon: <FileText className="text-[#367D8A]" size={28} />,
            items: [
                "ATS-friendly resume building",
                "LinkedIn profile optimization",
                "Career coaching and guidance"
            ]
        },
        {
            title: "Content & Strategy",
            icon: <Share2 className="text-[#367D8A]" size={28} />,
            items: [
                "LinkedIn employer branding",
                "HR culture content creation",
                "Hiring banners and copy"
            ]
        }
    ];

    return (
        <Section id="services">
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
                        How I can help
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white">Freelance <span className="text-[#367D8A]">Services</span></h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        Providing flexible, high-impact recruitment and branding solutions for startups and growing teams.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/5 p-10 rounded-[40px] hover:border-[#367D8A]/40 transition-all group"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-[#367D8A]/10 flex items-center justify-center text-[#367D8A] group-hover:bg-[#367D8A] group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#367D8A]">{service.title}</h3>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#367D8A] rounded-full"></div>
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="inline-flex items-center gap-2 text-[#367D8A] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                                Enquire Now <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Partners Area */}
                <div className="bento-card border-[#367D8A]/10 bg-[#367D8A]/5 p-12 text-center space-y-8">
                    <h3 className="text-3xl font-bold text-white italic">"Quality over quantity, always."</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            { label: "Startups", icon: <Rocket size={20} /> },
                            { label: "Founders", icon: <Users size={20} /> },
                            { label: "SMEs", icon: <Target size={20} /> },
                            { label: "HR Teams", icon: <ShieldCheck size={20} /> }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-zinc-400">
                                <div className="text-[#367D8A]">{item.icon}</div>
                                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
