import { useEffect, useMemo, useState } from "react";
import "./Typewriter.css";

export default function Typewriter({
  words = ["Masters Student", "Data Scientist", "AI Enthusiast"],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 1100,
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return;

    const current = safeWords[wordIndex % safeWords.length];

    // Pause when a word is fully typed
    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    // Pause when fully deleted
    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % safeWords.length);
      }, 250);
      return () => clearTimeout(t);
    }

    const nextText = isDeleting
      ? current.slice(0, Math.max(0, text.length - 1))
      : current.slice(0, text.length + 1);

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => setText(nextText), speed);

    return () => clearTimeout(t);
  }, [safeWords, wordIndex, text, isDeleting, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="typewriter">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
