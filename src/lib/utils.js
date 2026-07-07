// ─── Class name merger ────────────────────────────────────
export const cn = (...classes) => classes.filter(Boolean).join(" ");

// ─── URL-friendly slug ────────────────────────────────────
export const createSlug = (title) => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};

// ─── Bold markdown parser (e.g. "Hello **world**" → [{ text: "Hello", isBold: false }, { text: "world", isBold: true }]) ───
export const splitBoldMarkdown = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part) => ({
    isBold: part.startsWith("**") && part.endsWith("**"),
    text: part.replace(/^\*\*|\*\*$/g, ""),
  }));
