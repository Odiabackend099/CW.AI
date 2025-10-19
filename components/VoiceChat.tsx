'use client';

import React, { useState, useRef, useEffect } from 'react';
import { PhoneOff, Mic, MicOff } from 'lucide-react';

interface VoiceChatProps {
  agentId: string;
  agentName: string;
  onCallStart: () => void;
  onCallEnd: () => void;
}

const VoiceChat: React.FC<VoiceChatProps> = ({
  agentId,
  agentName,
  onCallStart,
  onCallEnd
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    onCallStart();
    // Simulate connection
    const timer = setTimeout(() => {
      setIsConnected(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [onCallStart]);

  const handleEndCall = () => {
    setIsConnected(false);
    setIsRecording(false);
    onCallEnd();
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className={`w-8 h-8 rounded-full ${isConnected ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {agentName}
          </h2>
          <p className="text-gray-600">
            {isConnected ? 'Connected' : 'Connecting...'}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={handleToggleMute}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isMuted 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {isMuted ? (
              <MicOff className="w-6 h-6 text-white" />
            ) : (
              <Mic className="w-6 h-6 text-gray-600" />
            )}
          </button>

          <button
            onClick={handleToggleRecording}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <Mic className={`w-6 h-6 ${isRecording ? 'text-white' : 'text-gray-600'}`} />
          </button>
        </div>

        {/* End Call Button */}
        <button
          onClick={handleEndCall}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
        >
          <PhoneOff className="w-5 h-5" />
          <span>End Call</span>
        </button>

        {/* Status */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            {isRecording ? 'Recording...' : 'Ready to talk'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceChat;
