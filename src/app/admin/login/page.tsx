"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Signing in...");
    try {
      const form = new FormData(e.currentTarget);
      const username = form.get("username") as string;
      const password = form.get("password") as string;
      
      console.log("Submitting login form...", { username });
      
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });
      
      console.log("Login response:", res.status, res.statusText);
      
      if (res.ok) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          console.log("Login successful:", data);
          setStatus("Login successful! Redirecting...");
          setTimeout(() => {
            window.location.href = "/admin";
          }, 1000);
        } else {
          const text = await res.text();
          console.log("Non-JSON response:", text);
          setStatus("Login successful! Redirecting...");
          setTimeout(() => {
            window.location.href = "/admin";
          }, 1000);
        }
      } else {
        const error = await res.text();
        console.error("Login failed:", error);
        setStatus(`Login failed: ${error || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatus(`Connection error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="grid gap-3 max-w-sm">
        <input name="username" placeholder="Username" className="border rounded px-3 py-2 bg-transparent" required />
        <input type="password" name="password" placeholder="Password" className="border rounded px-3 py-2 bg-transparent" required />
        <button className="rounded border px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">Login</button>
        {!!status && <div className="text-sm text-red-600">{status}</div>}
      </form>
    </div>
  );
}


