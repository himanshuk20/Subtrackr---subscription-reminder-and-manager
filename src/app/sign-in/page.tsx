"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await authClient.signIn.email({
      email,
      password,
      rememberMe,
      callbackURL: "/dashboard",
    });
    if (error?.code) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-dvh grid place-items-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-background">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="opacity-70 text-sm">Welcome back to SubSage</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-1">
            <label className="text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border bg-transparent px-3 py-2"
              required
            />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md border bg-transparent px-3 py-2"
              required
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            Remember me
          </label>
          {error ? <div className="text-sm text-red-600">{error}</div> : null}
          <button disabled={loading} type="submit" className="mt-1 px-4 py-2 rounded-md bg-foreground text-background disabled:opacity-70">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className="mt-4 text-sm">
          New here? <Link className="underline" href="/sign-up">Create an account</Link>
        </div>
      </div>
    </div>
  );
}