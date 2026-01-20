
import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 flex flex-col gap-16 border-t border-zinc-100 dark:border-zinc-900 pt-20 pb-10">
      
      {/* Philosophy Section */}
      <div className="w-full flex flex-col gap-12 mb-20">
        <div className="flex flex-col gap-4">
          <span className="w-fit px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-50 dark:bg-zinc-900/50">
            Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code Block */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0d0d0d] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
                  <span className="text-[10px] font-bold text-zinc-400 font-mono">Builder.sol</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed">
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">1</span>
                  <p><span className="text-blue-500 font-bold">function</span> <span className="text-emerald-500">build</span>() <span className="text-blue-500">public</span> &#123;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">2</span>
                  <p className="pl-4"><span className="text-blue-500 font-bold">while</span>(alive) &#123;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">3</span>
                  <p className="pl-8">ship();</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">4</span>
                  <p className="pl-8">breakThings();</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">5</span>
                  <p className="pl-8">learn();</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">6</span>
                  <p className="pl-4">&#125;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">7</span>
                  <p>&#125;</p>
                </div>
                <div className="mt-4 flex gap-4">
                   <span className="text-zinc-300 dark:text-zinc-700 select-none text-right w-4">8</span>
                   <div className="w-1.5 h-4 bg-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text & Stats */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
                Code<br />Coffee<br />Repeat
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-4 font-medium">From idea to execution, onchain.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">∞</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Contracts</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Onchain</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">0</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Critical Rugs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="text-zinc-300 dark:text-zinc-800">
          <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.1046 12.1216 17 11.017 17H8.017C7.46472 17 7.017 16.5523 7.017 16V9C7.017 8.44772 7.46472 8 8.017 8H13.017V6H8.017C6.35915 6 5.017 7.34214 5.017 9V16C5.017 17.6579 6.35915 19 8.017 19H11.017C11.5693 19 12.017 19.4477 12.017 20V21H14.017ZM17.017 6H22.017V8H17.017V6Z"/>
          </svg>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 italic tracking-tight leading-snug max-w-2xl px-4">
          "Do so much work that it would be unreasonable for you to not be successful."
        </h2>
        
        <div className="flex items-center gap-4 w-full max-w-xs mx-auto">
          <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">ALEX HORMOZI</p>
          <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>

      {/* Bottom Nav & Back to Top */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-100 dark:border-zinc-900 relative">
        <p className="text-zinc-500 dark:text-zinc-600 text-[10px] font-bold uppercase tracking-widest order-2 md:order-1">
          &copy; {new Date().getFullYear()} SHIVAM TIWARI
        </p>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest order-1 md:order-2">
          <a href="https://github.com/shivasync0/shivasync0" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all">Github</a>
          <a href="https://x.com/shivasync_" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all">Twitter</a>
          <a href="https://www.linkedin.com/in/shivam-tiwari-684a38268" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all">LinkedIn</a>
        </div>

        <button 
          onClick={scrollToTop}
          className="absolute right-0 bottom-[-40px] md:bottom-auto md:top-12 p-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:scale-110 active:scale-95 transition-all text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
