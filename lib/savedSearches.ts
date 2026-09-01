import { getLeadSearches, saveLeadSearch, deleteLeadSearch } from "./idx";

export type SavedSearchRow = {
  id: string;
  name: string;
  criteria: Record<string, unknown>;
  created_at: string;
};

export async function listSavedSearches(leadId: string): Promise<SavedSearchRow[]> {
  const rows = await getLeadSearches(leadId).catch(() => []);
  return rows
    .map((s) => ({ id: s.id, name: s.searchName, criteria: s.criteria, created_at: s.created }))
    .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
}

export async function createSavedSearch(
  leadId: string,
  name: string,
  criteria: Record<string, string>
): Promise<boolean> {
  return saveLeadSearch(leadId, { searchName: name, search: criteria }).catch(() => false);
}

export async function deleteSavedSearch(leadId: string, id: string): Promise<boolean> {
  return deleteLeadSearch(leadId, id).catch(() => false);
}
