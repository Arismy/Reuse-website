import { Code2, Globe, Smartphone, Database, Server, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Responsive Websites",
      description: "Modern, mobile-first websites that work perfectly on all devices"
    },
    {
      icon: Code2,
      title: "Custom Web Apps",
      description: "Tailored web applications built with the latest technologies"
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging app-like experiences on the web"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with databases and APIs"
    },
    {
      icon: Server,
      title: "CMS Integration",
      description: "Easy-to-manage content management systems for your business"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed and SEO"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Web Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building powerful, scalable, and user-friendly web solutions that drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center gradient-text">Technologies I Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Express"].map((tech) => (
              <div key={tech} className="glass-card px-6 py-3 rounded-full">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground text-lg">
            Let's bring your ideas to life with cutting-edge web development
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;