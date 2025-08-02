
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'DSA Problems Solved' },
    { number: '3', label: 'Projects Completed' },
    { number: '4+', label: 'Tech Stacks' },
    { number: '2', label: 'Open Source Contributions' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Information Science & Engineering student passionate about web development and UI/UX design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-muted border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a 3rd year Information Science & Engineering student at New Horizon College of Engineering, 
              Bangalore (Lateral Entry). I completed my Diploma in Computer Science from KS Polytechnic with 
              8.54 CGPA and am currently pursuing my BE degree with focus on full-stack development.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I have hands-on experience with MERN stack technologies and have completed a UI/UX Design 
              internship at JB Portal, Bangalore in 2023. My projects include CityFix (civic issue reporting 
              platform) and DSA Tracker (coding practice platform), both built with React, TypeScript, and Supabase.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I'm actively seeking internship opportunities in software development where I can apply my 
              technical skills and continue learning. I enjoy solving coding problems, creating user-friendly 
              interfaces, and building applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
