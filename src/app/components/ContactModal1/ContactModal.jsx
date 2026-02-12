"use client";
import { useEffect, useState } from "react";
import { useContact } from "../../../Context/ContactContext";
import "./_contactModal.scss";

export default function ContactModal() {
  const { showForm, closeForm } = useContact();
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (showForm) requestAnimationFrame(() => setMounted(true));
  }, [showForm]);

  // ESC key, only runs in browser
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setMounted(false);
    setTimeout(() => {
      setIsClosing(false);
      closeForm();
    }, 350);
  };

  if (!showForm && !isClosing) return null;

  return (
    <div
      className={`contact-overlay ${mounted ? "" : "fade-out"}`}
      onClick={handleClose}
    >
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>
        <h2>GET IN TOUCH</h2>
        <p>
          Feel free to reach out. I’m always open to discussing new projects.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="* What is your name?" />
          <input type="email" placeholder="* What is your email?" />
          <input type="tel" placeholder="* What is your phone number?" />
          <textarea rows="4" placeholder="Would you like to leave a message?" />
          <button type="submit" className="send-btn">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
