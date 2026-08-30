export default function PageLoader({ label = "Loading…", size = "md" }: { label?: string; size?: "md" | "lg" }) {
  return (
    <div className={`page-loader${size === "lg" ? " page-loader-lg" : ""}`}>
      <svg className="page-loader-house" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M6 22 L24 7 L42 22" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20 V41 H38 V20" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect className="pl-door" x="20" y="27" width="8" height="14" rx="1" />
      </svg>
      <span className="page-loader-label">{label}</span>
    </div>
  );
}
