
import React from 'react';

const SKILLS = [
  { name: 'React', color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Next.js', color: 'bg-zinc-500/10 text-zinc-500' },
  { name: 'TypeScript', color: 'bg-blue-600/10 text-blue-600' },
  { name: 'Solana', color: 'bg-emerald-500/10 text-emerald-500' },
  { name: 'Python', color: 'bg-yellow-500/10 text-yellow-500' },
  { name: 'PyTorch', color: 'bg-red-500/10 text-red-500' },
  { name: 'Tailwind', color: 'bg-cyan-500/10 text-cyan-500' },
  { name: 'Docker', color: 'bg-blue-400/10 text-blue-400' },
];

export const Interests: React.FC = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Skills & Arsenal</h2>
        <div className="flex flex-wrap gap-2.5 mt-4">
          {SKILLS.map(skill => (
            <div 
              key={skill.name}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-zinc-100 dark:border-zinc-800/50 hover:scale-105 ${skill.color}`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Milestones & Building</h2>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Growth Path</span>
        </div>
        
        <div className="space-y-8">
          <div className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 group">
            <div className="absolute left-[-5.5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Hackathon Builder</h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">Rapid Prototyping & Shipping</p>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase">2024 - Active</span>
            </div>
            <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
              Consistently participating in global hackathons, focusing on building user-centric 
              applications that integrate AI and blockchain. Expert at turning ideas into 
              functional MVPs within 48-72 hour sprints.
            </p>
          </div>

          <div className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 group">
            <div className="absolute left-[-5.5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">AIML & Web3 Researcher</h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">Independent Learning Path</p>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase">2023 - Present</span>
            </div>
            <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
              Self-taught journey through Deep Learning fundamentals, fine-tuning LLMs, and 
              exploring Solana's Proof of History. Currently bridging the gap between intelligent 
              models and decentralized infrastructure.
            </p>
          </div>

          <div className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 group">
            <div className="absolute left-[-5.5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700 group-hover:scale-150 transition-transform" />
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Open Source Contributor</h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">Community Building</p>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase">Continuously</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
