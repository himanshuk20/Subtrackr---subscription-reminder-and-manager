"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });
    if (error?.code) {
      setError(error.code === "USER_ALREADY_EXISTS" ? "User already registered" : "Registration failed");
      setLoading(false);
      return;
    }
    router.push("/sign-in?registered=1");
  };

  return (
    <div className="min-h-dvh grid place-items-center p-6">
      <div className="w-full max-w-md rounded-xl border p-6 bg-background">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="opacity-70 text-sm">Start tracking your subscriptions</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-1">
            <label className="text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border bg-transparent px-3 py-2"
              required
            />
          </div>
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
          {error ? <div className="text-sm text-red-600">{error}</div> : null}
          <button disabled={loading} type="submit" className="mt-1 px-4 py-2 rounded-md bg-foreground text-background disabled:opacity-70">
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
        <div className="mt-4 text-sm">
          Have an account? <Link className="underline" href="/sign-in">Sign in</Link>
        </div>
      </div>
    </div>
  );
}