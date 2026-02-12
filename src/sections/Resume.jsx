import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const Resume = () => {
    return (
        <section id="resume" className="py-24 bg-theme-surface/30 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-theme-text">Resume</h2>
                    <p className="text-theme-muted max-w-2xl mx-auto">
                        Check out my resume to learn more about my experience and skills.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-theme-background p-8 rounded-2xl shadow-lg border border-theme-surface hover:border-theme-primary/30 transition-all duration-300">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-theme-text">Curious to see more?</h3>
                        <p className="text-theme-muted text-lg">
                            Download my resume to get a detailed overview of my technical skills, experience, and educational background.
                        </p>
                    </div>

                    <motion.a
                        href="/resume.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <FiDownload size={20} />
                        <span>View & Download CV</span>
                    </motion.a>
                </div>

                {/* Optional: Preview or specific highlights if user wants more content here */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    <div className="p-6 bg-theme-background rounded-xl border border-theme-surface/50 text-center hover:border-theme-primary/30 transition-colors">
                        <h4 className="font-bold text-theme-text text-xl mb-2">Experience</h4>
                        <p className="text-theme-muted">6 Months Internship</p>
                    </div>
                    <div className="p-6 bg-theme-background rounded-xl border border-theme-surface/50 text-center hover:border-theme-primary/30 transition-colors">
                        <h4 className="font-bold text-theme-text text-xl mb-2">Education</h4>
                        <p className="text-theme-muted">BCA Graduate (2025)</p>
                    </div>
                    <div className="p-6 bg-theme-background rounded-xl border border-theme-surface/50 text-center hover:border-theme-primary/30 transition-colors">
                        <h4 className="font-bold text-theme-text text-xl mb-2">Location</h4>
                        <p className="text-theme-muted">Surat, Gujarat</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;
