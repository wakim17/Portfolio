import React from 'react';
import { ArrowRight, ArrowLeft, Code2, Rocket, Users, Brain, FileText, Download, Cpu } from 'lucide-react';
import { ABOUT_SUMMARY, ABOUT_FULL, SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface AboutProps {
    isHomePage?: boolean;
}

const About: React.FC<AboutProps> = ({ isHomePage = false }) => {
    const navigate = useNavigate();
    
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // --- RENDER: HOME PAGE VERSION (Clean & Simple) ---
    if (isHomePage) {
        return (
            <section id="about" className="py-20 md:py-32 relative">
                {/* Background Decor */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <div className="container mx-auto px-6 md:px-20 max-w-6xl">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                        <div className="grid md:grid-cols-5 gap-12 items-center">
                            {/* Text Content */}
                            <div className="md:col-span-3 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        About <span className="text-primary">Me</span>
                                    </h2>
                                    <div className="w-16 h-1.5 bg-primary rounded-full" />
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed">{ABOUT_SUMMARY}</p>
                                <button
                                    onClick={() => navigate('/about')}
                                    className="group flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors mt-4"
                                >
                                    Read More About Me 
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Key Values (Desktop Only) */}
                            <div className="hidden md:flex md:col-span-2 flex-col gap-4 border-l border-slate-800 pl-10">
                                <ValueCard icon={<Code2 size={24} />} title="Clean Code" subtitle="Scalable & Maintainable" color="blue" />
                                <ValueCard icon={<Brain size={24} />} title="Problem Solver" subtitle="Complex Logic & Systems" color="purple" />
                                <ValueCard icon={<Users size={24} />} title="User Focused" subtitle="Intuitive Experiences" color="teal" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    // --- RENDER: FULL PAGE VERSION (Detailed) ---
    return (
        <section className="pt-32 pb-20 relative min-h-screen">
            <div className="container mx-auto px-6 md:px-20 max-w-6xl space-y-12">
                
                {/* Top Button */}
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                {/* 1. Bio & CV Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-3 gap-12 items-start"
                >
                    <div className="md:col-span-2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            My <span className="text-primary">Journey</span>
                        </h1>
                        <div className="text-slate-300 text-lg leading-relaxed space-y-6 bg-card/50 p-8 rounded-2xl border border-slate-800">
                             <div dangerouslySetInnerHTML={{ __html: ABOUT_FULL }} />
                        </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-fit sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FileText size={20} className="text-primary" />
                            Resources
                        </h3>
                        
                        <a 
                            href="/resume.pdf" 
                            download="Jhony_Wakim_Resume.pdf"
                            className="flex items-center justify-between w-full p-4 bg-primary hover:bg-blue-600 text-white rounded-xl transition-all group mb-4"
                        >
                            <span className="font-semibold">Download CV</span>
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        </a>

                        <div className="text-sm text-slate-400">
                            <p className="mb-4">Looking for a specific skill set or project history? My CV covers:</p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Work Experiance</li>
                                <li>Education & Certifications</li>
                                <li>Detailed Tech Stack</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* 2. All Skills Section */}
                <div className="space-y-8 pt-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                            <Cpu size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
                            <p className="text-slate-400">The tools and technologies I use to build digital worlds.</p>
                        </div>
                    </div>

                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {SKILLS.map((skill) => (
                            <motion.div 
                                key={skill.name}
                                variants={itemVariants}
                                className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group flex items-center gap-3"
                            >
                                <div className={`p-2 rounded-lg ${
                                    skill.category === 'frontend' ? 'bg-blue-500/10 text-blue-400' : 
                                    skill.category === 'backend' ? 'bg-green-500/10 text-green-400' : 
                                    'bg-purple-500/10 text-purple-400'
                                } group-hover:scale-110 transition-transform`}>
                                    {skill.icon}
                                </div>
                                <span className="font-medium text-slate-200">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* NEW: Bottom Button */}
                <div className="flex justify-center pt-12 border-t border-slate-800">
                    <button
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </button>
                </div>

            </div>
        </section>
    );
};

// Helper Component for the "Values" on Home Page
const ValueCard = ({ icon, title, subtitle, color }: any) => {
    const colorClasses: any = {
        blue: "bg-blue-500/10 text-blue-400",
        purple: "bg-purple-500/10 text-purple-400",
        teal: "bg-teal-500/10 text-teal-400"
    };

    return (
        <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex items-center gap-4 hover:bg-slate-800 transition-colors group cursor-default">
            <div className={`p-3 rounded-lg ${colorClasses[color]} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold">{title}</h4>
                <p className="text-xs text-slate-400">{subtitle}</p>
            </div>
        </div>
    );
};

export default About;