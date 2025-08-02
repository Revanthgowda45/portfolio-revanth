
import React, { useState, useEffect } from 'react';
import { Mail, User, Home, Settings, Award, Users, Smartphone, Layers, PencilRuler, FileDown } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import GitHubSection from '../components/GitHubSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ResumeSection from '../components/ResumeSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'github', 'experience', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GitHubSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white text-center py-8">
        <div className="container mx-auto px-4">
          <p className="text-slate-400">
            © 2024 Revanth Gowda H V. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
