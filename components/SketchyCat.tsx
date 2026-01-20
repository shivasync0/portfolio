
import React, { useState, useEffect, useRef } from 'react';

type CatState = 'sleeping' | 'walking' | 'sitting';

export const SketchyCat: React.FC = () => {
  const [pos, setPos] = useState({ x: 120, y: 55 });
  const [state, setState] = useState<CatState>('sleeping');
  const [direction, setDirection] = useState(1);
  const [isAwake, setIsAwake] = useState(false);
  const [headRotation, setHeadRotation] = useState(0);
  
  const mousePos = useRef({ x: 120, y: 55 });
  const catPos = useRef({ x: 120, y: 55 });
  const lastMouseMoveTime = useRef(Date.now());
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      lastMouseMoveTime.current = Date.now();
      if (!isAwake) setIsAwake(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const dx = mousePos.current.x - catPos.current.x;
      const dy = mousePos.current.y - catPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const timeSinceLastMove = Date.now() - lastMouseMoveTime.current;

      if (!isAwake) {
        setState('sleeping');
      } else if (distance > 20) {
        // Realistic slow walk - reduced speed for stealthy feel
        setState('walking');
        const speed = 0.8; 
        const angle = Math.atan2(dy, dx);
        catPos.current.x += Math.cos(angle) * speed;
        catPos.current.y += Math.sin(angle) * speed;
        
        // Flip direction based on movement
        if (Math.abs(dx) > 1) {
          setDirection(dx >= 0 ? 1 : -1);
        }
      } else {
        // Sit down and observe
        if (timeSinceLastMove > 500) {
          setState('sitting');
          // Calculate head look angle
          const lookAngle = Math.atan2(dy, dx * direction) * (180 / Math.PI);
          // Constrain rotation to a natural range
          setHeadRotation(Math.max(-25, Math.min(25, lookAngle)));
        } else {
          setState('walking');
        }
      }

      setPos({ x: catPos.current.x, y: catPos.current.y });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isAwake, direction]);

  const renderCat = () => {
    const commonProps = {
      stroke: "currentColor",
      strokeWidth: "1.2",
      fill: "none",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    const time = Date.now();

    if (state === 'sleeping') {
      const breathe = Math.sin(time / 1500) * 0.6;
      return (
        <svg width="40" height="30" viewBox="0 0 40 30" className="text-zinc-400 dark:text-zinc-600 transition-opacity duration-1000">
          {/* Organic curled kitten body */}
          <path d={`M8 ${20+breathe} C 8 10, 32 10, 32 ${20+breathe} C 32 26, 8 26, 8 ${20+breathe}`} {...commonProps} />
          {/* Tucked head */}
          <circle cx="14" cy="18" r="5" {...commonProps} />
          {/* Peaceful closed eyes */}
          <path d="M12 18 Q 13 19, 14 18 M 16 18 Q 17 19, 18 18" {...commonProps} strokeWidth="0.8" />
          {/* Soft ears */}
          <path d="M11 14 L 10 9 L 14 13" {...commonProps} />
          <path d="M17 14 L 18 9 L 14 13" {...commonProps} />
          {/* Tail wrapped close */}
          <path d="M32 20 Q 36 22, 30 24 Q 22 25, 18 22" {...commonProps} />
          {/* Floating Zzz */}
          <g className="animate-pulse" style={{ transform: `translate(34px, ${6 + breathe}px)` }}>
             <path d="M0 0 L 2.5 0 L 0 2.5 L 2.5 2.5" {...commonProps} strokeWidth="0.5" />
          </g>
        </svg>
      );
    }

    if (state === 'walking') {
      const leg1 = Math.sin(time / 200) * 4;
      const leg2 = Math.sin(time / 200 + Math.PI) * 4;
      const bodyBob = Math.abs(Math.sin(time / 200)) * 1.5;
      const tailWag = Math.sin(time / 400) * 3;

      return (
        <svg width="45" height="35" viewBox="0 0 45 35" className="text-zinc-900 dark:text-zinc-100">
          {/* Kitten body silhouette */}
          <path d={`M10 ${18+bodyBob} Q 22 ${11+bodyBob}, 34 ${18+bodyBob} L 34 ${24+bodyBob} Q 22 ${28+bodyBob}, 10 ${24+bodyBob} Z`} {...commonProps} />
          
          {/* Head - steady focus while walking */}
          <g transform={`translate(34, ${15+bodyBob/2})`}>
            <circle cx="4" cy="0" r="6" {...commonProps} />
            <path d="M1 -3 L -1 -8 L 3 -4" {...commonProps} />
            <path d="M7 -3 L 9 -8 L 5 -4" {...commonProps} />
            <circle cx="2.5" cy="-1" r="1.3" fill="currentColor" />
            <circle cx="6.5" cy="-1" r="1.3" fill="currentColor" />
            {/* Whiskers */}
            <path d="M0 1 L -3 0 M 0 2 L -3 3" {...commonProps} strokeWidth="0.3" opacity="0.3" />
            <path d="M8 1 L 11 0 M 8 2 L 11 3" {...commonProps} strokeWidth="0.3" opacity="0.3" />
          </g>

          {/* Staggered walking legs */}
          <path d={`M14 ${24+bodyBob} L ${14 + leg1} 31`} {...commonProps} />
          <path d={`M20 ${25+bodyBob} L ${20 + leg2} 31`} {...commonProps} />
          <path d={`M28 ${25+bodyBob} L ${28 + leg1} 31`} {...commonProps} />
          <path d={`M34 ${24+bodyBob} L ${34 + leg2} 31`} {...commonProps} />

          {/* Kitten antenna tail */}
          <path d={`M10 ${20+bodyBob} Q 6 ${10+tailWag}, 8 ${4+tailWag}`} {...commonProps} />
        </svg>
      );
    }

    // Sitting state with head-look logic
    const tailPulse = Math.sin(time / 500) * 2;

    return (
      <svg width="40" height="45" viewBox="0 0 40 45" className="text-zinc-900 dark:text-zinc-100">
        {/* Aesthetic sitting silhouette */}
        <path d="M12 40 L 28 40 Q 33 40, 30 30 L 26 18 Q 20 12, 14 18 L 10 30 Q 7 40, 12 40" {...commonProps} />
        
        {/* Head tracks the mouse when sitting */}
        <g transform={`translate(20, 15) rotate(${headRotation})`}>
          <circle cx="0" cy="0" r="7.5" {...commonProps} />
          <path d="M-4 -5 L -7 -12 L -2 -6" {...commonProps} />
          <path d="M4 -5 L 7 -12 L 2 -6" {...commonProps} />
          {/* Sparkly kitten eyes */}
          <g>
            <circle cx="-3" cy="-1" r="2" fill="currentColor" />
            <circle cx="-2" cy="-2" r="0.6" fill="white" fillOpacity="0.8" />
          </g>
          <g>
            <circle cx="3" cy="-1" r="2" fill="currentColor" />
            <circle cx="4" cy="-2" r="0.6" fill="white" fillOpacity="0.8" />
          </g>
          {/* Whiskers */}
          <path d="M-8 1 L -14 0 M -8 3 L -14 4" {...commonProps} strokeWidth="0.4" opacity="0.3" />
          <path d="M8 1 L 14 0 M 8 3 L 14 4" {...commonProps} strokeWidth="0.4" opacity="0.3" />
        </g>

        {/* Tail wrapped elegantly */}
        <path d={`M28 36 Q ${34+tailPulse} 36, 30 42 Q 24 44, 18 42`} {...commonProps} />
        {/* Neatly placed front paws */}
        <path d="M18 40 L 18 36 M 22 40 L 22 36" {...commonProps} strokeWidth="1" opacity="0.3" />
      </svg>
    );
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        left: pos.x, 
        top: pos.y, 
        transform: `translate(-50%, -100%) scaleX(${direction})`,
        transition: state === 'sleeping' ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      {renderCat()}
    </div>
  );
};
