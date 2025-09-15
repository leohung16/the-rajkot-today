import { NextResponse } from "next/server";
import { addArticle, listStoredArticles } from "@/data/store";

function isAuthorized(request: Request): boolean {
  const header = request.headers.get("x-admin-key") || request.headers.get("authorization");
  const key = process.env.ADMIN_KEY || "admin123";
  return header === key || header === `Bearer ${key}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const items = await listStoredArticles();
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await request.json();
    const article = await addArticle(body);
    return NextResponse.json({ ok: true, article });
  } catch (e) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}


