import { NextResponse } from "next/server";
import { deleteArticle } from "@/data/store";

function isAuthorized(request: Request): boolean {
  const header = request.headers.get("x-admin-key") || request.headers.get("authorization");
  const key = process.env.ADMIN_KEY || "admin123";
  return header === key || header === `Bearer ${key}`;
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await context.params;
  const ok = await deleteArticle(id);
  return NextResponse.json({ ok });
}


