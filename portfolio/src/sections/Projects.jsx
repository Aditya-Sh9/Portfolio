import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, LayoutTemplate, ChevronLeft, ChevronRight, X } from 'lucide-react';

const getProjectIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('pulse')) return 'https://cdn.simpleicons.org/react/61DAFB';
    if (t.includes('dental')) return 'https://cdn.simpleicons.org/php/777BB4';
    if (t.includes('tripwiz')) return 'https://cdn.simpleicons.org/python/3776AB';
    if (t.includes('carevo')) return 'https://cdn.simpleicons.org/mongodb/47A248';
    return null;
};

const Projects = ({ data }) => {
    const L = data.projects.length;
    const extendedProjects = [...data.projects, ...data.projects, ...data.projects];

    const [currentIndex, setCurrentIndex] = useState(L);
    const [isHovered, setIsHovered] = useState(false);
    const [visibleItems, setVisibleItems] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isHovered || selectedProject) return;
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + 1);
        }, 4000);
        return () => clearInterval(timer);
    }, [isHovered, selectedProject]);

    useEffect(() => {
        if (currentIndex === L * 2) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(L);
            }, 800);
            return () => clearTimeout(timeout);
        }
        if (currentIndex === 0) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(L);
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, L]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };
    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    return (
        <section id="projects" className="py-24 relative bg-[#1a1a1a] border-t border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 flex justify-between items-end"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-4 font-heading text-[#f5f5f5]">
                            <span className="text-[#E07A5F] italic">Featured</span> Projects
                        </h2>
                        <div className="h-1 w-20 bg-[#333] rounded-full" />
                    </div>

                    <div className="hidden md:flex gap-2 relative z-20">
                        <button
                            onClick={prevSlide}
                            className="p-3 bg-[#121212] border border-[#333] text-[#888] hover:border-[#E07A5F] hover:text-[#E07A5F] transition-colors focus:outline-none"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 bg-[#121212] border border-[#333] text-[#888] hover:border-[#E07A5F] hover:text-[#E07A5F] transition-colors focus:outline-none"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                <div
                    className="relative overflow-visible md:overflow-hidden -mx-6 px-6 md:mx-0 md:px-0 w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex will-change-transform w-full"
                        animate={{ x: `calc(-${currentIndex} * (100% / ${visibleItems}))` }}
                        transition={{ duration: isTransitioning ? 0.8 : 0, ease: [0.32, 0.72, 0, 1] }}
                    >
                        {extendedProjects.map((project, index) => {
                            const customIcon = getProjectIcon(project.title);
                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 px-2 md:px-3 ${visibleItems === 1 ? 'w-full' :
                                            visibleItems === 2 ? 'w-1/2' : 'w-1/3'
                                        }`}
                                >
                                    <div className="brutalist-card flex flex-col h-[480px] md:h-[450px] p-0 overflow-hidden group">
                                        {/* Project Top banner */}
                                        <div className="h-48 md:h-52 bg-[#121212] relative overflow-hidden flex items-center justify-center border-b border-[#333] shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                                            {/* If project has a full screenshot image, show it as cover */}
                                            {project.image ? (
                                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                            ) : customIcon ? (
                                                <img src={customIcon} alt="Project Logo" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" />
                                            ) : (
                                                <LayoutTemplate className="w-16 h-16 text-[#333] group-hover:text-[#555] transition-colors duration-500 relative z-10" />
                                            )}

                                            <div className="absolute bottom-4 right-4 flex flex-wrap justify-end gap-2 max-w-[90%] z-30">
                                                {project.techStack.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 text-[10px] md:text-xs font-bold tracking-wider uppercase bg-[#1a1a1a]/90 border border-[#333] text-[#a0a0a0]">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="px-2 py-1 text-[10px] md:text-xs font-bold tracking-wider bg-[#1a1a1a]/90 border border-[#333] text-[#a0a0a0]">
                                                        +{project.techStack.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6 md:p-8 flex flex-col flex-grow bg-transparent justify-between">
                                            <div>
                                                <div className="flex items-start justify-between gap-4 mb-3">
                                                    <h3 className="text-xl md:text-2xl font-bold text-[#f5f5f5] group-hover:text-[#E07A5F] transition-colors line-clamp-1 font-heading">
                                                        {project.title.split('–')[0]?.trim() || project.title}
                                                    </h3>
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="p-2 -mr-2 -mt-2 text-[#888] hover:text-[#f5f5f5] hover:bg-[#333] transition-all flex-shrink-0 border border-transparent hover:border-[#555] relative z-20"
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                </div>

                                                <p className="text-sm text-[#888] font-bold uppercase tracking-widest mb-4">
                                                    {project.title.split('–')[1]?.trim() || project.date}
                                                </p>

                                                <div className="text-[#a0a0a0] text-sm md:text-base flex-grow font-sans">
                                                    <p className="leading-relaxed relative pl-4 opacity-90 line-clamp-3">
                                                        <span className="absolute left-0 top-2 w-[1px] h-3 bg-[#E07A5F]" />
                                                        {project.description[0]}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="mt-6 text-[#E07A5F] hover:text-[#f5f5f5] font-bold uppercase tracking-widest text-xs lg:text-sm self-start transition-colors flex items-center gap-2 group/btn"
                                            >
                                                Explore Deep Dive <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-8 gap-3 relative z-20">
                    {data.projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsTransitioning(true);
                                setCurrentIndex(L + idx);
                            }}
                            className={`h-2.5 rounded-none transition-all duration-300 focus:outline-none ${currentIndex % L === idx ? 'w-10 bg-[#E07A5F]' : 'w-2.5 bg-[#333] hover:bg-[#555]'
                                }`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#121212]/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar brutalist-card p-6 md:p-12 flex flex-col !bg-[#1a1a1a]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5] font-heading mb-2">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-[#a0a0a0] font-bold uppercase tracking-widest text-sm md:text-base mt-4">{selectedProject.date}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-3 border border-[#333] hover:border-[#E07A5F] text-[#888] hover:text-[#E07A5F] transition-colors focus:outline-none bg-[#121212]"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* PROJECT PREVIEW IMAGE PAYLOAD */}
                            <div className="w-full bg-[#121212] border border-[#333] mb-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-inner">
                                {selectedProject.image ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto max-h-[500px] object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out" />
                                ) : (
                                    <div className="h-[250px] md:h-[350px] flex flex-col items-center justify-center w-full relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#E07A5F]/5 to-transparent pointer-events-none" />
                                        <LayoutTemplate className="w-16 h-16 md:w-24 md:h-24 text-[#333] group-hover:scale-105 transition-transform duration-700" />
                                        <span className="absolute bottom-4 right-6 text-xs font-bold text-[#555] tracking-[0.2em] uppercase text-right">Project Image Pending<br /><span className="text-[10px] opacity-70">(Add 'image' field to cvData)</span></span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {selectedProject.techStack.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 text-xs font-bold tracking-widest uppercase bg-[#121212] border border-[#333] text-[#c2c2c2]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-6 text-[#a0a0a0] md:text-lg leading-relaxed font-sans mb-12">
                                {selectedProject.description.map((desc, i) => (
                                    <p key={i} className="relative pl-6">
                                        <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-[#E07A5F]" />
                                        {desc}
                                    </p>
                                ))}
                            </div>

                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary w-full sm:w-auto mt-auto flex items-center justify-center py-5 text-lg"
                            >
                                <Github size={22} className="mr-3" /> View Source Architecture
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
