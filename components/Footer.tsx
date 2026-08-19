"use client";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/20 bg-[#d8d5cf] px-6 py-14 text-black sm:px-10 lg:px-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-orange-500/[0.08] blur-[100px]" />

        <div className="footer-grid absolute inset-0 opacity-[0.18]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* END CREDITS */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-black" />

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.45em] text-black">
              End Credits
            </span>

            <span className="h-px w-10 bg-black" />
          </div>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-wide text-black sm:text-4xl">
            THE NIGHT IS{" "}
            <span className="text-orange-600">OVER.</span>
          </h2>

          <p className="mt-3 font-mono text-[8px] font-medium uppercase tracking-[0.3em] text-black">
            No autoplay • No cliffhanger • Just sleep
          </p>
        </div>

        {/* MAIN FOOTER */}
        <div className="flex flex-col items-center justify-between gap-8 border-y border-black/20 py-8 sm:flex-row">

          {/* LOGO */}
          <div className="text-center sm:text-left">
            <span className="font-display text-2xl font-bold tracking-wide text-black">
              NETFLIX
              <span className="text-orange-600">:</span>
              OFF
            </span>

            <div className="mt-2 flex items-center justify-center gap-2 sm:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />

              <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-black">
                Season One Complete
              </span>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="max-w-lg text-center">
            <p className="text-xs font-medium leading-6 text-black">
              Fan-made concept project. Not affiliated with or endorsed by
              Netflix, Inc. Built for a design assignment.
            </p>
          </div>

          {/* FIN */}
          <div className="text-center sm:text-right">
            <span className="block font-display text-4xl font-bold tracking-[0.18em] text-black">
              FIN
            </span>

            <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-orange-600">
              Credits Roll
            </span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center sm:flex-row">

          <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-black">
            © 2026 Netflix:OFF Concept
          </span>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-black">
              Built with
            </span>

            <span className="font-mono text-[7px] font-bold uppercase tracking-[0.3em] text-orange-700">
              Next.js
            </span>

            <span className="text-black">•</span>

            <span className="font-mono text-[7px] font-bold uppercase tracking-[0.3em] text-orange-700">
              Tailwind
            </span>
          </div>

          <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.3em] text-black">
            See you tomorrow night.
          </span>
        </div>
      </div>

      <style jsx global>{`
        .footer-grid {
          background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 35%,
            transparent
          );
        }
      `}</style>
    </footer>
  );
}