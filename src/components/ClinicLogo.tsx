import React from 'react';
import logoUrl from '../assets/logo.png';

interface ClinicLogoProps {
  className?: string;
  size?: number;
  variant?: 'dark' | 'light' | 'auto';
}

export default function ClinicLogo({ className = '', size = 48 }: ClinicLogoProps) {
  return (
    <div 
      className={`inline-flex items-center justify-center bg-white rounded-xl p-1.5 shadow-md shrink-0 border border-peach-500/50 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        src={logoUrl}
        alt="A’nio Multispecialty Dental Centre Logo"
        className="w-full h-full object-contain mix-blend-multiply"
      />
    </div>
  );
}

