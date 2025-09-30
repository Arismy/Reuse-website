import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "myapplekd@gmail.com",
      href: "mailto:myapplekd@gmail.com",
      color: "bg-gradient-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(+92) 333-488-3737",
      href: "tel:+923334883737",
      color: "bg-gradient-secondary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dera Ghazi Khan, Punjab, Pakistan",
      href: "#",
      color: "bg-gradient-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com",
      color: "hover:shadow-glow"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "http://linkedin.com/in/muhammadyasir",
      color: "hover:shadow-glow-secondary"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com",
      color: "hover:shadow-glow-accent"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Ready to work together? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-right">
            <Card className="glass-card p-6">
              <CardContent className="p-0 space-y-6">
                <h2 className="text-2xl font-semibold gradient-text-secondary">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm excited to bring my energy and dedication to new opportunities. 
                  Whether you're looking for a reliable full-stack developer or want to discuss a project, 
                  I'd love to hear from you.
                </p>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="glass-card p-4 hover-lift">
                    <CardContent className="p-0">
                      <a href={info.href} className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${info.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="glass-card p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`glass-button p-3 rounded-full hover-lift transition-all duration-300 ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <Card className="glass-card p-8 hover-lift">
              <CardContent className="p-0">
                <h2 className="text-2xl font-semibold gradient-text-secondary mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="glass-button"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="glass-button"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="glass-button"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="glass-button resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="glass-card p-8 hover-lift inline-block">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Ready to Start Something Amazing?</h3>
              <p className="text-muted-foreground max-w-md">
                I believe I can make a positive contribution to your team and help achieve your objectives.
              </p>
              <Button 
                variant="outline" 
                className="glass-button px-6 py-3 hover-glow"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv/My-CV.pdf';
                  link.download = 'Yasir-Malkani-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 w-4 h-4" />
                Download My CV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;