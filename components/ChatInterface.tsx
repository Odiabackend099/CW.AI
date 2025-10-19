'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Mic } from 'lucide-react';
import { ChatMessage } from '@/lib/groq-chat-widget';

interface ChatInterfaceProps {
  onClose: () => void;
  onMinimize: () => void;
  onSendMessage: (message: string) => Promise<void>;
  messages: ChatMessage[];
  isTyping: boolean;
  streamingMessage: string;
  input: string;
  setInput: (input: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onMicClick: () => void;
  isRecording: boolean;
  speechSupported: boolean;
  isLoading: boolean;
}

const MessageBubble: React.FC<{ message: ChatMessage; isTyping?: boolean }> = ({ 
  message, 
  isTyping = false 
}) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white ml-4'
            : 'bg-slate-100 text-slate-800 mr-4 border border-slate-200'
        }`}
      >
        <p className="text-sm leading-relaxed">
          {message.content}
          {isTyping && (
            <span className="inline-block ml-1">
              <span className="animate-pulse">●</span>
              <span className="animate-pulse animation-delay-200">●</span>
              <span className="animate-pulse animation-delay-400">●</span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

const TypingIndicator: React.FC = () => (
  <div className="flex justify-start mb-3">
    <div className="bg-slate-100 border border-slate-200 px-4 py-3 rounded-2xl mr-4">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce animation-delay-100"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce animation-delay-200"></div>
      </div>
    </div>
  </div>
);

export default function ChatInterface({
  onClose,
  onMinimize,
  onSendMessage,
  messages,
  isTyping,
  streamingMessage,
  input,
  setInput,
  onKeyPress,
  onMicClick,
  isRecording,
  speechSupported,
  isLoading,
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, streamingMessage]);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-80 h-[32rem] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle size={20} className="text-cyan-400" />
          <div>
            <h3 className="font-semibold text-sm">ODIADEV Assistant</h3>
            <p className="text-xs text-slate-300">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onMinimize}
            className="text-slate-300 hover:text-white transition-colors p-1 rounded"
            aria-label="Minimize chat"
          >
            <Minimize2 size={16} />
          </button>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        
        {isTyping && (
          <>
            {streamingMessage ? (
              <MessageBubble 
                message={{
                  role: 'assistant',
                  content: streamingMessage,
                  timestamp: new Date()
                }}
                isTyping={true}
              />
            ) : (
              <TypingIndicator />
            )}
          </>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="flex items-center space-x-2">
          {speechSupported && (
            <button
              type="button"
              onClick={onMicClick}
              disabled={isLoading}
              className={`p-2 rounded-lg border ${isRecording ? 'bg-cyan-100 border-cyan-500' : 'bg-slate-100 border-slate-300'} transition-colors`}
              title={isRecording ? 'Stop recording' : 'Speak'}
              aria-label={isRecording ? 'Stop recording' : 'Start voice input'}
            >
              <Mic size={16} className={isRecording ? 'animate-pulse text-cyan-500' : 'text-slate-500'} />
            </button>
          )}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
            disabled={isLoading}
            aria-label="Type your message"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-slate-300 disabled:to-slate-400 text-white p-2 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[40px]"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
