import { NextResponse } from "next/server";
import { componentsCatalog } from "@/lib/catalog";

export async function POST(req: Request) {
  const { question } = await req.json();

  // Demo-only: small grounded responder (no external model).
  // Replace this logic with a server-side model call later.
  const q = String(question || "").toLowerCase();

  const citations: { label: string; href: string }[] = [];

  let answer =
    "I can help with brand guidelines, component props, and export snippets. Try asking about a specific component (e.g., Button) or a brand topic (e.g., colors).";

  if (q.includes("primary") || q.includes("color")) {
    answer =
      "Primary color is #E03100. Use it for key actions and emphasis (like primary buttons). Avoid introducing ad-hoc hex colors in product UI.";
    citations.push({ label: "Brand → Colors", href: "/brand/colors" });
  }

  const button = componentsCatalog.find((c) => c.slug === "button");
  if (q.includes("button") && button) {
    answer =
      "Button triggers an action. Key guidance: use verb-first labels, and provide aria-label for icon-only buttons. Export: copy the import and example from the Button page.";
    citations.push({ label: "Components → Button", href: "/components/button" });
  }

  return NextResponse.json({ answer, citations });
}
