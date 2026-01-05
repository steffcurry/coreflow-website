import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'floatUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'fadeBlur';
  delay?: number;
}

function AnimatedSection({
  children,
  className = '',
  variant = 'floatUp',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';

    switch (variant) {
      case 'floatUp':
        return 'animate-float-up';
      case 'slideLeft':
        return 'animate-slide-in-left';
      case 'slideRight':
        return 'animate-slide-in-right';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'rotateIn':
        return 'animate-rotate-in';
      case 'fadeBlur':
        return 'animate-fade-blur';
      default:
        return 'animate-float-up';
    }
  };

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${!isVisible ? 'opacity-0' : ''} ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
