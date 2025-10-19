export type VoiceId = 'male' | 'female' | 'neutral';

export interface TTSResponse {
  audioUrl?: string;
  duration?: number;
  error?: string;
}

export function estimateDuration(text: string): number {
  // Estimate ~150 words per minute for TTS
  const words = text.split(/\s+/).length;
  return Math.ceil((words / 150) * 60);
}

export async function generateTTS(text: string, voiceId: VoiceId): Promise<TTSResponse> {
  try {
    // Mock implementation - in real app this would call ODIADEV TTS API
    const duration = estimateDuration(text);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock response
    return {
      audioUrl: `/api/mock-audio?text=${encodeURIComponent(text)}&voice=${voiceId}`,
      duration
    };
  } catch (error) {
    return {
      error: 'Failed to generate TTS audio'
    };
  }
}
