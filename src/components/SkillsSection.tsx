
import React from 'react';
import { Code, Database, Terminal, Server, GitBranch, BrainCircuit, LineChart, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Proficient in HTML, CSS, JavaScript, and React.js. Learning TypeScript and building responsive web applications with Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Basic experience with Node.js and Express.js. Working with Supabase for backend services and learning MongoDB and SQL databases.',
    },
    {
      icon: BrainCircuit,
      title: 'Programming Languages',
      description: 'Strong foundation in Java, with basic knowledge of C and C++. Actively practicing data structures and algorithms for problem-solving.',
    },
    {
      icon: Server,
      title: 'UI/UX Design',
      description: 'Experience with Figma for creating wireframes and UI designs. Understanding of user experience design principles and responsive design concepts.',
    },
    {
      icon: Terminal,
      title: 'Development Tools',
      description: 'Comfortable with Git version control, VS Code, Cursor, and Windsurf. Experience with deployment platforms like Netlify.',
    },
    {
      icon: GitBranch,
      title: 'Web Technologies',
      description: 'Building projects with React, TypeScript, and Supabase. Experience with modern web development practices and responsive design.',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills I'm developing through projects and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card group"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
