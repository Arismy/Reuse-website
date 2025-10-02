import { Palette, Image, Layers, Sparkles, Pen, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Unique logos and visual identities that make your brand memorable"
    },
    {
      icon: Image,
      title: "Digital Graphics",
      description: "Eye-catching graphics for social media, websites, and marketing"
    },
    {
      icon: Layers,
      title: "Print Design",
      description: "Professional designs for brochures, flyers, and business cards"
    },
    {
      icon: Sparkles,
      title: "Illustrations",
      description: "Custom illustrations that tell your story visually"
    },
    {
      icon: Pen,
      title: "Typography",
      description: "Beautiful, readable typography that enhances your message"
    },
    {
      icon: Layout,
      title: "Layout Design",
      description: "Structured, balanced layouts for any medium"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Graphic Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating visually stunning designs that communicate your message and captivate your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-gradient-secondary rounded-lg w-fit">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Design Tools */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center gradient-text">Design Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "CorelDRAW", "InDesign"].map((tool) => (
              <div key={tool} className="glass-card px-6 py-3 rounded-full">
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Need Stunning Visuals?</h2>
          <p className="text-muted-foreground text-lg">
            Let's create designs that make your brand stand out
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-secondary hover:shadow-glow-secondary transition-all duration-300 px-8 py-6 text-lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;