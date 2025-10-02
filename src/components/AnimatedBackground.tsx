import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* 3D Rotating Cube */}
        <div style={{ perspective: "1000px" }}>
          <div
            className="relative h-32 w-32 animate-spin-3d"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-electric-red to-electric-purple opacity-80 rounded-lg"
              style={{ transform: "rotateX(0deg) rotateY(0deg)" }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-electric-cyan to-electric-green opacity-80 rounded-lg"
              style={{ transform: "rotateY(90deg)" }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-electric-pink to-electric-orange opacity-80 rounded-lg"
              style={{ transform: "rotateX(90deg)" }}
            ></div>
          </div>
        </div>

        {/* Progress Text */}
        <div className="mt-12 text-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-electric-red via-electric-purple to-electric-cyan bg-clip-text text-transparent">
            {progress}%
          </div>
          <div className="mt-4 text-sm text-muted-foreground tracking-widest">
            LOADING EXPERIENCE
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-electric-red via-electric-purple to-electric-cyan transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};