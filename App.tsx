
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Interests } from './components/Interests';
import { ChatInterface } from './components/ChatInterface';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'projects' | 'about'>('home');

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 md:p-12 lg:p-24 selection:bg-blue-500 selection:text-white">
      <div className="w-full max-w-2xl flex flex-col gap-16 md:gap-24">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-center w-full sticky top-0 py-4 bg-[#0a0a0a]/80 backdrop-blur-sm z-50">
          <button 
            onClick={() => setActiveTab('home')}
            className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors"
          >
            shivam.zip
          </button>
          <nav className="flex gap-6 text-sm">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:text-blue-400 transition-colors ${activeTab === 'home' ? 'text-blue-400 border-b border-blue-400' : 'text-zinc-500'}`}
            >
              home
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`hover:text-blue-400 transition-colors ${activeTab === 'projects' ? 'text-blue-400 border-b border-blue-400' : 'text-zinc-500'}`}
            >
              projects
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`hover:text-blue-400 transition-colors ${activeTab === 'about' ? 'text-blue-400 border-b border-blue-400' : 'text-zinc-500'}`}
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
