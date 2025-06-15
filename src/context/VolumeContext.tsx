
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface VolumeContextType {
  isMuted: boolean;
  toggleMute: () => void;
  transparency: number;
  setTransparency: (value: number) => void;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
}

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export const VolumeProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [transparency, setTransparency] = useState(0.8);
  const [position, setPosition] = useState({ x: 50, y: window.innerHeight - 150 });

  const toggleMute = () => setIsMuted(prev => !prev);

  const value = {
    isMuted,
    toggleMute,
    transparency,
    setTransparency,
    position,
    setPosition,
  };

  return (
    <VolumeContext.Provider value={value}>
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolume = () => {
  const context = useContext(VolumeContext);
  if (context === undefined) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }
  return context;
};
