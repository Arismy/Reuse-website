import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(263 70% 60%)", // Primary
      "hsl(200 70% 60%)", // Secondary
      "hsl(320 70% 60%)", // Accent
      "hsl(142 76% 36%)", // Success
    ];

    const newElements: FloatingElement[] = [];
    
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
      });
    }
    
    setElements(newElements);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElements(prev => prev.map(element => ({
        ...element,
        x: (element.x + element.speed * 0.1) % 100,
        y: element.y + Math.sin(Date.now() * 0.001 + element.id) * 0.1,
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            background: `radial-gradient(circle, ${element.color} 0%, transparent 70%)`,
            transform: `translate(-50%, -50%)`,
            animation: `floating ${element.speed * 3 + 6}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              height: '200%',
              animation: `slideInUp ${3 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;