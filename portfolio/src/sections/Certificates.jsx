import { motion } from 'framer-motion';
import { Award, Code, MonitorOff, MonitorSmartphone } from 'lucide-react';

const Certificates = ({ data }) => {
    return (
        <section id="certificates" className="py-24 relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 font-heading">
                        Certifications <span className="text-[#E07A5F]">& Growth</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-500 rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="brutalist-card p-6 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-none bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                                <Award className="text-brand-400 w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-[#f5f5f5] mb-2 group-hover:text-[#E07A5F] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-[#a0a0a0] text-sm font-medium mb-1 uppercase tracking-widest">{cert.issuer}</p>
                            <p className="text-[#888] text-xs">{cert.date}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Training & Extracurriculars could go here as sub-sections if needed */}
                <div className="mt-24 grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
                            <MonitorSmartphone className="text-emerald-500" /> Training
                        </h3>
                        {data.training.map((train, i) => (
                            <div key={i} className="brutalist-card rounded-none p-6 border-l-[3px] border-l-[#333] hover:border-l-[#E07A5F] transition-colors duration-300">
                                <h4 className="text-lg font-bold text-[#f5f5f5] mb-1">{train.title}</h4>
                                <p className="text-xs text-[#E07A5F] mb-4 tracking-widest uppercase">{train.date}</p>
                                <ul className="space-y-2 text-sm text-[#a0a0a0] font-sans">
                                    {train.description.map((desc, di) => (
                                        <li key={di} className="relative pl-4"><span className="absolute left-0 top-1.5 w-1 h-1 bg-[#555] rounded-full" />{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold font-heading flex items-center gap-3">
                            <Code className="text-brand-500" /> Extracurricular
                        </h3>
                        <div className="grid gap-4">
                            {data.extracurricular.map((extra, i) => (
                                <div key={i} className="brutalist-card rounded-none p-5 hover:border-[#E07A5F]/50 border-[#333] transition-colors">
                                    <h4 className="text-md font-bold text-[#f5f5f5] mb-1">{extra.title}</h4>
                                    <p className="text-xs text-[#E07A5F] mb-3 tracking-widest uppercase">{extra.date}</p>
                                    <p className="text-sm text-[#a0a0a0] leading-relaxed font-sans">{extra.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Certificates;
