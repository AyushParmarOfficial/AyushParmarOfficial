import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-theme-surface text-theme-text hover:bg-theme-secondary hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
