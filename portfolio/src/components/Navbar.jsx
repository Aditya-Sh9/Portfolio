import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = ({ data }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 brutalist-card border-b border-white/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold font-heading tracking-tighter">
                    {data?.personal?.name?.split(' ')[0]}<span className="text-brand-500">.dev</span>
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-700">
                    <a href="#home" className="hover:text-brand-950 transition-colors">Home</a>
                    <a href="#about" className="hover:text-brand-950 transition-colors">About</a>
                    <a href="#projects" className="hover:text-brand-950 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-brand-950 transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href={data?.personal?.socials[1]?.url} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-950 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={data?.personal?.socials[0]?.url} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-[#0A66C2] transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${data?.personal?.email}`} className="btn-primary py-2 px-4 text-sm hidden sm:flex">
                        <Mail size={16} /> Hire Me
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
