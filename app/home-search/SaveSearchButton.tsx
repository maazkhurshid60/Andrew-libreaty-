"use client";

import { useEffect, useRef, useState } from "react";
import { createLead, saveLeadSearch } from "@/lib/idx";

const LEAD_ID_KEY = "idx-lead-id";
const LEAD_EMAIL_KEY = "idx-lead-email";

/** "Save search" — creates (or reuses, via localStorage) an IDX Broker lead,
 *  then stores the current filter criteria as that lead's saved search via
 *  leads/search/{leadId}. No login system — just enough to capture intent,
 *  matching what the API actually supports. */
export default function SaveSearchButton({
  searchName,
  criteria,
}: {
  searchName: string;
  criteria: Record<string, string>;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem(LEAD_EMAIL_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage, unavailable during SSR
    if (savedEmail) setEmail(savedEmail);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("saving");
    try {
      let leadId = localStorage.getItem(LEAD_ID_KEY);
      if (!leadId) {
        const [firstName, ...rest] = name.trim().split(" ");
        leadId = await createLead({
          firstName: firstName || "Search",
          lastName: rest.join(" ") || "Alert",
          email,
        });
        if (leadId) localStorage.setItem(LEAD_ID_KEY, leadId);
      }
      if (!leadId) throw new Error("Could not create lead");
      localStorage.setItem(LEAD_EMAIL_KEY, email);

      const ok = await saveLeadSearch(leadId, { searchName, search: criteria });
      setStatus(ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button type="button" className="btn btn-primary btn-magnetic" onClick={() => setOpen((o) => !o)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        <span>Save search</span>
      </button>

      {open && (
        <div className="popover" style={{ left: "auto", right: 0, top: "calc(100% + 8px)" }}>
          <p className="popover-title">Get notified of new matches</p>

          {status === "saved" ? (
            <div>
              <p style={{ fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 }}>
                Saved — you&rsquo;ll hear from Andrew&rsquo;s team when a matching home hits the market.
              </p>
              <a href="/my-search-portal" style={{ fontSize: 12.5, textDecoration: "underline" }}>
                View all your saved searches
              </a>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="opt-list"
                style={{ padding: "9px 12px", border: "1px solid var(--line-soft)", borderRadius: 8, fontSize: 13.5 }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                style={{ padding: "9px 12px", border: "1px solid var(--line-soft)", borderRadius: 8, fontSize: 13.5 }}
              />
              <button type="submit" className="btn btn-primary btn-sm" disabled={status === "saving"}>
                {status === "saving" ? "Saving…" : "Save this search"}
              </button>
              {status === "error" && (
                <p style={{ fontSize: 12, color: "#c0392b" }}>Something went wrong — please try again.</p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  );
}
