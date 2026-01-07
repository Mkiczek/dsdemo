export default function Page() {
  return (
    <div className="container">
      <h1 className="h1">Accessibility</h1>
      <p className="p">All interactive elements must be keyboard reachable and have visible focus states.</p>
<p className="p">Forms require labels (no placeholder-only). Icon-only buttons need aria-label.</p>
<p className="p">Aim for WCAG AA contrast for normal text.</p>
    </div>
  );
}
