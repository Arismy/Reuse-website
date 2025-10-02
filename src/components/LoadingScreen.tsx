import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Show loading screen for 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 transition-opacity duration-500">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main logo container with multiple animations */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo with combined animations */}
        <div className="relative">
          {/* Glow effect ring */}
          <div className="absolute inset-0 -m-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-50 animate-[spin_3s_linear_infinite]" />
          
          {/* Main logo */}
          <img
            src="/loading-screen.png"
            alt="Loading animation"
            className="relative max-w-md w-full h-auto object-contain animate-[fade-in_0.5s_ease-out,scale-in_0.5s_ease-out] drop-shadow-2xl"
            style={{
              animation: 'fadeIn 0.5s ease-out, scaleIn 0.5s ease-out, float 3s ease-in-out infinite'
            }}
          />
          
          {/* Rotating accent ring */}
          <div className="absolute inset-0 -m-2 border-4 border-transparent border-t-primary/50 rounded-full animate-[spin_2s_linear_infinite]" />
        </div>

        {/* Loading text with fade animation */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-[gradient-shift_3s_ease-in-out_infinite]">
            Loading Experience
          </h2>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Loading dots */}
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100" style={{ animationDelay: '0.1s' }} />
            <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
