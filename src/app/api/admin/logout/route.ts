import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_session";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, secure: true, path: "/", maxAge: 0 });
  return res;
}


