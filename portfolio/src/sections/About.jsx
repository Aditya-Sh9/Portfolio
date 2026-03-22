import { motion } from 'framer-motion';
import { GraduationCap, Code2, CheckCircle } from 'lucide-react';

const SkillIcon = ({ name }) => {
    // Verified 2026 simple-icons cdn mappings with integrated colors
    const iconMap = {
        "C/C++": "cplusplus/00599C",
        "JavaScript": "javascript/F7DF1E",
        "TypeScript": "typescript/3178C6",
        "ReactJS": "react/61DAFB",
        "NodeJS": "nodedotjs/339933",
        "Express": "express/f5f5f5",
        "HTML": "html5/E34F26",
        "CSS": "css3/1572B6",
        "Bootstrap": "bootstrap/7952B3",
        "TailwindCSS": "tailwindcss/06B6D4",
        "PHP": "php/777BB4",
        "MySQL": "mysql/4479A1",
        "MongoDB": "mongodb/47A248",
        "Git": "git/F05032",
        "GitHub": "github/f5f5f5",
        "Postman": "postman/FF6C37",
        "Vercel": "vercel/f5f5f5"
    };

    const path = iconMap[name];
    if (path) {
        return <img src={`https://cdn.simpleicons.org/${path}`} alt={name} className="w-4 h-4 object-contain drop-shadow-sm" />;
    }

    return <CheckCircle size={14} className="text-[#E07A5F]" />;
};

const About = ({ data }) => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-heading">
                        <span className="text-[#E07A5F]">About</span> & Skills
                    </h2>
                    <div className="h-1 w-20 bg-[#333] rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <GraduationCap className="text-[#E07A5F]" /> Education Journey
                        </h3>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#333] before:to-transparent">
                            {data.education.map((edu, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 border border-[#333] bg-[#1a1a1a] text-[#888] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-[#E07A5F] group-hover:text-[#E07A5F]">
                                        <div className="w-2 h-2 bg-current" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] brutalist-card p-6">
                                        <h4 className="font-bold text-lg text-[#f5f5f5] mb-1">{edu.degree}</h4>
                                        <p className="text-[#E07A5F] text-sm font-medium mb-2">{edu.institution} | {edu.duration}</p>
                                        <p className="text-[#c2c2c2] text-sm">{edu.score}</p>
                                        <p className="text-[#888] text-xs mt-1 uppercase tracking-widest">{edu.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <Code2 className="text-[#E07A5F]" /> Technical Arsenal
                        </h3>

                        <div className="grid gap-6">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index} className="brutalist-card p-6 border-[#333] group hover:border-[#E07A5F]/50">
                                    <h4 className="font-bold text-[#f5f5f5] mb-4 uppercase tracking-widest text-sm">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-none bg-[#121212] border border-[#333] text-[#c2c2c2] transition-colors duration-300 hover:border-[#E07A5F] cursor-default"
                                            >
                                                <SkillIcon name={skill} />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
