
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { ChatInterface } from './components/ChatInterface';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { InteractiveBackground } from './components/InteractiveBackground';
import { SketchyCat } from './components/SketchyCat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'about'>('home');
  const [isDark, setIsDark] = useState(true);
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    // Theme logic
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // View counter logic using localStorage
    const STORAGE_KEY = 'shivam_portfolio_view_count';
    const currentViews = localStorage.getItem(STORAGE_KEY);
    const newCount = currentViews ? parseInt(currentViews, 10) + 1 : 1;
    
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    setViewCount(newCount);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-6 md:p-12 lg:p-24 selection:bg-blue-500 selection:text-white bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <InteractiveBackground />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <SketchyCat />
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-16 md:gap-24">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center w-full sticky top-0 py-4 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm z-40 border-b border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
          <div className="flex items-center gap-3">
            <button 
              id="logo-button"
              onClick={() => setActiveTab('home')}
              className="text-xl font-bold tracking-tighter hover:text-blue-500 transition-colors text-zinc-900 dark:text-white"
            >
              shivam.zip
            </button>
            <div className="hidden sm:flex items-center px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 tabular-nums">
                v.{viewCount.toLocaleString()}
              </span>
            </div>
          </div>
          <nav className="flex gap-6 text-sm">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:text-blue-500 transition-colors font-medium ${activeTab === 'home' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-500 dark:text-zinc-400'}`}
            >
              home
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`hover:text-blue-500 transition-colors font-medium ${activeTab === 'projects' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-500 dark:text-zinc-400'}`}
            >
              projects
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`hover:text-blue-500 transition-colors font-medium ${activeTab === 'about' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-500 dark:text-zinc-400'}`}
            >
              about
            </button>
          </nav>
        </header>

        {/* Dynamic Content */}
        <main className="flex flex-col gap-20">
          {activeTab === 'home' && (
            <>
              <Hero />
              <Interests />
              <ChatInterface />
            </>
          )}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'about' && <About />}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
