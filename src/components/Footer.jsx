import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="py-8 bg-theme-background text-theme-muted border-t border-theme-surface print:hidden">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-6">

                <div className="flex gap-6">
                    <a
                        href="https://github.com/AyushParmarOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-muted hover:text-theme-primary transition-colors hover:scale-110 transform duration-300"
                        aria-label="GitHub"
                    >
                        <FiGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ayush-parmar-web-developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-muted hover:text-theme-secondary transition-colors hover:scale-110 transform duration-300"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/ayushparmar0856?igsh=dzl0MjQxbTlvYzB0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-muted hover:text-theme-secondary transition-colors hover:scale-110 transform duration-300"
                        aria-label="Instagram"
                    >
                        <FiInstagram size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/ayush.parmar.534537"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-muted hover:text-theme-secondary transition-colors hover:scale-110 transform duration-300"
                        aria-label="Facebook"
                    >
                        <FiFacebook size={24} />
                    </a>
                    <a
                        href="mailto:ayushparmar857@gmail.com"
                        target="_blank"
                        className="text-theme-muted hover:text-theme-accent transition-colors hover:scale-110 transform duration-300"
                        aria-label="Email"
                    >
                        <FiMail size={24} />
                    </a>
                </div>

                <div className="text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Ayush Parmar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
