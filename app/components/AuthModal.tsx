"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function AuthModal() {
  const { modalOpen, modalReason, closeModal, signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "confirm">("idle");
  const [error, setError] = useState("");

  const reset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setStatus("idle");
    setError("");
  };

  const close = () => {
    closeModal();
    reset();
    setMode("signin");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("busy");
    if (mode === "signin") {
      const { error: err } = await signIn(email, password);
      if (err) {
        setError(err);
        setStatus("idle");
      } else {
        close();
      }
    } else {
      if (!fullName.trim()) {
        setError("Please enter your name.");
        setStatus("idle");
        return;
      }
      const { error: err, needsConfirmation } = await signUp(email, password, {
        fullName: fullName.trim(),
        phone: phone.trim() || undefined,
      });
      if (err) {
        setError(err);
        setStatus("idle");
      } else if (needsConfirmation) {
        setStatus("confirm");
      } else {
        close();
      }
    }
  };

  return (
    <>
      {modalOpen && <div className="sheet-scrim" onClick={close} />}
      <div
        className={`share-sheet auth-sheet${modalOpen ? " is-open" : ""}`}
        role="dialog"
        aria-label="Sign in"
        aria-hidden={!modalOpen}
      >
        <div className="share-head">
          <p className="share-title">{mode === "signin" ? "Log In" : "Create Account"}</p>
          <button className="drawer-close" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {modalReason && <p className="share-sub">{modalReason}</p>}

        {status === "confirm" ? (
          <p className="auth-note">
            Almost there — we sent a confirmation link to <b>{email}</b>. Click it, then come back and log in.
          </p>
        ) : (
          <>
            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab${mode === "signin" ? " is-active" : ""}`}
                onClick={() => { setMode("signin"); setError(""); }}
              >
                Log In
              </button>
              <button
                type="button"
                className={`auth-tab${mode === "signup" ? " is-active" : ""}`}
                onClick={() => { setMode("signup"); setError(""); }}
              >
                Register
              </button>
            </div>

            <form className="auth-form" onSubmit={submit}>
              {mode === "signup" && (
                <>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone (optional)"
                    autoComplete="tel"
                  />
                </>
              )}
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
              />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
              />
              {error && <p className="auth-error">{error}</p>}
              <button type="submit" className="btn btn-primary btn-magnetic" disabled={status === "busy"}>
                <span>{status === "busy" ? "Please wait…" : mode === "signin" ? "Log In" : "Create Account"}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
