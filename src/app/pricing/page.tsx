"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function PricingPage() {
  const [region, setRegion] = useState<"IN" | "US" | "EU">("US");
  const prices = useMemo(
    () => ({
      IN: { year: "₹59", three: "₹169", lifetime: "₹499" },
      US: { year: "$6.99", three: "$19.99", lifetime: "$70" },
      EU: { year: "€6.99 / £6.99", three: "€19.99 / £19.99", lifetime: "€70 / £70" },
    }),
    []
  );

  const features = [
    { label: "Unlimited subscriptions", free: true, pro: true },
    { label: "In-app reminders", free: true, pro: true },
    { label: "WhatsApp reminders", free: false, pro: true },
    { label: "Export CSV", free: false, pro: true },
    { label: "Priority support", free: false, pro: true },
  ];

  const handleCheckout = (plan: string) => {
    alert(`Payments not configured. Provide Stripe keys to enable checkout for: ${plan}.`);
  };

  const cards = useMemo(() => [
    {
      name: "Free",
      price: "$0",
      sub: "forever",
      cta: (
        <Link href="/dashboard" className="px-4 py-2 rounded-md bg-foreground text-background block text-center">Start free</Link>
      ),
      highlight: false,
    },
    {
      name: "Pro Yearly",
      price: prices[region].year,
      sub: "/year",
      cta: (
        <button onClick={() => handleCheckout("pro_yearly")} className="px-4 py-2 rounded-md bg-foreground text-background w-full">Upgrade</button>
      ),
      highlight: true,
    },
    {
      name: "Pro 3-Year",
      price: prices[region].three,
      sub: "/3 years",
      cta: (
        <button onClick={() => handleCheckout("pro_three_year")} className="px-4 py-2 rounded-md bg-foreground text-background w-full">Upgrade</button>
      ),
      highlight: false,
    },
    {
      name: "Lifetime",
      price: prices[region].lifetime,
      sub: "one-time",
      cta: (
        <button onClick={() => handleCheckout("lifetime")} className="px-4 py-2 rounded-md bg-foreground text-background w-full">Upgrade</button>
      ),
      highlight: false,
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [region]);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-muted to-background">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ChatGPT%20Image%20Sep%2017,%202025,%2001_12_54%20PM-1758095855036.png"
            alt="subtrackr logo"
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="text-xl font-semibold">subtrackr</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link href="/dashboard" className="px-3 py-2 rounded-md border">Dashboard</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid gap-10">
        <section className="text-center grid gap-3">
          <h1 className="text-4xl font-bold">Simple pricing</h1>
          <p className="opacity-80">Free plan with in-app reminders. Pro adds WhatsApp reminders and more.</p>
          <div className="text-sm rounded-md border px-3 py-2 inline-block bg-card">
            Payments are not configured. Please provide Stripe keys to enable checkout.
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm opacity-70">Region:</span>
            <select
              className="px-3 py-2 rounded-md border bg-card"
              value={region}
              onChange={(e) => setRegion(e.target.value as "IN" | "US" | "EU")}
            >
              <option value="IN">India (₹)</option>
              <option value="US">United States ($)</option>
              <option value="EU">Europe (€/£)</option>
            </select>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.name} className={`rounded-xl border p-5 bg-card ${c.highlight ? "ring-2 ring-primary" : ""}`}>
              <div className="text-sm opacity-70">{c.name}</div>
              <div className="mt-2 text-3xl font-bold">{c.price} <span className="text-base font-medium opacity-70">{c.sub}</span></div>
              <ul className="mt-4 grid gap-2 text-sm">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${c.name === "Free" ? (f.free ? "bg-green-500" : "bg-gray-300") : (f.pro ? "bg-green-500" : "bg-gray-300")}`}></span>
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5">{c.cta}</div>
            </div>
          ))}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 opacity-80 text-sm">© {new Date().getFullYear()} subtrackr</footer>
    </div>
  );
}