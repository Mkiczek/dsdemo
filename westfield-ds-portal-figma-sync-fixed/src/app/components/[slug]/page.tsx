import { notFound } from "next/navigation";
import { componentsCatalog } from "@/lib/catalog";
import { CopyButton, Badge } from "@/components/ui";

export default function ComponentDetailPage({ params }: { params: { slug: string } }) {
  const meta = componentsCatalog.find((c) => c.slug === params.slug);
  if (!meta) return notFound();

  const importLine = `import { ${meta.importNamed.join(", ")} } from "${meta.importFrom}";`;

  return (
    <div className="container">
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h1 className="h1">{meta.name}</h1>
          <p className="p muted">{meta.description}</p>
        </div>
        <Badge>Export-ready</Badge>
      </div>

      <hr className="hr" />

      <h2 className="h2" id="export">Export</h2>
      <div className="card" style={{ padding: 14, display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div className="small muted">Import</div>
          <CopyButton value={importLine} />
        </div>
        <pre className="card" style={{ padding: 12, margin: 0, overflow: "auto" }}>{importLine}</pre>

        {meta.examples.map((ex) => (
          <div key={ex.title} className="card" style={{ padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 600 }}>{ex.title}</div>
              <CopyButton value={ex.code} label="Copy example" />
            </div>
            <pre style={{ margin: "10px 0 0", overflow: "auto" }}>{ex.code}</pre>
          </div>
        ))}
      </div>

      <h2 className="h2">Props</h2>
      <div className="card" style={{ padding: 12 }}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: 200 }}>Name</th>
              <th style={{ width: 360 }}>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {meta.props.map((p) => (
              <tr key={p.name}>
                <td className="mono">{p.name}</td>
                <td className="mono">{p.type}</td>
                <td className="muted">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="h2">Usage guidance</h2>
      <div className="card" style={{ padding: 14, display: "grid", gap: 12 }}>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Do</div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {meta.dos.map((x) => <li key={x} className="small">{x}</li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Don’t</div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {meta.donts.map((x) => <li key={x} className="small">{x}</li>)}
          </ul>
        </div>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Accessibility</div>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {meta.a11y.map((x) => <li key={x} className="small">{x}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
