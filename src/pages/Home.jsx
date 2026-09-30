import { useState } from "react";

import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Wallet,
  Compass,
  Home as HomeIcon,
  GraduationCap,
  PiggyBank,
  Users,
  Car,
  Palmtree,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";

// Partner Logo Imports
import assetplusLogo from "../assets/images/Assetplus.jpeg";
import policybazaarLogo from "../assets/images/policybazaar.jpg";
import voltLogo from "../assets/images/volt.png";
import andromedaLogo from "../assets/images/andromeda.jpg";
import ruloansLogo from "../assets/images/ruloans.jpg";



const trustPoints = [
  {
    title: "INVEST",
    desc: "Build wealth for your future.",
    Icon: TrendingUp,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "PROTECT",
    desc: "Protect what matters most.",
    Icon: ShieldCheck,
    color: "text-amber-600 bg-amber-50",
  },
  {
    title: "BORROW",
    desc: "Access funds for important goals.",
    Icon: Wallet,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "PLAN",
    desc: "Create a financial roadmap with purpose.",
    Icon: Compass,
    color: "text-indigo-600 bg-indigo-50",
  },
];



const solutions = [
  {
    category: "INVEST",
    title: "Invest with purpose.",
    text: "Build your wealth through goal-based investments, SIPs and long-term financial planning.",
    tags: [
      "Mutual Funds",
      "SIP",
      "Goal-Based Investment",
      "Wealth Creation",
      "Retirement Planning",
      "Financial Planning",
    ],
    accent: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    category: "PROTECT",
    title: "Protect what you've built.",
    text: "Prepare for life's uncertainties with protection solutions designed around you and your family.",
    tags: [
      "Life Insurance",
      "Term Insurance",
      "Health Insurance",
      "Motor Insurance",
    ],
    accent: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    category: "BORROW",
    title: "Borrow when you need it.",
    text: "Explore suitable financing options for personal, home, business and vehicle needs.",
    tags: [
      "Personal Loans",
      "Home Loans",
      "Business Loans",
      "Vehicle Loans",
      "Loan Against Mutual Funds",
    ],
    accent: "from-emerald-600 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];



const whyFeatures = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by understanding your needs, goals and priorities.",
  },
  {
    step: "02",
    title: "Explore",
    desc: "We help you explore suitable financial solutions.",
  },
  {
    step: "03",
    title: "Plan",
    desc: "We help you connect today's decisions with tomorrow's goals.",
  },
  {
    step: "04",
    title: "Grow",
    desc: "Keep building, protecting and improving your financial future over time.",
  },
];


const journeySteps = [
  {
    num: "01",
    title: "Tell us about your goal",
    desc: "Share what you're planning for — investing, protection, borrowing or something else.",
  },
  {
    num: "02",
    title: "Understand your options",
    desc: "Explore solutions that may fit your needs and situation.",
  },
  {
    num: "03",
    title: "Choose with confidence",
    desc: "Make an informed decision with the information you need.",
  },
  {
    num: "04",
    title: "Plan. Protect. Grow.",
    desc: "Keep working towards your financial goals with a long-term approach.",
  },
];


const goals = [
  {
    title: "Buy a Home",
    text: "Turn your home goal into a financial plan.",
    Icon: HomeIcon,
  },
  {
    title: "Education",
    text: "Prepare for the cost of tomorrow's opportunities.",
    Icon: GraduationCap,
  },
  {
    title: "Build Wealth",
    text: "Start building long-term financial security.",
    Icon: PiggyBank,
  },
  {
    title: "Protect Your Family",
    text: "Prepare financially for life's uncertainties.",
    Icon: Users,
  },
  {
    title: "Buy a Vehicle",
    text: "Explore financing options for your next vehicle.",
    Icon: Car,
  },
  {
    title: "Retirement",
    text: "Build towards the lifestyle you want tomorrow.",
    Icon: Palmtree,
  },
];


const articles = [
  
  
];

const faqs = [
  {
    q: "What does SAHATRA do?",
    a: "SAHATRA brings investment, insurance, lending and financial planning solutions together in one place. We help customers understand their needs and explore suitable financial options.",
  },
  {
    q: "What investment solutions do you provide?",
    a: "Investment solutions include Mutual Funds, SIPs, goal-based investments, wealth creation and long-term financial planning.",
  },
  {
    q: "Does SAHATRA provide insurance?",
    a: "Yes. We help customers explore life, term, health and motor insurance solutions.",
  },
  {
    q: "What types of loans can I explore through SAHATRA?",
    a: "Depending on eligibility and available partner products, customers can explore personal, home, business and vehicle loans, as well as Loan Against Mutual Funds.",
  },
  {
    q: "How do I get started?",
    a: "Simply submit your requirement through our enquiry form or contact our team. We'll understand your requirement and guide you through the available options.",
  },
  {
    q: "Does SAHATRA recommend the same solution to everyone?",
    a: "No. Financial needs differ from person to person. We first aim to understand your goals and requirements before helping you explore suitable options.",
  },
  {
    q: "Can I contact SAHATRA if I'm not sure what I need?",
    a: "Absolutely. You don't need to know which financial product you need before contacting us. Tell us about your goal or requirement and our team can help you understand the available options.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="w-full overflow-x-hidden bg-[#F8FAFC] font-sans text-slate-900">

     
{/* =====================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

        {/* Background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/70 via-amber-50/30 to-transparent" />

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold tracking-wide text-amber-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            Plan. Protect. Grow.
          </span>

          {/* Heading */}
          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Your goals deserve a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              smarter financial plan.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 w-full max-w-2xl text-center text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From investing and protecting your family to finding the right
            loan, SAHATRA brings multiple financial solutions together —
            helping you make decisions based on your needs, goals and future.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">

            <a
              href="/contact"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-slate-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 active:scale-95 sm:w-auto"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-sm font-extrabold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 active:scale-95 sm:w-auto"
            >
              Explore Solutions
            </a>

          </div>

        </div>
      </section>



      <section className="border-y border-slate-200/80 bg-white px-4 py-10 sm:px-6 lg:px-8">

        <div className="mx-auto w-full max-w-7xl">

          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Financial solutions, built around you.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {trustPoints.map(({ title, desc, Icon, color }) => (
              <div
                key={title}
                className="flex min-h-[88px] items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${color}`}
                >
                  <Icon size={22} />
                </div>

                <div className="min-w-0 text-left">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    {title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto w-full max-w-7xl">
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map(
              ({
                category,
                title,
                text,
                tags,
                accent,
                badgeBg,
              }) => (
                <article
                  key={category}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >

                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`}
                  />

                  <div className="flex flex-1 flex-col">

                    <span
                      className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-wider ${badgeBg}`}
                    >
                      {category}
                    </span>

                    <h3 className="mt-5 text-2xl font-extrabold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">

                    <a
                      href="/services"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-lg px-1 text-sm font-extrabold text-blue-600 transition hover:text-blue-800"
                    >
                      Explore{" "}
                      {category.charAt(0) +
                        category.slice(1).toLowerCase()}
                      <ArrowRight size={16} />
                    </a>

                  </div>

                </article>
              )
            )}

          </div>
        </div>
      </section>



      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto w-full max-w-7xl">

          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-400">
              Why SAHATRA
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              More than financial products.
              <span className="block text-slate-400">
                A better way to plan.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
              We believe financial decisions should start with understanding
              you — not selling you a product. SAHATRA brings investment,
              protection and lending solutions together so you can explore
              your options from one place and make informed financial
              decisions.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {whyFeatures.map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 sm:text-left"
              >

                <span className="text-2xl font-black text-amber-400">
                  {step}
                </span>

                <h3 className="mt-4 text-xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          5. HOW IT WORKS
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto w-full max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

         -
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Your financial journey, made simpler.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              A simple approach to help you move from an idea to a financial
              plan.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {journeySteps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:text-left"
              >

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700">
                  {num}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          6. FINANCIAL GOALS
      ====================================================== */}

      <section className="border-y border-slate-200/80 bg-slate-100/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto w-full max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">


            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              What are you planning for?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Your financial plan should start with what you want to achieve.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {goals.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {text}
                  </p>
                </div>

              </div>
            ))}

          </div>


          <div className="mt-10 flex justify-center">

            <a
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
            >
              Start Planning Your Goal
              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          7. PARTNERS
      ====================================================== */}
<section className="w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
  <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

   
    <h2 className="mt-4 max-w-3xl text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
      Connected to a growing financial ecosystem.
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-slate-600 sm:text-base">
      We work with established financial platforms and partners to help bring
      a wider range of investment, insurance and lending solutions to our
      customers.
    </p>

    {/* Partner Logos */}
    <div className="mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-8 sm:gap-12">

      <img
        src={assetplusLogo}
        alt="AssetPlus"
        className="h-8 w-auto max-w-[150px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />

      <img
        src={policybazaarLogo}
        alt="Policybazaar"
        className="h-8 w-auto max-w-[150px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />

      <img
        src={voltLogo}
        alt="Volt Money"
        className="h-8 w-auto max-w-[150px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />

      <img
        src={andromedaLogo}
        alt="Andromeda"
        className="h-8 w-auto max-w-[150px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />

      <img
        src={ruloansLogo}
        alt="Ruloans"
        className="h-8 w-auto max-w-[150px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />

    </div>

    <p className="mt-6 text-center text-xs font-semibold text-slate-400">
      + More Growing Partners
    </p>

  </div>
</section>
      

      <section className="border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        <div className="mx-auto w-full max-w-7xl">


          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

            {articles.map(({ title, desc, tag }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >

                


              </article>
            ))}

          </div>

        </div>
      </section>

<br/>
      {/* =====================================================
          9. FAQ
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto w-full max-w-4xl">

          <div className="mx-auto max-w-2xl text-center">

            

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
              <br/>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Have questions? Here are some things people commonly ask about
              SAHATRA.
            </p>
<br/>
          </div>


          <div className="mx-auto mt-10 grid max-w-3xl gap-3">

            {faqs.map(({ q, a }, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={q}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex min-h-[64px] w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
                  >

                    <span className="text-sm font-bold leading-6 text-slate-950 sm:text-base">
                      {q}
                    </span>

                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50">
                      {isOpen ? (
                        <ChevronUp
                          size={18}
                          className="text-blue-600"
                        />
                      ) : (
                        <ChevronDown
                          size={18}
                          className="text-slate-500"
                        />
                      )}
                    </span>

                  </button>


                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-5 sm:px-6">

                      <p className="text-sm leading-7 text-slate-600">
                        {a}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          10. FINAL CTA
      ====================================================== */}
<section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
  <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-950 px-5 py-14 text-center text-white sm:px-10 sm:py-16 lg:px-16">

    {/* Background glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

    {/* Content */}
    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center text-center">
<br/>
      <h2 className="w-full text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Your Goals. Our Guidance.
      </h2>
<br/>
      <p className="mx-auto mt-5 w-full max-w-xl text-center text-sm leading-7 text-slate-300 sm:text-base">
        Whatever your financial goal, we're here to help you explore the right options.
      </p>
<br/>
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-4">
        <a
          href="/contact"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 active:scale-95"
        >
          Talk to SAHATRA
          <ArrowRight size={18} />
        </a>


        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
          Plan. Protect. Grow.
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}

export default Home;