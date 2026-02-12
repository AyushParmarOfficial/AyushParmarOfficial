import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-theme-surface/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-theme-secondary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-text bg-clip-text text-transparent bg-gradient-to-r from-theme-primary to-theme-secondary inline-block">
                        Let's Collaborate
                    </h2>
                    <p className="text-lg text-theme-muted max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Contact Info (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-theme-primary/10 p-3 rounded-full text-theme-primary flex-shrink-0">
                                <FiMail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-theme-text mb-1">Email</h3>
                                <p className="text-theme-muted">Wait for your message</p>
                                <a href="mailto:ayushparmar857@gmail.com" className="text-theme-secondary font-medium hover:underline block mt-1">ayushparmar857@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-theme-secondary/10 p-3 rounded-full text-theme-secondary flex-shrink-0">
                                <FiMapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-theme-text mb-1">Location</h3>
                                <p className="text-theme-muted">Based in</p>
                                <p className="text-theme-primary font-medium block mt-1">Gujarat, India</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-theme-mobile/10 p-3 rounded-full text-emerald-500 bg-emerald-500/10 flex-shrink-0">
                                <FiPhone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-theme-text mb-1">Phone</h3>
                                <p className="text-theme-muted">Available for calls</p>
                                <p className="text-emerald-500 font-medium block mt-1">+91 81407 06086</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Actions (Right) - Replacing Form with WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center items-center bg-theme-background p-8 rounded-2xl shadow-xl border border-theme-surface/50 text-center space-y-8"
                    >
                        <div>
                            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                <FiMessageCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-theme-text mb-2">Chat on WhatsApp</h3>
                            <p className="text-theme-muted max-w-sm mx-auto">
                                The fastest way to reach me. Click below to start a direct chat on WhatsApp Web.
                            </p>
                        </div>

                        <a
                            href="https://web.whatsapp.com/send?phone=918140706086" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.05] transform transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                        >
                            <FiMessageCircle size={24} /> Open WhatsApp
                        </a>

                        <p className="text-xs text-theme-muted">
                            *Ensure you are logged into WhatsApp Web on desktop or have the app installed on mobile.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
