import React, { useRef, useState } from 'react';
import { Button } from "../ui/button";
import { Printer } from "lucide-react";
import "./resumePrint.css";

interface SkillItem {
  name: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';
}

interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
    current?: string;
  }>;
  skills: {
    frontend: SkillItem[];
    backend: SkillItem[];
    devOps: SkillItem[];
    other: SkillItem[];
  };
}

const ResumeDownload = ({
  resumeData,
  buttonText = "Download Resume",
  variant = "default",
  size = "default",
  className = ""
}: {
  resumeData: ResumeData;
  buttonText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) => {
  const [isPrintMode, setIsPrintMode] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    setIsPrintMode(true);
    
    // Allow time for the print styles to be applied
    setTimeout(() => {
      window.print();
      // Reset after printing dialog is closed
      setTimeout(() => setIsPrintMode(false), 500);
    }, 200);
  };

  // This component renders a resume that will be printed/saved as PDF
  // using the browser's built-in print functionality
  return (
    <>
      {/* Resume template that will be printed */}
      <div className={isPrintMode ? "block" : "hidden"}>
        <div ref={resumeRef} className="print-container bg-white text-black" style={{ fontFamily: 'Calibri, Arial, sans-serif', fontSize: '12pt', lineHeight: '1.4', color: '#333', maxWidth: '8.5in', margin: '0 auto', padding: '0.5in' }}>
          {/* Header Section */}
          <div className="text-center mb-5 pb-4" style={{ borderBottom: '2px solid #2c5282' }}>
            <div className="flex items-center justify-center gap-6 mb-4">
              <img src="/revanth-profile.jpg" alt="Revanth Gowda H V" className="w-24 h-24 rounded-full object-cover" style={{ border: '3px solid #2c5282', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
              <div className="text-left">
                <h1 className="font-bold mb-1" style={{ fontSize: '24pt', color: '#2c5282', letterSpacing: '1px' }}>REVANTH GOWDA H V</h1>
                <h2 className="italic mb-2" style={{ fontSize: '14pt', color: '#666' }}>Information Science & Engineering Student</h2>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-4" style={{ fontSize: '11pt' }}>
              <div className="flex items-center gap-1">
                📧 revanthgowda576@gmail.com
              </div>
              <div className="flex items-center gap-1">
                📱 +91 9353031854
              </div>
              <div className="flex items-center gap-1">
                📍 Bangalore, India
              </div>
              <div className="flex items-center gap-1">
                🔗 <a href="https://github.com/Revanthgowda45" className="text-blue-600 hover:underline" style={{ color: '#3182ce', textDecoration: 'none' }}>GitHub</a>
              </div>
              <div className="flex items-center gap-1">
                💼 <a href="https://linkedin.com/in/revanth-gowda-91765a299/" className="text-blue-600 hover:underline" style={{ color: '#3182ce', textDecoration: 'none' }}>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Objective Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>OBJECTIVE</h3>
            <p style={{ textAlign: 'justify', marginBottom: '15px' }}>{resumeData.summary}</p>
          </div>

          {/* Professional Experience Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>PROFESSIONAL EXPERIENCE</h3>
            <div style={{ marginBottom: '15px' }}>
              <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>UI/UX Design Intern</div>
              <div className="float-right font-bold" style={{ color: '#4a5568' }}>2023</div>
              <div className="italic" style={{ color: '#666' }}>JB Portal, Bangalore | Certified</div>
              <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Created wireframes and UI designs using Figma for web applications</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Learned user experience design principles and best practices</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Collaborated with frontend developers to implement responsive designs</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Gained hands-on experience in design workflow and client feedback incorporation</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}><strong>Certificate:</strong> Completed internship with official certification</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>EDUCATION</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>{edu.degree}</div>
                <div className="float-right font-bold" style={{ color: '#4a5568' }}>{edu.duration}</div>
                <div className="italic" style={{ color: '#666' }}>{edu.institution}</div>
                {edu.current && (
                  <div style={{ color: '#555', marginTop: '3px' }}>{edu.current}</div>
                )}
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>TECHNICAL SKILLS</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
              <div>
                <div><span className="font-bold" style={{ color: '#2c5282' }}>Frontend:</span> HTML, CSS, JavaScript, React.js, TypeScript (Learning), Tailwind CSS</div>
                <div style={{ marginTop: '8px' }}><span className="font-bold" style={{ color: '#2c5282' }}>Backend:</span> Node.js (Basic), Express.js (Basic), Supabase</div>
                <div style={{ marginTop: '8px' }}><span className="font-bold" style={{ color: '#2c5282' }}>Database:</span> MongoDB (Basic), SQL (Basic)</div>
              </div>
              
              <div>
                <div><span className="font-bold" style={{ color: '#2c5282' }}>Programming Languages:</span> Java, C (Basic), C++ (Basic)</div>
                <div style={{ marginTop: '8px' }}><span className="font-bold" style={{ color: '#2c5282' }}>Tools:</span> Git, VS Code, Figma, Cursor, Windsurf</div>
                <div style={{ marginTop: '8px' }}><span className="font-bold" style={{ color: '#2c5282' }}>Design:</span> UI/UX basics, Wireframing</div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>PROJECTS</h3>
            
            <div style={{ marginBottom: '15px' }}>
              <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>CityFix - Civic Issue Reporting Platform</div>
              <div className="italic" style={{ color: '#666', marginBottom: '5px' }}>React | TypeScript | Supabase</div>
              <div style={{ marginBottom: '5px' }}>
                🔗 <strong>Live Demo:</strong> <a href="https://finecityfix.netlify.app/dashboard" target="_blank" rel="noopener noreferrer" style={{ color: '#3182ce', textDecoration: 'underline' }}>finecityfix.netlify.app/dashboard</a>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Built a web application for citizens to report civic issues like potholes and streetlight problems</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Used React with TypeScript for the frontend development</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Implemented user registration and login system using Supabase</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Created forms for reporting issues with location mapping using Leaflet.js</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Built dashboard to view and track submitted issues and their status</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Designed responsive interface using Tailwind CSS that works on mobile devices</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Deployed the application on Netlify for public access</li>
              </ul>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>DSA Tracker - Coding Practice Platform</div>
              <div className="italic" style={{ color: '#666', marginBottom: '5px' }}>React.js | TypeScript | Supabase</div>
              <div style={{ marginBottom: '5px' }}>
                🔗 <strong>Live Demo:</strong> <a href="https://dsapro.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: '#3182ce', textDecoration: 'underline' }}>dsapro.netlify.app</a>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Built a web application to track daily coding practice and progress</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Used React.js with TypeScript for the frontend interface</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Added feature that suggests coding problems based on user's practice history</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Implemented user login and data storage using Supabase database</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Added features like progress tracking, streak counter, and practice analytics</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Includes 375+ coding problems with difficulty levels and categories</li>
                <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Created responsive design that works on mobile and desktop</li>
              </ul>
            </div>
          </div>



          {/* Achievements Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>ACHIEVEMENTS</h3>
            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Maintained 8.54 CGPA in diploma studies</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Completed several online tutorials on web development</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Active on GitHub with personal projects</li>
              <li style={{ marginBottom: '5px', textAlign: 'justify' }}>Participated in college coding events</li>
            </ul>
          </div>

          {/* Additional Information Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>ADDITIONAL INFORMATION</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
              <div>
                <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Languages:</div>
                <div style={{ marginBottom: '12px' }}>Kannada (Native), English (Conversational)</div>
                
                <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Interests:</div>
                <div>Open-Source Software, Badminton, Web Development, Learning new technologies</div>
              </div>
              
              <div>
                <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Currently Learning:</div>
                <div>Advanced React concepts, Database optimization</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download/Print Button */}
      <Button 
        onClick={handlePrint} 
        variant={variant} 
        size={size} 
        className={className}
      >
        <Printer className="w-4 h-4 mr-2" />
        {buttonText}
      </Button>
    </>
  );
};

export default ResumeDownload;
