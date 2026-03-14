import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSend, IoClose } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import { generateResponse, getSuggestions } from "./chatEngine";
import "./ChatBot.css";

const WELCOME_MESSAGE = {
  id: "welcome",
  text: "Hey! 👋 I'm Nadeem's portfolio bot. Ask me about his skills, projects, or experience!",
  sender: "bot",
  timestamp: new Date(),
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Show tooltip after 2s, auto-dismiss after 5s
  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), 2000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 7000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Send welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages([WELCOME_MESSAGE]);
        setIsTyping(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const processMessage = (text) => {
    const userMsg = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setShowSuggestions(false);

    // Randomized delay for natural feel (600–1200ms)
    const delay = 600 + Math.random() * 600;

    setTimeout(() => {
      const responseText = generateResponse(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;
    processMessage(text);
  };

  const handleSuggestionClick = (suggestion) => {
    if (isTyping) return;
    processMessage(suggestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const windowVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const msgVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 30 },
    },
  };

  const suggestions = getSuggestions();

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header__info">
                <div className="chatbot-header__avatar">
                  <HiSparkles />
                </div>
                <div className="chatbot-header__text">
                  <h4>Portfolio Bot</h4>
                  <span>
                    <span className="chatbot-header__status-dot" />
                    Online
                  </span>
                </div>
              </div>
              <button
                className="chatbot-header__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <IoClose />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`chatbot-msg chatbot-msg--${msg.sender}`}
                  variants={msgVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="chatbot-msg__bubble">{msg.text}</div>
                  <span className="chatbot-msg__time">
                    {formatTime(msg.timestamp)}
                  </span>
                </motion.div>
              ))}

              {/* Suggestion Chips */}
              {showSuggestions && messages.length > 0 && !isTyping && (
                <motion.div
                  className="chatbot-suggestions"
                  variants={msgVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      className="chatbot-suggestions__chip"
                      onClick={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              {isTyping && (
                <div className="chatbot-typing">
                  <span className="chatbot-typing__dot" />
                  <span className="chatbot-typing__dot" />
                  <span className="chatbot-typing__dot" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                ref={inputRef}
                type="text"
                className="chatbot-input__field"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="chatbot-input__send"
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                <IoSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            className="chatbot-tooltip"
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => {
              setShowTooltip(false);
              setIsOpen(true);
            }}
          >
            Hey! Ask me anything about Nadeem 👋
            <span className="chatbot-tooltip__arrow" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        className={`chatbot-fab ${isOpen ? "chatbot-fab--active" : ""}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setShowTooltip(false);
        }}
        aria-label="Toggle chat"
      >
        {isOpen ? <IoClose /> : <BsChatDotsFill />}
      </button>
    </>
  );
};

export default ChatBot;
