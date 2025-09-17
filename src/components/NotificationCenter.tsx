"use client";

import { useEffect, useState } from "react";
import { Subscription } from "@/hooks/useSubscriptions";
import Link from "next/link";

export type NotificationItem = {
  id: string;
  message: string;
  createdAt: number;
};

export default function NotificationCenter({ subs }: { subs: Subscription[] }) {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const soon = subs.filter((s) => new Date(s.nextBillingDate).getTime() - now < 1000 * 60 * 60 * 24 * 3);
    const msgs: NotificationItem[] = soon.map((s) => ({
      id: s.id,
      message: `${s.service} bills on ${new Date(s.nextBillingDate).toLocaleDateString()}`,
      createdAt: now,
    }));
    setItems(msgs);
  }, [subs]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={() => setOpen((o) => !o)} className="px-3 py-2 rounded-lg bg-foreground text-background shadow">{open ? "Close" : `Reminders (${items.length})`}</button>
      {open ? (
        <div className="mt-2 w-80 max-w-[90vw] rounded-xl border bg-background shadow-xl">
          <div className="p-3 border-b font-semibold">Reminders</div>
          <div className="max-h-64 overflow-auto p-3 grid gap-2">
            {items.length === 0 ? <div className="text-sm opacity-70">No reminders</div> :
              items.map((i) => (
                <div key={i.id} className="text-sm p-2 rounded-lg bg-muted">
                  {i.message}
                </div>
              ))}
          </div>
          <div className="p-3 border-t text-sm">
            Want WhatsApp reminders? <Link href="/pricing" className="underline">Upgrade to Pro</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}