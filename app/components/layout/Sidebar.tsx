"use client";

import { FaMicrophone, FaHeadphones } from 'react-icons/fa';

type SidebarProps = {
  isMenuOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen }) => {
  return (
    <div className={`fixed top-0 bottom-0 left-0 lg:top-4 lg:bottom-4 lg:left-6 md:left-4 md:bottom-4 md:top-4 w-20 bg-[rgba(99,117,197,0.15)] backdrop-blur-[27.79px] rounded-r-3xl p-4 transition-transform
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
      <div className="flex flex-col items-center gap-8 h-full">
        <div className="bg-gradient-to-r from-[#8974FF] to-[#149CFD] w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
        <div className="w-full h-px bg-white/20" />
        <nav className="flex flex-col gap-6">
          <button className="text-white hover:text-[#8974FF] transition-colors">
            <FaMicrophone className="w-6 h-6 mx-auto" />
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <FaHeadphones className="w-6 h-6 mx-auto" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;