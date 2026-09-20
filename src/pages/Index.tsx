import { useState } from "react";
import { ArrowRight, Check, ChevronRight, Play, ShieldCheck, Star, Target, MessageCircle, CalendarCheck, BarChart3, PhoneCall, Search, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/logo.png";

const VSL_URL = "";

type Question = { id:string; question:string; sub?:string; options:string[] };

const questions:Question[] = [
  {id:"practice",question:"What type of healthcare practice do you run?",options:["Doctor / Specialist Clinic","Dental Clinic","Physiotherapy / Rehab","Aesthetic / Skin Clinic","Hospital / Medical Center","Other Healthcare Practice"]},
  {id:"patients",question:"How many new patients are you currently getting each month?",options:["0–10","11–25","26–50","51–100","100+"]},
  {id:"problem",question:"What is the biggest problem with your current patient flow?",options:["Not enough enquiries","Leads don't convert","Low-quality leads","Slow / inconsistent follow-up","Too many no-shows","I need the whole system"]},
  {id:"channels",question:"Where do most of your new patients currently come from?",options:["Google / Google Maps","Facebook / Instagram","Referrals","Walk-ins","Multiple channels","I don't have a consistent source"]},
  {id:"marketing",question:"Are you currently spending money on marketing?",options:["No","Under PKR 25,000/month","PKR 25,000–50,000/month","PKR 50,000–100,000/month","PKR 100,000+/month"]},
  {id:"goal",question:"What would you most like to improve?",options:["More qualified patient enquiries","More booked appointments","Higher show-up rate","A predictable patient acquisition system","Better ROI from my existing marketing"]},
  {id:"capacity",question:"If we generated more qualified patients, do you have capacity to see them?",options:["Yes, immediately","Yes, with some scheduling changes","Limited capacity","Not sure yet"]},
  {id:"ready",question:"How soon are you looking to improve your patient acquisition?",options:["Just researching","Within 3 months","Within 30 days","I'm actively looking for help now"]},
];

const Logo=()=> <img src={logo} alt="Zero Apple A Day" className="h-9 w-9 object-contain"/>;

const QuizGate=({onComplete}:{onComplete:()=>void})=>{
  const [step,setStep]=useState(0);
  const current=questions[step];
  const choose=(answer:string)=>{
    if(step<questions.length-1) setTimeout(()=>setStep(s=>s+1),120);
    else setTimeout(onComplete,220);
  };
  return <div className="quiz-shell">
    <div className="quiz-top"><div className="quiz-brand"><Logo/><span>Zero Apple A Day</span></div><span className="quiz-step">Question {step+1} of {questions.length}</span></div>
    <Progress value={((step+1)/questions.length)*100} className="h-1.5 mb-10"/>
    <div className="max-w-2xl mx-auto">
      <p className="eyebrow">Clinic Growth Assessment</p>
      <h2 className="quiz-title">{current.question}</h2>
      {current.sub&&<p className="quiz-sub">{current.sub}</p>}
      <div className="quiz-options">{current.options.map(o=><button key={o} className="quiz-option" onClick={()=>choose(o)}><span>{o}</span><ChevronRight className="h-5 w-5"/></button>)}</div>
      {step>0&&<button className="back-button" onClick={()=>setStep(s=>s-1)}>← Back</button>}
    </div>
  </div>
};

const VSL=()=> <section id="watch" className="vsl-section">
  <div className="container max-w-5xl">
    <div className="text-center mb-8"><p className="eyebrow">Your training is unlocked</p><h2 className="section-title">Watch: The Clinic Patient Growth System™</h2><p className="section-sub max-w-2xl mx-auto">See how we connect patient acquisition, conversion, follow-up and appointment booking into one system.</p></div>
    <div className="video-frame">{VSL_URL?<iframe src={VSL_URL} title="Clinic Patient Growth System VSL" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>:<div className="video-placeholder"><div className="play-button"><Play className="h-8 w-8 fill-current"/></div><h3>VSL video placeholder</h3><p>Add the final VSL URL to VSL_URL in Index.tsx.</p></div>}</div>
    <div className="text-center mt-8"><Button asChild variant="hero" size="xl"><a href="/checkout">Apply for the Patient Growth System <ArrowRight className="ml-2"/></a></Button></div>
  </div>
</section>;

const Nav=()=> <header className="site-nav"><div className="container flex items-center justify-between h-16"><a href="#" className="flex items-center gap-2 font-semibold"><Logo/><span>Zero Apple <span className="text-gradient">A Day</span></span></a><a href="#offer" className="nav-cta">See The Offer <ArrowRight className="h-4 w-4"/></a></div></header>;

const Hero=({onStart}:{onStart:()=>void})=><section className="hero">
  <div className="hero-glow one"/><div className="hero-glow two"/>
  <div className="container relative z-10 text-center">
    <div className="pill"><span className="live-dot"/> For Doctors, Clinics & Healthcare Practices</div>
    <h1 className="hero-title">Stop Buying <span className="text-gradient">Leads.</span><br/>Build A Patient Acquisition System.</h1>
    <p className="hero-sub">We help healthcare practices attract the right patients, convert more enquiries, follow up automatically and fill more appointment slots — without leaving your team to chase every lead.</p>
    <div className="hero-actions"><Button variant="hero" size="xl" onClick={onStart}>See If Your Clinic Qualifies <ArrowRight className="ml-2"/></Button></div>
    <div className="trust-row"><span><ShieldCheck/> Healthcare-focused</span><span><Target/> Built around booked appointments</span><span><Zap/> Acquisition + conversion + follow-up</span></div>
  </div>
</section>;

const Numbers=()=> <section className="numbers"><div className="container numbers-grid">
  {[["01","Attract","Get discovered by people actively looking for your service."],["02","Convert","Turn clicks and enquiries into real conversations."],["03","Follow Up","Respond fast and keep prospects engaged."],["04","Book","Move qualified prospects onto your appointment calendar."]].map(([n,t,d])=><div className="number-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
</div></section>;

const Problem=()=> <section className="dark-section"><div className="container">
  <div className="max-w-3xl mx-auto text-center"><p className="eyebrow">The problem</p><h2 className="section-title">A full inbox doesn't necessarily mean a full appointment book.</h2><p className="section-sub">Most clinics lose potential patients somewhere between the first click and the appointment. That's where the system matters.</p></div>
  <div className="problem-grid">{[
    ["No predictable patient flow","You depend on referrals, random posts or inconsistent ad campaigns."],
    ["Leads that never book","Your team gets enquiries but doesn't have a consistent conversion process."],
    ["Slow follow-up","Patients wait for a response while your reception team is busy."],
    ["Missed calls & lost enquiries","A missed call can become a patient who books somewhere else."],
    ["No-show appointments","Bookings aren't enough if patients don't actually arrive."],
    ["Marketing without attribution","You can see clicks and leads but can't connect them to appointments."]
  ].map(([t,d])=><Card className="problem-card" key={t}><div className="problem-icon"><Target/></div><h3>{t}</h3><p>{d}</p></Card>)}</div>
</div></section>;

const Offer=()=> <section id="offer" className="section"><div className="container">
  <div className="max-w-3xl mx-auto text-center"><p className="eyebrow">Introducing</p><h2 className="section-title">The <span className="text-gradient">Clinic Patient Growth System™</span></h2><p className="section-sub">One connected system for attracting, converting and booking more patients.</p></div>
  <div className="offer-grid">
    {[
      [Search,"Patient Acquisition","Google Ads, Meta Ads, Google Business Profile and local visibility designed around your priority services."],
      [Target,"Offer & Funnel","Patient-focused offers, landing pages and conversion paths that give prospects a clear next step."],
      [MessageCircle,"Lead Follow-Up","WhatsApp, SMS and email workflows that keep enquiries moving instead of letting them disappear."],
      [PhoneCall,"Missed Call Recovery","A structured response process for missed calls and unanswered enquiries."],
      [CalendarCheck,"Appointment Booking","Booking workflows that move qualified prospects from conversation to a scheduled appointment."],
      [Zap,"Show-Up System","Confirmation, reminder and no-show recovery workflows designed to improve attendance."],
      [BarChart3,"Tracking & Optimization","Measure enquiries, bookings and patient-flow bottlenecks so decisions aren't based only on clicks."],
      [TrendingUp,"Growth & Reactivation","Reactivate old enquiries and past opportunities while improving the acquisition engine."]
    ].map(([Icon,t,d])=>{const I=Icon as any;return <Card className="offer-card" key={t as string}><div className="offer-icon"><I/></div><h3>{t as string}</h3><p>{d as string}</p><span className="learn">Included in the system <Check/></span></Card>})}
  </div>
</div></section>;

const Mechanism=()=> <section className="dark-section"><div className="container">
  <div className="proof-grid"><div><p className="eyebrow">How it works</p><h2 className="section-title text-left">From first click to <span className="text-gradient">booked patient.</span></h2><p className="section-sub text-left">Instead of selling isolated services, we connect the patient journey into one measurable growth system.</p></div>
  <div className="metric-stack">{["Get found by the right patients","Capture the enquiry","Qualify intent and fit","Follow up quickly","Book the appointment","Confirm the appointment","Recover missed opportunities","Optimize what produces bookings"].map((x,i)=><div className="metric" key={x}><div><span>0{i+1}</span><strong>{x}</strong></div><Check/></div>)}</div></div>
</div></section>;

const Proof=()=> <section className="section"><div className="container"><div className="max-w-3xl mx-auto text-center"><p className="eyebrow">What we measure</p><h2 className="section-title">We care about what happens <span className="text-gradient">after the lead.</span></h2><p className="section-sub">Clicks and impressions are useful diagnostics. The business outcome is the patient journey.</p></div><div className="proof-cards">
  {[["Enquiries","How many people actually contact your clinic?"],["Qualified opportunities","How many fit the service, location and intent?"],["Booked appointments","How many move onto the calendar?"],["Show-ups","How many actually attend?"],["Cost per opportunity","What are you paying to create a real opportunity?"],["Recovery","How many lost enquiries can be brought back?"]].map(([t,d])=><div className="proof-card" key={t}><Star/><h3>{t}</h3><p>{d}</p></div>)}
</div></div></section>;

const OfferCTA=({onStart}:{onStart:()=>void})=><section className="cta-section"><div className="container text-center max-w-3xl"><p className="eyebrow">See if we're a fit</p><h2 className="section-title">Your clinic may not need another marketing service. It may need a <span className="text-gradient">connected patient-growth system.</span></h2><p className="section-sub">Answer a few questions and we'll show you the training explaining how the system works.</p><Button variant="hero" size="xl" onClick={onStart}>See If Your Clinic Qualifies <ArrowRight className="ml-2"/></Button></div></section>;

const FAQ=()=> <section className="section faq"><div className="container max-w-3xl"><div className="text-center"><p className="eyebrow">Questions</p><h2 className="section-title">Before you watch</h2></div><div className="faq-list">{[
["Is this just an ads service?","No. Ads can be one acquisition channel, but the offer is built around the complete journey from attraction to enquiry, follow-up, booking and show-up."],
["Do I need to replace my existing marketing team?","Not necessarily. The system can be structured around the tools and people you already have, depending on the gaps in your current process."],
["What types of clinics can use this?","The system is designed for doctors, dental clinics, physiotherapy practices, aesthetic clinics, hospitals and other healthcare businesses with capacity for additional patients."],
["Will you guarantee a specific number of patients?","Patient volume depends on specialty, market, capacity, offer, budget and execution. We focus on building and measuring the system rather than promising an identical result for every clinic."],
["What happens after I watch the VSL?","If the system looks relevant, you can apply for a conversation about your clinic, current patient flow and whether the model is a fit."]
].map(([q,a])=><details key={q}><summary>{q}<ChevronRight/></summary><p>{a}</p></details>)}</div></div></section>;

const Footer=()=> <footer className="footer"><div className="container flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-2"><Logo/><span>Zero Apple A Day</span></div><span>© {new Date().getFullYear()} Zero Apple A Day. All rights reserved.</span></div></footer>;

const Index=()=>{
  const [quizOpen,setQuizOpen]=useState(false); const [unlocked,setUnlocked]=useState(false);
  const start=()=>{setQuizOpen(true);window.scrollTo({top:0,behavior:"smooth"});}
  if(quizOpen&&!unlocked) return <QuizGate onComplete={()=>{setQuizOpen(false);setUnlocked(true);setTimeout(()=>document.getElementById("watch")?.scrollIntoView({behavior:"smooth"}),100)}}/>;
  return <div className="landing-page"><Nav/><main><Hero onStart={start}/>{unlocked&&<VSL/>}<Numbers/><Problem/><Offer/><Mechanism/><Proof/><OfferCTA onStart={start}/><FAQ/></main><Footer/></div>;
};
export default Index;
