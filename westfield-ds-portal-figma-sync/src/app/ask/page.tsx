"use client";

import React from "react";
import { Button } from "@/components/ui";

type Msg = { role: "user" | "assistant"; content: string; citations?: { label: string; href: string }[] };

export default function AskPage() {
  const [q, setQ] = React.useState("");
  const [msgs, setMsgs] = React.useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Ask about brand guidelines or components. This demo responds from a small built-in knowledge set and includes citations.",
      citations: [
        { label: "Brand → Colors", href: "/brand/colors" },
        { label: "Components → Button", href: "/components/button" }
      ]
    }
  ]);
  const [loading, setLoading] = React.useState(false);

  async function send() {
    const question = q.trim();
    if (!question) return;

    setMsgs((m) => [...m, { role: "user", content: question }]);
    setQ("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: data.answer ?? "No answer.", citations: data.citations ?? [] }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="h1">Ask AI</h1>
      <p className="p muted">
        Demo assistant: answers are grounded in local catalog + brand pages. Wire to a real model later via server route.
      </p>

      <div className="card" style={{ padding: 14, display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 10 }}>
          {msgs.map((m, idx) => (
            <div key={idx} className="card" style={{ padding: 12, background: m.role === "user" ? "#fff" : "var(--muted)" }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{m.role === "user" ? "You" : "Assistant"}</div>
              <div className="small" style={{ whiteSpace: "pre-wrap" }}>{m.content}</div>
              {m.citations?.length ? (
                <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {m.citations.map((c) => (
                    <a key={c.href} className="badge" href={c.href}>{c.label}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='e.g., "When should I use the primary color?"'
            className="card"
            style={{ padding: 12, flex: 1, borderRadius: 10, border: "1px solid var(--border)" }}
            onKeyDown={(e) => { if (e.key === "Enter") send(); }}
          />
          <Button variant="primary" disabled={loading} onClick={send}>
            {loading ? "Thinking..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
