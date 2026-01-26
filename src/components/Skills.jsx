import Section from './Section';
import { motion } from 'framer-motion';
import { Users, Database, MessageSquare, Target, Calendar, FileText, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Recruitment Logic",
            icon: <Users className="w-6 h-6" />,
            color: "teal",
            skills: [
                { name: "Talent Architecture", level: 95 },
                { name: "Global Sourcing", level: 90 },
                { name: "Deep Technical Vetting", level: 85 },
                { name: "Executive Coordination", level: 95 },
                { name: "Strategic Closing", level: 80 }
            ]
        },
        {
            title: "Digital Ecosystems",
            icon: <Database className="w-6 h-6" />,
            color: "deepTeal",
            skills: [
                { name: "LinkedIn Recruiter", level: 90 },
                { name: "Naukri Performance", level: 85 },
                { name: "ATS Optimization", level: 80 },
                { name: "Google Data Systems", level: 90 }
            ]
        },
        {
            title: "Human Psychology",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "white",
            skills: [
                { name: "Stakeholder Directives", level: 90 },
                { name: "Crisis Management", level: 85 },
                { name: "Relationship Architecture", level: 95 }
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            teal: {
                text: "text-[#367D8A]",
                bar: "bg-[#367D8A]",
                bg: "bg-[#367D8A]/5"
            },
            deepTeal: {
                text: "text-[#285F6B]",
                bar: "bg-[#285F6B]",
                bg: "bg-[#285F6B]/5"
            },
            white: {
                text: "text-white",
                bar: "bg-white",
                bg: "bg-white/5"
            }
        };
        return colors[color];
    };

    return (
        <Section id="skills">
            <div className="max-w-7xl mx-auto px-6">

                {/* Dashboard-style Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-32">
                    <div className="max-w-2xl space-y-6 text-center md:text-left">
                        <div className="text-[#367D8A] font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center md:justify-start gap-3">
                            <Sparkles size={12} />
                            Core Competency Dashboard
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            SKILL <br /> <span className="text-[#367D8A]">ANALYTICS</span>
                        </h2>
                    </div>

                    {/* Visual Result Lottie */}
                    <div className="w-48 h-48 bento-card border-none bg-white/5 p-4 rounded-full flex items-center justify-center">
                        <DotLottieReact
                            src="https://lottie.host/78229b3d-425b-4c4b-b2bb-2b02e7bac757/8xS8F6B79b.json"
                            loop
                            autoplay
                        />
                    </div>
                </div>

                {/* Performance Grid */}
                <div className="grid lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => {
                        const colors = getColorClasses(category.color);
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-10"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 bg-white/5 rounded-[20px] flex items-center justify-center ${colors.text} border border-white/5`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">{category.title}</h3>
                                </div>

                                <div className="space-y-10">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="space-y-4">
                                            <div className="flex justify-between items-end">
                                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{skill.name}</span>
                                                <span className={`text-xl font-black ${colors.text}`}>{skill.level}%</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                                                <motion.div
                                                    initial={{ x: "-100%" }}
                                                    whileInView={{ x: "0%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: idx * 0.1 + sIdx * 0.05 + 0.5 }}
                                                    className={`absolute inset-0 ${colors.bar}`}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* KPI Bar */}
                <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-1 border-t border-white/5">
                    {[
                        { icon: <Target className="w-5 h-5" />, title: "10+", subtitle: "Tech Verticals" },
                        { icon: <Users className="w-5 h-5" />, title: "100+", subtitle: "Screens / Mo" },
                        { icon: <Calendar className="w-5 h-5" />, title: "8", subtitle: "Closures / Mo" },
                        { icon: <FileText className="w-5 h-5" />, title: "90%", subtitle: "Retention" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.02] p-10 flex flex-col items-center text-center gap-4 hover:bg-[#367D8A]/5 transition-all group"
                        >
                            <div className="text-zinc-700 group-hover:text-[#367D8A] transition-colors">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1 tracking-tighter">{stat.title}</div>
                                <div className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.4em]">{stat.subtitle}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
