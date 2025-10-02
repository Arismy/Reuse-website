import { Sparkles, BookOpen, Target, TrendingUp, Award, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Branding = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Brand Identity",
      description: "Complete brand identity systems including logos, colors, and typography"
    },
    {
      icon: BookOpen,
      title: "Brand Strategy",
      description: "Strategic positioning that differentiates you from competitors"
    },
    {
      icon: Target,
      title: "Brand Guidelines",
      description: "Comprehensive guidelines to maintain brand consistency"
    },
    {
      icon: TrendingUp,
      title: "Brand Development",
      description: "Evolving your brand to stay relevant and competitive"
    },
    {
      icon: Award,
      title: "Brand Story",
      description: "Crafting compelling narratives that connect with your audience"
    },
    {
      icon: Megaphone,
      title: "Brand Voice",
      description: "Defining a unique voice that resonates with your target market"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Branding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building powerful brands that resonate with audiences and stand the test of time
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-gradient-tertiary rounded-lg w-fit">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Branding Matters */}
        <div className="glass-card p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-center gradient-text">Why Branding Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">85%</div>
              <p className="text-muted-foreground">of consumers say color is a primary reason for purchase</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3.5x</div>
              <p className="text-muted-foreground">higher brand visibility with consistent branding</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">23%</div>
              <p className="text-muted-foreground">increase in revenue with strong brand presence</p>
            </div>
          </div>
        </div>

        {/* Brand Elements */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center gradient-text">Key Brand Elements</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Logo Design", "Color Palette", "Typography", "Visual Style", "Brand Voice", "Messaging", "Iconography", "Photography Style"].map((element) => (
              <div key={element} className="glass-card px-6 py-3 rounded-full">
                <span className="font-medium">{element}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Build Your Brand?</h2>
          <p className="text-muted-foreground text-lg">
            Let's create a brand identity that makes you unforgettable
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-tertiary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg">
              Start Your Brand Journey
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Branding;