"use client";

const REVIEWS = [
  {
    name: "Simran D.",
    tag: "Sleep debt: cleared",
    quote:
      "I used to hit 'next episode' on autopilot. Now I hit 'next step' on autopilot and I'm asleep before it finishes.",
    rating: "98%",
  },
  {
    name: "Rohan P.",
    tag: "Sleep debt: cleared",
    quote:
      "The countdown ring genuinely tricked my brain the same way the real prompt does. Just in reverse. Unsettling. Works.",
    rating: "96%",
  },
  {
    name: "Fatima N.",
    tag: "Sleep debt: cleared",
    quote:
      "First product that's ever made my screen time addiction work for me instead of against me.",
    rating: "99%",
  },
];

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#050507] px-6 py-28 sm:px-10 lg:px-16">
      {/* ========================================================= */}
      {/* BACKGROUND                                                 */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[35%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-orange-500/[0.035] blur-[130px]" />

        {/* Side glows */}
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/[0.025] blur-[120px]" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-400/[0.02] blur-[120px]" />

        {/* Grid */}
        <div className="social-grid absolute inset-0 opacity-[0.12]" />

        {/* Center vertical light */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-400/[0.06] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ======================================================= */}
        {/* HEADER                                                    */}
        {/* ======================================================= */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-orange-400/40" />

            <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-orange-300">
              Viewer Reactions
            </span>

            <span className="h-px w-12 bg-orange-400/40" />
          </div>

          <h2 className="mt-7 font-display text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
            RENEWED FOR
            <br />
            <span className="relative text-orange-400">
              4,200 MORE NIGHTS.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/30">
            Apparently, people are willing to rate a product five stars when
            it finally convinces them to stop watching television.
          </p>
        </div>

        {/* ======================================================= */}
        {/* BIG STAT                                                   */}
        {/* ======================================================= */}

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-10 text-center backdrop-blur-sm sm:px-10">
            {/* Top label */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />

              <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/25">
                Current Season Rating
              </span>

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
            </div>

            {/* Rating */}
            <div className="mt-5 flex items-center justify-center gap-4">
              <span className="font-display text-7xl tracking-tight text-white sm:text-8xl">
                4.9
              </span>

              <div className="text-left">
                <div className="flex gap-1 text-orange-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <span className="mt-1 block font-mono text-[8px] uppercase tracking-widest text-white/20">
                  From 4,200 sleepers
                </span>
              </div>
            </div>

            {/* Bottom status */}
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3">
              <div className="h-px flex-1 bg-white/5" />

              <span className="font-mono text-[8px] uppercase tracking-widest text-orange-300/60">
                Sleep debt cleared
              </span>

              <div className="h-px flex-1 bg-white/5" />
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* REVIEWS                                                    */}
        {/* ======================================================= */}

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <div
              key={review.name}
              className="review-card group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.02] p-1"
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white/[0.025] to-black p-7">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/[0.08] opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                {/* Quote mark */}
                <span className="absolute right-5 top-2 font-display text-[9rem] leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-orange-400/[0.06]">
                  “
                </span>

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-orange-500/10 font-display text-sm text-orange-300">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <span className="block font-display text-sm tracking-wide text-white">
                        {review.name}
                      </span>

                      <span className="font-mono text-[8px] uppercase tracking-widest text-white/20">
                        Verified viewer
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="text-right">
                    <span className="block font-display text-lg text-orange-300">
                      {review.rating}
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-widest text-white/20">
                      improvement
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative z-10 mt-10 min-h-[8rem] text-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/75">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Bottom */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="flex gap-1 text-[10px] text-orange-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-orange-300/60">
                    {review.tag}
                  </span>
                </div>

                {/* Corner decoration */}
                <span className="absolute bottom-5 right-5 h-4 w-4 border-b border-r border-white/10 transition-colors duration-300 group-hover:border-orange-400/40" />
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================= */}
        {/* BOTTOM LIVE FEED                                         */}
        {/* ======================================================= */}

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-5 py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              Live sleep data
            </span>
          </div>

          <span className="hidden text-white/10 sm:block">•</span>

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            127 people just finished Episode 01
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* ANIMATIONS                                                  */}
      {/* ========================================================= */}

      <style jsx global>{`
        .social-grid {
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

        .review-card {
          transition:
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 500ms ease,
            box-shadow 500ms ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
          border-color: rgba(251, 146, 60, 0.2);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.45),
            0 0 40px rgba(251, 146, 60, 0.035);
        }

        @media (prefers-reduced-motion: reduce) {
          .review-card {
            transition: none !important;
          }

          .review-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}