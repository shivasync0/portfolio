
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hey! I'm the AI version of Shivam. Want to know about his projects or what he's learning?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `You are Shivam Tiwari's personal AI assistant. 
          Shivam is a developer learning AI/ML, Web Dev (React, Tailwind), dApps, and Solana Web3.
          He is based in India and is passionate about blockchain.
          Keep your answers brief, creative, and a bit "cool" or "dev-oriented". 
          If asked something unrelated to Shivam, gently steer back to his work.`,
        }
      });

      const botText = response.text || "My brain short-circuited. Try again?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to my neural network. Check console." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-100 uppercase border-l-4 border-red-500 pl-4">
        Ask my AI
      </h2>
      <div className="flex flex-col border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20 backdrop-blur-md">
        <div 
          ref={scrollRef}
          className="h-64 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar"
        >
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-zinc-800 text-zinc-200 rounded-bl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-zinc-400 p-3 rounded-lg text-xs italic animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-zinc-800 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Tell me about Solana..."
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-300 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};
