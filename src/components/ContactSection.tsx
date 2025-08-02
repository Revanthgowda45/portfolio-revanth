
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'revanthgowda576@gmail.com',
      href: 'mailto:revanthgowda576@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 93530 31854',
      href: 'tel:+919353031854',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/revanth-gowda-91765a299',
      href: 'https://www.linkedin.com/in/revanth-gowda-91765a299/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to create something amazing? I'm always open to discussing new opportunities and exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 dark:bg-slate-900/50 border-slate-700 dark:border-slate-800 text-center hover:bg-slate-800 dark:hover:bg-slate-900 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-blue-400" size={28} />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h4>
                
                <a
                  href={method.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-300 mb-8">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <a
            href="mailto:revanthgowda576@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <Mail className="mr-2" size={20} />
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
