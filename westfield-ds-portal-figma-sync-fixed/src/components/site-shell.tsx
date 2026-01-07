"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { group: "Start", items: [
    { href: "/", label: "Home" },
  ]},
  { group: "Brand", items: [
    { href: "/brand/colors", label: "Colors" },
    { href: "/brand/typography", label: "Typography" },
    { href: "/brand/accessibility", label: "Accessibility" },
    { href: "/brand/tokens", label: "Tokens" },
  ]},
  { group: "Components", items: [
    { href: "/components", label: "Directory" },
  ]},
  { group: "Figma", items: [
    { href: "/figma/inventory", label: "Inventory" },
  ]},
  { group: "AI", items: [
    { href: "/ask", label: "Ask AI" },
  ]},
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="shell">
      <aside className="sidebar">
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 800, letterSpacing: ".02em" }}>DS Portal</div>
          <div className="small muted">Demo docs + export snippets</div>
        </div>

        <hr className="hr" />

        {nav.map((g) => (
          <div key={g.group}>
            <div className="navGroup">{g.group}</div>
            {g.items.map((i) => {
              const active = pathname === i.href || (i.href !== "/" && pathname.startsWith(i.href));
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  className={"navLink " + (active ? "navLinkActive" : "")}
                >
                  {i.label}
                </Link>
              );
            })}
          </div>
        ))}

        <hr className="hr" />
        <div className="small muted">
          Demo gate: set <span className="mono">DEMO_ACCESS_CODE</span>
        </div>
      </aside>

      <main className="main">{children}</main>
    </div>
  );
}
