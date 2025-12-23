
import React from 'react';

const PROJECT_LIST = [
  {
    title: "SolFlux dApp",
    desc: "A high-frequency trading interface for Solana DEXs.",
    tag: "Web3",
    link: "#"
  },
  {
    title: "NeuralCanvas",
    desc: "AI-powered image generator trained on custom datasets.",
    tag: "AI/ML",
    link: "#"
  },
  {
    title: "DecentraDocs",
    desc: "Decentralized document storage using IPFS and Solana.",
    tag: "Blockchain",
    link: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Crafting code</h2>
        <p className="text-zinc-500">A collection of things I've built or am currently breaking.</p>
      </div>
      <div className="flex flex-col gap-8">
        {PROJECT_LIST.map((proj) => (
          <a 
            href={proj.link} 
            key={proj.title}
            className="group block p-8 border border-zinc-800 rounded-xl hover:bg-zinc-900/50 hover:border-blue-500/50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-400/30 rounded">
                {proj.tag}
              </span>
              <span className="text-zinc-600 group-hover:text-blue-400 transition-colors">
                &rarr;
              </span>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors">
              {proj.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {proj.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
