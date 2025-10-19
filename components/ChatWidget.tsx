'use client';

import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatMessage, getPageContext } from '@/lib/groq-chat-widget';
import dynamic from 'next/dynamic';

// Lazy load the component that uses browser APIs
const ChatInterface = lazy(() => import('./ChatInterface'));

interface ChatWidgetProps {
  className?: string;
}

interface MessageBubbleProps {
  message: ChatMessage;
  isTyping?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isTyping = false }) => {
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

const ChatWidget: React.FC<ChatWidgetProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  // Check browser support for speech APIs - only on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSpeechRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
      setSpeechSupported(isSpeechRecognitionSupported);
    }
  }, []);
  // Speech-to-text logic
  const recognitionRef = useRef<any>(null);
  const handleMicClick = () => {
    if (!speechSupported) return;
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
      return;
    }
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsRecording(false);
      inputRef.current?.focus();
    };
    recognition.onerror = () => {
      setIsRecording(false);
    };
    recognition.onend = () => {
      setIsRecording(false);
    };
    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  };
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your CallWaitingAI assistant. How can I help you today? 😊',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, streamingMessage]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getCurrentPage = (): string => {
    if (typeof window !== 'undefined') {
      return getPageContext(window.location.pathname);
    }
    return 'unknown';
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    setIsTyping(true);
    setStreamingMessage('');

    // Set timeout fallback
    timeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setIsTyping(false);
        setIsLoading(false);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Apologies, there\'s a delay. Let me retry that for you...',
          timestamp: new Date()
        }]);
        // Retry logic could be added here
      }
    }, 10000);

    try {
      const response = await fetch('/api/chat/widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.slice(-5), // Keep last 5 messages for context
          page: getCurrentPage()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      let assistantResponse = '';
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) break;
        
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.content) {
                assistantResponse += data.content;
                setStreamingMessage(assistantResponse);
              }
              if (data.done) {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                  role: 'assistant',
                  content: assistantResponse,
                  timestamp: new Date()
                }]);
                setStreamingMessage('');
              }
            } catch (e) {
              // Ignore parsing errors for incomplete chunks
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Oops, something went wrong. Please try again later.',
        timestamp: new Date()
      }]);
      setStreamingMessage('');
    } finally {
      setIsLoading(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Only render on client-side to avoid hydration issues
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="w-40 h-12"></div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
          aria-label="Open chat widget"
        >
          <MessageCircle size={20} className="text-cyan-400" />
          <span className="text-sm font-medium">Chat with us</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <Suspense fallback={
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-80 h-[32rem] flex items-center justify-center">
          <div className="animate-pulse text-slate-400">Loading chat...</div>
        </div>
      }>
        <ChatInterface
          onClose={() => setIsOpen(false)}
          onMinimize={() => setIsOpen(false)}
          onSendMessage={async (message: string) => {
            const userMessage: ChatMessage = {
              role: 'user',
              content: message,
              timestamp: new Date()
            };
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            await handleSend();
          }}
          messages={messages}
          isTyping={isTyping}
          streamingMessage={streamingMessage}
          input={input}
          setInput={setInput}
          onKeyPress={handleKeyPress}
          onMicClick={handleMicClick}
          isRecording={isRecording}
          speechSupported={speechSupported}
          isLoading={isLoading}
        />
      </Suspense>
    </div>
  );
};

export default ChatWidget;