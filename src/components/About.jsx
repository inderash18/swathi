import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    const highlights = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Precision Matching",
            description: "Expert at identifying candidates who align perfectly with technical requirements and company culture."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Relationship Building",
            description: "Strong communication skills to engage with candidates and hiring managers effectively."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Turnaround",
            description: "Efficient screening and coordination process to reduce time-to-hire significantly."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Quality Focus",
            description: "Committed to delivering only the most qualified candidates for every position."
        }
    ];

    const expertise = [
        "Full-cycle IT recruitment",
        "Technical candidate sourcing",
        "Behavioral & technical screening",
        "Interview coordination & scheduling",
        "Offer negotiation & closing",
        "LinkedIn Recruiter proficiency",
        "ATS management & optimization",
        "Stakeholder communication"
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Horizontal Section Indicator */}
                <div className="flex items-center gap-6 mb-24 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        className="h-[1px] bg-[#367D8A]"
                    ></motion.div>
                    <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px] whitespace-nowrap">Philosophy / About</span>
                    <div className="h-[1px] bg-white/5 w-full"></div>
                </div>

                {/* Split Context Layout */}
                <div className="grid lg:grid-cols-12 gap-20 items-start mb-32">

                    {/* Visual Narrative Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="bento-card border-none bg-black/40 p-0 overflow-hidden relative group">
                            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-all duration-700 bg-[#367D8A]"></div>
                            <DotLottieReact
                                src="https://lottie.host/ac92c554-07d4-4a57-b4d2-7c30f4a475d4/L0v3kPnK5K.json"
                                loop
                                autoplay
                                className="w-full h-full scale-125 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-10 left-10 z-10">
                                <span className="text-white font-bold text-4xl block">1.5 Years</span>
                                <span className="text-[#367D8A] font-bold uppercase tracking-widest text-xs">of strategic placement</span>
                            </div>
                        </div>

                        {/* Decorative floating badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 bg-[#367D8A] text-white p-8 rounded-full shadow-2xl flex flex-col items-center justify-center gap-1 z-20"
                        >
                            <Sparkles size={20} />
                            <span className="font-bold text-[10px] uppercase tracking-tighter">Certified</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Narrative Side */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                                I bridge the <br />
                                <span className="text-[#367D8A]">talent gap</span> with <br />
                                precision.
                            </h2>
                            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
                                <p>
                                    As an IT Recruiter at <span className="text-white font-medium">Codingmart Technology</span>,
                                    I don't just fill positions; I sculpt teams. I specialize in the architecture of technical human resources,
                                    ensuring every placement is a catalyst for company growth.
                                </p>
                                <p>
                                    My methodology integrates <span className="text-[#367D8A] font-medium italic underline decoration-1 underline-offset-8">psychological fitment</span> with
                                    rigorous technical vetting. I navigate the global talent pool to extract the 0.1% that truly matters.
                                </p>
                            </div>
                        </motion.div>

                        {/* High-end Expertise Cloud */}
                        <div className="flex flex-wrap gap-3">
                            {expertise.map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-6 py-3 bg-white/5 border border-white/5 rounded-full text-zinc-300 text-sm hover:border-[#367D8A] hover:bg-[#367D8A]/5 hover:text-white transition-all cursor-default"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlights Bento Overlay */}
                <div className="grid md:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bento-card group h-full flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="w-14 h-14 bg-[#367D8A]/10 rounded-2xl flex items-center justify-center text-[#367D8A] border border-[#367D8A]/20 transition-all group-hover:bg-[#367D8A] group-hover:text-white">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white group-hover:text-[#367D8A] transition-colors">{item.title}</h4>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed mt-10 group-hover:text-zinc-300 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
