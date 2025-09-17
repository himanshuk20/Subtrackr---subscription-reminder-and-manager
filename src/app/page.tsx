"use client";

import Link from "next/link";

export default function Home() {
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
          <Link href="/pricing" className="px-3 py-2 rounded-md bg-foreground text-background">Pricing</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid gap-10">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="grid gap-4">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Ever faced:</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">Accidental billings due to autopay?</h2>
            <p className="text-lg opacity-80">
              Get multiple reminders of future billings <span className="text-[rgb(147_197_253)]">directly on your WhatsApp</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/sign-up" className="px-4 py-2 rounded-md bg-foreground text-background">Sign up</Link>
              <Link href="/sign-in" className="px-4 py-2 rounded-md border">Sign in</Link>
              <Link href="#demo" className="px-4 py-2 rounded-md border">See demo</Link>
              <Link href="/pricing" className="px-4 py-2 rounded-md border">See pricing</Link>
            </div>
          </div>
          <div id="demo" className="grid gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <DemoCard name="Netflix" amount={15.99} date="in 5 days" color="#E50914" />
              <DemoCard name="Spotify" amount={9.99} date="in 12 days" color="#1DB954" />
              <DemoCard name="Adobe" amount={54.99} date="in 2 days" color="#F44336" />
              <DemoCard name="iCloud" amount={2.99} date="in 20 days" color="#0A84FF" />
            </div>
            <p className="text-sm opacity-70">Demo data. Add your own in the dashboard.</p>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 opacity-80 text-sm">© {new Date().getFullYear()} subtrackr</footer>
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