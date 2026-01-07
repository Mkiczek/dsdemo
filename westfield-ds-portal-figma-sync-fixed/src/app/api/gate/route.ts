import { NextResponse } from "next/server";
import { setDemoAccessCookie } from "@/lib/demo-auth";

export async function POST(req: Request) {
  const form = await req.formData();
  const code = String(form.get("code") || "");
  const expected = process.env.DEMO_ACCESS_CODE || "";

  if (!expected) {
    return NextResponse.json(
      { error: "DEMO_ACCESS_CODE is not set on the server." },
      { status: 500 }
    );
  }

  if (code.trim() !== expected.trim()) {
    return NextResponse.redirect(new URL("/gate?error=1", req.url), 302);
  }

  const res = NextResponse.redirect(new URL("/", req.url), 302);
  // Set cookie
  res.cookies.set("ds_portal_demo_ok", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return res;
}
