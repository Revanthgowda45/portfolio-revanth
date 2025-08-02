
import React from 'react';
import { Mail, User, ArrowRight, Code, Sparkles } from 'lucide-react';
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revanth Gowda H V
            </h1>
            <p className="text-xl sm:text-2xl mb-6 font-light opacity-90">
              Information Science & Engineering Student
            </p>
            <p className="text-lg mb-8 opacity-80 leading-relaxed max-w-2xl">
              3rd year Information Science Engineering student seeking an internship or entry-level position in software development. 
              Interested in full-stack development and UI/UX design with experience in MERN stack technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 group"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
              
              <Button
                onClick={() => scrollToSection('skills')}
                variant="outline"
                size="lg"
                className="relative overflow-hidden bg-emerald-600 hover:bg-emerald-700 text-white border-0 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Code className="mr-2 relative z-10" size={20} />
                <span className="relative z-10">View Technical Skills</span>
                <Sparkles className="ml-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={16} />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/revanth-profile.jpg"
                  alt="Revanth Gowda H V - Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
