import { motion } from 'framer-motion';

const Philosophy = () => {
    const principles = [
        {
            num: "01",
            title: "Component-Driven Architecture",
            desc: "Web development is about creating reusable, scalable systems in the browser. I prioritize modular frontend architectures that ensure consistency, maintainability, and seamless future growth."
        },
        {
            num: "02",
            title: "Flawless Performance",
            desc: "A millisecond can define a user's experience. I optimize render cycles, minimize bundle sizes, and leverage modern state management to ensure web applications load instantly and feel native."
        },
        {
            num: "03",
            title: "Responsive by Default",
            desc: "The web is consumed on a myriad of devices. I build fluid, mobile-first design systems that look pixel-perfect whether viewed on a massive desktop monitor or a fragmented smartphone screen."
        }
    ];

    return (
        <section className="py-24 relative bg-[#121212] border-t border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-normal mb-6 font-heading text-[#f5f5f5]">
                        Engineering <span className="text-[#E07A5F] italic font-heading">Philosophy.</span>
                    </h2>
                    <p className="text-[#a0a0a0] max-w-2xl text-lg font-sans leading-relaxed">
                        I approach web development not just as chaining together frameworks, but as designing deliberate, fast, and elegant solutions to modern internet problems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className="flex flex-col gap-4 group"
                        >
                            <span className="text-5xl font-heading text-[#333] group-hover:text-[#E07A5F] transition-colors duration-500">
                                {item.num}
                            </span>
                            <h3 className="text-2xl font-bold font-sans text-[#f5f5f5] uppercase tracking-wide">
                                {item.title}
                            </h3>
                            <div className="h-px w-12 bg-[#333] group-hover:bg-[#E07A5F] group-hover:w-full transition-all duration-700 ease-out" />
                            <p className="text-[#a0a0a0] leading-relaxed font-sans text-lg">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
