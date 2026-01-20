
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">The Backstory</h2>
      <div className="flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
        <p>
          My journey started with a simple curiosity about how pixels move on a screen. That quickly evolved into a passion for systems that think (AI) and systems that are permissionless (Web3).
        </p>
        <p>
          Right now, I'm deep diving into the <span className="text-zinc-900 dark:text-zinc-100 font-bold">Solana ecosystem</span>, exploring how high-throughput blockchains can change the way we interact with value. At the same time, I'm training models to understand complex patterns, bridging the gap between raw data and intelligence.
        </p>
        <p>
          When I'm not coding, you can find me on Twitter, usually sharing insights about the latest in tech or occasionally "shitposting" about the struggles of an 18-hour coding marathon.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="https://x.com/shivasync_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,0.5)] active:translate-y-0"
          >
            X / Twitter
          </a>
          <a 
            href="https://www.linkedin.com/in/shivam-tiwari-684a38268" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(16,185,129,0.5)] active:translate-y-0"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/shivasync0/shivasync0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(161,161,170,0.5)] active:translate-y-0"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
