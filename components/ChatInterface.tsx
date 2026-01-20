
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hey! Ask me anything about Shivam's tech journey or his specific projects." }
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
          Shivam is a developer from India specializing in Web Architectures, Solana (Web3), and AI/ML.
          His GitHub: shivasync0, X: shivasync_.
          Keep your answers brief, informative, and a bit minimalist.`,
        }
      });

      const botText = response.text || "Connection lost. Please retry.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "System overload. Please check your API configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">AI Assistant</h2>
        <p className="text-xs text-zinc-500">A custom LLM node trained on Shivam's stack.</p>
      </div>
      <div className="flex flex-col border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white/30 dark:bg-zinc-900/10 backdrop-blur-sm">
        <div 
          ref={scrollRef}
          className="h-48 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar"
        >
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-xl text-[11px] font-medium leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900' 
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest animate-pulse p-2">
                Processing...
              </div>
            </div>
          )}
        </div>
        <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask a technical question..."
            className="flex-1 bg-transparent text-[11px] font-bold px-4 py-2 outline-none text-zinc-800 dark:text-zinc-200"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400 disabled:opacity-30 p-2"
          >
            Execute
          </button>
        </div>
      </div>
    </section>
  );
};
