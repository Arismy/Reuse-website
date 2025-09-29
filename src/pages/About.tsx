import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "I enjoy learning new skills and applying them to improve both myself and the workplace."
    },
    {
      icon: Target,
      title: "Reliability", 
      description: "I always complete my work on time and with quality - it's one of my main strengths."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "I'm a quick learner who adapts to new challenges easily and sees weaknesses as opportunities to grow."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication skills allow me to work well in teams and collaborate effectively."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">About Me</h1>
          <p className="text-xl text-muted-foreground">Get to know the person behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-right">
            <Card className="glass-card p-8 hover-lift">
              <CardContent className="p-0 space-y-6">
                <h2 className="text-2xl font-semibold gradient-text-secondary">My Journey</h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a motivated and hardworking individual with <span className="text-foreground font-semibold">5 years of experience</span> in 
                    full-stack development. My journey in tech has been driven by a genuine passion for creating innovative solutions.
                  </p>
                  
                  <p>
                    In my previous role, I developed strong skills in full-stack website development, mobile app creation, and 
                    designing software solutions. I believe these skills will be valuable in contributing to meaningful projects 
                    and helping teams achieve their objectives.
                  </p>
                  
                  <p>
                    What excites me most about development is the opportunity to continuously learn and grow. I see every challenge 
                    as a chance to improve myself while delivering quality work that makes a real impact.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gradient-primary text-white">Full Stack Developer</Badge>
                  <Badge variant="secondary" className="bg-gradient-secondary text-white">5+ Years Experience</Badge>
                  <Badge variant="secondary" className="bg-gradient-accent text-white">Team Player</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Growth Philosophy */}
            <Card className="glass-card p-8 hover-lift">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  I believe in honest self-reflection. While I sometimes try to do everything on my own because 
                  I don't like asking for help, I'm actively learning to delegate and communicate better with my team. 
                  I now see challenges as opportunities to grow and improve my collaborative skills.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values & Strengths */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-2xl font-semibold gradient-text-secondary">Core Values</h2>
            
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="glass-card p-6 hover-lift">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-gradient-primary">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;