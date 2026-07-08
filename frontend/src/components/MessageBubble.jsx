import React from "react";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`message-row ${isUser ? "message-row--user" : "message-row--bot"}`}>
      {!isUser && (
        <div className="avatar avatar--bot" aria-label="Support Bot">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="7" width="18" height="13" rx="3" strokeWidth="1.5" stroke="currentColor" fill="none"/>
            <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="13" r="1.5" fill="currentColor"/>
            <path d="M9 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}

      <div className={`bubble ${isUser ? "bubble--user" : "bubble--bot"}`}>
        <p className="bubble__text">{message.text}</p>
        <span className="bubble__time">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      {isUser && (
        <div className="avatar avatar--user" aria-label="You">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
