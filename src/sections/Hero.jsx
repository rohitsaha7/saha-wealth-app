import heroImage from "../assets/images/Hero1.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/45 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-white">
            Trusted Financial Partner
          </div>

          {/* Heading */}
          <h1 className="mt-8 font-[Poppins] text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Your Financial Future,
            <br />
            <span className="text-blue-400">
              Built with Confidence.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Prime Wealth helps individuals, families and businesses make
            smarter financial decisions through investment, loan and
            insurance solutions designed for long-term success.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#services"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900"
            >
              Get Started
            </a>

          </div>

          {/* Services */}
          <div className="mt-14 flex flex-wrap gap-6 text-white">

            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">✓</span>
              Investment Solutions
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">✓</span>
              Loan Assistance
            </div>

            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">✓</span>
              Insurance Protection
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center animate-bounce">

        <p className="text-sm tracking-widest uppercase">
          Scroll
        </p>

        <div className="mt-2 text-2xl">
          ↓
        </div>

      </div>

    </section>
  );
}