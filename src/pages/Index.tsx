import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity, ShieldCheck, Sparkles, Target, TrendingUp, Users, Zap, Calendar,
  CheckCircle2, Brain, Megaphone, AlertTriangle, GraduationCap, Stethoscope,
  HeartPulse, Eye, Bone, Baby, Smile, Award, Clock, ArrowRight, Menu, X
} from "lucide-react";
import logo from "@/assets/logo.png";
import dashboard from "@/assets/dashboard.jpg";
import trainer from "@/assets/trainer.jpg";

const CHECKOUT_URL = "https://www.zeroappleaday.site/checkout-161070-355205-117637";

const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <img src={logo} alt="Zero Apple A Day" className={className} />
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#program", label: "Program" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="font-display font-bold text-lg tracking-tight">
            Zero Apple <span className="text-gradient">A Day</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm">
            <a href="/checkout">Enroll Now</a>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">{l.label}</a>
            ))}
            <Button asChild variant="hero"><a href="/checkout">Enroll Now</a></Button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
    <div className="orb bg-primary/30 w-[400px] h-[400px] -top-20 -right-20" />
    <div className="orb bg-secondary/30 w-[500px] h-[500px] -bottom-40 -left-20" style={{ animationDelay: "3s" }} />
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
            Live Masterclass · Sat 20 June 2026 · 5–8 PM PKT
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Get a consistent <span className="text-gradient">20–25 patients</span> every week — without burning hours on ads.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            The Clinic Growth Masterclass shows busy doctors the exact patient-acquisition system,
            authority-branding playbook, and AI-powered workflow used to grow modern clinics —
            even if you've struggled with marketing before.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="/checkout">Join the Program · PKR 999 <ArrowRight className="ml-1" /></a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#program">See How It Works</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> 100% money-back guarantee</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Built for Pakistani doctors</span>
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-secondary" /> Live + interactive Q&A</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
          <div className="glass-card shadow-elegant relative overflow-hidden p-3">
            <img src={dashboard} alt="Clinic growth analytics dashboard" className="rounded-[1.2rem] w-full" />
          </div>
          <div className="glass-card absolute -bottom-6 -left-6 p-4 hidden sm:flex items-center gap-3 shadow-elegant">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Patients / week</div>
              <div className="font-display text-xl font-bold">5 → 22</div>
            </div>
          </div>
          <div className="glass-card absolute -top-6 -right-6 p-4 hidden sm:flex items-center gap-3 shadow-elegant">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Authority Score</div>
              <div className="font-display text-xl font-bold">92<span className="text-sm text-muted-foreground">/100</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Section = ({ id, eyebrow, title, sub, children }: any) => (
  <section id={id} className="py-20 md:py-28 relative">
    <div className="container">
      <div className="max-w-2xl mb-14">
        {eyebrow && <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{eyebrow}</div>}
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
        {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </div>
  </section>
);

const Problem = () => {
  const items = [
    { icon: AlertTriangle, t: "Wasted ad spend", d: "Spending on Facebook/Google ads with no measurable patient growth." },
    { icon: Megaphone, t: "Inconsistent marketing", d: "Posting randomly on social media without a real strategy." },
    { icon: Target, t: "No clear positioning", d: "Patients can't tell why they should choose you over the clinic next door." },
    { icon: Clock, t: "No time", d: "Between consultations and surgeries, there's no time to figure out marketing." },
  ];
  return (
    <Section id="problem" eyebrow="The Problem"
      title="Most clinics stay stuck — not because you're not a great doctor."
      sub="It's because nobody taught you the system to consistently attract the right patients online.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, t, d }) => (
          <Card key={t} className="glass-card p-6 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
            <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="h-5 w-5 text-destructive" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Program = () => (
  <Section id="program" eyebrow="The Masterclass"
    title={<>Discover the <span className="text-gradient">Clinic Growth Masterclass</span></>}
    sub="A live interactive webinar that gives you the exact playbook — not theory.">
    <div className="grid lg:grid-cols-2 gap-6">
      {[
        { icon: TrendingUp, t: "Attract 20–25 new patients every week", d: "A proven step-by-step framework, not random tactics." },
        { icon: Award, t: "Build authority online", d: "Become the go-to specialist patients search for by name." },
        { icon: ShieldCheck, t: "Stop wasting money on ads", d: "Know exactly what works in healthcare marketing — and what doesn't." },
        { icon: Brain, t: "Grow predictably with AI workflows", d: "Even if you have zero marketing background." },
      ].map(({ icon: Icon, t, d }) => (
        <Card key={t} className="glass-card p-7 hover:border-primary/40 transition-all group">
          <div className="flex gap-5">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-brand flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl mb-1">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

const Curriculum = () => {
  const modules = [
    { n: "01", t: "The Patient-Getting System", d: "The exact step-by-step framework to attract new patients every single week." },
    { n: "02", t: "Authority & Personal Branding Blueprint", d: "Build your reputation online so patients choose you automatically." },
    { n: "03", t: "Avoid Marketing Mistakes", d: "Stop wasting money. Get measurable results from every rupee spent." },
    { n: "04", t: "Live Q&A with Farhan Ali", d: "Get your personal struggles solved live during the session." },
  ];
  return (
    <Section id="curriculum" eyebrow="What you'll learn"
      title="Inside the 4-module live experience"
      sub="3 hours. Zero fluff. Implement on Monday.">
      <div className="grid md:grid-cols-2 gap-5">
        {modules.map((m) => (
          <Card key={m.n} className="glass-card p-7 relative overflow-hidden hover:border-primary/40 transition-all">
            <div className="absolute -top-6 -right-2 font-display text-8xl font-bold text-primary/10 select-none">{m.n}</div>
            <div className="relative">
              <div className="text-xs font-semibold text-primary mb-2">MODULE {m.n}</div>
              <h3 className="font-display text-2xl font-bold mb-2">{m.t}</h3>
              <p className="text-muted-foreground">{m.d}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {[
          { t: "Bonus #1 — Authority Content Cheat Sheet", v: "PKR 15,000", d: "30 ready-to-use post ideas to position yourself as an authority online." },
          { t: "Bonus #2 — Personal Brand Positioning Worksheet", v: "PKR 10,000", d: "Define your niche, positioning, and authority so patients trust you instantly." },
        ].map((b) => (
          <Card key={b.t} className="glass-card p-7 border-accent/30">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                <Sparkles className="h-4 w-4" /> FREE BONUS
              </div>
              <span className="text-xs text-muted-foreground line-through">Value {b.v}</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{b.t}</h3>
            <p className="text-muted-foreground">{b.d}</p>
          </Card>
        ))}
      </div>
      <p className="text-center mt-8 text-muted-foreground">
        Total bonus value <span className="text-foreground font-semibold">PKR 25,000</span> — included FREE with your registration.
      </p>
    </Section>
  );
};

const WhoFor = () => {
  const list = [
    { icon: Stethoscope, t: "Doctors (MBBS, specialists, consultants)" },
    { icon: Smile, t: "Dental clinic owners" },
    { icon: HeartPulse, t: "Nutritionists & dietitians" },
    { icon: Brain, t: "Psychologists & therapists" },
    { icon: Eye, t: "Eye specialists / ophthalmologists" },
    { icon: Bone, t: "Orthopedic doctors" },
    { icon: GraduationCap, t: "Homeopathy & alternative medicine" },
    { icon: Baby, t: "IVF & fertility specialists" },
    { icon: Activity, t: "Physiotherapists" },
  ];
  return (
    <Section id="who" eyebrow="Who it's for"
      title="Built for healthcare professionals serious about growth">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(({ icon: Icon, t }) => (
          <div key={t} className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">{t}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Testimonial = () => (
  <Section id="results" eyebrow="Results"
    title="Real doctors. Real patient growth.">
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="glass-card p-8 md:col-span-2 relative">
        <div className="text-5xl font-display text-primary/40 leading-none">"</div>
        <p className="text-xl md:text-2xl font-display leading-snug -mt-4">
          After implementing these strategies, my clinic went from 5 patients a week to 22 per week —
          and my reputation in the city skyrocketed.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-brand flex items-center justify-center font-display font-bold">DA</div>
          <div>
            <div className="font-semibold">Dr. Ahmed</div>
            <div className="text-sm text-muted-foreground">Dermatologist, Islamabad</div>
          </div>
        </div>
      </Card>
      <Card className="glass-card p-8 bg-gradient-brand/10 border-primary/30">
        <div className="font-display text-6xl font-bold text-gradient">340%</div>
        <p className="mt-3 text-muted-foreground">Average increase in weekly patient bookings reported by graduates within 60 days.</p>
        <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
          {["Predictable bookings", "Premium positioning", "AI-assisted content"].map((x) => (
            <div key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{x}</div>
          ))}
        </div>
      </Card>
    </div>
  </Section>
);

const Trainer = () => (
  <Section id="trainer" eyebrow="Meet your trainer" title="Farhan Ali"
    sub="Healthcare Digital Marketing Expert with 3+ years helping doctors and clinic owners grow through proven, ad-light strategies.">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-2">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-brand opacity-40 blur-2xl rounded-3xl" />
          <img src={trainer} alt="Farhan Ali" loading="lazy" className="relative rounded-3xl w-full glass-card p-2" />
        </div>
      </div>
      <div className="md:col-span-3">
        <p className="text-lg text-muted-foreground mb-6">
          Farhan has worked closely with diabetologists, nutritionists, psychologists, cardiologists, dentists,
          endocrinologists, and many other specialists — focusing on patient acquisition systems, clinic branding,
          and lead generation built specifically for healthcare professionals in Pakistan.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Patient acquisition systems",
            "Clinic branding & authority",
            "Healthcare lead generation",
            "AI workflows for clinics",
          ].map((s) => (
            <div key={s} className="flex items-center gap-3 glass-card px-4 py-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> <span className="text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const Pricing = () => (
  <Section id="pricing" eyebrow="Enrollment"
    title="One-time investment. Lifetime impact."
    sub="Limited seats — price will increase soon.">
    <div className="max-w-2xl mx-auto">
      <Card className="glass-card relative overflow-hidden p-1 animate-pulse-glow">
        <div className="absolute inset-0 bg-gradient-brand opacity-20" />
        <div className="relative bg-card rounded-[calc(var(--radius)-4px)] p-8 md:p-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider">Clinic Growth Masterclass</div>
              <h3 className="font-display text-3xl font-bold mt-1">Live on Zoom · 3 Hours</h3>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-semibold">
              <Calendar className="h-3 w-3" /> Sat · 20 June 2026
            </div>
          </div>

          <div className="flex items-end gap-3 mb-8">
            <div className="font-display text-6xl font-bold text-gradient">₨999</div>
            <div className="pb-2 text-muted-foreground"><span className="line-through">₨5,000</span> · one-time</div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "4 implementation-ready modules",
              "Live, interactive Zoom session with full Q&A",
              "Personal struggles solved live by Farhan Ali",
              "Bonus: Authority Content Cheat Sheet (PKR 15,000)",
              "Bonus: Personal Brand Positioning Worksheet (PKR 10,000)",
              "100% money-back guarantee",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="hero" size="xl" className="w-full">
            <a href="/checkout">Enroll Now — Lock Your Seat <ArrowRight className="ml-1" /></a>
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Secure checkout · Seats limited to keep the session interactive
          </p>
        </div>
      </Card>

      <Card className="glass-card mt-6 p-6 flex items-start gap-4 border-accent/30">
        <ShieldCheck className="h-8 w-8 text-accent shrink-0" />
        <div>
          <h4 className="font-display font-semibold text-lg">100% Money-Back Guarantee</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Attend the complete training, take notes, implement the learnings — if you still feel it wasn't worth it,
            we'll return 100% of your money. No questions asked.
          </p>
        </div>
      </Card>
    </div>
  </Section>
);

const FAQ = () => (
  <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-3">
        {[
          { q: "How will the training be conducted?", a: "The training is conducted live on Google Meet / Zoom. You'll receive the meeting link via email after you register." },
          { q: "Do I need any prior marketing experience?", a: "Not at all. The masterclass is designed for busy doctors and clinic owners — no prior marketing knowledge required." },
          { q: "Will I get a recording of the program?", a: "This is a live, personally-conducted training by Farhan Ali. To maintain the quality, focus, and integrity of the session, no recording is provided after the training." },
          { q: "When is the session scheduled?", a: "Saturday, 20th June 2026 from 5:00 PM to 8:00 PM (PKT). It's intentionally scheduled on a holiday so most participants can join on time." },
          { q: "What's the refund policy?", a: "100% money-back guarantee. If you attend the full session, implement the learnings and still feel it wasn't worth it, we refund every rupee." },
          { q: "Who is this NOT for?", a: "If you're looking for theoretical lectures or aren't willing to implement, this isn't for you. The masterclass is built around action and live problem-solving." },
        ].map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border">
            <AccordionTrigger className="font-display text-left text-lg hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

const FinalCTA = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="orb bg-primary/40 w-[500px] h-[500px] top-0 left-1/4" />
    <div className="orb bg-secondary/40 w-[500px] h-[500px] bottom-0 right-1/4" style={{ animationDelay: "4s" }} />
    <div className="container relative text-center max-w-3xl">
      <Logo className="h-16 w-16 mx-auto mb-6" />
      <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
        Reserve your spot before <span className="text-gradient">all seats fill</span>.
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">
        No fancy theory. Just what actually works to bring 20–25 patients a week to your clinic.
      </p>
      <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="hero" size="xl">
          <a href="/checkout">Enroll Now · PKR 999 <ArrowRight className="ml-1" /></a>
        </Button>
        <Button asChild variant="outline" size="xl"><a href="#faq">Read FAQ</a></Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Logo className="h-8 w-8" />
          <span className="font-display font-bold">Zero Apple A Day</span>
        </div>
        <p className="text-muted-foreground">Helping doctors get consistent patients via modern, AI-powered digital marketing.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Links</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Terms of Use</a></li>
          <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li>Islamabad, Sector I-8/4</li>
          <li><a href="mailto:Farhanali13440@gmail.com" className="hover:text-foreground">Farhanali13440@gmail.com</a></li>
          <li><a href="tel:+923390057379" className="hover:text-foreground">+92 339 0057379</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
      © {new Date().getFullYear()} Zero Apple A Day. All rights reserved.
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Nav />
    <main>
      <Hero />
      <Problem />
      <Program />
      <Curriculum />
      <WhoFor />
      <Testimonial />
      <Trainer />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
