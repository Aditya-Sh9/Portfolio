import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = ({ data }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Network response was not ok');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 font-heading">
                        Get In <span className="text-[#E07A5F]">Touch</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-500 rounded-full mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-[#f5f5f5] font-heading">
                            Let's talk about everything!
                        </h3>
                        <p className="text-[#a0a0a0] mb-10 leading-relaxed max-w-md">
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-none brutalist-card flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-[#121212] transition-colors duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#888] uppercase tracking-wider">Email me at</p>
                                    <a href={`mailto:${data.personal.email}`} className="text-lg font-medium text-[#f5f5f5] hover:text-[#E07A5F] transition-colors">
                                        {data.personal.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-none brutalist-card flex items-center justify-center text-[#E07A5F] group-hover:bg-[#E07A5F] group-hover:text-[#121212] transition-colors duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#888] uppercase tracking-wider">Call me at</p>
                                    <a href={`tel:${data.personal.phone}`} className="text-lg font-medium text-[#f5f5f5] hover:text-[#E07A5F] transition-colors">
                                        {data.personal.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="brutalist-card p-8 lg:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#c2c2c2]">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-none px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all placeholder:text-[#555]"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[#c2c2c2]">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-none px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all placeholder:text-[#555]"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#c2c2c2]">Your Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-none px-4 py-3 text-[#f5f5f5] focus:outline-none focus:border-[#E07A5F] focus:ring-1 focus:ring-[#E07A5F] transition-all placeholder:text-[#555] resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {status === 'loading' ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : status === 'success' ? (
                                    <span className="text-green-300">Message Sent!</span>
                                ) : (
                                    <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
