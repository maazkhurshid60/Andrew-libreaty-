"use client";

import { useState } from "react";
import { FacebookIcon, WhatsappIcon, ShareIcon } from "../../components/vuesax";

export default function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const share = (kind: "facebook" | "whatsapp" | "copy") => {
    const url = window.location.href;
    if (kind === "copy") {
      navigator.clipboard
        ?.writeText(url)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {});
      return;
    }
    const map = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    };
    window.open(map[kind], "_blank", "noopener");
  };

  return (
    <div className="ar-share" aria-label="Share this article">
      <button type="button" onClick={() => share("facebook")} aria-label="Share on Facebook">
        <FacebookIcon />
      </button>
      <button type="button" onClick={() => share("whatsapp")} aria-label="Share on WhatsApp">
        <WhatsappIcon />
      </button>
      <button type="button" onClick={() => share("copy")} aria-label="Copy link">
        <ShareIcon />
      </button>
      {copied && <span className="ar-share-copied">Link copied</span>}
    </div>
  );
}
