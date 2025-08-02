
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: '2023',
      title: 'UI/UX Design Intern',
      company: 'JB Portal, Bangalore | Certified',
      description: 'Created wireframes and UI designs using Figma for web applications. Learned user experience design principles and best practices. Collaborated with frontend developers to implement responsive designs. Gained hands-on experience in design workflow and client feedback incorporation. Completed internship with official certification.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional experience and practical learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-background shadow-lg"></div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {exp.period}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    
                    <div className="text-blue-600 font-semibold text-lg">
                      {exp.company}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
