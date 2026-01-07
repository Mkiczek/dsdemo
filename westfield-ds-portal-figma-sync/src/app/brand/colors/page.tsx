import Link from "next/link";
import { Badge } from "@/components/ui";

export default function Page() {
  return (
    <div className="container">
      <h1 className="h1">Color</h1>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        <Badge>Primary: #E03100</Badge>
        <Badge>Secondary: #4D514D</Badge>
        <Badge>Neutrals: gray-10…gray-80</Badge>
      </div>

      <p className="p" style={{ marginTop: 14 }}>
        Primary is reserved for key actions and emphasis. Secondary supports neutral UI and supporting actions.
      </p>
      <p className="p">
        For the full token list, see <Link href="/brand/tokens">Tokens</Link>.
      </p>

      <h2 className="h2">Don’t</h2>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li className="small">Don’t introduce ad-hoc hex colors in product UI.</li>
        <li className="small">Don’t use Primary as a background for large surfaces unless content remains accessible.</li>
      </ul>
    </div>
  );
}
