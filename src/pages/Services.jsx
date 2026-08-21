import React from "react";
import { 
  TrendingUp, 
  ShieldCheck, 
  Landmark, 
  ChevronRight, 
  CheckCircle2,
  PieChart,
  Target,
  Briefcase,
  Car,
  HeartPulse,
  Home,
  Wallet,
  PhoneCall,
  Shield,
  Lock,
  Zap,
  Users
} from "lucide-react";

function Services() {
  return (
    <div className="w-full flex flex-col items-center font-sans bg-slate-50 overflow-hidden">
      
      {/* ==================================================== */}
      {/* 1. DARK HERO SECTION                                 */}
      {/* ==================================================== */}
      <section className="relative w-full bg-[#020617] text-white py-24 px-6 md:px-12 flex justify-center">
        {/* Background Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Center Container */}
        <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content */}
          <div className="w-full flex flex-col">
             <br/>
              <br/>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
              Solutions for <br />
              Every <span className="text-blue-500">Financial Goal</span>
            </h1>
             <br/>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Simple. Smart. Secure. Explore our comprehensive services designed to help you grow, protect, and achieve more with Prime Wealth.
            </p>
            <br/>
         
            
            
            <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500 w-6 h-6" /> Trusted Clients
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-amber-500 w-6 h-6" /> Expert Guidance
              </div>
              <div className="flex items-center gap-3">
                <Lock className="text-purple-500 w-6 h-6" /> Secure & Transparent
              </div>
            </div>
             <br/>
              <br/>
          </div>

          {/* Right Content: 3D Floating Glass Cards */}
          <div className="relative h-[300px] w-full hidden lg:flex justify-center items-center">
            <div className="absolute bottom-4 w-[80%] h-12 bg-blue-500/30 rounded-[100%] blur-xl"></div>
            <div className="absolute bottom-6 w-[70%] h-2 border-b border-blue-400/50 rounded-[100%]"></div>

            <div className="relative flex gap-6 items-end justify-center w-full z-10 pb-10">
              <div className="w-40 h-52 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <TrendingUp className="text-blue-400 w-12 h-12 mb-4" />
                <h3 className="font-bold text-base">Investment</h3>
                <p className="text-xs text-slate-400 text-center mt-2">Grow Wealth</p>
              </div>

              <div className="w-44 h-60 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(168,85,247,0.3)] z-10 mb-4">
                <ShieldCheck className="text-purple-400 w-14 h-14 mb-4" />
                <h3 className="font-bold text-lg">Insurance</h3>
                <p className="text-xs text-slate-400 text-center mt-2">Protect Matters</p>
              </div>

              <div className="w-40 h-52 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <Landmark className="text-amber-400 w-12 h-12 mb-4" />
                <h3 className="font-bold text-base">Loans</h3>
                <p className="text-xs text-slate-400 text-center mt-2">Achieve Goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. MAIN DETAILED SERVICES CARDS SECTION              */}
      {/* ==================================================== */}
      <section className="w-full flex flex-col items-center bg-slate-50 py-16 px-6 md:px-12 relative z-20">
        
        {/* Center Container */}
        <div className="w-full max-w-[1300px] flex flex-col items-center">
          
          <div className="w-full flex flex-col items-center text-center mt-10 mb-24 gap-6">
            {/* INCREASED SIZE AND WEIGHT FOR "OUR SERVICES" */}
            <p className="text-blue-600 font-extrabold tracking-widest text-lg md:text-xl uppercase">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Three Ways We Support Your Journey
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl text-center">
              Choose the right solution that fits your financial needs today.
            </p>
          </div>
            <br/>
              <br/>

          {/* Service Cards Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-12">
            
            {/* ---------------- CARD 1: INVESTMENT ---------------- */}
            <div className="w-full bg-white rounded-3xl p-8 xl:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Investment</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">Grow your wealth with smart, structured, and goal-oriented investment solutions.</p>
              <br/>
          

              <div className="w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent mb-8"></div>

              <ul className="flex flex-col gap-6">
                {[
                  { name: "Mutual Funds", icon: <PieChart size={22} /> },
                  { name: "SIP Investment", icon: <TrendingUp size={22} /> },
                  { name: "Goal Based Planning", icon: <Target size={22} /> },
                  { name: "Lump Sum Investment", icon: <Briefcase size={22} /> },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                      <span className="text-blue-500/70">{item.icon}</span>
                      {item.name}
                    </div>
                    <ChevronRight size={20} className="text-slate-300" />
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------------- CARD 2: INSURANCE ---------------- */}
            <div className="w-full bg-white rounded-3xl p-8 xl:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Insurance</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">Protect what matters most with the right coverage for you and your family.</p>
               <br/>
              
              <div className="w-full h-px bg-gradient-to-r from-purple-500/30 to-transparent mb-8"></div>

              <ul className="flex flex-col gap-6">
                {[
                  { name: "Life Insurance", icon: <Users size={22} /> },
                  { name: "Health Insurance", icon: <HeartPulse size={22} /> },
                  { name: "Vehicle Insurance", icon: <Car size={22} /> },
                  { name: "Term Insurance", icon: <Shield size={22} /> },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                      <span className="text-purple-500/70">{item.icon}</span>
                      {item.name}
                    </div>
                    <ChevronRight size={20} className="text-slate-300" />
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------------- CARD 3: LOANS ---------------- */}
            <div className="w-full bg-white rounded-3xl p-8 xl:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
                <Landmark size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Loans</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">Get the right loan for your personal or business needs with flexible terms.</p>
               <br/>
              
              <div className="w-full h-px bg-gradient-to-r from-amber-500/30 to-transparent mb-8"></div>

              <ul className="flex flex-col gap-6">
                <li className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                    <span className="text-amber-500/70"><Wallet size={22} /></span>
                    Personal Loan
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </li>
                <li className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                    <span className="text-amber-500/70"><Home size={22} /></span>
                    Home Loan
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </li>
                <li className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                    <span className="text-amber-500/70"><Briefcase size={22} /></span>
                    Business Loan
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </li>
                
                {/* LAMF Highlighted Item */}
                <li className="flex items-center justify-between w-full bg-amber-50/80 p-4 rounded-xl border border-amber-200 mt-2">
                  <div className="flex items-center gap-3 text-amber-900 font-extrabold text-lg">
                    <span className="text-amber-600"><Landmark size={22} /></span>
                    Loan Against MF
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-widest ml-2">Top</span>
                  </div>
                  <ChevronRight size={20} className="text-amber-600" />
                </li>
              </ul>
            </div>
            
          </div>
            <br/>
              <br/>
          
          {/* ==================================================== */}
          {/* 3. BOTTOM CTA BANNER & TRUST BADGES                  */}
          {/* ==================================================== */}
          
          <div className="w-full mt-32 mb-20 flex flex-col items-center">
            
            {/* CTA Banner - NOW CENTERED PROPERLY */}
            <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-[#020617] rounded-3xl p-10 lg:p-14 flex justify-center shadow-xl">
              
              {/* Inner container to hold text and button closer together */}
              <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full text-white text-center md:text-left max-w-2xl">
                  <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Let's Build Your Financial Future</h2>
                  <p className="text-blue-200 text-lg leading-relaxed">
                    Our experts are here to help you take the next step towards your goals. No prepayment penalties, flexible terms, and premium guidance.
                  </p>
                </div>
                
                <a 
                  href="tel:+918638499045"
                  className="shrink-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] text-lg whitespace-nowrap"
                >
                  Talk to an Expert <PhoneCall size={22} />
                </a>
              </div>
     </div>
       <br/>
         <br/>

            {/* Trust Features Grid */}
            <div className="w-full max-w-[1300px] grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {[
                { icon: <Target size={28} />, title: "Personalized", sub: "Solutions", color: "text-emerald-500", bg: "bg-emerald-100" },
                { icon: <Lock size={28} />, title: "100% Secure", sub: "Transactions", color: "text-purple-500", bg: "bg-purple-100" },
                { icon: <Zap size={28} />, title: "Quick & Easy", sub: "Process", color: "text-amber-500", bg: "bg-amber-100" },
                { icon: <ShieldCheck size={28} />, title: "Dedicated", sub: "Support", color: "text-blue-500", bg: "bg-blue-100" },
              ].map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className={`w-16 h-16 ${feat.bg} ${feat.color} rounded-full flex items-center justify-center mb-4`}>
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{feat.title}</h4>
                  <p className="text-base text-slate-500">{feat.sub}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
        <br/>
        <br/>
      </section>

    </div>
  );
}

export default Services;
