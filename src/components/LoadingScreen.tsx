import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading screen for 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <img
        src="/loading-screen.png"
        alt="Loading animation"
        className="max-w-md w-full h-auto object-contain animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;
