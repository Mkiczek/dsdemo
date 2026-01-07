import Link from "next/link";
import { componentsCatalog } from "@/lib/catalog";

export default function ComponentsPage() {
  return (
    <div className="container">
      <h1 className="h1">Components</h1>
      <p className="p muted">Browse components, properties, guidance, and copy export snippets.</p>

      <div className="card" style={{ padding: 12 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
              <th>Export</th>
            </tr>
          </thead>
          <tbody>
            {componentsCatalog.map((c) => (
              <tr key={c.slug}>
                <td style={{ width: 220 }}>
                  <Link className="navLink" href={`/components/${c.slug}`}>{c.name}</Link>
                </td>
                <td className="muted">{c.description}</td>
                <td style={{ width: 160 }}>
                  <Link className="navLink" href={`/components/${c.slug}#export`}>Copy snippet</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
