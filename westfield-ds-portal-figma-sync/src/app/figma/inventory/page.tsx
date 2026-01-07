import { figmaComponents } from "@/lib/figma/components.generated";
import Link from "next/link";

export default function FigmaInventoryPage() {
  return (
    <div className="container">
      <h1 className="h1">Figma Component Inventory</h1>
      <p className="p muted">
        Auto-generated at build time from the Figma file. This is the raw inventory (components + component sets).
      </p>

      <div className="card" style={{ padding: 12 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Kind</th>
              <th>Node ID</th>
            </tr>
          </thead>
          <tbody>
            {figmaComponents.length === 0 ? (
              <tr>
                <td colSpan={3} className="muted">No data yet. Set FIGMA_API_TOKEN + FIGMA_FILE_KEY and redeploy.</td>
              </tr>
            ) : (
              figmaComponents.map((c) => (
                <tr key={c.nodeId}>
                  <td>{c.name}</td>
                  <td className="muted">{c.kind}</td>
                  <td className="mono">{c.nodeId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="p muted" style={{ marginTop: 12 }}>
        Tip: In Vercel, add env vars <span className="mono">FIGMA_API_TOKEN</span> and <span className="mono">FIGMA_FILE_KEY</span>, then redeploy.
      </p>
      <p className="p muted">
        Back to <Link href="/">Home</Link>.
      </p>
    </div>
  );
}
