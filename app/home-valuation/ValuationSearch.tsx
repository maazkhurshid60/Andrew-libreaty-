"use client";

import { useState } from "react";
import { ArrowRight } from "../components/icons";

export default function ValuationSearch() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      setStatus("Please enter your property address.");
      return;
    }
    setStatus(`Thanks — we're preparing a valuation for ${address.trim()}. Andrew will be in touch shortly.`);
    setAddress("");
  };

  return (
    <>
      <form className="val-searchbar" onSubmit={submit}>
        <div className="val-search-field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <input
            type="text"
            placeholder="Enter your home address…"
            aria-label="Enter your home address"
            autoComplete="street-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-gold btn-magnetic">
          <span>Get a free valuation</span>
          <ArrowRight />
        </button>
      </form>
      <p className="val-search-status" role="status" aria-live="polite">
        {status}
      </p>
    </>
  );
}
