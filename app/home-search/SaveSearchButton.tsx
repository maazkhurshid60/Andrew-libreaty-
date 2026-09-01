"use client";

import { useEffect, useRef, useState } from "react";
import { useLead } from "@/hooks/useLead";
import { saveLeadSearch } from "@/lib/idx";

/** "Save search" — saves the search directly into IDX Broker's lead/CRM
 *  under the current lead, so it shows up in Andrew's IDX dashboard. */
export default function SaveSearchButton({
  searchName,
  criteria,
}: {
  searchName: string;
  criteria: Record<string, string>;
}) {
  const { leadId, requireLead } = useLead();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(searchName);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const openPopover = () => {
    if (!leadId) {
      requireLead("Save your info to save this search and get notified of new matches.");
      return;
    }
    setName(searchName);
    setStatus("idle");
    setOpen(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadId) return;
    setStatus("saving");
    const ok = await saveLeadSearch(leadId, { searchName: name.trim() || searchName, search: criteria }).catch(() => false);
    setStatus(ok ? "saved" : "error");
  };

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button type="button" className="btn btn-primary btn-magnetic" onClick={openPopover}>
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
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name this search"
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
