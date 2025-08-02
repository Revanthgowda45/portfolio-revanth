import React, { useState } from 'react';
import ResumeDownload from './utils/ResumeDownload';
import ResumeWordDownload from "./utils/ResumeWordDownload";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

type SkillProficiency = 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';

interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
}

// Sample resume data
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

const sampleResumeData: ResumeData = {
  name: "Revanth Gowda H V",
  title: "Information Science & Engineering Student",
  contact: {
    email: "revanthgowda576@gmail.com",
    phone: "+91 9353031854",
    location: "Bangalore, India",
    github: "github.com/Revanthgowda45",
    linkedin: "linkedin.com/in/revanth-gowda-91765a299"
  },
  summary: "3rd year Information Science Engineering student seeking an internship or entry-level position in software development. Interested in full-stack development and UI/UX design with basic experience in MERN stack technologies.",
  experience: [
    {
      company: "JB Portal, Bangalore",
      position: "UI/UX Design Intern",
      duration: "2023",
      description: [
        "Created wireframes and UI designs using Figma for web applications",
        "Learned user experience design principles and best practices",
        "Collaborated with frontend developers to implement responsive designs",
        "Gained hands-on experience in design workflow and client feedback incorporation",
        "Completed internship with official certification"
      ]
    }
  ],
  education: [
    {
      institution: "New Horizon College of Engineering, Bangalore",
      degree: "Bachelor of Engineering - Information Science & Engineering",
      duration: "2024 - 2027",
      current: "Lateral Entry - Currently in 3rd Year | CGPA: 6.00"
    },
    {
      institution: "KS Polytechnic, Bangalore",
      degree: "Diploma in Computer Science",
      duration: "2021 - 2024",
      current: "CGPA: 8.54"
    }
  ],
  skills: {
    frontend: [
      { name: "HTML", proficiency: "Intermediate" },
      { name: "CSS", proficiency: "Intermediate" },
      { name: "JavaScript", proficiency: "Intermediate" },
      { name: "React.js", proficiency: "Intermediate" },
      { name: "TypeScript", proficiency: "Basic" },
      { name: "Tailwind CSS", proficiency: "Intermediate" }
    ],
    backend: [
      { name: "Node.js", proficiency: "Basic" },
      { name: "Express.js", proficiency: "Basic" },
      { name: "Supabase", proficiency: "Intermediate" },
      { name: "MongoDB", proficiency: "Basic" },
      { name: "SQL", proficiency: "Basic" }
    ],
    devOps: [
      { name: "Git", proficiency: "Intermediate" },
      { name: "VS Code", proficiency: "Intermediate" },
      { name: "Figma", proficiency: "Intermediate" },
      { name: "Cursor", proficiency: "Intermediate" },
      { name: "Windsurf", proficiency: "Basic" }
    ],
    other: [
      { name: "Java", proficiency: "Intermediate" },
      { name: "C", proficiency: "Basic" },
      { name: "C++", proficiency: "Basic" },
      { name: "UI/UX Design", proficiency: "Intermediate" },
      { name: "Wireframing", proficiency: "Intermediate" }
    ]
  }
};

const ResumeSection = () => {
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  
  return (
    <section id="resume" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">My Resume</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Download my professional resume to learn more about my skills, experience, and education.
        </p>

        <div className="flex flex-col items-center">
          <div className="bg-card p-6 rounded-lg shadow-md mb-8 max-w-xl w-full border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Resume Preview</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Personal Info</h4>
                <p className="text-sm text-muted-foreground">Revanth Gowda H V - Information Science & Engineering Student</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Experience</h4>
                <p className="text-sm text-muted-foreground">1 position - UI/UX Design Intern at JB Portal</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Education</h4>
                <p className="text-sm text-muted-foreground">New Horizon College of Engineering (2024-2027) | KS Polytechnic (2021-2024)</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Projects</h4>
                <p className="text-sm text-muted-foreground">CityFix Platform, DSA Tracker - Both live on Netlify</p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Skills</h4>
                <p className="text-sm text-muted-foreground">Frontend, Backend, Database, Programming, Tools, Design</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 justify-center flex-wrap" style={{ marginTop: '25px' }}>
            <ResumeDownload 
              resumeData={sampleResumeData} 
              buttonText="Download PDF" 
              variant="default"
              size="default"
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium border border-gray-500 px-4 py-2 text-sm"
              style={{ 
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
            
            <ResumeWordDownload 
              resumeData={sampleResumeData} 
              buttonText="Download Word" 
              variant="default"
              size="default"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium border border-blue-500 px-4 py-2 text-sm"
              style={{ 
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif'
              }}
            />
            
            <Button 
              variant="outline" 
              size="default"
              onClick={() => setShowResumeDialog(true)}
              className="border-border text-foreground hover:bg-muted font-medium px-4 py-2 text-sm"
              style={{ 
                borderRadius: '4px',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: 'transparent'
              }}
            >
              View Online
            </Button>
          </div>
          
          {/* Online Resume Dialog */}
          <Dialog open={showResumeDialog} onOpenChange={setShowResumeDialog}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{sampleResumeData.name} - Resume</DialogTitle>
                <DialogDescription>
                  {sampleResumeData.title}
                </DialogDescription>
              </DialogHeader>
              
              <div className="bg-white text-black border rounded-lg mt-4" style={{ fontFamily: 'Calibri, Arial, sans-serif', fontSize: '12pt', lineHeight: '1.4', color: '#333', maxWidth: '8.5in', margin: '0 auto', padding: '0.5in' }}>
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
                  <p style={{ textAlign: 'justify', marginBottom: '15px' }}>{sampleResumeData.summary}</p>
                </div>

                {/* Professional Experience Section */}
                <div style={{ marginBottom: '18px' }}>
                  <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>PROFESSIONAL EXPERIENCE</h3>
                  {sampleResumeData.experience.map((exp, index) => (
                    <div key={index} style={{ marginBottom: '15px' }}>
                      <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>{exp.position}</div>
                      <div className="float-right font-bold" style={{ color: '#4a5568' }}>{exp.duration}</div>
                      <div className="italic" style={{ color: '#666' }}>{exp.company}</div>
                      <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                        {exp.description.map((desc, i) => (
                          <li key={i} style={{ marginBottom: '3px', textAlign: 'justify' }}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education Section */}
                <div style={{ marginBottom: '18px' }}>
                  <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>EDUCATION</h3>
                  {sampleResumeData.education.map((edu, index) => (
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

                {/* Projects Section */}
                <div style={{ marginBottom: '18px' }}>
                  <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>PROJECTS</h3>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>CityFix - Civic Issue Reporting Platform</div>
                    <div className="italic" style={{ color: '#666', marginBottom: '5px' }}>Technologies: HTML, CSS, JavaScript, PHP, MySQL</div>
                    <div style={{ marginBottom: '5px' }}>
                      <strong>Demo:</strong> <a href="https://finecityfix.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#3182ce', textDecoration: 'underline' }}>https://finecityfix.netlify.app/</a>
                    </div>
                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Developed a web platform for citizens to report civic issues like potholes, streetlight problems, and waste management</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Implemented user authentication, issue categorization, and status tracking system</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Created admin dashboard for municipal authorities to manage and respond to reported issues</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>DSA Tracker - Coding Practice Platform</div>
                    <div className="italic" style={{ color: '#666', marginBottom: '5px' }}>Technologies: React, TypeScript, Supabase, Tailwind CSS</div>
                    <div style={{ marginBottom: '5px' }}>
                      <strong>Demo:</strong> <a href="https://dsapro.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#3182ce', textDecoration: 'underline' }}>https://dsapro.netlify.app/</a>
                    </div>
                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Built a comprehensive platform for tracking Data Structures and Algorithms practice progress</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Features include problem categorization, difficulty levels, solution tracking, and progress analytics</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Implemented user authentication, real-time data synchronization, and responsive design</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <div className="font-bold" style={{ fontSize: '13pt', color: '#2c5282' }}>UI/UX Design Portfolio</div>
                    <div className="italic" style={{ color: '#666', marginBottom: '5px' }}>Tools: Figma, Adobe XD, Canva</div>
                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Created multiple design projects during internship including mobile app interfaces and web layouts</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Focused on user-centered design principles and modern UI/UX best practices</li>
                      <li style={{ marginBottom: '3px', textAlign: 'justify' }}>Developed skills in wireframing, prototyping, and design system creation</li>
                    </ul>
                  </div>
                </div>

                {/* Technical Skills Section */}
                <div style={{ marginBottom: '18px' }}>
                  <h3 className="font-bold" style={{ fontSize: '14pt', color: '#2c5282', textTransform: 'uppercase', borderBottom: '1px solid #e2e8f0', paddingBottom: '3px', marginBottom: '10px', letterSpacing: '0.5px' }}>TECHNICAL SKILLS</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
                    <div>
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Programming Languages:</div>
                      <div style={{ marginBottom: '12px' }}>HTML, CSS, JavaScript, PHP, Python, Java, C, C++</div>
                      
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Frameworks & Libraries:</div>
                      <div style={{ marginBottom: '12px' }}>React, Node.js, Express.js, Bootstrap, Tailwind CSS</div>
                      
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Databases:</div>
                      <div>MySQL, Supabase, PostgreSQL</div>
                    </div>
                    
                    <div>
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Design Tools:</div>
                      <div style={{ marginBottom: '12px' }}>Figma, Canva, Photoshop</div>
                      
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Development Tools:</div>
                      <div style={{ marginBottom: '12px' }}>Git, GitHub, VS Code, Netlify</div>
                      
                      <div className="font-bold" style={{ fontSize: '12pt', color: '#2c5282', marginBottom: '8px' }}>Core Skills:</div>
                      <div>Data Structures, Algorithms, Problem Solving, UI/UX Design</div>
                    </div>
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
                      <div>Advanced React concepts, Database optimization, AWS, DevOps, System Design</div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
