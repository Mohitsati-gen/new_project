"use client";

export default function PricingCTA() {
  const schedule = [
    ["10:00 PM", "Blue-light mask on", "01"],
    ["10:15 PM", "White noise begins", "02"],
    ["10:25 PM", "Weighted blanket settles", "03"],
    ["10:30 PM", "Candle lit — credits roll", "04"],
  ];

  return (
    <section
      id="buy"
      className="relative overflow-hidden border-b border-white/[0.06] bg-[#050507] px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* ========================================================= */}
      {/* BACKGROUND                                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main orange glow */}
        <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.045] blur-[140px]" />

        {/* Secondary glow */}
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/[0.025] blur-[120px]" />

        {/* Grid */}
        <div className="pricing-grid absolute inset-0 opacity-[0.12]" />

        {/* Cinematic vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-400/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================= */}
        {/* TOP LABEL                                                 */}
        {/* ======================================================= */}

        <div className="mb-14 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-orange-400/40" />

          <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-orange-300">
            Season Pass
          </span>

          <span className="h-px w-14 bg-orange-400/40" />
        </div>

        {/* ======================================================= */}
        {/* MAIN GRID                                                 */}
        {/* ======================================================= */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* ===================================================== */}
          {/* LEFT — CTA                                             */}
          {/* ===================================================== */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />

                <span className="relative h-2 w-2 rounded-full bg-orange-400" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">
                Season One is now streaming
              </span>
            </div>

            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-7xl">
              CANCEL YOUR
              <br />
              <span className="text-orange-400">3AM SUBSCRIPTION.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/35">
              One complete sleep system. Four episodes designed to turn your
              nightly autoplay habit into a routine that actually ends.
            </p>

            {/* Price */}
            <div className="mt-9 flex items-end gap-4">
              <div>
                <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
                  Season Pass
                </span>

                <span className="mt-1 block font-display text-6xl tracking-tight text-orange-400">
                  ₹1,499
                </span>
              </div>

              <div className="mb-2">
                <span className="font-mono text-lg text-white/20 line-through">
                  ₹2,199
                </span>

                <span className="ml-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-2 py-1 font-mono text-[8px] uppercase tracking-widest text-orange-300">
                  32% OFF
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="#"
                className="group relative inline-flex overflow-hidden rounded-full bg-orange-500 px-9 py-4 font-display text-lg tracking-wide text-black shadow-[0_15px_50px_rgba(249,115,22,0.18)] transition-all duration-300 hover:scale-105 hover:bg-orange-400"
              >
                {/* Shine */}
                <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  Start Season One →
                </span>
              </a>

              <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                One-time payment • No monthly subscription
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT — NIGHT PLAYER                                   */}
          {/* ===================================================== */}

          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[90px]" />

            <div className="pricing-player relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090b]/90 p-1 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-white/[0.035] to-black p-6 sm:p-8">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/5 pb-5">
                  <div>
                    <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">
                      Your Night
                    </span>

                    <span className="mt-1 block font-display text-xl tracking-wide text-white">
                      EPISODE BY EPISODE
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-orange-400" />
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-widest text-orange-300">
                      REC
                    </span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative mt-7">
                  {/* Vertical timeline */}
                  <div className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-orange-400/50 via-orange-400/20 to-transparent" />

                  <div className="space-y-7">
                    {schedule.map(([time, description, episode], index) => (
                      <div
                        key={time}
                        className="group relative flex items-center gap-5"
                      >
                        {/* Episode dot */}
                        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#09090b] transition-colors duration-300 group-hover:border-orange-400/50">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              index === 0
                                ? "animate-pulse bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.7)]"
                                : "bg-white/20 group-hover:bg-orange-400"
                            }`}
                          />
                        </div>

                        {/* Text */}
                        <div className="flex flex-1 items-center justify-between gap-4">
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-orange-300">
                              {time}
                            </span>

                            <p className="mt-1 text-sm text-white/55 transition-colors group-hover:text-white/80">
                              {description}
                            </p>
                          </div>

                          <span className="font-mono text-[8px] text-white/15">
                            EP.{episode}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-9 border-t border-white/5 pt-6">
                  <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                    <span>Night progress</span>
                    <span>100% → sleep</span>
                  </div>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="night-progress h-full w-full rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300" />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
                    Netflix:OFF Original
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-orange-300/50">
                    Credits Ready
                  </span>
                </div>

                {/* Corner decorations */}
                <span className="absolute left-5 top-5 h-5 w-5 border-l border-t border-orange-400/20" />

                <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-orange-400/20" />
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* GUARANTEE / TRUST BAR                                    */}
        {/* ======================================================= */}

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-3">
          <div className="bg-[#070709] px-6 py-5 text-center">
            <span className="block font-display text-xl text-white">
              04
            </span>

            <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
              Sleep Episodes
            </span>
          </div>

          <div className="bg-[#070709] px-6 py-5 text-center">
            <span className="block font-display text-xl text-orange-400">
              ₹1,499
            </span>

            <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
              One-Time Payment
            </span>
          </div>

          <div className="bg-[#070709] px-6 py-5 text-center">
            <span className="block font-display text-xl text-white">
              ∞
            </span>

            <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
              Nights Included
            </span>
          </div>
        </div>

        {/* ======================================================= */}
        {/* FINAL LINE                                                */}
        {/* ======================================================= */}

        <div className="mt-16 text-center">
          <p className="font-display text-2xl tracking-wide text-white/40 sm:text-3xl">
            The season ends when
            <span className="text-orange-400"> you fall asleep.</span>
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />

            <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/15">
              FIN
            </span>

            <span className="h-px w-8 bg-white/10" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ANIMATIONS                                                  */}
      {/* ========================================================= */}

      <style jsx global>{`
        .pricing-grid {
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
            black 0%,
            transparent 75%
          );
        }

        .pricing-player {
          transition:
            transform 600ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 500ms ease,
            box-shadow 500ms ease;
        }

        .pricing-player:hover {
          transform: translateY(-6px);
          border-color: rgba(251, 146, 60, 0.22);

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.5),
            0 0 60px rgba(251, 146, 60, 0.04);
        }

        .night-progress {
          animation: nightProgress 3s
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }

        @keyframes nightProgress {
          0% {
            transform: scaleX(0);
          }

          100% {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pricing-player,
          .night-progress {
            animation: none !important;
            transition: none !important;
          }

          .pricing-player:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}