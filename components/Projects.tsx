
import React from 'react';

const PROJECT_LIST = [
  {
    title: "Retro Lab",
    desc: "Interactive image editor with procedural grain and vintage filters.",
    status: "Live",
    tag: "Tool",
    image: "https://picsum.photos/seed/retro/600/400"
  },
  {
    title: "SolFlux",
    desc: "A high-frequency trading interface for Solana ecosystem assets.",
    status: "Building",
    tag: "Web3",
    image: "https://picsum.photos/seed/solana/600/400"
  },
  {
    title: "NeuralCanvas",
    desc: "Latent space exploration tool using custom trained diffusion models.",
    status: "Building",
    tag: "AI/ML",
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    title: "DecentraDocs",
    desc: "Functional IPFS interface for pinning aesthetic assets.",
    status: "Live",
    tag: "Blockchain",
    image: "https://picsum.photos/seed/docs/600/400"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Projects</h2>
          <p className="text-xs text-zinc-500">Stuff I've built or am currently breaking.</p>
        </div>
        <button className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">View All &rarr;</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECT_LIST.map((proj) => (
          <div 
            key={proj.title}
            className="group relative flex flex-col gap-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer overflow-hidden"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${proj.status === 'Live' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                <span className="text-[10px] font-bold text-white uppercase">{proj.status}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{proj.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{proj.tag}</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                {proj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
