import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateSectionProps {
  children: React.ReactNode;
}

function AnimateSection({ children }: AnimateSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`transition-transform duration-300 ${inView ? 'animate-slideRightToLeft' : ''}`}>
      {children}
    </div>
  );
}

export default AnimateSection;
