import { useState } from "react";
import { ArrowRight, Check, ChevronRight, Play, ShieldCheck, Star, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/logo.png";

const VSL_URL = ""; // Add the final VSL URL here when ready.

type Question = {
  id: string;
  question: string;
  sub?: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: "role",
    question: "What best describes your practice?",
    sub: "This helps us tailor the training to your situation.",
    options: ["Doctor / Specialist", "Dental Clinic", "Physiotherapy / Rehab", "Aesthetic / Skin Clinic", "Hospital / Medical Center", "Other Healthcare Practice"],
  },
  {
    id: "patients",
    question: "How many new patients are you currently getting each month?",
    options: ["0–10", "11–25", "26–50", "51–100", "100+"],
  },
  {
    id: "challenge",
    question: "What is your biggest patient-growth challenge right now?",
    options: ["Not enough enquiries", "Leads don't convert", "Too many low-quality leads", "Poor follow-up / missed calls", "Patients don't show up", "I need a complete system"],
  },
  {
    id: "marketing",
    question: "What are you currently doing to attract patients?",
    options: ["Meta / Facebook Ads", "Google Ads / Google Business Profile", "Social media / content", "Referrals / word of mouth", "Multiple channels", "Almost nothing consistently"],
  },
  {
    id: "investment",
    question: "How much are you currently investing in marketing each month?",
    options: ["Under PKR 10,000", "PKR 10,000–25,000", "PKR 25,000–50,000", "PKR 50,000–100,000", "PKR 100,000+"],
  },
  {
    id: "goal",
    question: "What would make this training valuable for you?",
    options: ["More qualified patient enquiries", "More booked appointments", "A predictable patient acquisition system", "Better use of ads and funnels", "Better follow-up and conversion"],
  },
  {
    id: "ready",
    question: "How ready are you to implement a patient-growth system?",
    sub: "Be honest — this helps us make the training more relevant.",
    options: ["Just researching", "I have a problem and want a solution", "I'm ready to implement soon", "I'm actively looking for a growth partner"],
  },
];

const Logo = () => <img src={logo} alt="Zero Apple A Day" className="h-9 w-9 object-contain" />;

const QuizGate = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const choose = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: answer }));
    if (step < questions.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 180);
    } else {
      setTimeout(onComplete, 220);
    }
  };

  return (
    <div className="quiz-shell">
      <div className="quiz-top">
        <div className="quiz-brand"><Logo /><span>Clinic Growth Engine™</span></div>
        <span className="quiz-step">Question {step + 1} of {questions.length}</span>
      </div>
      <Progress value={progress} className="h-1.5 mb-10" />
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow">Quick assessment</p>
        <h2 className="quiz-title">{current.question}</h2>
        {current.sub && <p className="quiz-sub">{current.sub}</p>}
        <div className="quiz-options">
          {current.options.map((option) => (
            <button key={option} className="quiz-option" onClick={() => choose(option)}>
              <span>{option}</span><ChevronRight className="h-5 w-5" />
            </button>
          ))}
        </div>
        {step > 0 && (
          <button className="back-button" onClick={() => setStep((s) => s - 1)}>← Back</button>
        )}
      </div>
    </div>
  );
};

const VSL = () => (
  <section className="vsl-section">
    <div className="container max-w-5xl">
      <div className="text-center mb-8">
        <p className="eyebrow">Your training is unlocked</p>
        <h2 className="section-title">Watch the Clinic Growth System™</h2>
        <p className="section-sub max-w-2xl mx-auto">You’ll see why most clinics struggle with patient flow — and the system we use to connect marketing, qualification, follow-up and bookings.</p>
      </div>
      <div className="video-frame">
        {VSL_URL ? (
          <iframe src={VSL_URL} title="Clinic Growth VSL" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        ) : (
          <div className="video-placeholder">
            <div className="play-button"><Play className="h-8 w-8 fill-current" /></div>
            <h3>Your VSL goes here</h3>
            <p>Add the final VSL URL to VSL_URL in Index.tsx.</p>
          </div>
        )}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="hero" size="xl">
          <a href="/checkout">See If Your Clinic Qualifies <ArrowRight className="ml-2" /></a>
        </Button>
      </div>
    </div>
  </section>
);

const Nav = () => (
  <header className="site-nav">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-semibold"><Logo /><span>Zero Apple <span className="text-gradient">A Day</span></span></a>
      <a href="#watch" className="nav-cta">Watch The Training <ArrowRight className="h-4 w-4" /></a>
    </div>
  </header>
);

const Hero = ({ onStart }: { onStart: () => void }) => (
  <section className="hero">
    <div className="hero-glow one" /><div className="hero-glow two" />
    <div className="container relative z-10 text-center">
      <div className="pill"><span className="live-dot" /> For Doctors & Clinic Owners</div>
      <h1 className="hero-title">Your Clinic Doesn't Need <span className="text-gradient">More Leads.</span><br />It Needs More Patients.</h1>
      <p className="hero-sub">Discover the patient acquisition system that connects marketing, lead qualification, follow-up and appointment booking — so your clinic can turn more enquiries into real patients.</p>
      <div className="hero-actions">
        <Button variant="hero" size="xl" onClick={onStart}>Watch The Free Training <ArrowRight className="ml-2" /></Button>
      </div>
      <div className="trust-row">
        <span><ShieldCheck /> Built for healthcare</span><span><Zap /> Practical, implementation-focused</span><span><Users /> Designed for clinic owners</span>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="dark-section">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow">The real problem</p>
        <h2 className="section-title">Most clinics don't have a lead problem. They have a <span className="text-gradient">patient-flow problem.</span></h2>
        <p className="section-sub">Getting enquiries is only the first step. If your offer, funnel, qualification and follow-up aren't connected, potential patients disappear.</p>
      </div>
      <div className="problem-grid">
        {[
          ["Not enough enquiries", "No predictable system bringing the right patients into your clinic."],
          ["Low-quality leads", "Your team spends time chasing people who aren't a fit or aren't ready."],
          ["Slow follow-up", "Interested patients go cold while your team is busy with the clinic."],
          ["Missed bookings", "There is no clear process turning conversations into appointments."],
          ["No-shows", "A booked appointment is not the same as a patient walking through the door."],
          ["Wasted ad spend", "You keep changing campaigns without fixing what happens after the click."],
        ].map(([title, body]) => (
          <Card key={title} className="problem-card"><div className="problem-icon"><TrendingUp /></div><h3>{title}</h3><p>{body}</p></Card>
        ))}
      </div>
    </div>
  </section>
);

const System = () => (
  <section className="section">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow">The mechanism</p>
        <h2 className="section-title">One system. One goal: <span className="text-gradient">more patients walking into your clinic.</span></h2>
        <p className="section-sub">We connect every stage of the journey instead of treating ads, websites and follow-up as separate services.</p>
      </div>
      <div className="flow">
        {["Attract", "Capture", "Qualify", "Follow Up", "Book", "Show Up", "Scale"].map((x, i) => (
          <div key={x} className="flow-step"><div className="flow-number">{String(i + 1).padStart(2, "0")}</div><strong>{x}</strong>{i < 6 && <ArrowRight className="flow-arrow" />}</div>
        ))}
      </div>
    </div>
  </section>
);

const Proof = () => (
  <section className="dark-section">
    <div className="container">
      <div className="proof-grid">
        <div><p className="eyebrow">What changes</p><h2 className="section-title text-left">Stop measuring success by leads. Start measuring the <span className="text-gradient">patient journey.</span></h2><p className="section-sub text-left">The system is designed around the metrics that actually matter: qualified enquiries, booked appointments, show-ups and revenue opportunities.</p></div>
        <div className="metric-stack">
          {["More qualified enquiries", "Faster lead response", "More booked appointments", "Better show-up rates"].map((x, i) => <div className="metric" key={x}><div><span>0{i + 1}</span><strong>{x}</strong></div><Check /></div>)}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer"><div className="container flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-2"><Logo /><span>Zero Apple A Day</span></div><span>© {new Date().getFullYear()} Zero Apple A Day. All rights reserved.</span></div></footer>
);

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  if (quizOpen && !unlocked) return <QuizGate onComplete={() => { setQuizOpen(false); setUnlocked(true); setTimeout(() => document.getElementById("watch")?.scrollIntoView({ behavior: "smooth" }), 100); }} />;

  return (
    <div className="landing-page">
      <Nav />
      <main>
        <Hero onStart={() => setQuizOpen(true)} />
        <div id="watch">{unlocked && <VSL />}</div>
        <Problem />
        <System />
        <Proof />
        <section className="cta-section"><div className="container text-center max-w-3xl"><p className="eyebrow">Ready to fix your patient flow?</p><h2 className="section-title">See the system before you decide if it's right for your clinic.</h2><Button variant="hero" size="xl" onClick={() => setQuizOpen(true)}>Watch The Free Training <ArrowRight className="ml-2" /></Button></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
