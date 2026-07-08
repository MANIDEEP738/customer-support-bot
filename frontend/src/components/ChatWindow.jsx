import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const TypingIndicator = () => (
  <div className="message-row message-row--bot">
    <div className="avatar avatar--bot" aria-label="Support Bot">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="13" rx="3" strokeWidth="1.5" stroke="currentColor" fill="none"/>
        <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="13" r="1.5" fill="currentColor"/>
        <path d="M9 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
    <div className="bubble bubble--bot bubble--typing">
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span className="typing-dot" />
    </div>
  </div>
);

const EmptyState = () => (
  <div className="empty-state">
    <div className="empty-state__icon">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="52" height="36" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="22" cy="32" r="3" fill="currentColor"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
        <circle cx="42" cy="32" r="3" fill="currentColor"/>
        <path d="M22 14V10a10 10 0 0120 0v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </div>
    <h2 className="empty-state__title">How can I help you today?</h2>
    <p className="empty-state__subtitle">
      Ask me about your orders, returns, account, or anything else.
    </p>
    <div className="empty-state__suggestions">
      <span className="suggestion-chip">Where is my order?</span>
      <span className="suggestion-chip">How do I return an item?</span>
      <span className="suggestion-chip">Reset my password</span>
    </div>
  </div>
);

const ChatWindow = ({ messages, isLoading, error }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="chat-window" role="log" aria-live="polite" aria-label="Chat messages">
      {messages.length === 0 && !isLoading ? (
        <EmptyState />
      ) : (
        <div className="chat-window__messages">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && (
            <div className="error-banner" role="alert">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="error-banner__icon">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="0.75" fill="currentColor"/>
              </svg>
              {error}
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
