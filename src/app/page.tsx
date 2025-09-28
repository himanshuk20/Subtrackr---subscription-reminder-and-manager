"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background overflow-x-hidden">
      <header className="max-w-6xl mx-auto px-3 py-3 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ChatGPT%20Image%20Sep%2018,%202025,%2012_40_24%20AM-1758136332056.png"
            alt="subtrackr logo"
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="text-xl font-semibold">subtrackr</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link href="#features" className="px-3 py-2 rounded-md hover:bg-accent">Features</Link>
          <Link href="/pricing" className="px-3 py-2 rounded-md hover:bg-accent">Pricing</Link>
          <Link href="#faqs" className="px-3 py-2 rounded-md hover:bg-accent">FAQ</Link>
          <Link href="/sign-in" className="px-3 py-2 rounded-md bg-foreground text-background">Sign In</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-3 py-6 grid gap-6">
        <section className="grid gap-8 items-center">
          <div className="grid place-items-center text-center gap-5">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Get multiple reminders of future billings {" "}
              <span className="text-[rgb(147_197_253)]">directly on your WhatsApp</span>
            </h1>
            <p className="max-w-3xl text-base sm:text-lg opacity-80">
              Take control of your subscriptions with smart WhatsApp reminders, spending insights, and money-saving recommendations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/sign-up" className="px-5 py-3 rounded-md bg-foreground text-background font-medium">
                Start Free Trial
              </Link>
              <Link href="#features" className="px-5 py-3 rounded-md border font-medium">
                Watch Demo
              </Link>
            </div>
            {/* Full-width light gray band below CTA */}
            <div className="relative -mx-3 mt-3 bg-[rgb(229,231,235)] py-4">
              <div className="max-w-6xl mx-auto px-3">
                <p className="text-sm sm:text-base font-medium text-black text-center">
                  <Typewriter text="Ever faced accidental billings due to autopay?" />
                </p>
                <p className="mt-2 text-xs sm:text-sm text-black/80 text-center">
                  <a
                    href="https://www.globenewswire.com/news-release/2016/03/21/1240985/0/en/Hiatus-Survey-62-of-Consumers-Waste-Money-on-Unwanted-Subscriptions-Because-They-Don-t-Cancel-Automatic-Renewals.html?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    over 60% consumers lose money because they forget to cancel autopay
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full grid gap-6 mt-4">
              <p className="text-base sm:text-lg font-medium opacity-90 text-center">
                Manage All Your Subscriptions in one place with whatsapp and inapp reminders
              </p>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot%202025-09-17%20235826-1758134243753.png"
                alt="Dashboard preview"
                className="w-full rounded-xl border"
              />
              <div className="grid gap-6 sm:grid-cols-2 items-center">
                <div className="flex justify-start">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot%202025-09-18%20000506-1758134324533.png"
                    alt="Add subscription preview"
                    className="w-full max-w-sm rounded-xl border"
                  />
                </div>
                <div className="text-left sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold">Add Your Subscription effortlessly</h3>
                  <p className="mt-2 text-base sm:text-lg opacity-90">
                    Any currency you use, custom billing cycle, card color of your choice, any notes you want to add and your whatsapp number for sending you multiple reminder before your billing, subtrackr is not only superior its the best.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features section */}
          <section id="features" className="pt-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">Why Choose subtrackr?</h2>
            <p className="mt-2 text-center opacity-80 max-w-2xl mx-auto">
              Our intelligent platform helps you save money and stay in control of your subscription spending.
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              {/* Left: Features grid(s) */}
              <div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <FeatureCard icon="W" title="WhatsApp Reminders" desc="Get multiple reminders on WhatsApp for your future billings of subscriptions." />
                  <FeatureCard icon="$" title="Track Spending" desc="Keep track of spend on subscriptions with detailed insights." />
                  <FeatureCard icon="💰" title="Save Money" desc="Automatically identify and cancel unused or costly subscriptions." />
                  <FeatureCard icon="🧠" title="Smart Decisions" desc="Recommendations that help you decide what to keep or cancel." />
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <FeatureCard icon="📝" title="Notes on Cards" desc="Note for every subscription visible on your sub-card." />
                  <FeatureCard icon="✏️" title="Quick Actions" desc="Edit, mark paid, and delete your data easily." />
                  <FeatureCard icon="⭐" title="Only Subtracker You Need" desc="The only Subtracker you'll ever need." />
                  <FeatureCard icon="🚀" title="Just the Best" desc="Just the best." />
                </div>
              </div>

              {/* Right: FAQs */}
              <div id="faqs">
                <h3 className="text-2xl sm:text-3xl font-bold">FAQs</h3>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="font-semibold">1. What does SubTrackr do?</p>
                    <p className="opacity-80 text-sm sm:text-base">SubTrackr helps you track all your subscriptions in one place (like Netflix, Spotify, Amazon Prime, etc.). It reminds you before renewal so you never forget to cancel or pay late.</p>
                  </div>
                  <div>
                    <p className="font-semibold">2. How will I get reminders?</p>
                    <p className="opacity-80 text-sm sm:text-base">Free plan → in-app notifications only.<br/>Pro plan → WhatsApp reminders directly on your phone.</p>
                  </div>
                  <div>
                    <p className="font-semibold">3. Can I add any subscription?</p>
                    <p className="opacity-80 text-sm sm:text-base">Yes! With SubTrackr, you can manually add any service—streaming, gym, broadband, OTT, insurance, or even rent.</p>
                  </div>
                  <div>
                    <p className="font-semibold">4. Is my data safe?</p>
                    <p className="opacity-80 text-sm sm:text-base">Absolutely. SubTrackr only stores the subscription details you enter. No card or payment info is saved. All data is secured with modern encryption standards.</p>
                  </div>
                  <div>
                    <p className="font-semibold">5. Does SubTrackr charge my subscriptions automatically?</p>
                    <p className="opacity-80 text-sm sm:text-base">No. SubTrackr only reminds you. You remain in full control of paying or canceling.</p>
                  </div>
                  <div>
                    <p className="font-semibold">6. How much does SubTrackr cost?</p>
                    <p className="opacity-80 text-sm sm:text-base">In India: Starting from ₹49/year or ₹179/5 years.<br/>International: Starting from $4.99/year.<br/>We also have a free plan with in-app reminders.</p>
                  </div>
                  <div>
                    <p className="font-semibold">7. What happens if I don't upgrade to Pro?</p>
                    <p className="opacity-80 text-sm sm:text-base">You'll still get unlimited subscription tracking and free in-app notifications. Pro is only for WhatsApp reminders.</p>
                  </div>
                  <div>
                    <p className="font-semibold">8. Does SubTrackr offer lifetime plans?</p>
                    <p className="opacity-80 text-sm sm:text-base">Yes. You can choose a one-time payment plan (like ₹399 in India / $24.99 international) and get Pro reminders forever.</p>
                  </div>
                  <div>
                    <p className="font-semibold">9. Can SubTrackr track multiple subscriptions?</p>
                    <p className="opacity-80 text-sm sm:text-base">Yes! You can add and manage unlimited subscriptions in both Free and Pro plans.</p>
                  </div>
                  <div>
                    <p className="font-semibold">10. Who is SubTrackr for?</p>
                    <p className="opacity-80 text-sm sm:text-base">SubTrackr is for anyone who wants to avoid wasting money on forgotten subscriptions—students, families, professionals, or businesses.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Full-width blue CTA section */}
            <div className="mt-10 relative -mx-3 bg-[rgb(147,197,253)]">
              <div className="max-w-6xl mx-auto px-3 py-8 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold">What to do when you have too many subscriptions?</h3>
                <p className="mt-2">Buy one more subscription to keep all your other subscriptions in track!</p>
                <div className="mt-4">
                  <Link
                    href="/sign-up"
                    className="inline-block px-5 py-3 rounded-md font-medium bg-foreground text-background"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-3 py-6 opacity-80 text-sm">© {new Date().getFullYear()} subtrackr</footer>
    </div>
  );
}

function DemoCard({ name, amount, date, color }: { name: string; amount: number; date: string; color: string }) {
  return (
    <div className="rounded-xl p-4 text-white shadow-md" style={{ background: color }}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="opacity-90 text-sm">{date}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">${amount.toFixed(2)}</div>
          <div className="text-xs opacity-90">monthly</div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-5 grid gap-3">
      <div className="h-10 w-10 rounded-lg bg-foreground text-background grid place-items-center text-lg font-bold">
        {icon}
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm opacity-80">{desc}</p>
      </div>
    </div>
  );
}

function Typewriter({
  text,
  typingSpeed = 75,
  deletingSpeed = 40,
  pause = 1200,
}: {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && display.length < text.length) {
      t = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typingSpeed);
    } else if (!deleting && display.length === text.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      t = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deletingSpeed);
    } else if (deleting && display.length === 0) {
      t = setTimeout(() => setDeleting(false), 400);
    }
    return () => clearTimeout(t);
  }, [display, deleting, text, typingSpeed, deletingSpeed, pause]);

  // highlight "autopay" (including partially typed characters) in yellow
  const target = "autopay";
  const idx = text.toLowerCase().indexOf(target);
  const typed = display.length;

  let before = display;
  let within = "";
  let after = "";

  if (idx !== -1) {
    const beforeEnd = Math.min(typed, idx);
    const withinLen = Math.max(0, Math.min(typed - idx, target.length));
    const withinEnd = idx + withinLen;
    before = display.slice(0, beforeEnd);
    within = withinLen > 0 ? display.slice(idx, withinEnd) : "";
    after = withinEnd < display.length ? display.slice(withinEnd) : "";
  }

  return (
    <span>
      {idx === -1 ? (
        <>{display}</>
      ) : (
        <>
          {before}
          {within && <span className="text-yellow-500">{within}</span>}
          {after}
        </>
      )}
      <span className="ml-0.5 inline-block w-0.5 h-5 align-middle bg-black/70 animate-pulse" />
    </span>
  );
}