import { useState } from "react";
import { ArrowRight, CheckCircle2, Headphones, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Ensure trailing slashes are trimmed and default to render backend URL
const envUrl = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, "") : "";
const apiBaseUrl = envUrl || "https://sahatra-backend-yaew.onrender.com";

const emptyForm = { name: "", phone: "", email: "", interest: "", message: "" };

function Field({ icon: Icon, children }) {
  return <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10"><Icon size={19} className="shrink-0 text-slate-400" />{children}</div>;
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); 
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${apiBaseUrl}/api/enquiries`, { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(formData) 
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned HTML instead of JSON. Render server might be starting up. Please try again in 10 seconds.");
      }

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to send your enquiry.");

      setFormData(emptyForm); 
      setStatus({ type: "success", message: "Thanks — your enquiry is on its way. We’ll be in touch shortly." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to connect right now. Please call us instead." });
    } finally { 
      setIsSubmitting(false); 
    }
  };

  const channels = [
    { label: "WhatsApp", text: "Chat with us for quick support", href: "https://wa.me/918638499045", Icon: FaWhatsapp, color: "text-emerald-500", ring: "group-hover:border-emerald-200" },
    { label: "Instagram", text: "Follow us for updates and tips", href: "#", Icon: FaInstagram, color: "text-pink-500", ring: "group-hover:border-pink-200" },
    { label: "Facebook", text: "Connect and stay up to date", href: "#", Icon: FaFacebookF, color: "text-blue-600", ring: "group-hover:border-blue-200" },
  ];

  return <main className="relative overflow-hidden bg-[#f7faff] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
    <div className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-300/25 blur-3xl" />
    <section className="relative mx-auto max-w-3xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-xs font-extrabold tracking-[0.16em] text-blue-700 uppercase shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Get in touch</p>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Financial clarity starts with <span className="text-blue-600">one conversation.</span></h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">Whether you want to invest, protect your family, or arrange a suitable loan, our team is ready to help.</p>
    </section>

    <section className="relative mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <aside className="rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-8 lg:flex lg:flex-col">
        <div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-200 uppercase">Speak with an advisor</span><h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Make your next financial move with confidence.</h2><p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">Tell us what you’re planning. We’ll help you understand your options and choose a clear path forward.</p></div>
        <a href="tel:+918638499045" className="mt-8 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500 text-white"><Phone size={20} /></span><span><span className="block text-xs font-bold tracking-wider text-blue-200 uppercase">Call our team</span><span className="mt-1 block font-bold">+91 8638499045</span></span><ArrowRight className="ml-auto text-blue-300" size={19} /></a>
        <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><CheckCircle2 className="text-emerald-400" size={20} /><p className="mt-3 text-sm font-bold">Personal guidance</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><Headphones className="text-blue-300" size={20} /><p className="mt-3 text-sm font-bold">Dedicated support</p></div></div>
      </aside>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10">
        <div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><Send size={20} /></span><div><h2 className="text-2xl font-extrabold tracking-tight text-slate-950">Send an enquiry</h2><p className="mt-1 text-sm text-slate-500">Fields marked required help us respond usefully.</p></div></div>
        <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-700">Full name *<Field icon={User}><input className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-base font-medium outline-none" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" /></Field></label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">Mobile number *<Field icon={Phone}><input className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-base font-medium outline-none" type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your mobile number" /></Field></label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Email address <span className="font-medium text-slate-400">(optional)</span><Field icon={Mail}><input className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-base font-medium outline-none" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" /></Field></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Interested in *<Field icon={CheckCircle2}><select className="min-w-0 flex-1 appearance-none bg-transparent px-3 py-3.5 text-base font-medium outline-none" name="interest" value={formData.interest} onChange={handleChange} required><option value="" disabled>Select an option</option><option value="Investment">Investment</option><option value="Insurance">Insurance</option><option value="Loans">Loans</option><option value="All of the Above">All of the Above</option></select></Field></label>
          <label className="grid gap-2 text-sm font-bold text-slate-700">Message <span className="font-medium text-slate-400">(optional)</span><span className="flex rounded-xl border border-slate-200 bg-slate-50 p-3.5 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10"><MessageSquare size={19} className="mt-1 shrink-0 text-slate-400" /><textarea className="min-h-28 w-full resize-y bg-transparent px-3 text-base font-medium outline-none" name="message" value={formData.message} onChange={handleChange} maxLength="2000" placeholder="Tell us a little about your requirements" /></span></label>
          {status.message && <p className={`rounded-xl px-4 py-3 text-sm font-semibold ${status.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`} role="status">{status.message}</p>}
          <button disabled={isSubmitting} className="mt-1 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-base font-extrabold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending…" : "Send enquiry"}<Send size={18} /></button>
        </form>
      </div>
    </section>

    <section className="relative mx-auto mt-12 max-w-6xl"><div className="mb-6 text-center"><p className="text-sm font-bold tracking-widest text-blue-700 uppercase">More ways to connect</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Choose the channel that suits you.</h2></div><div className="grid gap-4 sm:grid-cols-3">{channels.map(({ label, text, href, Icon, color, ring }) => <a key={label} href={href} target={href === "#" ? undefined : "_blank"} rel="noreferrer" className={`group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg ${ring}`}><Icon className={color} size={26} /><h3 className="mt-5 font-extrabold text-slate-950">{label}</h3><p className="mt-1 text-sm leading-5 text-slate-500">{text}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-blue-600">Connect <ArrowRight size={15} /></span></a>)}</div></section>
  </main>;
}

export default Contact;
