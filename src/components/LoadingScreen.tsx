import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = document.getElementById('loading-video') as HTMLVideoElement;
    
    if (video) {
      video.addEventListener('ended', () => {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 500);
      });
    }

    // Fallback: hide after 10 seconds if video doesn't end
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 10000);

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('ended', () => {});
      }
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="flex inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <video
        id="loading-video"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/loading-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
