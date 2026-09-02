"use client";

import { useState } from "react";
import { useLead } from "@/hooks/useLead";

export default function AuthModal() {
  const { modalOpen, modalReason, closeModal, signIn } = useLead();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "verify" | "welcome">("idle");
  const [error, setError] = useState("");

  const reset = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setStatus("idle");
    setError("");
  };

  const close = () => {
    closeModal();
    reset();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("busy");
    const { error: err, created } = await signIn({
      email,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim() || undefined,
    });
    if (err) {
      setError(err);
      setStatus("idle");
    } else if (created) {
      // A new lead triggers IDX's "verify your email" message — say so, rather
      // than leaving an unexplained email to turn up in their inbox.
      setStatus("verify");
    } else {
      // Matched to an existing lead. Worth saying out loud: this modal only
      // appears when there's no local session, so a returning visitor is
      // typically on a new device and wants to know their saved homes came
      // back with them rather than that they just made a second account.
      setStatus("welcome");
    }
  };

  return (
    <>
      {modalOpen && <div className="sheet-scrim" onClick={close} />}
      <div
        className={`share-sheet auth-sheet${modalOpen ? " is-open" : ""}`}
        role="dialog"
        aria-label="Save your info"
        aria-hidden={!modalOpen}
      >
        <div className="share-head">
          <p className="share-title">
            {status === "verify"
              ? "Check your email"
              : status === "welcome"
                ? `Welcome back${firstName.trim() ? `, ${firstName.trim()}` : ""}`
                : "Continue"}
          </p>
          <button className="drawer-close" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "verify" || status === "welcome" ? (
          <>
            <p className="share-sub">
              {status === "verify" ? (
                <>
                  We&rsquo;ve sent a link to <b>{email}</b> to verify your address and activate your account.
                  You&rsquo;re signed in here already — verifying also lets you use this same account on the
                  full MLS search, so everything you save stays in one place.
                </>
              ) : (
                <>
                  You already have an account with <b>{email}</b>, so we&rsquo;ve signed you back into it — no
                  second account made. Any homes and searches you&rsquo;ve saved before, here or on the full MLS
                  search, are waiting in your account.
                </>
              )}
            </p>
            <button type="button" className="btn btn-primary btn-magnetic" onClick={close}>
              <span>{status === "welcome" ? "Continue" : "Got it"}</span>
            </button>
          </>
        ) : (
          <>
        {modalReason && <p className="share-sub">{modalReason}</p>}

        <form className="auth-form" onSubmit={submit}>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
          />
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            autoComplete="family-name"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            autoComplete="email"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional)"
            autoComplete="tel"
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="btn btn-primary btn-magnetic" disabled={status === "busy"}>
            <span>{status === "busy" ? "Please wait…" : "Continue"}</span>
          </button>
        </form>
          </>
        )}
      </div>
    </>
  );
}
