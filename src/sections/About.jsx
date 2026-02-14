import { motion } from 'framer-motion';
import { FiUser, FiCode, FiActivity } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="py-24 bg-theme-surface/50 text-center relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 right-0 opacity-10">
                <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M43.7,-74.6C59.2,-67.2,76.5,-59,88.4,-47.4C100.3,-35.8,106.8,-20.8,103.9,-7.3C101,6.2,88.7,18.2,76.5,30.3C64.3,42.4,52.2,54.6,38.8,64.2C25.4,73.8,10.7,80.8,-2.6,85.3C-15.9,89.8,-27.8,91.8,-39.8,85.7C-51.8,79.6,-63.9,65.4,-72.6,49.8C-81.3,34.2,-86.6,17.1,-84.9,1C-83.2,-15.1,-74.5,-30.2,-63.9,-43.3C-53.3,-56.4,-40.8,-67.5,-27.4,-75.9C-14,-84.3,-0.3,-90,14.6,-88.4C29.5,-86.8,59,-78,43.7,-74.6Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Column: Image/Visual */}
                        <div className="w-full md:w-1/2 relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-theme-primary to-theme-secondary rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 animate-tilt"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-theme-background">
                                <img
                                    src="/ayush.jpg"
                                    alt="Ayush Parmar - Web Developer"
                                    loading="lazy"
                                    decoding="async"
                                    width="500"
                                    height="500"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 aspect-square"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <p className="font-bold text-lg">Ayush Parmar</p>
                                    <p className="text-sm opacity-90">Web Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="w-full md:w-1/2 text-left space-y-8">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-theme-text mb-4 leading-tight">
                                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-secondary">Digital Experiences</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-theme-primary rounded-full mb-6"></div>
                            </div>

                            <div className="space-y-4 text-theme-muted text-lg leading-relaxed">
                                <p>
                                    Hello! I'm <strong className="text-theme-text font-semibold">Ayush Parmar</strong>, a dedicated Web Developer based in Gujarat, India, with a passion for building robust and interactive web applications. My journey in technology is driven by a deep curiosity and a commitment to solving real-world problems through code.
                                </p>
                                <p>
                                    With specialized expertise in <strong className="text-theme-text font-semibold">ReactJS</strong> and <strong className="text-theme-text font-semibold">Laravel</strong>, I bridge the gap between dynamic user interfaces and powerful backend systems. My experience at <span className="text-theme-secondary font-medium">Monarchy Infotech</span> has sharpened my skills in creating scalable solutions and working effectively within agile teams.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-theme-background rounded-lg border border-theme-surface hover:border-theme-primary/50 transition-colors flex items-center gap-3 shadow-sm">
                                    <div className="p-2 bg-theme-primary/10 text-theme-primary rounded-full"><FiCode size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-theme-text">Full Stack</h4>
                                        <p className="text-sm text-theme-muted">Frontend & Backend</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-theme-background rounded-lg border border-theme-surface hover:border-theme-secondary/50 transition-colors flex items-center gap-3 shadow-sm">
                                    <div className="p-2 bg-theme-secondary/10 text-theme-secondary rounded-full"><FiActivity size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-theme-text">Problem Solver</h4>
                                        <p className="text-sm text-theme-muted">Analytical Thinking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
