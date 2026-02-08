import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    const highlights = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Precision Hiring",
            description: "Identifying the perfect candidates through deep technical screening and culture alignment."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "People First",
            description: "Building strong, long-term relationships with both talent and hiring managers."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Results",
            description: "Efficient coordination and sourcing to reduce time-to-hire without compromising quality."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Quality Focused",
            description: "Delivering only the best candidates who are ready to make a real impact."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
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
                        Get to know me
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white">About <span className="text-[#367D8A]">Me</span></h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bento-card bg-[#133336]/20 border-[#367D8A]/30 p-8 rounded-[40px] relative overflow-hidden group">
                            <div className="absolute inset-0 z-0 opacity-10">
                                <DotLottieReact
                                    src="https://lottie.host/ac92c554-07d4-4a57-b4d2-7c30f4a475d4/L0v3kPnK5K.json"
                                    loop
                                    autoplay
                                />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="text-5xl font-black text-white">1.6 Years</div>
                                <p className="text-xl text-zinc-300 font-medium leading-relaxed">
                                    of hands-on experience in the technical recruitment ecosystem,
                                    helping teams grow with the right talent.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white">Helping technical teams grow with precision and passion.</h3>
                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                               I am an IT Recruiter with 1.6 years of experience managing the end-to-end recruitment lifecycle, including talent sourcing, screening, conducting L1 <span className="text-white font-semibold">interview coordination, and client management for technical roles.</span> I partner with business leaders to understand workforce requirements and deliver high-quality talent that drives organizational growth.
                            </p>
                            <p>
                                I believe recruitment is more than just filling seats—it's about building strong foundations for companies and
                                meaningful career paths for people.
                            </p>
                        </div>

                        {/* Expertise List */}
                        <div className="flex flex-wrap gap-4">
                            {["Technical Sourcing", "Candidate Screening", "Full-Cycle Recruitment", "Stakeholder Management", "Offer Negotiation"].map((item, i) => (
                                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-zinc-300 text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Highlights */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-[#367D8A]/5 hover:border-[#367D8A]/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-[#367D8A]/10 text-[#367D8A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-white font-bold text-xl mb-3">{item.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
