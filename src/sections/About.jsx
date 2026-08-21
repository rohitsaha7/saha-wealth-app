import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Wallet, 
  ShieldCheck, 
  ArrowRight, 
  Shield, 
  Handshake 
} from "lucide-react";

// ==========================================
// IMPORTING IMAGE FROM YOUR ASSETS FOLDER
// ==========================================
import aboutImage from "../assets/images/about2.jpeg";

function About() {
  return (
    // Wrapper for Homepage section with top and bottom padding
    <div className="w-full bg-[#f8fafc] font-sans py-24 overflow-hidden flex flex-col items-center relative">
      
      {/* ================= BACKGROUND DECORATIONS ================= */}
      <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-[1px] border-blue-100 rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border-[1px] border-blue-50/50 rounded-full pointer-events-none"></div>

      {/* ================= MAIN CONTAINER ================= */}
      {/* ADDED 'mx-auto' and 'mb-16' to PERFECTLY CENTER it and PREVENT OVERLAPPING below */}
      <section className="w-full max-w-[1300px] mx-auto px-6 lg:px-12 mb-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* ================= LEFT SIDE: TEXT & CARDS ================= */}
        <div className="flex flex-col items-start text-left w-full pr-0 lg:pr-8">
          
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 font-bold text-xs tracking-widest px-4 py-2 rounded-full mb-8 uppercase border border-blue-100 shadow-sm">
            <BarChart3 size={20} />
            About Prime Wealth
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            Your Trusted Partner <br />
            in <span className="text-blue-600">Financial Growth</span>
          </h2>
          
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mb-8"></div>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-xl">
            At Prime Wealth, we help individuals and families make smarter financial decisions through investments, loans, and insurance solutions.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-xl">
            Our goal is simple — understand your needs, provide the right financial guidance, and help you build a secure future.
          </p>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 border-b-4 border-b-blue-500 hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Investment</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                Smart solutions for long-term wealth creation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 border-b-4 border-b-emerald-500 hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Loans</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                Easy financial support when you need it most.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 border-b-4 border-b-purple-500 hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Insurance</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                Protection for your family and future.
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: IMAGE & FLOATING CARDS ================= */}
        {/* Added pb-12 so the floating card has space to breathe and doesn't overlap */}
        <div className="relative w-full h-full min-h-[500px] flex items-center justify-center mt-10 lg:mt-0 pb-12">
          
          <div className="relative z-10 w-full max-w-[550px] aspect-[4/3]">
            <img 
              src={aboutImage} 
              alt="Financial Advisor Meeting" 
              className="w-full h-full object-cover shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
              style={{ 
                borderRadius: "6rem 2rem 6rem 2rem" 
              }}
            />
          </div>

          <div className="absolute top-10 right-4 lg:-right-4 z-20 bg-blue-600 text-white p-4 rounded-2xl shadow-xl shadow-blue-600/30 animate-bounce" style={{ animationDuration: '4s' }}>
            <Shield size={32} />
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-[90%] sm:w-[80%] bg-white rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0a192f] text-white rounded-xl flex items-center justify-center shrink-0 shadow-inner">
              <Handshake size={28} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">Your Goals, Our Commitment</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Building wealth. Securing futures. Together.</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;