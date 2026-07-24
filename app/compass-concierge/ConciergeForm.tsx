"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";

export default function ConciergeForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [status, setStatus] = useState("");

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus("Please add your name and email.");
      return;
    }
    setStatus(`Thanks, ${form.name.trim().split(" ")[0]} — we'll be in touch about Concierge shortly.`);
    setForm({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <form className="cf-form" onSubmit={submit} noValidate>
      <div className="cf-field">
        <label htmlFor="cc-name">Full name</label>
        <input id="cc-name" type="text" autoComplete="name" placeholder="Your full name" value={form.name} onChange={(e) => set("name", e.target.value)} />
      </div>

      <div className="cc-form-row">
        <div className="cf-field">
          <label htmlFor="cc-email">Email</label>
          <input id="cc-email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
        </div>
        <div className="cf-field">
          <label htmlFor="cc-phone">Phone</label>
          <input id="cc-phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
      </div>

      <div className="cf-field">
        <label htmlFor="cc-interest">Interest <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
        <input id="cc-interest" type="text" placeholder="e.g. Preparing to list, budget planning…" value={form.interest} onChange={(e) => set("interest", e.target.value)} />
      </div>

      <div className="cf-field">
        <label htmlFor="cc-message">Message <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
        <textarea id="cc-message" rows={3} maxLength={500} placeholder="Tell us about your home and your goals…" value={form.message} onChange={(e) => set("message", e.target.value)} />
      </div>

      <button type="submit" className="btn btn-gold btn-magnetic">
        <span>Submit</span>
        <ArrowRight />
      </button>
      <p className="cf-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
