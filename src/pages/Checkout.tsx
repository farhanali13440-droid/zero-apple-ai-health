import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Lock, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const MASTERCLASS_PRICE = 999;
const BUMP_PRICE = 499;
const CHECKOUT_URL = "https://www.zeroappleaday.site/checkout-161070-355205-117637";
const BUMP_CHECKOUT_URL = "https://www.zeroappleaday.site/checkout-161070-355205-117637?bump=prompt-vault";

const bumpBenefits = [
  "300+ ready-to-use prompts written for doctors & clinics",
  "Instagram Reels, carousels, hooks, captions & CTAs",
  "Patient education scripts, FAQs and consult replies",
  "Ad copy, landing page copy & WhatsApp broadcast templates",
  "Works with ChatGPT, Gemini, Claude — copy, paste, post",
];

export default function Checkout() {
  const [bump, setBump] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const total = useMemo(() => MASTERCLASS_PRICE + (bump ? BUMP_PRICE : 0), [bump]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = bump ? BUMP_CHECKOUT_URL : CHECKOUT_URL;
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to program
          </Link>
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Secure checkout
          </div>
        </div>
      </header>

      <section className="container mx-auto grid gap-8 py-10 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Complete your enrollment</h1>
            <p className="mt-2 text-muted-foreground">Clinic Growth Masterclass · Live on Zoom</p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
            <h2 className="text-lg font-medium">Your details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="mb-1.5 block text-muted-foreground">Full name</span>
                <input
                  required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary/60"
                  placeholder="Dr. Ayesha Khan"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1.5 block text-muted-foreground">Phone / WhatsApp</span>
                <input
                  required value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary/60"
                  placeholder="+92 300 0000000"
                />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1.5 block text-muted-foreground">Email</span>
                <input
                  required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary/60"
                  placeholder="you@clinic.com"
                />
              </label>
            </div>
          </div>

          {/* ORDER BUMP */}
          <div
            className={`relative rounded-2xl border-2 border-dashed p-5 transition-colors ${
              bump ? "border-primary/70 bg-primary/5" : "border-border/70 bg-card/40"
            }`}
          >
            <div className="absolute -top-3 left-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30">
              One-time offer · Save 50%
            </div>

            <label className="flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                checked={bump}
                onChange={(e) => setBump(e.target.checked)}
                className="mt-1 h-5 w-5 flex-none accent-primary"
                aria-label="Add AI Prompt Vault for Doctors"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    YES! Add the AI Prompt Vault for Doctors — Content Creation Edition
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  A plug-and-play library of proven prompts that turns any doctor into a content machine — Reels,
                  carousels, patient education, ads and WhatsApp replies. Normally PKR 999, add it to your order today for just{" "}
                  <span className="font-semibold text-foreground">PKR {BUMP_PRICE}</span>.
                </p>

                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {bumpBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                  <Stethoscope className="h-3.5 w-3.5 text-primary" /> Built specifically for medical professionals
                </div>
              </div>
            </label>
          </div>

          <Button type="submit" variant="hero" size="xl" className="w-full">
            Complete Order · PKR {total} <ArrowRight className="ml-1" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /> 100% secure payment · You'll be redirected to our payment partner
          </div>
        </form>

        {/* Right: summary */}
        <aside className="lg:sticky lg:top-8 h-fit rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur">
          <h2 className="text-lg font-medium">Order summary</h2>

          <div className="mt-4 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
              <div>
                <div className="font-medium">Clinic Growth Masterclass</div>
                <div className="text-xs text-muted-foreground">Live Zoom session · Recording included</div>
              </div>
              <div className="font-semibold">PKR {MASTERCLASS_PRICE}</div>
            </div>

            {bump && (
              <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-4">
                <div>
                  <div className="font-medium">AI Prompt Vault for Doctors</div>
                  <div className="text-xs text-muted-foreground">Content creation edition · Instant access</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">PKR {BUMP_PRICE}</div>
                  <div className="text-xs text-muted-foreground line-through">PKR 999</div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-base">
              <span className="text-muted-foreground">Total</span>
              <span className="text-xl font-semibold">PKR {total}</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border/50 bg-background/40 p-4 text-xs text-muted-foreground">
            <div className="mb-1 font-medium text-foreground">What happens next?</div>
            You'll receive your Zoom link and access details on email & WhatsApp within minutes of payment.
          </div>
        </aside>
      </section>
    </main>
  );
}
