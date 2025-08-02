
import React from 'react';
import { Github, ExternalLink, Star, GitFork, Figma } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GitHubSection = () => {
  const repositories = [
    {
      name: 'CityFix - Civic Issue Reporting Platform',
      description: 'Built a web application for citizens to report civic issues like potholes and streetlight problems. Features user registration, issue reporting with location mapping using Leaflet.js, and dashboard to track submitted issues.',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      topics: ['react', 'typescript', 'supabase', 'leaflet', 'civic-tech'],
      githubUrl: 'https://github.com/Revanthgowda45',
      liveUrl: 'https://finecityfix.netlify.app/dashboard',
      featured: true,
      type: 'code'
    },
    {
      name: 'DSA Tracker - Coding Practice Platform',
      description: 'Built a web application to track daily coding practice and progress. Features AI-powered problem suggestions, progress tracking, streak counter, practice analytics, and includes 375+ coding problems with difficulty levels.',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      topics: ['react', 'typescript', 'supabase', 'dsa', 'coding-practice'],
      githubUrl: 'https://github.com/Revanthgowda45',
      liveUrl: 'https://dsapro.netlify.app',
      featured: true,
      type: 'code'
    },
    {
      name: 'UI/UX Design Portfolio',
      description: 'Collection of UI/UX design projects created during internship at JB Portal. Includes wireframes, user interface designs, and responsive design implementations using Figma.',
      language: 'Figma',
      stars: 0,
      forks: 0,
      topics: ['figma', 'ui-design', 'ux-design', 'wireframing', 'responsive-design'],
      githubUrl: '',
      liveUrl: 'https://figma.com/@revanthgowda',
      featured: false,
      type: 'design'
    }
  ];

  const featuredRepos = repositories.filter(repo => repo.featured);
  const codeRepos = repositories.filter(repo => repo.type === 'code' && !repo.featured);
  const designRepos = repositories.filter(repo => repo.type === 'design' && !repo.featured);

  const getLanguageColor = (language: string) => {
    const colors = {
      'TypeScript': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'React': 'bg-cyan-500',
      'CSS': 'bg-purple-500',
      'Figma': 'bg-pink-500'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-500';
  };

  const RepoCard = ({ repo, featured = false }: { repo: typeof repositories[0], featured?: boolean }) => (
    <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${featured ? 'border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-background dark:from-blue-950/50 dark:to-background' : 'border-border bg-card'}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {repo.type === 'design' ? (
              <Figma className="text-pink-600" size={20} />
            ) : (
              <Github className="text-muted-foreground" size={20} />
            )}
            <CardTitle className="text-lg font-semibold text-foreground">
              {repo.name}
            </CardTitle>
            {featured && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                Featured
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {repo.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
            <span>{repo.language}</span>
          </div>
          {repo.type === 'code' && (
            <>
              <div className="flex items-center gap-1">
                <Star size={14} />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={14} />
                <span>{repo.forks}</span>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {repo.topics.map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          {repo.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                Code
              </a>
            </Button>
          )}
          <Button variant="default" size="sm" asChild className="flex-1">
            <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer">
              {repo.type === 'design' ? (
                <>
                  <Figma size={16} className="mr-1" />
                  View Design
                </>
              ) : (
                <>
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </>
              )}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="github" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects & Designs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my web development projects and UI/UX design work showcasing practical applications
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Star className="text-yellow-500" size={24} />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} featured={true} />
            ))}
          </div>
        </div>

        {/* Code Projects */}
        {codeRepos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Github className="text-muted-foreground" size={24} />
              Code Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codeRepos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        )}

        {/* Design Projects */}
        {designRepos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Figma className="text-pink-600" size={24} />
              Design Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designRepos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        )}

        {/* GitHub & Figma Profile Links */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white border dark:border-slate-600">
            <a href="https://github.com/Revanthgowda45" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View GitHub Profile
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400 dark:hover:bg-pink-950/20">
            <a href="https://figma.com/@revanthgowda" target="_blank" rel="noopener noreferrer">
              <Figma size={20} className="mr-2" />
              View Figma Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
