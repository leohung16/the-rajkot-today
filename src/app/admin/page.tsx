"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/articles", { headers: { "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "admin123" } })
      .then((r) => (r.ok ? r.json() : Promise.reject("Unauthorized")))
      .then((json) => setItems(json.items))
      .catch((e) => setError(String(e)));
  }, []);

  async function onDelete(id: string) {
    if (!confirm("Delete this article?")) return;
    const res = await fetch(`/api/admin/articles/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "admin123" },
    });
    if (res.ok) {
      setItems((prev) => prev.filter((a) => a.id !== id));
    }
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <div className="mb-4 text-sm">
        <a href="/admin/new" className="underline">Add new article</a>
      </div>
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="grid gap-3">
        {items.map((a) => (
          <div key={a.id} className="border rounded p-3">
            <div className="font-semibold">{a.title}</div>
            <div className="text-xs opacity-70">/{a.slug}</div>
            <div className="text-xs">Category: {a.category}</div>
            <div className="mt-2">
              <button onClick={() => onDelete(a.id)} className="text-xs rounded border px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


