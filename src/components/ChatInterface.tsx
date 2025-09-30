import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { runQuery } from '../services/geminiService';
import { Send, Bot, User, Loader } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

interface ChatInterfaceProps {
  pageTitle: string;
  pageDescription: string;
  systemInstruction: string;
  placeholder: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ pageTitle, pageDescription, systemInstruction, placeholder }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage, { role: 'loading', content: '' }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await runQuery(input, systemInstruction);

    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[newMessages.length - 1] = { role: 'model', content: aiResponse };
      return newMessages;
    });
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full p-4 md:p-6">
      <header className="mb-4 border-b border-gray-700 pb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">{pageTitle}</h2>
        <p className="text-sm md:text-base text-gray-400">{pageDescription}</p>
      </header>

      <div className="flex-1 overflow-y-auto pr-2 -mr-2 md:pr-4 md:-mr-4 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-3 md:gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
            {msg.role !== 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            <div className={`max-w-xl rounded-xl px-4 py-3 ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-800 text-gray-300 rounded-bl-none'}`}>
              {msg.role === 'loading' ? (
                <div className="flex items-center justify-center gap-2">
                    <Loader className="w-5 h-5 animate-spin" />
                    <span className="text-sm">Thinking...</span>
                </div>
              ) : (
                <MarkdownRenderer content={msg.content} />
              )}
            </div>
             {msg.role === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-300" />
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="mt-4 md:mt-6 border-t border-gray-700 pt-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 md:gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder={placeholder}
            rows={1}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-2 md:p-3 text-sm md:text-base resize-none focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 md:p-3 rounded-full bg-cyan-500 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-cyan-600 transition-all duration-200 flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;