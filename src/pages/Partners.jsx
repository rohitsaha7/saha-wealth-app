import React from "react";
import { 
  Users, 
  ShieldCheck, 
  Building2,
  Handshake,
  Award,
  BarChart3,
  Link as LinkIcon,
  Rocket
} from "lucide-react";

// ==========================================
// IMPORTING LOGOS FROM YOUR ASSETS FOLDER
// ==========================================
import assetplusLogo from "../assets/images/Assetplus.jpeg";
import policybazaarLogo from "../assets/images/policybazaar.jpg";
import voltLogo from "../assets/images/volt.png";
import andromedaLogo from "../assets/images/andromeda.jpg";
import ruloansLogo from "../assets/images/ruloans.jpg";

function Partners() {
  
  const partnersList = [
    {
      name: "AssetPlus",
      logo: assetplusLogo,
      desc: "Empowering investors with intelligent investment solutions and advisory services.",
      accent: "bg-emerald-500",
    },
    {
      name: "Policybazaar",
      logo: policybazaarLogo,
      desc: "India's leading platform for insurance and financial product comparison.",
      accent: "bg-blue-500",
    },
    {
      name: "Volt Money",
      logo: voltLogo,
      desc: "Digital lending and financial services platform for a smarter tomorrow.",
      accent: "bg-indigo-600",
    },
    {
      name: "Andromeda",
      logo: andromedaLogo,
      desc: "Technology-driven financial solutions for businesses and individuals.",
      accent: "bg-blue-600",
    },
    {
      name: "Ruloans",
      logo: ruloansLogo,
      desc: "Business loans and credit solutions tailored to your needs.",
      accent: "bg-[#0b1f3f]",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafcff] font-sans pt-[130px] pb-24 overflow-hidden flex flex-col items-center">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="w-full max-w-[1300px] px-6 lg:px-12 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-block bg-blue-50 text-indigo-600 font-bold text-xs tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase border border-indigo-100">
            Our Partners
          </div>
          <br />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a202c] leading-tight mb-6 tracking-tight">
            Stronger Partnerships, <br />
            <span className="text-indigo-600">Smarter Finance.</span>
          </h1>
          <br />
          
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg mb-8">
            At Prime Wealth, we collaborate with leading financial institutions and innovative companies to deliver reliable, seamless and future-ready solutions.
          </p>
          <br />

          {/* Feature Badges matching the screenshot */}
          <div className="flex flex-wrap gap-6 mt-2">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <p className="text-sm font-bold text-slate-700 leading-snug">
                Trusted <br /> Partnerships
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                <Award size={20} />
              </div>
              <p className="text-sm font-bold text-slate-700 leading-snug">
                Secure & <br /> Compliant
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <BarChart3 size={20} />
              </div>
              <p className="text-sm font-bold text-slate-700 leading-snug">
                Customer <br /> First Approach
              </p>
            </div>

          </div>
        </div>

        {/* Right Content: Orbital/Node Animation UI */}
        <div className="relative flex items-center justify-center h-[400px] w-full hidden lg:flex">
          
          {/* Center Logo/Icon */}
          <div className="relative z-20 w-32 h-32 bg-white rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.15)] flex items-center justify-center border-4 border-slate-50">
            <span className="text-5xl font-extrabold text-blue-600">PW</span>
          </div>

          {/* Outer Orbital Rings */}
          <div className="absolute w-[380px] h-[380px] border-[1.5px] border-dashed border-slate-200 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute w-[250px] h-[250px] border border-slate-100 rounded-full"></div>

          {/* Orbiting Nodes */}
          <div className="absolute top-4 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm z-10">
            <Handshake size={20} />
          </div>
          <div className="absolute bottom-4 w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm z-10">
            <ShieldCheck size={20} />
          </div>
          <div className="absolute left-6 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm z-10">
            <Users size={20} />
          </div>
          <div className="absolute right-6 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shadow-sm z-10">
            <Building2 size={20} />
          </div>

          {/* Decorative glowing dots */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </section>

      {/* ================= 2. PARTNERS GRID SECTION ================= */}
      <section className="w-full max-w-[1300px] px-6 lg:px-12 mb-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a202c] mb-4 tracking-tight">Our Trusted Partners</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            We partner with industry leaders to bring you the best financial products and services.
          </p>
        </div>
        <br />

        {/* Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {partnersList.map((partner, index) => (
            <div 
              key={index}
              // Changed from items-start text-left to items-center text-center
              className="bg-white rounded-[2rem] p-10 lg:p-12 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Line - Centered */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-b-md ${partner.accent}`}></div>
              
              {/* Partner Logo - Centered */}
              <div className="h-16 md:h-20 flex items-center justify-center mb-8 mt-4 w-full">
                <img src={partner.logo} alt={partner.name} className="max-h-full max-w-[180px] md:max-w-[200px] object-contain mix-blend-multiply" />
              </div>
              
              {/* Description - Centered and break-words to prevent overflow */}
              <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-4 flex-grow break-words w-full">
                {partner.desc}
              </p>
              
            </div>
          ))}

        </div>
      </section>

      {/* ================= 3. STATIC "MANY MORE" BANNER ================= */}
      <section className="w-full max-w-[1300px] px-6 lg:px-12 mb-20">
        <br />
        <div className="w-full bg-[#f8faff] border border-indigo-50 rounded-[1.5rem] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          
          <div className="flex items-center gap-5 flex-col md:flex-row text-center md:text-left">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">And Many More Companies</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md">
                We are continuously expanding our network to bring you more choices, better services, and greater value.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pointer-events-none mt-4 md:mt-0">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 shadow-sm"><ShieldCheck size={16}/></div>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-rose-400 shadow-sm"><Award size={16}/></div>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-blue-400 shadow-sm"><Handshake size={16}/></div>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-indigo-400 shadow-sm"><Users size={16}/></div>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 shadow-sm text-xs font-bold">+</div>
            </div>
          </div>

        </div>
        <br />
      </section>

      {/* ================= 4. STATS BANNER (Dark Blue Bottom) ================= */}
      <section className="w-full max-w-[1300px] px-6 lg:px-12">
        <br />
        <div className="w-full bg-[#0a192f] rounded-[2rem] p-10 lg:p-14 grid grid-cols-2 md:grid-cols-4 gap-10 shadow-2xl">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
              <Users size={24} />
            </div>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-2">50+</h4>
            <p className="text-sm font-bold text-slate-300 mb-1">Trusted Partners</p>
            <p className="text-xs text-slate-500">Industry leaders working with us</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
              <LinkIcon size={24} />
            </div>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-2">100+</h4>
            <p className="text-sm font-bold text-slate-300 mb-1">Integrated Solutions</p>
            <p className="text-xs text-slate-500">Wide range of financial products</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-2">10M+</h4>
            <p className="text-sm font-bold text-slate-300 mb-1">Happy Customers</p>
            <p className="text-xs text-slate-500">Serving millions through our network</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
              <Rocket size={24} />
            </div>
            <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-2">7+</h4>
            <p className="text-sm font-bold text-slate-300 mb-1">Years of Collaboration</p>
            <p className="text-xs text-slate-500">Building strong partnerships</p>
          </div>

        </div>
        <br />
      </section>

    </div>
  );
}

export default Partners;