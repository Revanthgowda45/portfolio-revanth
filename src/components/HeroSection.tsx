
import React from 'react';
import { Mail, User, ArrowRight, Code, Sparkles, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Revanth Gowda H V
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-light opacity-90">
              Information Science & Engineering Student
            </p>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              3rd year Information Science Engineering student seeking an internship or entry-level position in software development. 
              Interested in full-stack development and UI/UX design with experience in MERN stack technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base group"
              >
                <Mail className="mr-2" size={18} />
                Contact Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </Button>
              
              <Button
                onClick={() => scrollToSection('skills')}
                variant="outline"
                size="lg"
                className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white border-0 font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Code className="mr-2 relative z-10" size={18} />
                <span className="relative z-10">View Technical Skills</span>
                <Sparkles className="ml-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={14} />
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 items-center">
              <a
                href="https://github.com/Revanthgowda45"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-white/20"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-white/90 group-hover:text-white" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/revanth-gowda-h-v-91765a299/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-white/20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-white/90 group-hover:text-white" />
              </a>
              
              <a
                href="mailto:revanthrevanthgowda576@gmail.com"
                className="w-12 h-12 bg-slate-800/40 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-white/20"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 text-white/90 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/revanth-profile.jpg"
                  alt="Revanth Gowda H V - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
