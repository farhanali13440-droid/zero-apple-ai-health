import { ArrowRight, BarChart3, Check, ChevronDown, Clock3, Gauge, MapPin, MessageCircle, PhoneCall, Search, ShieldCheck, Target, Users, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const VSL_URL = "";

const Logo = () => <img src={logo} alt="Zero Apple A Day" className="h-9 w-9 object-contain" />;

const Nav = () => (
  <header className="site-nav">
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-bold text-[#173e68]">
        <Logo />
        <span>Zero Apple A Day</span>
      </a>
      <a href="#apply" className="nav-cta">See If We're A Fit <ArrowRight className="h-4 w-4" /></a>
    </div>
  </header>
);

const Hero = () => (
  <section className="offer-hero">
    <div className="hero-glow one" /><div className="hero-glow two" />
    <div className="container relative z-10">
      <div className="hero-copy">
        <div className="pill"><span className="live-dot" /> Patient Acquisition For Healthcare Practices</div>
        <h1>Build A <span className="text-gradient">Predictable Patient Pipeline</span> Without Managing Five Different Marketing Vendors.</h1>
        <p>We build and manage the connected patient-acquisition infrastructure that helps healthcare practices get found, turn attention into enquiries, follow up quickly, and move qualified prospects toward booked appointments.</p>
        <div className="hero-buttons">
          <Button asChild variant="hero" size="xl"><a href="#offer">See What's Included <ArrowRight className="ml-2" /></a></Button>
          <a className="text-link" href="#how">See How It Works <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="hero-trust">
          <span><ShieldCheck /> Healthcare-focused</span>
          <span><Target /> Built around appointments</span>
          <span><BarChart3 /> Measured beyond leads</span>
        </div>
      </div>
      <div className="hero-dashboard">
        <div className="dashboard-window">
          <div className="window-top"><span /><span /><span /><b>Patient Growth Dashboard</b></div>
          <div className="dashboard-grid">
            <div className="dash-card"><small>Patient enquiries</small><strong>+</strong><em>Track every opportunity</em></div>
            <div className="dash-card"><small>Booked appointments</small><strong>+</strong><em>See what converts</em></div>
            <div className="dash-card wide"><small>Patient journey</small><div className="mini-flow"><i>Ad</i><i>Enquiry</i><i>Follow-up</i><i>Booking</i><i>Show-up</i></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="stats-strip"><div className="container stats-grid">
    <div><strong>ONE</strong><span>connected growth system</span></div>
    <div><strong>ONE</strong><span>team responsible for the funnel</span></div>
    <div><strong>ONE</strong><span>patient journey to optimize</span></div>
    <div><strong>ONE</strong><span>clear growth objective</span></div>
  </div></section>
);

const Problem = () => (
  <section className="section">
    <div className="container">
      <div className="split-heading">
        <div><p className="eyebrow">The problem</p><h2 className="section-title">Marketing becomes expensive when every part of the patient journey lives somewhere different.</h2></div>
        <p className="section-sub">Ads can generate enquiries. A website can look good. A receptionist can answer calls. But if those pieces aren't connected, opportunities leak between them.</p>
      </div>
      <div className="problem-list">
        {[
          ["Ads generate leads but not enough bookings", "The campaign is judged by cost per lead instead of what happens after the enquiry."],
          ["Patients wait too long for a response", "A busy front desk cannot always respond while the patient's intent is highest."],
          ["Missed calls become lost opportunities", "There is no structured recovery process when nobody answers."],
          ["Your team has no follow-up system", "Interested prospects disappear because follow-up depends on memory."],
          ["Booked doesn't always mean attended", "Without confirmations and reminders, appointments can still fall through."],
          ["Nobody owns the full journey", "Different vendors control different pieces while nobody is accountable for the outcome."]
        ].map(([t,d]) => <Card className="problem-row" key={t}><div className="problem-mark"><Zap /></div><div><h3>{t}</h3><p>{d}</p></div></Card>)}
      </div>
    </div>
  </section>
);

const Offer = () => (
  <section id="offer" className="dark-section offer-section">
    <div className="container">
      <div className="center-heading">
        <p className="eyebrow">The solution</p>
        <h2 className="section-title">The <span className="text-gradient">Clinic Patient Growth System™</span></h2>
        <p className="section-sub">A connected acquisition and conversion system built to move a potential patient from first touch to booked appointment.</p>
      </div>
      <div className="offer-stack">
        {[
          [Search, "Patient Acquisition", "Get your priority services in front of people actively looking for a solution through the right acquisition channels."],
          [Target, "Offer & Conversion", "Create a clear reason for the right patient to take the next step instead of sending every visitor to a generic consultation."],
          [Workflow, "Lead Capture & Qualification", "Capture enquiries and collect the information your team needs to decide what happens next."],
          [MessageCircle, "Automated Follow-Up", "Keep conversations moving through structured WhatsApp, SMS and email follow-up."],
          [PhoneCall, "Missed-Call Recovery", "Create a response path for calls and enquiries that would otherwise disappear."],
          [Gauge, "Appointment Conversion", "Turn qualified conversations into scheduled appointments with a defined booking process."],
          [Clock3, "Show-Up & Recovery", "Use confirmations, reminders and recovery workflows to reduce avoidable appointment leakage."],
          [BarChart3, "Tracking & Optimization", "Connect marketing activity to enquiries, bookings and patient-flow bottlenecks so the system can improve."]
        ].map(([Icon,t,d]) => { const I=Icon as any; return <div className="offer-item" key={t as string}><div className="offer-icon"><I /></div><div><h3>{t as string}</h3><p>{d as string}</p></div><Check className="offer-check" /></div> })}
      </div>
    </div>
  </section>
);

const Journey = () => (
  <section id="how" className="section">
    <div className="container">
      <div className="center-heading"><p className="eyebrow">The patient journey</p><h2 className="section-title">From <span className="text-gradient">stranger to scheduled patient.</span></h2><p className="section-sub">Every stage has a job. Every handoff has a process.</p></div>
      <div className="journey">
        {[
          ["01","Get Found","Search, social and local visibility put your practice in front of relevant people."],
          ["02","Create Interest","The message and offer give the right patient a reason to enquire."],
          ["03","Capture","Landing pages and forms turn attention into an identifiable opportunity."],
          ["04","Respond","Automation and team workflows reduce the gap between enquiry and response."],
          ["05","Qualify","Need, fit and intent help determine which opportunities deserve attention."],
          ["06","Book","The prospect moves to a defined appointment process."],
          ["07","Show","Confirmation and reminder workflows support attendance."],
          ["08","Improve","Data shows where the pipeline is leaking and what to fix next."]
        ].map(([n,t,d]) => <div className="journey-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </div>
  </section>
);

const Why = () => (
  <section className="section soft-section">
    <div className="container">
      <div className="split-heading"><div><p className="eyebrow">One partner</p><h2 className="section-title">Not another vendor. A system around your patient journey.</h2></div><p className="section-sub">Instead of asking your clinic to coordinate an ads agency, website developer, CRM setup and follow-up process, the offer is designed as one connected operating system.</p></div>
      <div className="compare">
        <div><div className="compare-head">Typical setup</div>{["Ads company","Website provider","CRM tool","Reception follow-up","Separate reporting"].map(x=><div className="compare-row muted" key={x}>× {x}</div>)}</div>
        <div className="compare-main"><div className="compare-head">Clinic Patient Growth System™</div>{["Acquisition + offers","Conversion infrastructure","Follow-up workflows","Booking + show-up process","Connected performance tracking"].map(x=><div className="compare-row" key={x}><Check /> {x}</div>)}</div>
      </div>
    </div>
  </section>
);

const Fit = () => (
  <section className="dark-section">
    <div className="container">
      <div className="center-heading"><p className="eyebrow">Is this for you?</p><h2 className="section-title">Built for practices that are ready to <span className="text-gradient">operate a growth system.</span></h2></div>
      <div className="fit-grid">
        <Card><Check /><h3>This can be a fit if...</h3><ul><li>You offer services patients actively seek</li><li>You have capacity for additional appointments</li><li>You want to measure bookings, not only leads</li><li>You are willing to improve the process after launch</li><li>You want one team coordinating the patient journey</li></ul></Card>
        <Card className="not-fit"><span className="x">×</span><h3>This may not be a fit if...</h3><ul><li>You only want the cheapest possible leads</li><li>You don't have capacity for new patients</li><li>You don't want to follow up with enquiries</li><li>You want guaranteed results regardless of market or offer</li><li>You are looking for a quick marketing hack</li></ul></Card>
      </div>
    </div>
  </section>
);

const VSL = () => (
  <section className="section vsl-section">
    <div className="container max-w-5xl">
      <div className="center-heading"><p className="eyebrow">Watch the breakdown</p><h2 className="section-title">See how the system works before you decide.</h2><p className="section-sub">A short walkthrough of the patient journey, the infrastructure behind it, and where most clinics lose opportunities.</p></div>
      <div className="video-frame">{VSL_URL ? <iframe src={VSL_URL} title="Clinic Patient Growth System" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> : <div className="video-placeholder"><div className="play-button">▶</div><h3>Your VSL goes here</h3><p>Add the video URL to VSL_URL in Index.tsx.</p></div>}</div>
    </div>
  </section>
);

const CTA = () => (
  <section id="apply" className="cta-section">
    <div className="container max-w-4xl text-center">
      <p className="eyebrow">Ready to map your patient flow?</p>
      <h2 className="section-title">Let's find the bottleneck between your marketing and your <span className="text-gradient">next appointment.</span></h2>
      <p className="section-sub">Start with a conversation about your current patient flow, your priority service and the infrastructure already in place.</p>
      <div className="cta-buttons"><Button variant="hero" size="xl"><a href="/checkout">Apply For The Patient Growth System <ArrowRight className="ml-2 inline" /></a></Button><span><MapPin className="inline h-4 w-4" /> Built for local healthcare practices</span></div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="section faq"><div className="container max-w-4xl"><div className="center-heading"><p className="eyebrow">Questions</p><h2 className="section-title">Frequently asked</h2></div><div className="faq-list">
    {[
      ["Is this just an ads service?","No. Acquisition is one part of the system. The offer connects acquisition, conversion, follow-up, booking, show-up support and measurement."],
      ["Do you work with every healthcare practice?","The system is designed for appointment-based healthcare practices where additional qualified patient volume can be handled. Fit depends on your specialty, market, offer and capacity."],
      ["Do you guarantee a specific number of patients?","No. Patient outcomes vary by specialty, market, offer, capacity, budget and execution. The system is designed to make the patient journey measurable and optimizable rather than promise an identical result for every practice."],
      ["What happens after I apply?","We review the practice, current acquisition process and major bottlenecks, then determine whether the system is appropriate for your situation."],
      ["Can this work with our existing team?","Yes. The system can be designed around your existing staff and tools where appropriate. The goal is to make responsibilities and handoffs clear."]
    ].map(([q,a])=><details key={q}><summary>{q}<ChevronDown /></summary><p>{a}</p></details>)}
  </div></div></section>
);

const Footer=()=> <footer className="footer"><div className="container flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-2"><Logo/><span>Zero Apple A Day</span></div><span>© {new Date().getFullYear()} Zero Apple A Day. All rights reserved.</span></div></footer>;

const Index=()=> <div className="landing-page"><Nav/><main><Hero/><Stats/><Problem/><Offer/><Journey/><Why/><Fit/><VSL/><CTA/><FAQ/></main><Footer/></div>;
export default Index;
