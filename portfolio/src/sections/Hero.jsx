import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = ({ data }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-8"
                >
                    {/* Minimalist Editorial Tag */}
                    <motion.div variants={itemVariants} className="inline-flex items-center px-5 py-2 border border-[#333] text-[#a0a0a0] text-xs font-bold uppercase tracking-[0.2em] bg-transparent overflow-hidden relative group">
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E07A5F] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                        <span className="mr-3 text-[#E07A5F] opacity-80 text-[10px]">■</span>
                        Available for New Opportunities
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-[110px] font-normal leading-[1.05] text-[#f5f5f5] font-heading">
                        <span className="block text-[#888] text-2xl md:text-3xl lg:text-4xl mb-6 font-sans tracking-widest uppercase text-center">Hi, I'm</span>
                        {data?.personal?.name}.
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl font-bold text-[#E07A5F] uppercase tracking-[0.2em] mt-2">
                        {data?.personal?.role}
                    </motion.p>

                    <motion.p variants={itemVariants} className="text-[#a0a0a0] max-w-2xl leading-relaxed text-lg md:text-xl font-sans mt-4">
                        {data?.personal?.objective}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 mt-10">
                        <a href="#projects" className="btn-primary group">
                            View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/Aditya_Sharma_CV.pdf" target="_blank" rel="noreferrer" className="btn-secondary group">
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> Download CV
                        </a>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Minimalist Topographic / Geometric Lines */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <circle cx="500" cy="500" r="400" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 16" />
                    <circle cx="500" cy="500" r="300" fill="none" stroke="#ffffff" strokeWidth="1" />
                    <circle cx="500" cy="500" r="200" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 8" />
                    <line x1="0" y1="500" x2="1000" y2="500" stroke="#ffffff" strokeWidth="1" />
                    <line x1="500" y1="0" x2="500" y2="1000" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
