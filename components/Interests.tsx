
import React from 'react';

const INTERESTS = [
  { name: 'AI/ML', color: 'text-purple-400', desc: 'Predicting the future with math.' },
  { name: 'Web Dev', color: 'text-blue-400', desc: 'Building pixel-perfect interfaces.' },
  { name: 'Solana/Web3', color: 'text-emerald-400', desc: 'Building high-performance dApps.' },
  { name: 'Blockchain', color: 'text-orange-400', desc: 'Immutable ledgers are the way.' }
];

export const Interests: React.FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 uppercase border-l-4 border-blue-500 pl-4">
        What I'm into
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INTERESTS.map((interest) => (
          <div 
            key={interest.name}
            className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors bg-zinc-900/30 flex flex-col gap-2"
          >
            <span className={`text-lg font-bold ${interest.color}`}>
              {interest.name}
            </span>
            <p className="text-zinc-500 text-sm">
              {interest.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
