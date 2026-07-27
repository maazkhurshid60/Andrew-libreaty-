"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("You're on the list — watch for the next Liberty Brief.");
    setEmail("");
  };

  return (
    <div>
      <form className="bl-news-form" onSubmit={submit} noValidate>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          aria-label="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-gold btn-magnetic">
          <span>Subscribe</span>
          <ArrowRight />
        </button>
      </form>
      <p className="bl-news-note">
        No spam, ever. Unsubscribe anytime. <a href="#top">Read the Blog</a>
      </p>
      <p className="bl-news-status" role="status" aria-live="polite">{status}</p>
    </div>
  );
}
