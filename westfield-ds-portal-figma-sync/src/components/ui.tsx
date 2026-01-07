"use client";

import React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "primary" }) {
  const { variant = "default", className, ...rest } = props;
  const cls = ["btn", variant === "primary" ? "btnPrimary" : "", className || ""].join(" ").trim();
  return <button {...rest} className={cls} />;
}

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = React.useState(false);

  return (
    <Button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 900);
      }}
    >
      {copied ? "Copied" : label}
    </Button>
  );
}
