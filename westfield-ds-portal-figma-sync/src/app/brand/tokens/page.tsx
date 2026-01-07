import { Badge } from "@/components/ui";

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="card" style={{ padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
      <div style={{ display: "grid", gap: 4 }}>
        <div style={{ fontWeight: 700 }}>{name}</div>
        <div className="mono small muted">{value}</div>
      </div>
      <div style={{ width: 44, height: 44, borderRadius: 10, border: "1px solid var(--border)", background: value }} />
    </div>
  );
}

export default function TokensPage() {
  return (
    <div className="container">
      <h1 className="h1">Tokens</h1>
      <p className="p muted">
        Seed tokens pulled from the linked Figma file’s styles/usage. Treat this as a starting point—extend and rename to match your token taxonomy.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        <Badge>CSS variables</Badge>
        <Badge>Colors + neutrals</Badge>
        <Badge>Typography scale (seed)</Badge>
      </div>

      <hr className="hr" />

      <h2 className="h2">Brand</h2>
      <div style={{ display: "grid", gap: 10 }}>
        <Swatch name="--primary" value="#E03100" />
        <Swatch name="--secondary" value="#4D514D" />
      </div>

      <h2 className="h2">Neutrals</h2>
      <div style={{ display: "grid", gap: 10 }}>
        <Swatch name="--white" value="#ffffff" />
        <Swatch name="--black" value="#000000" />
        <Swatch name="--gray-10" value="#f2f2f2" />
        <Swatch name="--gray-30" value="#d9d9d9" />
        <Swatch name="--gray-50" value="#8c8c8c" />
        <Swatch name="--gray-60" value="#666666" />
        <Swatch name="--gray-80" value="#333333" />
      </div>

      <h2 className="h2">Typography scale (seed)</h2>
      <div className="card" style={{ padding: 14 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Font</th>
              <th>Size / Line</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">--text-h1</td>
              <td className="mono">Roboto</td>
              <td className="mono">48 / 48</td>
              <td className="muted">Hero heading (from Typography page sample)</td>
            </tr>
            <tr>
              <td className="mono">--text-h2</td>
              <td className="mono">Roboto</td>
              <td className="mono">30 / 36</td>
              <td className="muted">Section heading label</td>
            </tr>
            <tr>
              <td className="mono">--text-h3</td>
              <td className="mono">Roboto</td>
              <td className="mono">24 / 32</td>
              <td className="muted">Subheading</td>
            </tr>
            <tr>
              <td className="mono">--text-body</td>
              <td className="mono">Roboto</td>
              <td className="mono">16 / 28</td>
              <td className="muted">Body paragraph</td>
            </tr>
            <tr>
              <td className="mono">--text-lead</td>
              <td className="mono">Roboto</td>
              <td className="mono">20 / 28</td>
              <td className="muted">Lead paragraph</td>
            </tr>
            <tr>
              <td className="mono">--text-small</td>
              <td className="mono">Roboto</td>
              <td className="mono">14 / 20</td>
              <td className="muted">Helper/metadata</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
