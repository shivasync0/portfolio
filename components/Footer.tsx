
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-zinc-600 text-sm">
        &copy; {new Date().getFullYear()} Shivam Tiwari. Built with caffeine & React.
      </p>
      <div className="flex gap-8 text-sm font-medium">
        <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">GitHub</a>
        <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">LinkedIn</a>
        <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">X / Twitter</a>
      </div>
    </footer>
  );
};
