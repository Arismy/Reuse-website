import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">M Yasir</span>
              <br />
              <span className="text-foreground">Malkani</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a<span className="gradient-text-secondary font-semibold">motivated and hardworking</span> 
              {" "} individual who enjoys learning new skills and applying them to improve both myself and the workplace. My journey in full stack development has been driven by curiosity and a commitment to excellence.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="glass-button px-8 py-6 text-lg hover-glow"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv/My-CV.pdf';
                link.download = 'Yasir-Malkani-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="#"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="http://linkedin.com/in/muhammadyasir"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow-secondary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <Link
              to="/contact"
              className="glass-button p-4 rounded-full hover-lift hover:shadow-glow-accent transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 floating" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-secondary rounded-full blur-xl opacity-30 floating" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-accent rounded-full blur-xl opacity-30 floating" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default Home;