import Link from "next/link";

export default function FAQPage() {
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
          <Link href="/" className="px-3 py-2 rounded-md hover:bg-accent">Home</Link>
          <Link href="/pricing" className="px-3 py-2 rounded-md hover:bg-accent">Pricing</Link>
          <Link href="/sign-in" className="px-3 py-2 rounded-md bg-foreground text-background">Sign In</Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-3 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 opacity-80">Everything you need to know about SubTrackr.</p>

        <div className="mt-8 space-y-6">
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
      </main>

      <footer className="max-w-6xl mx-auto px-3 py-6 opacity-80 text-sm">© {new Date().getFullYear()} subtrackr</footer>
    </div>
  );
}