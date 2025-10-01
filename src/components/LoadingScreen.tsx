import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const video = document.getElementById('loading-video') as HTMLVideoElement;
    
    if (video) {
      const onEnded = () => {
        setIsVisible(false);
        setTimeout(onLoadingComplete, 500);
      };
      video.addEventListener('ended', onEnded);

      return () => {
        video.removeEventListener('ended', onEnded);
      };
    }
  }, [onLoadingComplete]);

  useEffect(() => {
    // Fallback: hide after 10 seconds if video doesn't end
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 10000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="flex inset-0 z-50 fixed items-center justify-center bg-background transition-opacity duration-500">
      <video
        id="loading-video"
        autoPlay
        muted
        playsInline
        // Medium size: width 480px, height 270px (16:9) and responsive fallback
        className="object-cover rounded-md shadow-lg"
        style={{
          width: "480px",
          height: "270px",
          maxWidth: "90vw",
          maxHeight: "60vh",
        }}
      >
        <source src="/videos/loading-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
