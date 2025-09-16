import { NextResponse } from "next/server";

const ADMIN_COOKIE = "admin_session";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let username = "";
    let password = "";
    
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = await request.text();
      const params = new URLSearchParams(body);
      username = (params.get("username") || "").trim();
      password = (params.get("password") || "").trim();
    } else {
      const form = await request.formData();
      username = String(form.get("username") || "").trim();
      password = String(form.get("password") || "").trim();
    }
    
    const u = process.env.ADMIN_USERNAME || "admin";
    const p = process.env.ADMIN_PASSWORD || "admin123";
    
    console.log("Login attempt:", { username, password: "***", expectedUser: u });
    
    // username case-insensitive match; password exact match
    if (username.toLowerCase() === u.toLowerCase() && password === p) {
      const res = NextResponse.json({ ok: true });
      res.cookies.set(ADMIN_COOKIE, "1", { 
        httpOnly: true, 
        secure: false, // Changed to false for localhost
        path: "/", 
        maxAge: 60 * 60 * 8 
      });
      return res;
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


