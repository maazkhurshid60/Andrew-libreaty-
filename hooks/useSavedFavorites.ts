"use client";

import { useEffect, useState } from "react";
import { useLead } from "./useLead";
import { listFavoriteMlsIds } from "@/lib/favorites";

/** The current lead's favorited MLS ids, fetched from IDX Broker on mount —
 *  the single source of truth, so a page refresh always reflects it. */
export function useSavedFavorites(): Set<string> {
  const { leadId } = useLead();
  const [saved, setSaved] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!leadId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset when signed out
      setSaved(new Set());
      return;
    }
    listFavoriteMlsIds(leadId).then(setSaved);
  }, [leadId]);

  return saved;
}
