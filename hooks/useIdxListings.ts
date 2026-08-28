"use client";

import { useEffect, useState } from "react";
import { fetchRawListings, type RawIdxListing } from "@/lib/idx";

type ListingsState = { data: RawIdxListing[] | null; loading: boolean; error: string | null };

// Module-level cache so every page/component using this hook shares one
// fetch instead of each firing its own request against IDX Broker's
// (fairly low) hourly rate limit.
let cache: Promise<RawIdxListing[]> | null = null;

function loadListings(): Promise<RawIdxListing[]> {
  if (!cache) {
    cache = fetchRawListings().catch((err: unknown) => {
      cache = null; // let the next mount retry instead of caching a failure forever
      throw err;
    });
  }
  return cache;
}

/** Real IDX Broker listings (featured/active + sold/pending) for this
 *  account. Returns the raw combined array — call toListing()/
 *  toDetailListing() from lib/idx.ts to get the shape a given page needs. */
export function useIdxListings(): ListingsState {
  const [state, setState] = useState<ListingsState>({ data: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;
    loadListings()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({ data: null, loading: false, error: err instanceof Error ? err.message : "Failed to load listings" });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
