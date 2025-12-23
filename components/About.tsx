
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100">The Backstory</h2>
      <div className="flex flex-col gap-6 text-zinc-400 leading-relaxed text-lg">
        <p>
          My journey started with a simple curiosity about how pixels move on a screen. That quickly evolved into a passion for systems that think (AI) and systems that are permissionless (Web3).
        </p>
        <p>
          Right now, I'm deep diving into the <span className="text-zinc-100 font-bold">Solana ecosystem</span>, exploring how high-throughput blockchains can change the way we interact with value. At the same time, I'm training models to understand complex patterns, bridging the gap between raw data and intelligence.
        </p>
        <p>
          When I'm not coding, you can find me on Twitter, usually sharing insights about the latest in tech or occasionally "shitposting" about the struggles of an 18-hour coding marathon.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#" className="px-6 py-2 bg-zinc-100 text-zinc-900 rounded-full font-bold hover:bg-zinc-300 transition-colors">
            Twitter
          </a>
          <a href="#" className="px-6 py-2 border border-zinc-700 rounded-full hover:border-zinc-100 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
