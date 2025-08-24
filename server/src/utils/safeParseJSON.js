export function safeParseJSON(value, fallback = []) {
  if (value == null || value === "") return fallback;
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
