"use client";

import { useEffect, useMemo, useState } from "react";
import { BillingCycle, Subscription } from "@/hooks/useSubscriptions";

const popular = [
  { label: "Netflix", color: "#E50914" },
  { label: "Spotify", color: "#1DB954" },
  { label: "YouTube Premium", color: "#FF0000" },
  { label: "iCloud", color: "#0A84FF" },
];

function parseCycle(v: string): BillingCycle {
  if (v === "monthly" || v === "yearly") return v;
  const days = parseInt(v, 10);
  return { days: isNaN(days) ? 30 : days };
}

export default function SubscriptionForm({
  initial,
  onCancel,
  onSave,
}: {
  initial?: Subscription | null;
  onCancel: () => void;
  onSave: (data: Omit<Subscription, "id">) => void;
}) {
  const popularLabels = popular.map((p) => p.label);
  const initialIsPopular = initial?.service ? popularLabels.includes(initial.service) : true;
  const [serviceChoice, setServiceChoice] = useState<string>(
    initialIsPopular ? initial?.service ?? "Netflix" : "Custom"
  );
  const [customService, setCustomService] = useState<string>(
    !initialIsPopular ? initial?.service ?? "" : ""
  );
  const [amount, setAmount] = useState(initial?.amount?.toString() ?? "9.99");
  const [currency, setCurrency] = useState(initial?.currency ?? "USD");
  const [cycle, setCycle] = useState<string>(
    typeof initial?.cycle === "string"
      ? (initial?.cycle as string)
      : initial?.cycle && typeof initial.cycle === "object"
      ? String(initial.cycle.days)
      : "monthly"
  );
  const [nextBillingDate, setNextBillingDate] = useState(
    initial?.nextBillingDate
      ? initial.nextBillingDate.substring(0, 10)
      : new Date().toISOString().substring(0, 10)
  );
  const [color, setColor] = useState(
    initial?.color ?? popular.find((p) => p.label === serviceChoice)?.color ?? "#6366f1"
  );
  const [note, setNote] = useState(initial?.note ?? "");
  const [phone, setPhone] = useState(initial?.phone ?? "");

  useEffect(() => {
    const match = popular.find((p) => p.label === serviceChoice);
    if (match) setColor(match.color);
  }, [serviceChoice]);

  const isCustomCycle = useMemo(() => !(cycle === "monthly" || cycle === "yearly"), [cycle]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          service: serviceChoice === "Custom" ? (customService.trim() || "Custom") : serviceChoice,
          amount: parseFloat(amount || "0"),
          currency,
          cycle: parseCycle(cycle),
          nextBillingDate: new Date(nextBillingDate).toISOString(),
          color,
          note,
          phone,
        });
      }}
      className="grid gap-3"
    >
      <div className="grid gap-1">
        <label className="text-sm">Service</label>
        <div className="flex gap-2">
          <select
            value={popularLabels.includes(serviceChoice) ? serviceChoice : "Custom"}
            onChange={(e) => setServiceChoice(e.target.value)}
            className="w-full rounded-md border bg-transparent px-3 py-2"
          >
            {popular.map((p) => (
              <option key={p.label} value={p.label}>
                {p.label}
              </option>
            ))}
            <option value="Custom">Custom</option>
          </select>
          {serviceChoice === "Custom" ? (
            <input
              value={customService}
              onChange={(e) => setCustomService(e.target.value)}
              placeholder="Enter name"
              className="w-40 rounded-md border bg-transparent px-3 py-2"
            />
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1">
          <label className="text-sm">Amount</label>
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="rounded-md border bg-transparent px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm">Currency</label>
          <input value={currency} onChange={(e) => setCurrency(e.target.value.toUpperCase())} className="rounded-md border bg-transparent px-3 py-2" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1">
          <label className="text-sm">Billing cycle</label>
          <select value={cycle} onChange={(e) => setCycle(e.target.value)} className="rounded-md border bg-transparent px-3 py-2">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="90">Every 90 days</option>
            <option value="7">Every 7 days</option>
          </select>
        </div>
        {isCustomCycle ? (
          <div className="grid gap-1">
            <label className="text-sm">Custom cycle days</label>
            <input type="number" value={cycle} onChange={(e) => setCycle(e.target.value)} className="rounded-md border bg-transparent px-3 py-2" />
          </div>
        ) : (
          <div className="grid gap-1">
            <label className="text-sm">Next billing date</label>
            <input type="date" value={nextBillingDate} onChange={(e) => setNextBillingDate(e.target.value)} className="rounded-md border bg-transparent px-3 py-2" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1">
          <label className="text-sm">Card color</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-16 rounded border" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm">WhatsApp number (Pro)</label>
          <input placeholder="+1 555 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-md border bg-transparent px-3 py-2" />
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-sm">Note</label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} className="rounded-md border bg-transparent px-3 py-2" />
      </div>

      <div className="mt-2 flex gap-2">
        <button type="submit" className="px-4 py-2 rounded-md bg-foreground text-background">Save</button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-md border">Cancel</button>
      </div>
    </form>
  );
}