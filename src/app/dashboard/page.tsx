"use client";

import { useEffect, useMemo, useState } from "react";
import { Subscription, useSubscriptions, demoSeed } from "@/hooks/useSubscriptions";
import SubscriptionCard from "@/components/SubscriptionCard";
import SubscriptionForm from "@/components/SubscriptionForm";
import NotificationCenter from "@/components/NotificationCenter";
import Link from "next/link";

export default function DashboardPage() {
  const { subs, upcoming, add, update, remove, markPaid } = useSubscriptions();
  const [editing, setEditing] = useState<Subscription | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    if (!seeded && subs.length === 0) {
      demoSeed((demo) => {
        // Seed via hook to avoid full page reload flicker
        demo.forEach((d) => add(d as any));
        setSeeded(true);
      });
    }
  }, [seeded, subs.length]);

  const totalMonthly = useMemo(() => {
    return subs.reduce((acc, s) => {
      if (s.cycle === "monthly") return acc + s.amount;
      if (s.cycle === "yearly") return acc + s.amount / 12;
      if (typeof s.cycle === "object") return acc + (s.amount * 30) / (s.cycle.days || 30);
      return acc;
    }, 0);
  }, [subs]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Your Subscriptions</h1>
          <p className="opacity-80">All your services in one fun, colorful place.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/pricing" className="px-3 py-2 rounded-md border">Pricing</Link>
          <button
            onClick={async () => {
              const token = localStorage.getItem("bearer_token");
              try {
                const res = await fetch("/api/auth/sign-out", {
                  method: "POST",
                  headers: token ? { Authorization: `Bearer ${token}` } : {},
                });
                if (res.ok) {
                  localStorage.removeItem("bearer_token");
                  window.location.href = "/";
                }
              } catch {}
            }}
            className="px-3 py-2 rounded-md border"
          >
            Sign out
          </button>
          <button onClick={() => { setEditing(null); setShowForm(true); }} className="px-3 py-2 rounded-md bg-foreground text-background">Add subscription</button>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcoming.map((s) => (
          <SubscriptionCard
            key={s.id}
            sub={s}
            onEdit={(sub) => { setEditing(sub); setShowForm(true); }}
            onPaid={(id) => markPaid(id)}
            onDelete={(id) => remove(id)}
          />
        ))}
      </section>

      <section className="rounded-xl border p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <div className="text-sm opacity-70">Total Monthly</div>
          <div className="text-2xl font-semibold">{new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(totalMonthly)}</div>
        </div>
        <div>
          <div className="text-sm opacity-70">Services</div>
          <div className="text-2xl font-semibold">{subs.length}</div>
        </div>
        <div>
          <div className="text-sm opacity-70">Due this week</div>
          <div className="text-2xl font-semibold">{upcoming.filter(s => (new Date(s.nextBillingDate).getTime() - Date.now()) < 7*24*60*60*1000).length}</div>
        </div>
        <div>
          <div className="text-sm opacity-70">Paid today</div>
          <div className="text-2xl font-semibold">0</div>
        </div>
      </section>

      {showForm ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-40" onClick={() => setShowForm(false)}>
          <div className="w-full max-w-xl rounded-xl border bg-background p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{editing ? "Edit" : "Add"} subscription</h2>
              <button onClick={() => setShowForm(false)} className="px-2 py-1 rounded-md border">Close</button>
            </div>
            <div className="mt-4">
              <SubscriptionForm
                initial={editing}
                onCancel={() => setShowForm(false)}
                onSave={(data) => {
                  if (editing) {
                    update(editing.id, data as any);
                  } else {
                    add(data as any);
                  }
                  setShowForm(false);
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <NotificationCenter subs={subs} />
    </div>
  );
}