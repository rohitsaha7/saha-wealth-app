import React, { useState } from "react";
import { 
  Send, 
  Phone, 
  User, 
  Mail, 
  MessageSquare,
  ArrowRight,
  Headphones,
  Paperclip,
  CheckCircle2
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // UPDATED SUBMIT FUNCTION FOR BACKEND API
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending data to your Node.js backend
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your enquiry has been submitted successfully.");
        // Clear the form fields after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: "",
          message: ""
        });
      } else {
        alert("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-sans pt-[130px] pb-24 px-4 sm:px-6 md:px-12 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-10 lg:left-32 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-blue-500 animate-bounce hidden md:flex" style={{ animationDuration: '3s' }}>
        <Send size={24} className="transform -translate-y-1 translate-x-0.5" />
      </div>
      <div className="absolute top-64 right-10 lg:right-32 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center text-indigo-600 animate-pulse hidden md:flex" style={{ animationDuration: '4s' }}>
        <Headphones size={32} />
      </div>

      {/* ================= HEADER SECTION ================= */}
      <section className="w-full max-w-3xl text-center mb-16 relative z-10">
        <div className="inline-block bg-blue-100 text-blue-700 font-bold text-sm tracking-widest px-8 py-3 rounded-full mb-6 uppercase shadow-sm">
          Get In Touch
        </div>
        <br />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
          Let's Talk About Your <br />
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Financial Future
          </span>
        </h1>
        
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Whether you are looking to invest, protect your family, or arrange a suitable loan, our team is here to help.
        </p>
        <br />
      </section>

      {/* ================= 1. ENQUIRY FORM SECTION ================= */}
      <section className="w-full max-w-[900px] mb-24 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100">
          
          <div className="flex items-center justify-center gap-5 mb-14 text-center">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Paperclip size={32} />
            </div>
            <div className="text-left">
              <br/>
              <h2 className="text-4xl font-bold text-slate-900">Send an Enquiry</h2>
              <p className="text-base text-slate-500 mt-2">Fill in your details and we'll get back to you shortly.</p>
              <br/>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-bold text-slate-700 ml-1">Full Name</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-6 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                  <User size={26} className="text-slate-400 shrink-0" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent py-7 pl-5 text-left text-slate-700 text-xl outline-none"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-bold text-slate-700 ml-1">Mobile Number</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-6 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                  <Phone size={26} className="text-slate-400 shrink-0" />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your mobile number"
                    className="w-full bg-transparent py-7 pl-5 text-left text-slate-700 text-xl outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-bold text-slate-700 ml-1">
                Email Address <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-6 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                <Mail size={26} className="text-slate-400 shrink-0" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent py-7 pl-5 text-left text-slate-700 text-xl outline-none"
                />
              </div>
            </div>

            {/* Interested In */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-bold text-slate-700 ml-1">Interested In</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-6 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all relative">
                <CheckCircle2 size={26} className="text-slate-400 shrink-0" />
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent py-7 pl-5 pr-10 text-left text-slate-700 text-xl outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Investment">Investment</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Loans">Loans</option>
                  <option value="All of the Above">All of the Above</option>
                </select>
                <div className="absolute right-6 pointer-events-none flex items-center">
                  <svg width="16" height="12" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-bold text-slate-700 ml-1">
                Message <span className="font-normal text-slate-400">(Optional)</span>
              </label>
              <div className="flex bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                <MessageSquare size={26} className="text-slate-400 shrink-0 mt-2" />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full bg-transparent pl-5 pt-1 text-left text-slate-700 text-xl outline-none resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-black text-2xl md:text-3xl py-10 rounded-[2rem] flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(79,70,229,0.35)] transition-all transform hover:-translate-y-1 tracking-wide"
            >
              Send Enquiry <Send size={32} className="ml-2" />
            </button>

          </form>
        </div>
        <br/>
        <br/>
      </section>

      {/* ================= 2. DIRECT CALL BANNER SECTION ================= */}
      <section className="w-full max-w-[900px] mb-32 relative z-10">
        <div className="w-full bg-gradient-to-br from-[#160a4c] to-[#0e3b9c] rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-tr-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full">
            <br/>
            <br/>
            <br/>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Prefer to Talk <span className="text-[#00e1ff]">Directly?</span>
            </h2>
            <br />
            <div className="w-20 h-1.5 bg-white/20 rounded-full mb-8"></div>
            
            <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-14">
              Have a question or want to discuss your financial requirements? Our team is just a call away.
            </p>
            <br />
            
            <div className="relative flex flex-col items-center justify-center">
              <div className="absolute w-36 h-36 border border-white/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
              <div className="absolute w-52 h-52 border border-white/10 rounded-full animate-[ping_4s_linear_infinite]"></div>
              
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center text-[#160a4c] relative z-10 shadow-2xl mb-6">
                <Phone size={47} className="fill-current" />
              </div>
              <br />
              
              <a 
                href="tel:+918638499045"
                className="relative z-20 bg-white/10 hover:bg-white hover:text-[#160a4c] text-white backdrop-blur-md border border-white/30 font-bold text-xl py-5 px-10 rounded-full transition-all shadow-xl tracking-wider mt-4"
              >
                Click to Call
              </a>
              <br />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. OTHER WAYS TO CONNECT SECTION ================= */}
      <section className="w-full max-w-[1200px] flex flex-col items-center">
        
        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-center">
            <br />
            Other Ways to <span className="text-indigo-600">Connect</span>
          </h2>
          <br />
          <br />
          <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-20"></div>
        </div>
        <br />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/918638499045" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-[2rem] p-10 flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:-translate-y-2"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-2xl"></div>
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-[#25D366] mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <FaWhatsapp size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">WhatsApp</h3>
            <p className="text-base text-slate-500 mb-10">Chat with us instantly for quick support</p>
            <div className="mt-auto w-12 h-12 rounded-full border border-emerald-200 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Instagram Card */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-[2rem] p-10 flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] hover:-translate-y-2"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100/50 rounded-full blur-2xl"></div>
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E1306C] mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <FaInstagram size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Instagram</h3>
            <p className="text-base text-slate-500 mb-10">Follow us for updates, tips and more</p>
            <div className="mt-auto w-12 h-12 rounded-full border border-pink-200 text-pink-500 flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Facebook Card */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group w-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2rem] p-10 flex flex-col items-center text-center relative overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100/50 rounded-full blur-2xl"></div>
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1877F2] mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
              <FaFacebookF size={44} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Facebook</h3>
            <p className="text-base text-slate-500 mb-10">Connect with us and stay updated on our latest offers</p>
            <div className="mt-auto w-12 h-12 rounded-full border border-blue-200 text-blue-500 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
              <ArrowRight size={20} />
            </div>
          </a>

        </div>
      </section>

      <br />
      <br /> 
      <br />
    </div>
  );
}

export default Contact;