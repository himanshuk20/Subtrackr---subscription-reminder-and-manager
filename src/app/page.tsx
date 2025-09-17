"use client";

import Link from "next/link";

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
                  Ever faced accidental billings due to autopay?
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
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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