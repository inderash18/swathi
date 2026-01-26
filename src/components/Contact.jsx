import { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Mail, CheckCircle, AlertCircle, Loader2, Sparkles, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/swatiswathi777@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `Elite Consultation Brief: ${formData.subject}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <Section id="contact">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-12 gap-20 items-start">

                    {/* Contact Narrative Side */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <div className="text-[#367D8A] font-bold uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
                                <Sparkles size={12} />
                                Start a Partnership
                            </div>
                            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none uppercase">
                                INIT<span className="text-[#367D8A]">IATE</span> <br /> TALKS
                            </h2>
                            <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-sm">
                                Currently accepting select high-growth technical mandates. Let's architect your success story.
                            </p>
                        </div>

                        <div className="space-y-8 pt-12 border-t border-white/5">
                            <a href="mailto:swatiswathi777@gmail.com" className="group block">
                                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Direct Channel</div>
                                <div className="text-2xl font-bold text-white group-hover:text-[#367D8A] transition-colors">swatiswathi777@gmail.com</div>
                            </a>
                            <a href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/" target="_blank" className="group block">
                                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Professional Grid</div>
                                <div className="text-2xl font-bold text-white group-hover:text-[#367D8A] transition-colors flex items-center gap-4">
                                    Swathi Muthukumar
                                    <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Elite Form Side */}
                    <div className="lg:col-span-7">
                        <div className="bento-card bg-white/[0.02] p-12 lg:p-16 border-white/5">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all text-xl font-medium placeholder:text-zinc-800"
                                            placeholder="Who are you?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all text-xl font-medium placeholder:text-zinc-800"
                                            placeholder="Where to reply?"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Mandate Subject</label>
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all text-xl font-medium placeholder:text-zinc-800"
                                        placeholder="What's your project about?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">Briefing</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-transparent border-b border-white/10 py-6 text-white focus:outline-none focus:border-[#367D8A] transition-all text-xl font-light resize-none placeholder:text-zinc-800"
                                        placeholder="Details of the vacancy or query..."
                                    ></textarea>
                                </div>

                                <div className="pt-10">
                                    <button
                                        disabled={status === 'sending' || status === 'success'}
                                        type="submit"
                                        className={`w-full relative overflow-hidden group py-6 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all duration-300 flex items-center justify-center gap-6 ${status === 'success'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white text-black hover:bg-[#367D8A] hover:text-white transition-all'
                                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                                    >
                                        <AnimatePresence mode="wait">
                                            {status === 'sending' ? (
                                                <motion.div key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                                                    <Loader2 className="animate-spin" size={16} /> Vetting Request...
                                                </motion.div>
                                            ) : status === 'success' ? (
                                                <motion.div key="v" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
                                                    <CheckCircle size={16} /> Signal Sent
                                                </motion.div>
                                            ) : (
                                                <motion.div key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
                                                    Initiate Consultation <Send size={14} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
