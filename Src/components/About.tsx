import React from 'react';
import { SKILLS, ABOUT_SUMMARY, ABOUT_FULL, PORTRAIT_IMAGE } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AboutProps {
  isHomePage?: boolean;
}

const About: React.FC<AboutProps> = ({ isHomePage = false }) => {
  const navigate = useNavigate();

  return (
    <section id="about" className={`relative overflow-hidden ${isHomePage ? 'py-24' : 'pt-32 pb-24'} bg-dark`}>
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isHomePage ? 'About Me' : 'My Story'}
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
        </div>

        <div className={`${isHomePage ? '' : 'grid lg:grid-cols-2 gap-16'} items-start`}>
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className={`prose prose-lg prose-invert text-slate-400 leading-relaxed ${isHomePage ? 'max-w-3xl' : ''}`}>
              {isHomePage ? (
                <p>{ABOUT_SUMMARY}</p>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: ABOUT_FULL }} />
              )}
            </div>

            {isHomePage ? (
                 <button
                    onClick={() => navigate('/about')}
                    className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-400 transition-colors"
                  >
                    Read More About Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
            ) : (
                <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-slate-800">
                    <div>
                        <h4 className="text-3xl font-bold text-white">7+</h4>
                        <p className="text-sm text-slate-500 mt-1">Years Exp.</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white">50+</h4>
                        <p className="text-sm text-slate-500 mt-1">Projects</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white">20+</h4>
                        <p className="text-sm text-slate-500 mt-1">Clients</p>
                    </div>
                </div>
            )}
          </div>

          {/* Image & Skills Column - Only shown on separate page */}
          {!isHomePage && (
            <div className="space-y-12 mt-12 lg:mt-0">
                
                {/* Portrait Image */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 bg-card">
                        <img 
                            src={PORTRAIT_IMAGE} 
                            alt="Portrait" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Skills */}
                 <div className="bg-card/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm animate-slide-up">
                    <h3 className="text-xl font-bold text-white mb-8">Technical Arsenal</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SKILLS.map((skill) => (
                            <div 
                                key={skill.name} 
                                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-primary transition-colors">
                                    {skill.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 text-sm">{skill.name}</p>
                                    <p className="text-xs text-slate-500 capitalize">{skill.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          )}

        </div>

        {/* Back Button for Full Page */}
        {!isHomePage && (
            <div className="mt-16 border-t border-slate-800 pt-8 flex justify-center">
                 <button
                  onClick={() => navigate('/')}
                  className="group flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all hover:scale-105"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </button>
            </div>
        )}

      </div>
    </section>
  );
};

export default About;