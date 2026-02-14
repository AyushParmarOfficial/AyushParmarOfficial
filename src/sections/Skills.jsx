import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiReact,
    SiPhp, SiLaravel, SiMysql, SiMongodb, SiFirebase,
    SiGithub, SiSourcetree, SiPostman, SiSlack, SiXampp,
    SiMamp
} from 'react-icons/si';
import { BsHddRack, BsChatDots, BsLightningCharge, BsPuzzle } from 'react-icons/bs';

const categories = [
    {
        id: 'frontend',
        title: 'Frontend',
        skills: [
            { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS', icon: SiCss3, color: '#1572B6' },
            { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        skills: [
            { name: 'PHP', icon: SiPhp, color: '#777BB4' },
            { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
            { name: 'RESTful APIs', icon: BsLightningCharge, color: '#FFD700' },
        ],
    },
    {
        id: 'database',
        title: 'Database',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        ],
    },
    {
        id: 'tools',
        title: 'Tools',
        skills: [
            { name: 'GitHub', icon: SiGithub, color: '#807c7cff' },
            { name: 'Sourcetree', icon: SiSourcetree, color: '#005DD8' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Slack', icon: SiSlack, color: '#4A154B' },
            { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
            { name: 'WAMP', icon: SiXampp, color: '#FF0090' },
            { name: 'MAMP', icon: SiMamp, color: '#666666' },
        ],
    }
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const categoryRefs = useRef({});

    const tabsContainerRef = useRef(null);

    useEffect(() => {
        const container = tabsContainerRef.current;
        const activeTab = categoryRefs.current[activeCategory];

        if (container && activeTab) {
            const { offsetLeft, offsetWidth } = activeTab;
            const { offsetWidth: containerWidth } = container;

            // Calculate center position relative to the container
            const scrollLeft = offsetLeft - (containerWidth / 2) + (offsetWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeCategory]);

    return (
        <section id="skills" className="py-24 bg-theme-background overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-theme-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-theme-text">Technical Expertise</h2>
                    <p className="text-theme-muted max-w-2xl mx-auto">
                        My technical proficiency across various domains.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 max-w-6xl mx-auto">
                    {/* Mobile: Horizontal Scrollable Tabs */}
                    <div
                        ref={tabsContainerRef}
                        className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide flex gap-3 snap-x"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                ref={(el) => (categoryRefs.current[category.id] = el)}
                                onClick={() => setActiveCategory(category.id)}
                                role="tab"
                                aria-selected={activeCategory === category.id}
                                aria-controls={`panel-${category.id}`}
                                className={`snap-center flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${activeCategory === category.id
                                    ? 'bg-theme-primary text-white border-theme-primary shadow-md scale-105'
                                    : 'bg-theme-surface text-theme-muted border-theme-surface/50'
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>

                    {/* Desktop: Vertical Sidebar Tabs */}
                    <div className="hidden md:flex w-1/4 lg:w-1/5 flex-col gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden group hover:bg-theme-surface/50 ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-theme-primary to-theme-secondary text-white shadow-lg'
                                    : 'bg-theme-surface text-theme-muted'
                                    }`}
                            >
                                <span className="relative z-10 font-semibold">{category.title}</span>
                                {activeCategory !== category.id && (
                                    <div className="absolute left-0 top-0 w-1 h-full bg-theme-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Main Content (Skills Grid) */}
                    <div className="w-full md:w-3/4 lg:w-4/5 bg-theme-surface/30 rounded-2xl p-6 md:p-8 min-h-[300px] md:min-h-[400px] relative border border-theme-surface/50 backdrop-blur-sm">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                            >
                                {categories
                                    .find((c) => c.id === activeCategory)
                                    ?.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            viewport={{ once: true }} /* Added once: true for individual skill items too */
                                            className="bg-theme-background p-4 md:p-6 rounded-xl shadow-sm border border-theme-surface hover:border-theme-primary/30 hover:shadow-lg transition-all duration-300 group flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer hover:-translate-y-1"
                                        >
                                            <div
                                                className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                                                style={{ color: skill.color }}
                                            >
                                                <skill.icon />
                                            </div>
                                            <span className="font-medium text-sm md:text-base text-theme-text text-center group-hover:text-theme-primary transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
