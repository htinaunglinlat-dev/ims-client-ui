export function BlogHero() {
  return (
    <section className="relative overflow-hidden border-b border-border min-h-[460px] flex flex-col justify-end py-16 md:py-24 bg-zinc-950">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cyan/Skyblue Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-cyan"
          style={{
            top: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "rgba(6, 182, 212, 0.5)",
            filter: "blur(90px)",
          }}
        />

        {/* Blue/Steelblue Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-blue"
          style={{
            top: "10%",
            right: "-5%",
            width: "550px",
            height: "550px",
            background: "rgba(59, 130, 246, 0.45)",
            filter: "blur(110px)",
          }}
        />

        {/* Violet Circle */}
        <div
          className="absolute rounded-full blog-hero-orb-violet"
          style={{
            bottom: "-15%",
            left: "15%",
            width: "520px",
            height: "520px",
            background: "rgba(139, 92, 246, 0.4)",
            filter: "blur(100px)",
          }}
        />

        {/* Subtle Dark Overlay to ensure good text readability */}
        <div className="absolute inset-0 bg-zinc-950/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            The Blog
          </p>
          <h1
            className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700"
          >
            Ideas worth{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-200 to-indigo-300 font-extrabold">
              building
            </span>
          </h1>
          <p
            className="mt-4 text-base md:text-lg text-slate-200 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700"
          >
            Engineering essays, AI deep-dives, and lessons from the field.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2.5 animate-in fade-in zoom-in-95 duration-700"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-default">
              Engineering
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-default">
              AI & Tech
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-default">
              Latest Insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
