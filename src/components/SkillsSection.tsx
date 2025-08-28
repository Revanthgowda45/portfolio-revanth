
import React from 'react';
import { Code2, Zap, Star, Trophy } from 'lucide-react';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiGit,
  SiFigma,
  SiNetlify
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 'Intermediate', category: 'Programming', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiPython, iconColor: 'text-blue-500' },
    { name: 'Java', level: 'Intermediate', category: 'Programming', color: 'from-blue-400 to-blue-600', dots: 2, icon: FaJava, iconColor: 'text-red-600' },
    { name: 'JavaScript', level: 'Intermediate', category: 'Programming', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiJavascript, iconColor: 'text-yellow-400' },
    { name: 'React.js', level: 'Intermediate', category: 'Frontend', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiReact, iconColor: 'text-cyan-400' },
    { name: 'HTML/CSS', level: 'Expert', category: 'Frontend', color: 'from-emerald-400 to-emerald-600', dots: 3, icon: SiHtml5, iconColor: 'text-orange-500' },
    { name: 'Tailwind CSS', level: 'Intermediate', category: 'Frontend', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiTailwindcss, iconColor: 'text-teal-400' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiNodedotjs, iconColor: 'text-green-500' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Backend', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiMongodb, iconColor: 'text-green-600' },
    { name: 'MySQL', level: 'Intermediate', category: 'Backend', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiMysql, iconColor: 'text-blue-600' },
    { name: 'Express.js', level: 'Basic', category: 'Backend', color: 'from-orange-400 to-orange-600', dots: 1, icon: SiExpress, iconColor: 'text-gray-700 dark:text-gray-300' },
    { name: 'REST APIs', level: 'Basic', category: 'Backend', color: 'from-orange-400 to-orange-600', dots: 1, icon: Code2, iconColor: 'text-purple-500' },
    { name: 'Git', level: 'Expert', category: 'Tools', color: 'from-emerald-400 to-emerald-600', dots: 3, icon: SiGit, iconColor: 'text-orange-600' },
    { name: 'Figma', level: 'Intermediate', category: 'Design', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiFigma, iconColor: 'text-pink-500' },
    { name: 'Netlify', level: 'Intermediate', category: 'Deployment', color: 'from-blue-400 to-blue-600', dots: 2, icon: SiNetlify, iconColor: 'text-teal-500' },
  ];

  const getSkillIcon = (level) => {
    if (level === 'Expert') return <Trophy className="w-4 h-4" />;
    if (level === 'Intermediate') return <Star className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  const getLevelColor = (level) => {
    if (level === 'Expert') return 'text-emerald-600 dark:text-emerald-400';
    if (level === 'Intermediate') return 'text-blue-600 dark:text-blue-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills I'm developing through projects and continuous learning
          </p>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Expert</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Skill Icon */}
              <div className="relative z-10 flex justify-center mb-3">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-slate-200 dark:border-slate-700`}>
                  <skill.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${skill.iconColor}`} />
                </div>
              </div>
              
              {/* Skill Name */}
              <h3 className="relative z-10 text-center text-sm sm:text-base font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              
              {/* Category Badge */}
              <div className="relative z-10 flex justify-center mb-3">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                  {skill.category}
                </span>
              </div>
              
              {/* Skill Level Indicator */}
              <div className="relative z-10 flex flex-col items-center">
                <span className={`text-sm font-bold mb-2 ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
                
                {/* Dot Indicators */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dot <= skill.dots
                          ? skill.level === 'Expert'
                            ? 'bg-emerald-500'
                            : skill.level === 'Intermediate'
                            ? 'bg-blue-500'
                            : 'bg-orange-500'
                          : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
