"use client";

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'secondary', 
  className = '',
  onClick,
  fullWidth = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[#8974FF] to-[#149CFD] hover:opacity-90';
      case 'secondary':
        return 'bg-[#556CF5] hover:bg-[#4659d1]';
      case 'outline':
        return 'border-2 border-white hover:bg-white/10';
      case 'ghost':
        return 'bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]';
      default:
        return '';
    }
  };

  return (
    <button 
      className={`${getVariantClasses()} ${fullWidth ? 'w-full' : ''} transition-all px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;