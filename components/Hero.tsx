
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-lg group">
        <img 
          src="https://picsum.photos/seed/shivam-tiwari/1200/900" 
          alt="Shivam's Placeholder"
          className="w-full h-full object-cover filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center p-4">
          <p className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
            Do I love sleep?
          </p>
          <p className="text-lg md:text-xl font-medium text-blue-300 mb-4 italic">
            Hell yeah.
          </p>
          <p className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
            Do I sleep?
          </p>
          <p className="text-lg md:text-xl font-medium text-red-400 italic">
            Fuck no.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Hi, I'm Shivam Tiwari.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
          A full-stack developer and AI/ML enthusiast from India. I spend my time building decentralised futures on Solana, messing with neural networks, and crafting aesthetic websites.
        </p>
      </div>
    </section>
  );
};
