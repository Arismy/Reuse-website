import { Users, Smartphone, Monitor, Target, Lightbulb, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const UIUXDesign = () => {
  const services = [
    {
      icon: Users,
      title: "User Research",
      description: "In-depth research to understand your users' needs and behaviors"
    },
    {
      icon: Target,
      title: "Wireframing",
      description: "Strategic wireframes that map out the perfect user journey"
    },
    {
      icon: Monitor,
      title: "UI Design",
      description: "Beautiful, intuitive interfaces that users love to interact with"
    },
    {
      icon: Smartphone,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts"
    },
    {
      icon: Lightbulb,
      title: "UX Strategy",
      description: "Comprehensive UX strategies aligned with business goals"
    },
    {
      icon: Workflow,
      title: "Usability Testing",
      description: "Rigorous testing to ensure optimal user experience"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">UI/UX Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designing intuitive, user-centered experiences that delight users and drive engagement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-gradient-accent rounded-lg w-fit">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design Process */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center gradient-text">My Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Research", desc: "Understanding users & goals" },
              { step: "2", title: "Design", desc: "Creating wireframes & mockups" },
              { step: "3", title: "Prototype", desc: "Building interactive prototypes" },
              { step: "4", title: "Test", desc: "Validating with real users" }
            ].map((phase) => (
              <div key={phase.step} className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-lg">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Improve User Experience?</h2>
          <p className="text-muted-foreground text-lg">
            Let's design experiences that users will love
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300 px-8 py-6 text-lg">
              Let's Collaborate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;