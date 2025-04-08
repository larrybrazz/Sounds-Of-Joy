"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, MinusCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export function LiveChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi there! How can we help you with the 2025 event?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto responses to simulate a chat
  const autoResponses = [
    "Thank you for your message! Our event team will get back to you shortly.",
    "Great question! The event starts at 7PM on June 19, 2025.",
    "Yes, we do offer group discounts for 5 or more attendees!",
    "The QR code will be sent to your email after registration is complete.",
    "You can find more information about hotel accommodations in the Hotels section of our website.",
  ];

  const toggleChat = () => {
    if (!isChatOpen) {
      setIsChatOpen(true);
      setIsMinimized(false);
    } else {
      if (isMinimized) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    }
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate response after a delay
    setTimeout(() => {
      const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isChatOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed z-50 bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div
      className={`fixed z-50 bottom-6 right-6 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
        isMinimized ? "w-72 h-14" : "w-80 sm:w-96 h-96"
      }`}
    >
      {/* Chat header */}
      <div className="bg-primary p-3 text-white flex justify-between items-center cursor-pointer" onClick={toggleChat}>
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">Event Support</span>
        </div>
        <div className="flex items-center space-x-1">
          {!isMinimized && (
            <Button variant="ghost" size="icon" onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(true);
            }} className="h-6 w-6 hover:bg-primary-foreground/10">
              <MinusCircle className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={(e) => {
            e.stopPropagation();
            closeChat();
          }} className="h-6 w-6 hover:bg-primary-foreground/10">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat content - only shown when not minimized */}
      {!isMinimized && (
        <>
          {/* Messages area */}
          <div className="p-3 overflow-y-auto h-[calc(100%-110px)] bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 ${
                  msg.isUser ? "flex justify-end" : "flex justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    msg.isUser
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-gray-200 text-gray-800 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg rounded-tl-none max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t flex items-center space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!message.trim()}
              className="rounded-full h-9 w-9"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
