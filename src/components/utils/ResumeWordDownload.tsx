import React from 'react';
import { Button } from "../ui/button";
import { FileText } from "lucide-react";

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

const ResumeWordDownload = ({
  resumeData,
  buttonText = "Download Word Document",
  variant = "default",
  size = "default",
  className = "",
  style = {}
}: {
  resumeData: ResumeData;
  buttonText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  style?: React.CSSProperties;
}) => {

  const generateWordDocument = () => {
    // Create HTML content that mimics Word document structure
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Resume - ${resumeData.name}</title>
        <style>
          @page {
            size: A4;
            margin: 1in;
          }
          body {
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.15;
            color: #000000;
            margin: 0;
            padding: 0;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #2c5282;
            padding-bottom: 15px;
          }
          .name {
            font-size: 18pt;
            font-weight: bold;
            color: #2c5282;
            margin-bottom: 5px;
            text-transform: uppercase;
          }
          .title {
            font-size: 12pt;
            color: #666;
            margin-bottom: 10px;
            font-style: italic;
          }
          .contact {
            font-size: 10pt;
            margin-bottom: 10px;
          }
          .section {
            margin-bottom: 15px;
          }
          .section-title {
            font-size: 12pt;
            font-weight: bold;
            color: #2c5282;
            text-transform: uppercase;
            border-bottom: 1px solid #cccccc;
            padding-bottom: 2px;
            margin-bottom: 8px;
          }
          .subsection {
            margin-bottom: 10px;
          }
          .job-title, .degree-title, .project-title {
            font-weight: bold;
            font-size: 11pt;
            color: #2c5282;
          }
          .company, .institution {
            font-style: italic;
            color: #666;
          }
          .duration {
            float: right;
            font-weight: bold;
            color: #333;
            clear: both;
          }
          .clearfix::after {
            content: "";
            display: table;
            clear: both;
          }
          .tech-stack {
            font-style: italic;
            color: #666;
            margin-bottom: 3px;
          }
          ul {
            margin: 5px 0;
            padding-left: 20px;
          }
          li {
            margin-bottom: 2px;
            text-align: justify;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .skill-category {
            font-weight: bold;
            color: #2c5282;
          }
          .additional-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .additional-title {
            font-weight: bold;
            color: #2c5282;
            margin-bottom: 3px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="name">REVANTH GOWDA H V</div>
          <div class="title">Information Science & Engineering Student</div>
          <div class="contact">
            📧 revanthgowda576@gmail.com | 📱 +91 9353031854 | 📍 Bangalore, India | 
            🔗 <a href="https://github.com/Revanthgowda45">GitHub</a> | 
            💼 <a href="https://linkedin.com/in/revanth-gowda-91765a299/">LinkedIn</a>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Objective</div>
          <p>3rd year Information Science Engineering student seeking an internship or entry-level position in software development. Interested in full-stack development and UI/UX design with basic experience in MERN stack technologies.</p>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          <div class="subsection clearfix">
            <div class="duration">2024 - 2027</div>
            <div class="degree-title">Bachelor of Engineering - Information Science & Engineering</div>
            <div class="institution">New Horizon College of Engineering, Bangalore</div>
            <div>Lateral Entry - Currently in 3rd Year | CGPA: 6.00</div>
          </div>
          <div class="subsection clearfix">
            <div class="duration">2021 - 2024</div>
            <div class="degree-title">Diploma in Computer Science</div>
            <div class="institution">KS Polytechnic, Bangalore</div>
            <div>CGPA: 8.54</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div>
              <div><span class="skill-category">Frontend:</span> HTML, CSS, JavaScript, React.js, TypeScript (Learning), Tailwind CSS</div>
              <div style="margin-top: 8px;"><span class="skill-category">Backend:</span> Node.js (Basic), Express.js (Basic), Supabase</div>
              <div style="margin-top: 8px;"><span class="skill-category">Database:</span> MongoDB (Basic), SQL (Basic)</div>
            </div>
            <div>
              <div><span class="skill-category">Programming Languages:</span> Java, C (Basic), C++ (Basic)</div>
              <div style="margin-top: 8px;"><span class="skill-category">Tools:</span> Git, VS Code, Figma, Cursor, Windsurf</div>
              <div style="margin-top: 8px;"><span class="skill-category">Design:</span> UI/UX basics, Wireframing</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Projects</div>
          <div class="subsection">
            <div class="project-title">CityFix - Civic Issue Reporting Platform</div>
            <div class="tech-stack">React | TypeScript | Supabase</div>
            <div>🔗 <strong>Live Demo:</strong> <a href="https://finecityfix.netlify.app/dashboard">finecityfix.netlify.app/dashboard</a></div>
            <ul>
              <li>Built a web application for citizens to report civic issues like potholes and streetlight problems</li>
              <li>Used React with TypeScript for the frontend development</li>
              <li>Implemented user registration and login system using Supabase</li>
              <li>Created forms for reporting issues with location mapping using Leaflet.js</li>
              <li>Built dashboard to view and track submitted issues and their status</li>
              <li>Designed responsive interface using Tailwind CSS that works on mobile devices</li>
              <li>Deployed the application on Netlify for public access</li>
            </ul>
          </div>
          <div class="subsection">
            <div class="project-title">DSA Tracker - Coding Practice Platform</div>
            <div class="tech-stack">React.js | TypeScript | Supabase</div>
            <div>🔗 <strong>Live Demo:</strong> <a href="https://dsapro.netlify.app">dsapro.netlify.app</a></div>
            <ul>
              <li>Built a web application to track daily coding practice and progress</li>
              <li>Used React.js with TypeScript for the frontend interface</li>
              <li>Added feature that suggests coding problems based on user's practice history</li>
              <li>Implemented user login and data storage using Supabase database</li>
              <li>Added features like progress tracking, streak counter, and practice analytics</li>
              <li>Includes 375+ coding problems with difficulty levels and categories</li>
              <li>Created responsive design that works on mobile and desktop</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Experience</div>
          <div class="subsection clearfix">
            <div class="duration">2023</div>
            <div class="job-title">UI/UX Design Intern</div>
            <div class="company">JB Portal, Bangalore | Certified</div>
            <ul>
              <li>Created wireframes and UI designs using Figma for web applications</li>
              <li>Learned user experience design principles and best practices</li>
              <li>Collaborated with frontend developers to implement responsive designs</li>
              <li>Gained hands-on experience in design workflow and client feedback incorporation</li>
              <li><strong>Certificate:</strong> Completed internship with official certification</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Achievements</div>
          <ul>
            <li>Maintained 8.54 CGPA in diploma studies</li>
            <li>Completed several online tutorials on web development</li>
            <li>Active on GitHub with personal projects</li>
            <li>Participated in college coding events</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">Additional Information</div>
          <div class="additional-grid">
            <div>
              <div class="additional-title">Languages:</div>
              <div>Kannada (Native), English (Conversational)</div>
            </div>
            <div>
              <div class="additional-title">Interests:</div>
              <div>Open-Source Software, Badminton, Web Development, Learning new technologies</div>
            </div>
            <div>
              <div class="additional-title">Currently Learning:</div>
              <div>Advanced React concepts, Database optimization</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create blob and download
    const blob = new Blob([htmlContent], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resumeData.name.replace(/\s+/g, '_')}_Resume.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button 
      onClick={generateWordDocument} 
      variant={variant} 
      size={size} 
      className={className}
      style={style}
    >
      <FileText className="w-4 h-4 mr-2" />
      {buttonText}
    </Button>
  );
};

export default ResumeWordDownload;
