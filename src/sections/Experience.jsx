import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-theme-surface/50 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-surface to-theme-background"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-theme-text">My Experience</h2>
                    <p className="text-lg text-theme-muted">
                        My professional journey so far.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="bg-theme-background p-8 lg:p-10 rounded-2xl shadow-lg border border-theme-surface hover:border-theme-primary/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-theme-text mb-1 group-hover:text-theme-primary transition-colors">
                                        Web Developer Intern
                                    </h3>
                                    <div className="flex items-center gap-2 text-theme-muted text-lg">
                                        <span className="font-semibold text-theme-secondary">Monarchy Infotech</span>
                                        <a
                                            href="https://monarchyinfotech.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-theme-primary hover:text-theme-secondary transition-colors"
                                            aria-label="Visit Monarchy Infotech"
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-600 text-sm font-bold rounded-full border border-emerald-500/20 animate-pulse">
                                        Currently Working
                                    </span>
                                    <span className="inline-block px-4 py-2 bg-theme-secondary/10 text-theme-secondary text-sm font-bold rounded-full border border-theme-secondary/20">
                                        6 Months Internship
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-3 text-theme-muted text-lg list-none">
                                {[
                                    "Assisted in the development of scalable web applications using ReactJS and Laravel, following best practices.",
                                    "Collaborated closely with the design and backend teams to ensure seamless integration of user interfaces.",
                                    "Participated in daily stand-ups and sprint planning sessions, contributing to agile development workflows.",
                                    "Optimized database queries and frontend performance, resulting in faster load times and improved user experience."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-3 w-2 h-2 rounded-full bg-theme-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
