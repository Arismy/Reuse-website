import { ReactNode } from "react";
import Navigation from "./Navigation";
import AnimatedBackground from "./AnimatedBackground";
import ChatBot from "./ChatBot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen animated-background">
      <AnimatedBackground />
      <Navigation />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <ChatBot />
    </div>
  );
};

export default Layout;