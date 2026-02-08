import { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Mail, CheckCircle, AlertCircle, Loader2, Sparkles, Phone } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');
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
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Message from Portfolio: ${formData.subject}`
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
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <Section id="contact">
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
                        Available for hire
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white">Get in <span className="text-[#367D8A]">Touch</span></h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        Looking for a recruitment partner or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Left Side - Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/5 p-8 rounded-[32px] space-y-8"
                        >
                            <div className="space-y-6">
                                <a href="mailto:swatiswathi777@gmail.com" className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367D8A]/10 text-[#367D8A] flex items-center justify-center group-hover:bg-[#367D8A] group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Email Me</div>
                                        <div className="text-white font-bold group-hover:text-[#367D8A] transition-colors">swatiswathi777@gmail.com</div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/swathi-muthukumar-60831a248/" target="_blank" className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#367D8A]/10 text-[#367D8A] flex items-center justify-center group-hover:bg-[#367D8A] group-hover:text-white transition-all">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">LinkedIn</div>
                                        <div className="text-white font-bold group-hover:text-[#367D8A] transition-colors">Swathi Muthukumar</div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/5 p-10 rounded-[40px]"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-400">FullName</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-400">Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="hello@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-400">Subject</label>
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Partnership, Job Query, etc."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-400">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me more..."
                                        rows="5"
                                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-[#367D8A] transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    disabled={status === 'sending' || status === 'success'}
                                    type="submit"
                                    className={`w-full py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-3 ${status === 'success' ? 'bg-green-600 text-white' : 'bg-[#367D8A] hover:bg-[#285F6B] text-white shadow-[#367D8A]/20'
                                        }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === 'sending' ? (
                                            <motion.div key="s" className="flex items-center gap-2">
                                                <Loader2 size={20} className="animate-spin" /> Sending...
                                            </motion.div>
                                        ) : status === 'success' ? (
                                            <motion.div key="v" className="flex items-center gap-2">
                                                <CheckCircle size={20} /> Sent Successfully!
                                            </motion.div>
                                        ) : (
                                            <motion.div key="i" className="flex items-center gap-2">
                                                Send Message <Send size={20} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
