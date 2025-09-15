"use client";

import { useState } from "react";

export default function AdminNewArticle() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Saving...");
    const form = new FormData(e.currentTarget);
    const entries = Object.fromEntries(form.entries());
    const body: Record<string, unknown> = { ...entries };
    body.isFeatured = form.get("isFeatured") === "on";
    body.isTrending = form.get("isTrending") === "on";
    body.isFactChecked = form.get("isFactChecked") === "on";
    try {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "admin123",
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("Saved! Go to Home to see the article.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Error saving");
      }
    } catch {
      setStatus("Error saving");
    }
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">New Article</h1>
      <form onSubmit={onSubmit} className="grid gap-3 max-w-2xl">
        <input name="title" placeholder="Title" className="border rounded px-3 py-2 bg-transparent" required />
        <textarea name="summary" placeholder="Summary" className="border rounded px-3 py-2 bg-transparent" required />
        <textarea name="content" placeholder="Content" rows={6} className="border rounded px-3 py-2 bg-transparent" required />
        <select name="category" className="border rounded px-3 py-2 bg-transparent" required>
          <option value="rajkot">Local Rajkot News</option>
          <option value="politics">Politics</option>
          <option value="business">Business & Economy</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="technology">Technology</option>
          <option value="opinion">Opinion</option>
        </select>
        <input name="imageUrl" placeholder="Featured image URL (optional)" className="border rounded px-3 py-2 bg-transparent" />
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" name="isFeatured" /> Featured</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="isTrending" /> Trending</label>
          <label className="flex items-center gap-2"><input type="checkbox" name="isFactChecked" /> Fact Checked</label>
        </div>
        <button className="rounded border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Save</button>
        {!!status && <div className="text-sm">{status}</div>}
      </form>
    </div>
  );
}


