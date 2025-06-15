
import React, { useState, useRef, useEffect } from 'react';
import { useVolume } from '@/context/VolumeContext';
import { useDoubleTap } from '@/hooks/useDoubleTap';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingVolumeButton = () => {
  const { isMuted, toggleMute, transparency, position, setPosition } = useVolume();
  const doubleTapHandler = useDoubleTap({ onDoubleTap: toggleMute });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    buttonRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !buttonRef.current) return;
    const newX = position.x + e.movementX;
    const newY = position.y + e.movementY;
    
    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;

    const clampedX = Math.max(0, Math.min(window.innerWidth - buttonWidth, newX));
    const clampedY = Math.max(0, Math.min(window.innerHeight - buttonHeight, newY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    buttonRef.current?.releasePointerCapture(e.pointerId);
  };

  const Icon = isMuted ? VolumeX : Volume2;

  return (
    <button
      ref={buttonRef}
      {...doubleTapHandler}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity: transparency,
        touchAction: 'none',
      }}
      className={cn(
        'fixed top-0 left-0 flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-200 ease-in-out cursor-grab',
        isDragging ? 'cursor-grabbing scale-110 bg-primary/20 backdrop-blur-sm' : 'bg-primary/10 backdrop-blur-md',
        isMuted ? 'border-2 border-red-500' : 'border-2 border-accent'
      )}
    >
      <Icon className="w-8 h-8 text-primary" />
    </button>
  );
};
