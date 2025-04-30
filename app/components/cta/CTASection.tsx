"use client";

import React from 'react';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#8974FF] to-[#149CFD] rounded-3xl p-8 text-center">
      <h2 className="text-2xl mb-4">Want to save your favorites?</h2>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Create a free account to save your custom presets, access more AI tools, and get unlimited exports.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Button 
          className="bg-white text-[#060711] px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Sign Up Free
        </Button>
        <Button 
          variant="outline"
          className="px-8 py-3"
        >
          Continue Without Account
        </Button>
      </div>
    </section>
  );
};

export default CTASection;