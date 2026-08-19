"use client";

import { useEffect, useState } from "react";
import Marquee from "./Marquee";
import StillAwakePrompt from "./StillAwakePrompt";
import SleepDebtBar from "./SleepDebtBar";

export default function Hero() {
  const [time, setTime] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev >= 99 ? 8 : prev + 1));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Moon */}
        <div className="absolute left-1/2 top-[15%] -translate-x-1/2">
          <div className="relative h-[24rem] w-[24rem] animate-moonFloat rounded-full sm:h-[32rem] sm:w-[32rem]">
            {/* Outer glow */}
            <div className="absolute -inset-20 animate-moonAura rounded-full bg-orange-500/10 blur-[100px]" />

            {/* Moon [radial-gradient(circle_at_35%_30%,#fff7ed_0%,#fed7aa_18%,#fb923c_48%,#7c2d12_100%)] */}
            <div className="absolute inset-0 rounded-full bg-black opacity-80 shadow-[0_0_100px_rgba(251,146,60,0.25)]" />

            {/* Moon craters */}
            <div className="absolute left-[22%] top-[28%] h-12 w-12 rounded-full bg-orange-900/10 blur-sm" />
            <div className="absolute left-[60%] top-[22%] h-16 w-16 rounded-full bg-orange-900/10 blur-sm" />
            <div className="absolute left-[48%] top-[58%] h-20 w-20 rounded-full bg-orange-900/10 blur-sm" />
            <div className="absolute left-[22%] top-[65%] h-8 w-8 rounded-full bg-orange-900/10 blur-sm" />
          </div>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#050507]" />

        {/* Horizontal cinematic lines */}
        <div className="absolute left-0 right-0 top-[17%] h-px bg-white/[0.06]" />
        <div className="absolute left-0 right-0 top-[80%] h-px bg-white/[0.06]" />

        {/* Shooting stars */}
        <div className="absolute left-[15%] top-[25%] h-px w-32 animate-shoot bg-gradient-to-r from-transparent via-orange-300 to-transparent" />

        <div
          className="absolute right-[12%] top-[32%] h-px w-24 animate-shoot bg-gradient-to-r from-transparent via-white to-transparent"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute left-[35%] top-[15%] h-px w-20 animate-shoot bg-gradient-to-r from-transparent via-orange-200 to-transparent"
          style={{ animationDelay: "5s" }}
        />

        {/* Stars */}
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 animate-star rounded-full bg-white"
            style={{
              left: `${(i * 47) % 100}%`,
              top: `${(i * 29) % 65}%`,
              animationDelay: `${(i % 7) * 0.6}s`,
            }}
          />
        ))}

        {/* Moving horizontal light */}
        <div className="absolute left-[-30%] top-[65%] h-40 w-[60%] animate-lightSweep rounded-full bg-orange-500/10 blur-[80px]" />
      </div>


      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <div className="group cursor-pointer">
          <div className="font-display text-2xl tracking-widest text-white">
            NETFLIX
            <span className="text-orange-500">:</span>
            <span className="text-orange-300">OFF</span>
          </div>

          <div className="mt-1 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
        </div>

        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:block">
            Original Series
          </span>

          <a
            href="#buy"
            className="group relative overflow-hidden rounded-full border border-white/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:border-orange-400 hover:text-orange-300"
          >
            <span className="relative z-10">Start Watching</span>

            <span className="absolute inset-0 -translate-x-full bg-orange-500/10 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>
      </nav>


      <div className="relative z-20 mt-2">
        <Marquee />
      </div>


      <main className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-20 text-center sm:px-10 lg:px-16">
        {/* Top cinematic label */}
        <div className="animate-cinematicIn opacity-0">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-orange-300">
            <span className="h-px w-10 bg-orange-400/50" />
            Episode 01
            <span className="h-px w-10 bg-orange-400/50" />
          </div>
        </div>


        <div className="relative mt-8">
          {/* Giant background number */}
          <span className="pointer-events-none absolute -top-24 left-1/2 -z-10 -translate-x-1/2 select-none font-display text-[12rem] leading-none text-white/[0.015] sm:text-[18rem]">
            01
          </span>

          <h1 className="font-display text-[4.5rem] leading-[0.78] tracking-tight sm:text-8xl md:text-9xl lg:text-[10rem]">
            <span
              className="block animate-titleTop opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              SAME
            </span>

            <span
              className="relative block animate-titleBottom text-orange-400 opacity-0"
              style={{ animationDelay: "0.45s" }}
            >
              AUTOPLAY.
            </span>
          </h1>

          {/* Underline */}
          <div className="mx-auto mt-8 h-px w-0 animate-lineGrow bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
        </div>


        <div
          className="mt-8 max-w-2xl animate-cinematicIn opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-display text-xl tracking-wide text-white/80 sm:text-2xl">
            NEW ENDING.
          </p>

          <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base">
            The streaming experience that knows when the story should end.
            Watch less. Sleep more. Wake up wondering why you ever watched
            episode two.
          </p>
        </div>


        <div
          className="relative mt-14 w-full max-w-4xl animate-playerIn opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          {/* Film frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
            {/* Film perforations */}
            <div className="pointer-events-none absolute left-0 right-0 top-2 z-20 flex justify-between px-5">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-3 rounded-sm bg-white/10"
                />
              ))}
            </div>

            <div className="pointer-events-none absolute bottom-2 left-0 right-0 z-20 flex justify-between px-5">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-3 rounded-sm bg-white/10"
                />
              ))}
            </div>

            {/* Inner screen */}
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-orange-950/30 via-black to-black sm:min-h-[28rem]">
              {/* Moving scanlines */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.015)_50%)] bg-[length:100%_4px]" />

              {/* Screen glow */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[90px]" />

              {/* Central content */}
              <div className="relative z-20 flex min-h-[22rem] flex-col items-center justify-center px-6 sm:min-h-[28rem]">
                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-orange-300/60">
                  Now Playing
                </span>

                <h2 className="mt-5 font-display text-4xl tracking-wide text-white sm:text-6xl">
                  WIND DOWN
                </h2>

                <p className="mt-3 max-w-md text-xs leading-6 text-white/35 sm:text-sm">
                  Your final episode is designed to become your last episode.
                </p>

                {/* Countdown */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="text-right">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-white/30">
                      Sleep mode
                    </span>

                    <span className="font-display text-3xl text-orange-300">
                      {time}
                      <span className="text-sm text-white/30">%</span>
                    </span>
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div className="text-left">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-white/30">
                      Ending
                    </span>

                    <span className="font-mono text-sm text-white/70">
                      SOON
                    </span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-8 w-full max-w-sm">
                  <div className="h-[2px] overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-orange-400 transition-all duration-1000"
                      style={{ width: `${time}%` }}
                    />
                  </div>

                  <div className="mt-2 flex justify-between font-mono text-[8px] uppercase tracking-widest text-white/25">
                    <span>Awake</span>
                    <span>Sleep</span>
                  </div>
                </div>
              </div>

              {/* Corner labels */}
              <span className="absolute left-5 top-6 font-mono text-[8px] uppercase tracking-widest text-white/20">
                NFO-001
              </span>

              <span className="absolute right-5 top-6 font-mono text-[8px] uppercase tracking-widest text-white/20">
                4K / ORIGINAL
              </span>
            </div>
          </div>

          {/* Floating episode card */}
          <div className="absolute -bottom-7 -left-3 hidden animate-cardFloat rounded-xl border border-white/10 bg-black/80 p-4 text-left shadow-2xl backdrop-blur-xl sm:block lg:-left-12">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
              Last watched
            </span>

            <p className="mt-2 font-display text-sm text-white">
              Episode 01
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="font-mono text-[9px] text-white/40">
                92% complete
              </span>
            </div>
          </div>

          {/* Floating sleep card */}
          <div className="absolute -right-3 top-12 hidden animate-cardFloatReverse rounded-xl border border-white/10 bg-black/80 p-4 text-left shadow-2xl backdrop-blur-xl sm:block lg:-right-12">
            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
              Tonight
            </span>

            <p className="mt-2 font-display text-sm text-orange-300">
              No autoplay.
            </p>

            <p className="mt-1 font-mono text-[9px] text-white/30">
              You&apos;re done here.
            </p>
          </div>
        </div>


        <div
          className="mt-14 flex animate-cinematicIn flex-col items-center gap-5 opacity-0 sm:flex-row"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#buy"
            className="group relative overflow-hidden rounded-full bg-orange-500 px-9 py-4 font-display text-lg tracking-wide text-white shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_0_60px_rgba(249,115,22,0.35)]"
          >
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[150%]" />

            <span className="relative">
              Start Season One — ₹1,499
            </span>
          </a>

          <a
            href="#inside"
            className="group font-mono text-xs uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-white"
          >
            Explore the story
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>


        <div
          className="mt-16 flex w-full animate-cinematicIn flex-col items-center gap-5 opacity-0 sm:flex-row sm:justify-center"
          style={{ animationDelay: "1.4s" }}
        >
          <SleepDebtBar />
          <StillAwakePrompt />
        </div>

        {/* Scroll */}
        <div
          className="mt-16 animate-cinematicIn opacity-0"
          style={{ animationDelay: "1.6s" }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/20">
              Continue
            </span>

            <div className="relative h-12 w-px overflow-hidden bg-white/10">
              <div className="absolute left-0 top-0 h-5 w-px animate-scrollLine bg-orange-400" />
            </div>
          </div>
        </div>
      </main>


      <style jsx global>{`
        @keyframes moonFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-18px) scale(1.025);
          }
        }

        @keyframes moonAura {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.9);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes star {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.7);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.5);
          }
        }

        @keyframes shoot {
          0% {
            transform: translateX(-200px) rotate(-20deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          35% {
            transform: translateX(700px) rotate(-20deg);
            opacity: 0;
          }

          100% {
            transform: translateX(700px) rotate(-20deg);
            opacity: 0;
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(250%);
          }
        }

        @keyframes cinematicIn {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes titleTop {
          0% {
            opacity: 0;
            transform: translateY(60px);
            letter-spacing: 0.3em;
            filter: blur(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0;
            filter: blur(0);
          }
        }

        @keyframes titleBottom {
          0% {
            opacity: 0;
            transform: translateY(60px);
            filter: blur(15px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 12rem;
            opacity: 1;
          }
        }

        @keyframes playerIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.96);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        @keyframes cardFloatReverse {
          0%,
          100% {
            transform: translateY(0) rotate(2deg);
          }

          50% {
            transform: translateY(12px) rotate(-1deg);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }

          100% {
            transform: translateY(250%);
          }
        }

        .animate-moonFloat {
          animation: moonFloat 8s ease-in-out infinite;
        }

        .animate-moonAura {
          animation: moonAura 6s ease-in-out infinite;
        }

        .animate-star {
          animation: star 3s ease-in-out infinite;
        }

        .animate-shoot {
          animation: shoot 8s linear infinite;
        }

        .animate-lightSweep {
          animation: lightSweep 12s linear infinite;
        }

        .animate-cinematicIn {
          animation: cinematicIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-titleTop {
          animation: titleTop 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-titleBottom {
          animation: titleBottom 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-lineGrow {
          animation: lineGrow 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
        }

        .animate-playerIn {
          animation: playerIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-cardFloat {
          animation: cardFloat 5s ease-in-out infinite;
        }

        .animate-cardFloatReverse {
          animation: cardFloatReverse 5.5s ease-in-out infinite;
        }

        .animate-scrollLine {
          animation: scrollLine 1.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-moonFloat,
          .animate-moonAura,
          .animate-star,
          .animate-shoot,
          .animate-lightSweep,
          .animate-cinematicIn,
          .animate-titleTop,
          .animate-titleBottom,
          .animate-lineGrow,
          .animate-playerIn,
          .animate-cardFloat,
          .animate-cardFloatReverse,
          .animate-scrollLine {
            animation: none !important;
          }

          .animate-cinematicIn,
          .animate-titleTop,
          .animate-titleBottom,
          .animate-playerIn {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}