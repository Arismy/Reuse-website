import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
      image: "/public/img/Apple-Store.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      type: "Web Application",
      icon: Globe,
      color: "bg-gradient-primary",
      features: ["Payment Processing", "Inventory Management", "Admin Dashboard", "Real-time Analytics"],
      liveUrl: "https://e-shop-apple-one.vercel.app",
      repoUrl: "https://github.com/muhammadyasirmalkani1/E-Shop/"
    },
    {
      title: "Reflect App",
      description: "Cross-platform mobile application for team collaboration and project management. Features real-time synchronization and offline capabilities.",
      image: "/public/img/Apple-Store.jpeg", 
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      type: "Mobile App",
      icon: Smartphone,
      color: "bg-gradient-secondary",
      features: ["Real-time Sync", "Offline Mode", "Team Collaboration", "Push Notifications"],
      liveUrl: "https://reflect-me-ai.vercel.app", // no public demo available
      repoUrl: "https://github.com/muhammadyasirmalkani1/reflect.me"
    },
    {
      title: "Dashboard Crypto Vault",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and automated reporting capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "MongoDB", "D3.js", "Docker"],
      type: "Web Application", 
      icon: Database,
      color: "bg-gradient-accent",
      features: ["Interactive Charts", "Real-time Data", "Automated Reports", "Export Functionality"],
      liveUrl: "https://vault-blond.vercel.app/",
      repoUrl: ""
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Socket.io", "Redis", "PostgreSQL", "Cloudinary"],
      type: "Web Application",
      icon: Globe,
      color: "bg-gradient-primary",
      features: ["Real-time Messaging", "Content Sharing", "Privacy Controls", "Media Upload"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      title: "Fitness Tracking App", 
      description: "Health and fitness mobile application with workout tracking, nutrition logging, and progress analytics.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "ML Kit", "Health API"],
      type: "Mobile App",
      icon: Smartphone,
      color: "bg-gradient-secondary", 
      features: ["Workout Tracking", "Nutrition Logging", "Progress Analytics", "Health Integration"],
      liveUrl: "",
      repoUrl: ""
    },
    {
      title: "CRM System",
      description: "Customer relationship management system with lead tracking, sales pipeline, and automated email campaigns.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Express.js", "MySQL", "SendGrid", "Chart.js"],
      type: "Web Application",
      icon: Database,
      color: "bg-gradient-accent",
      features: ["Lead Management", "Sales Pipeline", "Email Automation", "Reporting"],
      liveUrl: "",
      repoUrl: ""
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">My Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my development work and achievements</p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="glass-card hover-lift group overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-r from-muted/20 to-muted/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`p-3 rounded-full ${project.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="secondary" className="glass-button">
                        {project.type}
                      </Badge>
                    </div>
                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text-secondary mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs text-muted-foreground">
                            • {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs glass-button"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full flex items-center justify-center bg-gradient-primary hover:shadow-glow">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </a>
                      ) : (
                        <Button className="flex-1 bg-gradient-primary/40 cursor-not-allowed" disabled title="Live demo not available">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}

                      {project.repoUrl ? (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="glass-button flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </a>
                      ) : (
                        <Button variant="outline" className="glass-button cursor-not-allowed" disabled title="Repository not linked">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="glass-card p-8 hover-lift inline-block">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Interested in My Work?</h3>
              <p className="text-muted-foreground">
                I'm always excited to discuss new projects and opportunities
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow px-8 py-3">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;