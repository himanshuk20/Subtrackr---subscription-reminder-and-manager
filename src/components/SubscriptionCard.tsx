"use client";

import { Subscription } from "@/hooks/useSubscriptions";

export default function SubscriptionCard({ sub, onEdit, onDelete, onPaid }: {
  sub: Subscription;
  onEdit: (sub: Subscription) => void;
  onDelete: (id: string) => void;
  onPaid: (id: string) => void;
}) {
  const daysLeft = Math.ceil((new Date(sub.nextBillingDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const dueSoon = daysLeft <= 3;
  const bg = sub.color || "#6366f1";

  return (
    <div className="rounded-xl p-4 text-white shadow-md" style={{ background: bg }}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{sub.service}</h3>
          <p className="opacity-90 text-sm">{new Date(sub.nextBillingDate).toLocaleDateString()} • in {daysLeft} day{daysLeft === 1 ? "" : "s"}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">
            {new Intl.NumberFormat(undefined, { style: "currency", currency: sub.currency || "USD" }).format(sub.amount)}
          </div>
          <div className="text-xs opacity-90">{typeof sub.cycle === "string" ? sub.cycle : `${sub.cycle.days}d`}</div>
        </div>
      </div>
      {sub.note ? <p className="mt-2 text-sm opacity-95">{sub.note}</p> : null}
      <div className="mt-4 flex gap-2">
        <button onClick={() => onEdit(sub)} className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/25 text-sm">Edit</button>
        <button onClick={() => onPaid(sub.id)} className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/25 text-sm">Mark paid</button>
        <button onClick={() => onDelete(sub.id)} className="ml-auto px-3 py-1.5 rounded-lg bg-black/30 hover:bg-black/40 text-sm">Delete</button>
      </div>
      {dueSoon ? <div className="mt-3 text-xs bg-black/25 px-2 py-1 rounded">Reminder: Billing soon</div> : null}
    </div>
  );
}