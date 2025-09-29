import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Server,
  GitBranch,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "bg-gradient-primary",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 92 },
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "bg-gradient-secondary",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "API Development", level: 92 },
        { name: "Microservices", level: 80 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "bg-gradient-accent",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "AWS/Azure", level: 80 },
        { name: "Docker", level: 82 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-gradient-primary",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 78 },
        { name: "iOS/Android", level: 80 },
        { name: "Mobile UI/UX", level: 88 },
      ]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "bg-gradient-secondary",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 82 },
        { name: "Prototyping", level: 88 },
      ]
    },
    {
      title: "DevOps & Version Control",
      icon: GitBranch,
      color: "bg-gradient-accent",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "Linux/Unix", level: 80 },
        { name: "Testing", level: 88 },
      ]
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "5+ Years Experience",
      description: "Extensive full-stack development experience"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adapts to new technologies and challenges easily"
    },
    {
      icon: Globe,
      title: "Full-Stack Expertise",
      description: "End-to-end application development capabilities"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="glass-card p-6 hover-lift text-center">
                <CardContent className="p-0 space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text-secondary">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="glass-card p-6 hover-lift">
                <CardContent className="p-0 space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-white/10" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold gradient-text-secondary mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL", "Socket.io", "Stripe API", "Firebase", "Supabase", 
              "Jest", "Cypress", "Webpack", "Vite", "Prisma", "Terraform",
              "Kubernetes", "Jenkins", "Nginx", "ElasticSearch"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="glass-button hover-lift px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;