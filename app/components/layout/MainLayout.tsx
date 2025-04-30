"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060711] text-white font-sans relative overflow-x-hidden">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-[rgba(255,255,255,0.1)] rounded-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <Sidebar isMenuOpen={isMenuOpen} />

      {/* Main Content */}
      <main className="md:ml-24 lg:ml-28 p-4 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;