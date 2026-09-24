import { ArrowRight, BarChart3, Handshake, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import aboutImage from "../assets/images/about2.jpeg";

const pillars = [
  ["Investment", "Smart solutions for long-term wealth creation.", TrendingUp, "text-blue-600 bg-blue-50"],
  ["Loans", "Easy financial support when you need it most.", Wallet, "text-emerald-600 bg-emerald-50"],
  ["Insurance", "Protection for your family and future.", ShieldCheck, "text-violet-600 bg-violet-50"],
];

function About() {
  return <main className="relative overflow-hidden bg-[#f8fafc] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"><div className="pointer-events-none absolute -top-32 left-1/2 h-[35rem] w-[45rem] -translate-x-1/2 rounded-full border border-blue-100" />
    <section className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16"><div><p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-extrabold tracking-[.14em] text-blue-700 uppercase"><BarChart3 size={15} /> About Prime Wealth</p><h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Your trusted partner in <span className="text-blue-600">financial growth.</span></h1><div className="mt-5 h-1 w-14 rounded-full bg-blue-600" /><p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">At Prime Wealth, we help individuals and families make smarter financial decisions through investments, loans, and insurance solutions.</p><p className="mt-3 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Our goal is simple — understand your needs, provide the right financial guidance, and help you build a secure future.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{pillars.map(([title, text, Icon, tone]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><span className={`grid h-10 w-10 place-items-center rounded-xl ${tone}`}><Icon size={20} /></span><h2 className="mt-4 font-extrabold text-slate-950">{title}</h2><p className="mt-1 text-xs leading-5 text-slate-500">{text}</p><ArrowRight className="mt-4 text-slate-400" size={17} /></article>)}</div></div>
      <div className="relative mx-auto w-full max-w-xl pb-8"><div className="absolute -inset-5 rounded-[2.5rem] bg-blue-200/40 blur-2xl" /><img src={aboutImage} alt="Financial adviser meeting with clients" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-blue-950/15" /><div className="absolute -bottom-2 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:max-w-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-white"><Handshake size={20} /></span><span><strong className="block text-sm text-slate-950">Your goals, our commitment</strong><span className="block text-xs text-slate-500">Building wealth. Securing futures. Together.</span></span></div></div>
    </section>
  </main>;
}
export default About;
