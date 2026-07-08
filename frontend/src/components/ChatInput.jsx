import React, { useState, useRef } from "react";

const ChatInput = ({ onSend, isLoading }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    // Auto-resize textarea
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 140) + "px";
    }
  };

  return (
    <div className="chat-input-wrapper">
      <div className="chat-input-container">
        <textarea
          ref={textareaRef}
          className="chat-input__textarea"
          placeholder="Type your message… (Enter to send)"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={isLoading}
          aria-label="Message input"
        />
        <button
          className={`chat-input__send-btn ${isLoading ? "chat-input__send-btn--loading" : ""}`}
          onClick={handleSend}
          disabled={!value.trim() || isLoading}
          aria-label="Send message"
        >
          {isLoading ? (
            <span className="btn-spinner" />
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <p className="chat-input__hint">Shift + Enter for new line</p>
    </div>
  );
};

export default ChatInput;
