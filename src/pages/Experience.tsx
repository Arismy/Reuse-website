import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      location: "DGK, Pakistan",
      duration: "2022 - Present",
      type: "Full-time",
      description: "I build scalable, high-performance web applications with React and Node.js for startups and enterprises.",
      achievements: [
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product.,
        "Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        "Developed and shipped highly interactive web applications for both consumer and enterprise clients.",
        "Led the migration from a monolithic architecture to microservices, improving deployment speed by 60%."
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "MongoDB"]
    },
    {
      company: "Digital Solutions Corp",
      position: "Full Stack Developer",
      location: "New York, NY",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver user-centric solutions.",
      achievements: [
        "Built 15+ responsive web applications",
        "Reduced bug reports by 50% through comprehensive testing",
        "Implemented real-time features using WebSocket technology",
        "Optimized database queries improving response time by 35%"
      ],
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Redis", "Git", "Jira"]
    },
    {
      company: "StartUp Ventures",
      position: "Frontend Developer",
      location: "Austin, TX",
      duration: "2019 - 2020",
      type: "Full-time",
      description: "Focused on creating engaging user interfaces and improving user experience. Worked in an agile environment with rapid iteration cycles.",
      achievements: [
        "Developed mobile-first responsive designs",
        "Increased user engagement by 25% through UX improvements",
        "Collaborated with designers on design system implementation",
        "Maintained 98% code coverage through automated testing"
      ],
      technologies: ["React", "JavaScript", "Sass", "Figma", "Jest", "Webpack"]
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      location: "Remote",
      duration: "2018 - 2019",
      type: "Contract",
      description: "Provided web development services to small businesses and startups. Managed complete project lifecycle from conception to deployment.",
      achievements: [
        "Delivered 20+ successful projects on time and budget",
        "Built e-commerce solutions generating $500K+ in revenue",
        "Established long-term client relationships",
        "Learned diverse technologies across different industries"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "HTML/CSS", "jQuery", "Bootstrap"]
    }
  ];

  const skills = [
    "Team Leadership", "Project Management", "Agile/Scrum", "Code Review",
    "System Architecture", "Database Design", "API Development", "Cloud Deployment",
    "Performance Optimization", "Security Best Practices", "DevOps", "Mentoring"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years of building innovative web solutions and leading development teams. 
            Here's my journey through the tech industry.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text-secondary">
            Career Timeline
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="mt-2 sm:mt-0">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp size={18} className="text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text-secondary">
            Professional Skills
          </h2>
          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6 text-center">
                Skills developed through years of professional experience and continuous learning
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;