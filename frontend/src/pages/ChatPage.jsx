import React, { useState, useCallback } from "react";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { sendMessage } from "../services/api";

let messageIdCounter = 0;
const createId = () => ++messageIdCounter;

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = useCallback(async (text) => {
    setError(null);

    const userMsg = {
      id: createId(),
      sender: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const reply = await sendMessage(text);
      const botMsg = {
        id: createId(),
        sender: "bot",
        text: reply,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const isNetwork =
        err.code === "ERR_NETWORK" || err.message === "Network Error";
      setError(
        isNetwork
          ? "Unable to reach the server. Please check your connection and try again."
          : err.response?.data?.detail || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="chat-page">
      <header className="chat-header">
        <div className="chat-header__brand">
          <div className="chat-header__logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="28" height="20" rx="6" fill="url(#grad)" />
              <circle cx="11" cy="16" r="2" fill="white" />
              <circle cx="16" cy="16" r="2" fill="white" />
              <circle cx="21" cy="16" r="2" fill="white" />
              <defs>
                <linearGradient id="grad" x1="2" y1="6" x2="30" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <h1 className="chat-header__title">Customer Support</h1>
            <p className="chat-header__subtitle">Powered by Gemini AI</p>
          </div>
        </div>
        <div className="chat-header__status">
          <span className="status-dot" />
          Online
        </div>
      </header>

      <main className="chat-main">
        <ChatWindow messages={messages} isLoading={isLoading} error={error} />
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default ChatPage;
