import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. I can help you learn more about my experience, skills, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "experience": "I have 5+ years of experience in full-stack development, working with companies like Tech Innovations Inc. and Digital Solutions Corp. I've led teams, optimized performance, and built scalable applications serving millions of users.",
    "skills": "My technical skills include React, Node.js, TypeScript, Python, AWS, Docker, MongoDB, PostgreSQL, and more. I also have strong leadership, project management, and mentoring abilities.",
    "projects": "I've worked on various projects including e-commerce platforms, real-time applications, microservices architecture, and mobile-first responsive designs. Check out my Projects page for detailed examples!",
    "education": "I'm continuously learning new technologies and best practices. I have certifications in cloud computing, agile methodologies, and modern web frameworks.",
    "contact": "You can reach me through the Contact page, or connect with me on LinkedIn and GitHub. I'm always open to discussing new opportunities and collaborations!",
    "background": "I'm a motivated full-stack developer with a passion for creating innovative solutions. I enjoy learning new technologies and applying them to solve real-world problems.",
    "strengths": "My main strengths include reliability, quick learning ability, strong communication skills, and technical leadership. I always deliver quality work on time and adapt well to new challenges.",
    "hello": "Hello! Welcome to my portfolio. I'm here to help you learn more about my professional background, skills, and experience. What specific information are you looking for?",
    "hi": "Hi there! I'm excited to tell you about my journey as a full-stack developer. Feel free to ask me about my experience, projects, or anything else you'd like to know!"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    // Default responses for common patterns
    if (message.includes("how") || message.includes("what") || message.includes("tell me")) {
      return "I'd be happy to help! You can ask me about my experience, skills, projects, education, or background. I can also provide information about how to contact me.";
    }
    
    if (message.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about my professional background or experience?";
    }
    
    return "That's an interesting question! While I focus on my professional experience and skills, feel free to ask me about my background, projects, technical skills, or how to get in touch. What specific information would be most helpful for you?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary hover:bg-gradient-primary/90 shadow-glow"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 z-50 glass-card border-white/20 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <CardTitle className="text-lg">AI Assistant</CardTitle>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      {!isMinimized && (
        <CardContent className="p-4 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-60">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about my experience..."
              className="flex-1"
            />
            <Button onClick={sendMessage} size="icon" className="bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ChatBot;