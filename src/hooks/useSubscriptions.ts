"use client";

import { useEffect, useMemo, useState } from "react";

export type BillingCycle = "monthly" | "yearly" | { days: number };

export type Subscription = {
  id: string;
  service: string; // e.g., Netflix, Spotify, Custom
  amount: number;
  currency: string; // e.g., USD
  cycle: BillingCycle;
  nextBillingDate: string; // ISO date
  color?: string;
  note?: string;
  phone?: string; // for WhatsApp (Pro)
};

const STORAGE_KEY = "orchids.subscriptions.v1";

function calcNextDate(from: Date, cycle: BillingCycle): Date {
  const d = new Date(from);
  if (cycle === "monthly") {
    d.setMonth(d.getMonth() + 1);
  } else if (cycle === "yearly") {
    d.setFullYear(d.getFullYear() + 1);
  } else if (typeof cycle === "object" && cycle.days) {
    d.setDate(d.getDate() + cycle.days);
  }
  return d;
}

export function useSubscriptions() {
  const [subs, setSubs] = useState<Subscription[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSubs(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
    } catch {}
  }, [subs]);

  const upcoming = useMemo(() => {
    return [...subs].sort(
      (a, b) => new Date(a.nextBillingDate).getTime() - new Date(b.nextBillingDate).getTime()
    );
  }, [subs]);

  function add(sub: Omit<Subscription, "id">) {
    const id = crypto.randomUUID();
    setSubs((s) => [...s, { ...sub, id }]);
  }

  function update(id: string, patch: Partial<Subscription>) {
    setSubs((s) => s.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  }

  function remove(id: string) {
    setSubs((s) => s.filter((x) => x.id !== id));
  }

  function markPaid(id: string) {
    setSubs((s) =>
      s.map((x) =>
        x.id === id
          ? { ...x, nextBillingDate: calcNextDate(new Date(x.nextBillingDate), x.cycle).toISOString() }
          : x
      )
    );
  }

  return { subs, upcoming, add, update, remove, markPaid };
}

export function demoSeed(set: (subs: Subscription[]) => void) {
  const today = new Date();
  const addDays = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + n);
    return d.toISOString();
  };
  const demo: Subscription[] = [
    {
      id: crypto.randomUUID(),
      service: "Netflix",
      amount: 15.99,
      currency: "USD",
      cycle: "monthly",
      nextBillingDate: addDays(5),
      color: "#E50914",
    },
    {
      id: crypto.randomUUID(),
      service: "Spotify",
      amount: 9.99,
      currency: "USD",
      cycle: "monthly",
      nextBillingDate: addDays(12),
      color: "#1DB954",
    },
    {
      id: crypto.randomUUID(),
      service: "Adobe Creative Cloud",
      amount: 54.99,
      currency: "USD",
      cycle: "monthly",
      nextBillingDate: addDays(2),
      color: "#F44336",
    },
  ];
  set(demo);
}