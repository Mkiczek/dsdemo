import { redirect } from "next/navigation";
import { hasDemoAccess } from "@/lib/demo-auth";

export default function GatePage() {
  // If already authed, go home.
  if (hasDemoAccess()) redirect("/");

  return (
    <div className="container">
      <h1 className="h1">Enter access code</h1>
      <p className="p muted">
        This demo is protected by a simple access code (not SSO). Enter the code to continue.
      </p>

      <form className="card" style={{ padding: 14, display: "grid", gap: 10, maxWidth: 520 }} action="/api/gate" method="post">
        <label className="small" htmlFor="code" style={{ fontWeight: 600 }}>Access code</label>
        <input id="code" name="code" className="card" style={{ padding: 12, borderRadius: 10, border: "1px solid var(--border)" }} />
        <button className="btn btnPrimary" type="submit">Continue</button>
        <div className="small muted">Tip: set <span className="mono">DEMO_ACCESS_CODE</span> in Vercel env vars.</div>
      </form>
    </div>
  );
}
