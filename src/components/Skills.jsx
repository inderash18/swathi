import Section from './Section';
import { motion } from 'framer-motion';
import { Users, Database, MessageSquare, Target, Calendar, FileText, Sparkles } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Recruitment Skills",
            icon: <Users className="w-6 h-6" />,
            color: "teal",
            skills: [
                { name: "Sourcing & Screening", level: 95 },
                { name: "Technical Interviewing", level: 90 },
                { name: "Talent Branding", level: 85 },
                { name: "Onboarding Management", level: 95 },
                { name: "Offer Negotiation", level: 80 }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <Database className="w-6 h-6" />,
            color: "deepTeal",
            skills: [
                { name: "LinkedIn Recruiter", level: 90 },
                { name: "Naukri Portal", level: 85 },
                { name: "ATS Mastery", level: 80 },
                { name: "Google Workspace", level: 90 }
            ]
        },
        {
            title: "Soft Skills",
            icon: <MessageSquare className="w-6 h-6" />,
            color: "white",
            skills: [
                { name: "Client Communication", level: 95 },
                { name: "Conflict Resolution", level: 85 },
                { name: "Time Management", level: 90 },
                { name: "Relationship Building", level: 95 }
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            teal: {
                text: "text-[#367D8A]",
                bar: "bg-[#367D8A]",
                glow: "shadow-[0_0_15px_rgba(54,125,138,0.3)]"
            },
            deepTeal: {
                text: "text-[#285F6B]",
                bar: "bg-[#285F6B]",
                glow: "shadow-[0_0_15px_rgba(40,95,107,0.3)]"
            },
            white: {
                text: "text-white",
                bar: "bg-white",
                glow: "shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            }
        };
        return colors[color];
    };

    return (
        <Section id="skills">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                    <div className="space-y-4 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#367D8A]/10 border border-[#367D8A]/20 text-[#367D8A] text-xs font-bold uppercase tracking-widest"
                        >
                            <Sparkles size={14} />
                            Quantifying value
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white">Technical <span className="text-[#367D8A]">Skillset</span></h2>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, idx) => {
                        const colors = getColorClasses(category.color);
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 border border-white/5 p-10 rounded-[40px] hover:border-[#367D8A]/30 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className={`w-14 h-14 bg-[#367D8A]/10 rounded-2xl flex items-center justify-center ${colors.text}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
                                </div>

                                <div className="space-y-8">
                                    {category.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <span className="text-zinc-400 text-sm font-medium">{skill.name}</span>
                                                <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, delay: idx * 0.1 + sIdx * 0.05 }}
                                                    className={`h-full ${colors.bar} ${colors.glow} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
