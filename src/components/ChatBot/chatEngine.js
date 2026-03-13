// ═══════════════════════════════════════════
// Chat Engine — Intent Matching & Response
// ═══════════════════════════════════════════

import { intents } from "./knowledgeBase";

/**
 * Normalize and tokenize user input for matching.
 */
const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Score each intent against the user message.
 * Returns { intent, score } sorted descending.
 */
const scoreIntents = (message) => {
  const normalized = normalize(message);
  const words = normalized.split(" ");

  return intents
    .map((intent) => {
      let score = 0;

      for (const keyword of intent.keywords) {
        // Multi-word keyword — check as substring
        if (keyword.includes(" ")) {
          if (normalized.includes(keyword)) {
            score += 2;
          }
        } else {
          // Single-word — check token match or partial match
          for (const word of words) {
            if (word === keyword) {
              score += 2;
            } else if (word.length > 3 && keyword.startsWith(word)) {
              score += 1; // partial stem match
            } else if (keyword.length > 3 && word.startsWith(keyword)) {
              score += 1;
            }
          }
        }
      }

      return { intent, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
};

/**
 * Match user message to the best intent.
 * Returns the intent object or null if no confident match.
 */
const matchIntent = (message) => {
  const scored = scoreIntents(message);
  if (scored.length === 0) return null;

  // Require a minimum score of 1 to avoid false positives
  return scored[0].score >= 1 ? scored[0].intent : null;
};

/**
 * Generate a response for the user's message.
 */
const generateResponse = (message) => {
  const intent = matchIntent(message);

  if (intent) {
    return intent.response();
  }

  // Fallback — no intent matched
  return `Hmm, I'm not sure about that one 🤔\n\nHere are some things I can help with:\n• "What are Nadeem's skills?"\n• "Show me his projects"\n• "Work experience"\n• "How to contact him"\n\nTry asking one of these!`;
};

/**
 * Quick-action suggestions for the chat UI.
 */
const getSuggestions = () => [
  "What are your skills?",
  "Show me projects",
  "Work experience",
  "How to contact?",
  "Tell me about Nadeem",
];

export { generateResponse, getSuggestions };
