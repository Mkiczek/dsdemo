import Link from "next/link";
import { Badge } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="h1">Design System Portal</h1>
      <p className="p">
        A demo portal for learning brand guidelines, browsing components, and copying export-ready snippets.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
        <Badge>Primary: #E03100</Badge>
        <Badge>Secondary: #4D514D</Badge>
        <Badge>Typeface: Roboto</Badge>
      </div>

      <hr className="hr" />

      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: "grid", gap: 10 }}>
          <Link className="navLink" href="/brand/colors">Brand → Colors</Link>
          <Link className="navLink" href="/brand/tokens">Brand → Tokens</Link>
          <Link className="navLink" href="/components">Components Directory</Link>
          <Link className="navLink" href="/ask">Ask AI (Demo)</Link>
        </div>
      </div>

      <p className="p muted" style={{ marginTop: 14 }}>
        Note: This demo uses an access-code gate (not SSO). Swap the middleware for Ping OIDC later.
      </p>
    </div>
  );
}
