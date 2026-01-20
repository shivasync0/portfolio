
import React, { useState } from 'react';

export const Hero: React.FC = () => {
  // A curated collection of black & white manga/anime aesthetic images
  const AESTHETIC_IMAGES = [
    "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=1000&auto=format&fit=crop", // Minimalist manga sky
    "https://images.unsplash.com/photo-1578632738980-4331857939e7?q=80&w=1000&auto=format&fit=crop", // Manga portrait
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000&auto=format&fit=crop", // Stargazing vibes
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1000&auto=format&fit=crop", // Extra aesthetic
  ];

  // We use indices to track which image is in which position in the stack
  const [indices, setIndices] = useState([0, 1, 2]);

  const rotateStack = () => {
    // Front goes to back, middle becomes front, back becomes middle
    setIndices(prev => [prev[1], prev[2], (prev[2] + 1) % AESTHETIC_IMAGES.length]);
  };

  return (
    <section className="relative w-full py-10">
      {/* Floating Hire Me */}
      <div className="absolute -top-12 -left-12 hidden md:block animate-bounce z-20">
        <p className="text-zinc-500 text-[10px] font-bold tracking-widest transform -rotate-12">HIRE ME</p>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12 opacity-30 text-zinc-900 dark:text-zinc-100">
          <path d="M5 5C5 5 15 5 20 15C25 25 35 35 35 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M35 35L25 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M35 35L35 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Creative Rotating Image Stack Part */}
          <div 
            className="relative group shrink-0 flex items-center justify-center pt-4 md:pt-0 cursor-pointer select-none"
            onClick={rotateStack}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
            
            <div className="relative w-48 h-48">
               {/* Image 3 (Backmost) */}
               <div className="absolute top-0 left-0 w-32 h-32 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 rotate-[-15deg] translate-x-[-15px] translate-y-[-15px] opacity-30 transition-all duration-700 ease-in-out">
                <img src={AESTHETIC_IMAGES[indices[2]]} alt="manga-back" className="w-full h-full object-cover grayscale" />
              </div>

              {/* Image 2 (Middle) */}
              <div className="absolute top-2 right-2 w-32 h-32 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 rotate-[10deg] translate-x-[15px] opacity-50 transition-all duration-700 ease-in-out">
                <img src={AESTHETIC_IMAGES[indices[1]]} alt="manga-mid" className="w-full h-full object-cover grayscale" />
              </div>

              {/* Image 1 (Front - Main Focus) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl transition-all duration-700 ease-in-out hover:scale-[1.05] z-10 active:scale-95">
                <img 
                  src={AESTHETIC_IMAGES[indices[0]]} 
                  key={indices[0]} // Using key to trigger a brief re-render animation if needed, though CSS handles it
                  alt="Shivam's Aesthetic Focus" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Click Hint overlay */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                   <svg className="w-2.5 h-2.5 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                   </svg>
                   <span className="text-[8px] text-white font-bold uppercase tracking-tighter">Swap</span>
                </div>
              </div>
            </div>

            {/* Pulsing Dot Accent */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 z-20 shadow-lg scale-75 md:scale-100">
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                 <span className="text-[9px] font-bold uppercase tracking-wider">Builder</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white">Shivam Tiwari</h1>
                <div className="bg-blue-500 rounded-full p-1.5 shadow-[0_0_20px_rgba(59,130,246,0.5)]" title="Verified Builder">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
              </div>
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-bold tracking-tight">Full Stack Explorer & AIML Enthusiast</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Building the next big thing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
          Hey, I'm Shivam, an 1/3 design engineer and full-time builder. I love crafting clean, 
          performant web architectures and exploring the frontiers of Artificial Intelligence. 
          I don't just write code; I design experiences where every pixel and every model weight matters.
          <br /><br />
          I'm currently obsessed with building in public, competing in hackathons, and contributing to 
          the next generation of the decentralized web.
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 border border-zinc-200/50 dark:border-zinc-700/50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Schedule a Chat
          </button>
          <button className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-[1.02] active:scale-[0.98] rounded-2xl text-sm font-bold transition-all flex items-center gap-2 shadow-2xl shadow-blue-500/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact Me
          </button>
        </div>

        <div className="pt-10 border-t border-zinc-100 dark:border-zinc-900/50">
          <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] mb-6">Digital Footprint</p>
          <div className="flex flex-wrap gap-4">
            {[
              { 
                name: 'GitHub', 
                url: 'https://github.com/shivasync0/shivasync0', 
                color: 'hover:border-zinc-500 dark:hover:border-zinc-400 hover:shadow-[0_0_25px_rgba(161,161,170,0.35)]' 
              },
              { 
                name: 'X / Twitter', 
                url: 'https://x.com/shivasync_', 
                color: 'hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]' 
              },
              { 
                name: 'LinkedIn', 
                url: 'https://www.linkedin.com/in/shivam-tiwari-684a38268', 
                color: 'hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]' 
              }
            ].map(social => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs font-bold transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:scale-110 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl flex items-center gap-3 group ${social.color}`}
              >
                <span className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
