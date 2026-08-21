import React, { useState } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Wallet,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Briefcase
} from "lucide-react";

// ==========================================
// IMPORTING IMAGES
// ==========================================
import heroImage from "../assets/images/hero2.png"; 
import assetplusLogo from "../assets/images/Assetplus.jpeg";
import policybazaarLogo from "../assets/images/policybazaar.jpg";
import voltLogo from "../assets/images/volt.png";
import andromedaLogo from "../assets/images/andromeda.jpg";
import ruloansLogo from "../assets/images/ruloans.jpg";

function Home() {
  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "What financial services does Prime Wealth offer?",
      answer: "We offer a comprehensive suite of services including Mutual Fund Investments, Life & Health Insurance, and various loan products (Home Loans, Business Loans, Loan Against Mutual Funds) tailored to your needs."
    },
    {
      question: "Is my investment safe with Prime Wealth?",
      answer: "Absolutely. We are partnered with SEBI registered platforms and industry-leading institutions like AssetPlus and Policybazaar. Your investments are routed directly through authorized channels, ensuring 100% transparency and security."
    },
    {
      question: "How do I start investing or apply for a loan?",
      answer: "Starting is simple! You can click on the 'Request Consultation' button to book a free call with our experts. We will understand your financial goals and guide you step-by-step through the entire process."
    },
    {
      question: "Are there any hidden charges for consultation?",
      answer: "No, our initial financial consultation is completely free of charge. We believe in providing transparent guidance first, so you can make informed decisions about your wealth."
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] font-sans pt-[150px] pb-0 overflow-hidden flex flex-col items-center">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-400/20 to-transparent blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* ================= 1. CENTERED HERO TEXT (WITH MORE INFO & SPACING) ================= */}
      <section className="w-full max-w-[1100px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs tracking-widest px-5 py-2.5 rounded-full uppercase shadow-sm">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Welcome to Prime Wealth
        </div>
        
        <br />
        <br />

        {/* Broad Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[76px] font-black text-[#0a192f] leading-[1.1] tracking-tighter">
          Your Vision, <br />
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Strategy.</span>
        </h1>
        
        <br />
        <br />

        {/* Subtitle (Detailed Information) */}
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
          We simplify complex financial decisions for individuals and families across India. Get expert guidance on high-return investments, seamless loan approvals, and comprehensive insurance policies to secure your family's future and accelerate your financial growth.
        </p>
        
        <br />
        <br />

        {/* Extended Checkmarks for More Info (Centered Horizontally) */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 w-full max-w-4xl">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm md:text-base">
            <CheckCircle2 size={22} className="text-emerald-500" /> SEBI Registered Partners
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm md:text-base">
            <CheckCircle2 size={22} className="text-emerald-500" /> Tailored Financial Planning
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm md:text-base">
            <CheckCircle2 size={22} className="text-emerald-500" /> 100% Secure Process
          </div>
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm md:text-base">
            <CheckCircle2 size={22} className="text-emerald-500" /> Dedicated Wealth Advisors
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
          <a href="/contact" className="w-full sm:w-auto bg-[#0a192f] hover:bg-blue-600 text-white font-extrabold text-lg py-4 px-10 rounded-full flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(10,25,47,0.2)] transition-all transform hover:-translate-y-1">
            Start Your Journey <ArrowRight size={20} />
          </a>
          <a href="/services" className="w-full sm:w-auto bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 hover:text-blue-600 font-extrabold text-lg py-4 px-10 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm">
            Explore Our Services
          </a>
        </div>
        
        <br />
        <br />
        
        {/* Quick Stats Row (Extra Info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl border-y border-slate-200 py-6">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-black text-[#0a192f]">10M+</h4>
            <p className="text-sm font-bold text-slate-500">Happy Families</p>
          </div>
          <div className="flex flex-col items-center md:border-x border-slate-200">
            <h4 className="text-2xl font-black text-blue-600">50+</h4>
            <p className="text-sm font-bold text-slate-500">Trusted Partners</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-black text-emerald-600">₹500Cr+</h4>
            <p className="text-sm font-bold text-slate-500">Wealth Managed</p>
          </div>
        </div>

      </section>

      <br />
      <br />
      <br />

      {/* ================= 2. CINEMATIC CENTER IMAGE ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-6 relative z-20">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] p-3 md:p-4 bg-white/50 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white">
          <img 
            src={heroImage} 
            alt="Family securing financial future" 
            className="w-full h-full object-cover rounded-[2rem] shadow-inner"
            style={{ objectPosition: "center 20%" }} 
          />
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* ================= 3. THE TRUST STRIP (Visible & Grayscale) ================= */}
      <section className="w-full border-y border-slate-200/60 bg-white py-12">
        <div className="max-w-[1300px] mx-auto px-6 flex flex-col items-center">
          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase text-center">Trusted By & Partnered With</p>
          
          <br />
          <br />

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src={assetplusLogo} alt="AssetPlus" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
            <img src={policybazaarLogo} alt="Policybazaar" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
            <img src={voltLogo} alt="Volt Money" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
            <img src={andromedaLogo} alt="Andromeda" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
            <img src={ruloansLogo} alt="Ruloans" className="h-8 md:h-10 lg:h-12 object-contain mix-blend-multiply" />
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* ================= 4. SOLUTIONS GRID (Strictly Left-Aligned) ================= */}
      <section className="w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] tracking-tight">Our Core <span className="text-blue-600">Solutions</span></h2>
          <br />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Comprehensive financial services designed to help you build, protect, and leverage your wealth.</p>
        </div>

        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          
          {/* Card 1: Investments */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-start text-left shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp size={32} />
            </div>
            
            <br />
            
            <h3 className="text-2xl font-bold text-slate-900">Investments</h3>
            
            <br />
            
            <p className="text-slate-500 leading-relaxed">
              Grow your wealth with tailored mutual funds, stocks, and fixed deposit strategies designed for your risk profile.
            </p>
            
            <br />
            <br />

            <a href="/services" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all mt-auto">
              Learn More <ArrowRight size={18} />
            </a>
          </div>

          {/* Card 2: Insurance */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-start text-left shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-purple-500"></div>
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            
            <br />

            <h3 className="text-2xl font-bold text-slate-900">Insurance</h3>
            
            <br />

            <p className="text-slate-500 leading-relaxed">
              Protect your family's future and your health with comprehensive, customized insurance policies.
            </p>
            
            <br />
            <br />

            <a href="/services" className="flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all mt-auto">
              Learn More <ArrowRight size={18} />
            </a>
          </div>

          {/* Card 3: Loans */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-start text-left shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wallet size={32} />
            </div>
            
            <br />

            <h3 className="text-2xl font-bold text-slate-900">Loans</h3>
            
            <br />

            <p className="text-slate-500 leading-relaxed">
              Achieve your dreams instantly with hassle-free personal loans, business loans, and loans against mutual funds.
            </p>
            
            <br />
            <br />

            <a href="/services" className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all mt-auto">
              Learn More <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* ================= 5. FAQ SECTION (Left-Aligned Texts) ================= */}
      <section className="w-full max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f]">Frequently Asked Questions</h2>
          <br />
          <p className="text-slate-500 text-lg">Got questions? We've got answers.</p>
        </div>

        <br />
        <br />

        <div className="flex flex-col gap-5 w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left font-bold text-slate-800 focus:outline-none"
              >
                <span className="text-lg pr-4">{faq.question}</span>
                {openFaq === index ? <ChevronUp className="text-blue-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out px-6 text-left ${openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* ================= 6. FINAL CTA BANNER ================= */}
      <section className="w-full max-w-[1300px] mx-auto px-6 lg:px-12 mb-20">
        <div className="w-full bg-gradient-to-br from-[#160a4c] to-[#0e3b9c] rounded-[2.5rem] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-tr-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl md:mb-0">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to take control of your <span className="text-[#00e1ff]">finances?</span>
            </h2>
            <br />
            <p className="text-blue-100/90 text-lg">
              Book a free consultation with our experts today and start your journey towards financial freedom.
            </p>
          </div>

          <div className="relative z-10 shrink-0 mt-10 md:mt-0">
            <a 
              href="/contact"
              className="bg-white text-[#160a4c] hover:bg-slate-50 font-extrabold text-xl py-5 px-10 rounded-full transition-all shadow-xl tracking-wide flex items-center gap-3 group"
            >
              Request Consultation <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;