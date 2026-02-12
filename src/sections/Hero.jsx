import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-theme-background"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-20, 20, -20],
                        y: [-20, 20, -20],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [20, -20, 20],
                        y: [20, -20, 20],
                    }}
                    transition={{
                        delay: 2,
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-theme-secondary/10 rounded-full blur-3xl mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="inline-block rounded-full px-4 py-2 bg-theme-surface border border-theme-primary/20 text-theme-primary font-medium text-sm tracking-widest mb-6 shadow-sm">
                        WELCOME TO MY PORTFOLIO
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-theme-text tracking-tighter leading-tight">
                        I Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-primary bg-[200%_auto] animate-gradient">
                            Digital Solutions
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-theme-muted mb-10 text-xl md:text-2xl leading-relaxed font-light">
                        I'm <span className="font-semibold text-theme-text">Ayush Parmar</span>, a Web Developer specializing in <span className="text-theme-primary font-medium">React</span> & <span className="text-theme-secondary font-medium">Laravel</span>.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <a
                            href="/resume.pdf"
                            download="Ayush_Parmar_Resume.pdf"
                            className="group relative px-8 py-4 bg-theme-text text-theme-background font-bold text-lg rounded-full overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="absolute inset-0 w-full h-full bg-theme-primary/20 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                            <span className="relative flex items-center gap-2 z-10"><FiDownload /> Download Resume</span>
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="px-8 py-4 bg-theme-surface text-theme-text font-bold text-lg rounded-full border border-theme-text/10 hover:border-theme-primary/50 hover:bg-theme-background transition-all duration-300 cursor-pointer flex items-center gap-2 hover:text-theme-primary"
                        >
                            <FiMail /> Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            >
                <Link to="about" smooth={true} offset={-70} duration={500} className="flex flex-col items-center gap-2 text-theme-muted hover:text-theme-primary transition-colors group">
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
                    <FiArrowDown className="animate-bounce" size={24} />
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
