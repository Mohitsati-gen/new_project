"use client";

export default function Bento() {
  const episodes = [
    {
      number: "01",
      title: "Weighted Blanket",
      description:
        "7kg of the same pressure as being held down by three straight hours of “just one more episode.” Except now, it means something different.",
      duration: "45 MIN",
      type: "PHYSICAL",
      featured: true,
    },
    {
      number: "02",
      title: "Blue-Light Mask",
      description:
        "Blocks the exact glow that kept you up past 2am.",
      duration: "12 MIN",
      type: "VISUAL",
    },
    {
      number: "03",
      title: "White Noise Pod",
      description:
        "Static that fades you out instead of pulling you into another episode.",
      duration: "28 MIN",
      type: "AUDIO",
    },
    {
      number: "04",
      title: "Series Finale Candle",
      description:
        "Cedar and amber. Lights the last five minutes before lights out.",
      duration: "5 MIN",
      type: "RITUAL",
    },
  ];

  return (
    <section
      id="inside"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050507] px-6 py-28 sm:px-10 lg:px-16"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange ambient glow */}
        <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-orange-500/[0.035] blur-[130px]" />

        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-orange-400/[0.025] blur-[120px]" />

        {/* Cinematic grid */}
        <div className="bento-grid absolute inset-0 opacity-[0.14]" />

        {/* Vertical light */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-400/[0.08] to-transparent" />

        {/* Scanline */}
        <div className="bento-scan absolute inset-0 opacity-[0.025]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            {/* Episode indicator */}
            <div className="mb-6 flex items-center gap-3 animate-bentoFade">
              <span className="h-px w-12 bg-orange-400/60" />

              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-orange-300">
                The Sleep Collection
              </span>

              <span className="h-px w-12 bg-orange-400/60" />
            </div>

            <h2 className="max-w-3xl font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">
              EVERY EPISODE
              <br />

              <span className="text-orange-400">ENDS HERE.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-7 text-white/35">
              Four carefully designed episodes. One objective: make the
              moment after “Are you still watching?” feel like the end of the
              night.
            </p>

            <div className="mt-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Season One
              <span>•</span>
              04 Episodes
            </div>
          </div>
        </div>


        <div className="mt-16 hidden items-center gap-0 md:flex">
          {episodes.map((episode, index) => (
            <div key={episode.number} className="flex flex-1 items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full border ${
                  episode.featured
                    ? "border-orange-400 bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                    : "border-white/20 bg-[#050507]"
                }`}
              />

              {index !== episodes.length - 1 && (
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-white/5" />
              )}
            </div>
          ))}
        </div>


        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

          <div className="episode-card group relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-1 md:col-span-2">
            {/* Animated border glow */}
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative h-full min-h-[32rem] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-orange-950/30 via-black to-black">
              {/* Huge episode number */}
              <span className="pointer-events-none absolute -right-8 -top-16 select-none font-display text-[22rem] leading-none text-white/[0.025] transition-all duration-700 group-hover:text-orange-400/[0.06]">
                01
              </span>

              {/* Moving light */}
              <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-orange-400/[0.05] to-transparent transition-transform duration-[1800ms] group-hover:translate-x-[400%]" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-orange-300">
                      Episode 01
                    </span>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />

                      <span className="font-mono text-[8px] uppercase tracking-widest text-white/30">
                        Featured Episode
                      </span>
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[8px] tracking-widest text-white/30">
                    {episodes[0].duration}
                  </div>
                </div>

                {/* Center */}
                <div className="max-w-2xl">
                  <p className="mb-4 font-mono text-[8px] uppercase tracking-[0.4em] text-white/25">
                    Physical Recovery
                  </p>

                  <h3 className="font-display text-5xl leading-[0.9] tracking-wide text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl lg:text-8xl">
                    Weighted
                    <br />
                    <span className="text-orange-400">Blanket.</span>
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/35">
                    {episodes[0].description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="mb-2 flex items-center justify-between font-mono text-[8px] uppercase tracking-widest text-white/25">
                      <span>Episode Progress</span>
                      <span>01 / 04</span>
                    </div>

                    <div className="h-[2px] w-64 overflow-hidden bg-white/10">
                      <div className="h-full w-[25%] bg-orange-400 transition-all duration-700 group-hover:w-[40%]" />
                    </div>
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-orange-300 transition-transform duration-300 group-hover:translate-x-2">
                    Explore episode →
                  </span>
                </div>
              </div>

              {/* Corner decorations */}
              <span className="absolute left-6 top-6 h-5 w-5 border-l border-t border-orange-400/30" />
              <span className="absolute bottom-6 right-6 h-5 w-5 border-b border-r border-orange-400/30" />
            </div>
          </div>

     

          {episodes.slice(1).map((episode, index) => (
            <div
              key={episode.number}
              className="episode-card group relative min-h-[23rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.02] p-1"
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/[0.025] to-black">
                {/* Number */}
                <span className="absolute -right-3 -top-8 font-display text-[12rem] leading-none text-white/[0.025] transition-all duration-500 group-hover:text-orange-400/[0.06]">
                  {episode.number}
                </span>

                {/* Hover glow */}
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-orange-300">
                      Episode {episode.number}
                    </span>

                    <span className="font-mono text-[8px] tracking-widest text-white/20">
                      {episode.duration}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
                      {episode.type}
                    </span>

                    <h3 className="mt-3 max-w-xs font-display text-3xl leading-[0.95] tracking-wide text-white transition-colors duration-300 group-hover:text-orange-300">
                      {episode.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-xs leading-6 text-white/30">
                      {episode.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1 w-7 rounded-full ${
                            i <= index
                              ? "bg-orange-400/70"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/20 transition-colors group-hover:text-orange-300">
                      View →
                    </span>
                  </div>
                </div>

                {/* Corner */}
                <span className="absolute bottom-5 right-5 h-4 w-4 border-b border-r border-white/10 transition-colors group-hover:border-orange-400/40" />
              </div>
            </div>
          ))}
        </div>



        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20">
              Netflix:Off Original
            </span>

            <p className="mt-2 font-display text-lg tracking-wide text-white/60">
              The season ends when you fall asleep.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            4 Episodes
            <span className="text-white/10">/</span>
            1 Mission
          </div>
        </div>
      </div>

    

      <style jsx global>{`
        /* Background grid */
        .bento-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: radial-gradient(
            ellipse at center,
            black 10%,
            transparent 75%
          );
        }

        /* Scanlines */
        .bento-scan {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255, 255, 255, 0.15) 4px
          );
          animation: scanMove 12s linear infinite;
        }

        @keyframes scanMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(80px);
          }
        }

        /* Header entrance */
        @keyframes bentoFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bentoFade {
          animation: bentoFade 0.8s
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Episode card */
        .episode-card {
          transition:
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 500ms ease,
            box-shadow 500ms ease;
        }

        .episode-card:hover {
          transform: translateY(-7px);
          border-color: rgba(251, 146, 60, 0.22);
          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.45),
            0 0 50px rgba(251, 146, 60, 0.035);
        }

        @media (prefers-reduced-motion: reduce) {
          .bento-scan,
          .animate-bentoFade {
            animation: none !important;
          }

          .episode-card {
            transition: none !important;
          }

          .episode-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}