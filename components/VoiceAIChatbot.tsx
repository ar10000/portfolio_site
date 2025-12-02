"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Loader2, Volume2, Send, Calendar } from "lucide-react";
import Link from "next/link";

interface VoiceAIChatbotProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  onOpenChange?: (isOpen: boolean) => void;
}

type ChatState = "idle" | "listening" | "processing" | "speaking" | "error";

export default function VoiceAIChatbot({
  position = "bottom-right",
  onOpenChange,
}: VoiceAIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<ChatState>("idle");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [audioLevel, setAudioLevel] = useState(0);
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [isSubmittingText, setIsSubmittingText] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Initialize Web Speech API
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check browser support
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setState("listening");
      setError("");
    };

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      setState("processing");
      setError("");

      try {
        // Call LLM API with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const llmResponse = await fetch("/api/voice-ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: transcript }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!llmResponse.ok) {
          throw new Error("Failed to get AI response");
        }

        const data = await llmResponse.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        const responseText = data.response || "I'm sorry, I didn't get a response.";
        setResponse(responseText);

        // Speak the response
        speakText(responseText);
      } catch (err: any) {
        console.error("LLM API error:", err);
        
        // Check if it's a timeout
        if (err.name === "AbortError" || err.message?.includes("timeout")) {
          setError("timeout");
          setShowTextInput(true);
        } else {
          setError("api_error");
          setShowTextInput(true);
        }
        setState("error");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      
      // Handle different error types
      if (event.error === "no-speech" || event.error === "audio-capture") {
        setError("voice_error");
      } else if (event.error === "network") {
        setError("network_error");
      } else {
        setError("voice_error");
      }
      
      setShowTextInput(true);
      setState("error");
    };

    recognition.onend = () => {
      if (state === "listening") {
        setState("idle");
      }
    };

    recognitionRef.current = recognition;
    synthRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      stopAudioAnalysis();
    };
  }, []);

  // Audio level visualization
  const startAudioAnalysis = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateAudioLevel = () => {
        if (!analyserRef.current) return;

        analyserRef.current.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        setAudioLevel(average / 255);

        animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
      };

      updateAudioLevel();
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError("Microphone access denied");
    }
  };

  const stopAudioAnalysis = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    analyserRef.current = null;
    setAudioLevel(0);
  };

  const startListening = async () => {
    if (!recognitionRef.current) {
      setError("Speech recognition not initialized");
      return;
    }

    setError("");
    setTranscript("");
    setResponse("");

    try {
      await startAudioAnalysis();
      recognitionRef.current.start();
    } catch (err) {
      setError("Failed to start listening");
      setState("error");
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    stopAudioAnalysis();
    setState("idle");
  };

  const speakText = (text: string) => {
    if (!synthRef.current) return;

    // Stop any ongoing speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;

    utterance.onstart = () => {
      setState("speaking");
    };

    utterance.onend = () => {
      setState("idle");
    };

    utterance.onerror = () => {
      setState("error");
      setTimeout(() => setState("idle"), 2000);
    };

    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setState("idle");
    }
  };

  const handleToggle = () => {
    if (state === "speaking") {
      stopSpeaking();
    } else if (state === "listening" || state === "processing") {
      stopListening();
    } else {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onOpenChange?.(newIsOpen);
      // Reset error state when opening
      if (newIsOpen) {
        setError("");
        setShowTextInput(false);
        setTextInput("");
      }
    }
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim() || isSubmittingText) return;

    setIsSubmittingText(true);
    setState("processing");
    setError("");
    setTranscript(textInput);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const llmResponse = await fetch("/api/voice-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textInput }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!llmResponse.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await llmResponse.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const responseText = data.response || "I'm sorry, I didn't get a response.";
      setResponse(responseText);
      setTextInput("");
      setShowTextInput(false);
      setState("idle");
    } catch (err: any) {
      console.error("Text submission error:", err);
      if (err.name === "AbortError" || err.message?.includes("timeout")) {
        setError("timeout");
      } else {
        setError("api_error");
      }
      setState("error");
    } finally {
      setIsSubmittingText(false);
    }
  };

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <>
      {/* Sound Wave Visualization in Hero */}
      <AnimatePresence>
        {(state === "listening" || state === "speaking") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="flex items-center justify-center gap-1 px-6 py-4 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-purple-400 to-blue-500 rounded-full"
                  animate={{
                    height:
                      state === "listening"
                        ? [
                            audioLevel * 40 + 10,
                            audioLevel * 60 + 15,
                            audioLevel * 40 + 10,
                          ]
                        : [20, 40, 20],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                  style={{ height: state === "listening" ? audioLevel * 40 + 10 : 20 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Button */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-80 sm:w-96 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <Mic className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Voice Assistant</h3>
                    <p className="text-xs text-gray-400">
                      {state === "idle" && "Press to speak"}
                      {state === "listening" && "Listening..."}
                      {state === "processing" && "Processing..."}
                      {state === "speaking" && "Speaking..."}
                      {state === "error" && "Error occurred"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenChange?.(false);
                    stopListening();
                    stopSpeaking();
                  }}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                {transcript && (
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">You said:</p>
                    <p className="text-white text-sm">{transcript}</p>
                  </div>
                )}

                {response && (
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-xs text-purple-400 mb-1">Assistant:</p>
                    <p className="text-white text-sm">{response}</p>
                  </div>
                )}

                {/* Error Message with Text Input Fallback */}
                {(error === "timeout" || error === "api_error" || error === "voice_error" || error === "network_error") && (
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 space-y-3">
                    <p className="text-orange-400 text-sm font-medium">
                      Oops! The Claude API is currently under heavy load. Please ask your question via text input, or book a call for guaranteed human attention.
                    </p>
                    {showTextInput && (
                      <form onSubmit={handleTextSubmit} className="space-y-2">
                        <textarea
                          value={textInput}
                          onChange={(e) => setTextInput(e.target.value)}
                          placeholder="Type your question here..."
                          rows={3}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 resize-none"
                          disabled={isSubmittingText}
                        />
                        <div className="flex items-center gap-2">
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={!textInput.trim() || isSubmittingText}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                          >
                            {isSubmittingText ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Send
                              </>
                            )}
                          </motion.button>
                          <Link
                            href="/contact"
                            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-white text-sm hover:bg-gray-700 transition-colors flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <Calendar className="h-4 w-4" />
                            Book Call
                          </Link>
                        </div>
                      </form>
                    )}
                  </div>
                )}

                {/* Generic error (fallback) */}
                {error && error !== "timeout" && error !== "api_error" && error !== "voice_error" && error !== "network_error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {state === "idle" && !transcript && (
                  <div className="text-center py-8">
                    <p className="text-gray-400 text-sm mb-4">
                      Click the microphone to start a conversation
                    </p>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="border-t border-gray-800 p-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleToggle}
                  disabled={state === "processing"}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    state === "listening"
                      ? "bg-red-500 hover:bg-red-600"
                      : state === "speaking"
                      ? "bg-orange-500 hover:bg-orange-600"
                      : state === "processing"
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50"
                  }`}
                >
                  {state === "processing" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : state === "speaking" ? (
                    <>
                      <Volume2 className="h-5 w-5" />
                      Stop Speaking
                    </>
                  ) : state === "listening" ? (
                    <>
                      <MicOff className="h-5 w-5" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="h-5 w-5" />
                      Press to Speak
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsOpen(true);
                onOpenChange?.(true);
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white hover:shadow-xl transition-all"
              aria-label="Open voice assistant"
            >
              <Mic className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

