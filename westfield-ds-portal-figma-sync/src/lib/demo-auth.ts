import { cookies } from "next/headers";

const COOKIE_NAME = "ds_portal_demo_ok";

export function hasDemoAccess() {
  const c = cookies().get(COOKIE_NAME)?.value;
  return c === "1";
}

export function setDemoAccessCookie() {
  cookies().set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
