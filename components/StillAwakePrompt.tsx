"use client";

import { useEffect, useState } from "react";

export default function StillAwakePrompt() {
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(8);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const appear = setTimeout(() => setShow(true), 2400);
    return () => clearTimeout(appear);
  }, []);

  useEffect(() => {
    if (!show || dismissed) return;
    if (seconds <= 0) return;
    const tick = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(tick);
  }, [show, seconds, dismissed]);

  if (!show) return null;

  const circumference = 2 * Math.PI * 20;
  const progress = circumference - (seconds / 8) * circumference;

  return (
    <div
      className={`w-full max-w-xs rounded-xl border border-white/10 bg-card/95 p-5 shadow-2xl shadow-black/50 backdrop-blur transition-opacity duration-500 ${
        show ? "animate-fadeUp opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          <svg viewBox="0 0 48 48" className="h-12 w-12 -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#232945"
              strokeWidth="3"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#E5342B"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <span className="absolute font-mono text-xs text-moon">
            {dismissed ? "✓" : seconds}
          </span>
        </div>
        <div>
          <p className="font-display text-lg leading-none tracking-wide text-moon">
            Are you still awake?
          </p>
          <p className="mt-1 font-mono text-[11px] text-dim">
            {dismissed
              ? "Good. Lights dimming now."
              : "Bedtime autoplays in a moment."}
          </p>
        </div>
      </div>
      {!dismissed && (
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setDismissed(true)}
            className="flex-1 rounded-md bg-ember px-3 py-2 font-display text-sm tracking-wide text-midnight transition hover:brightness-110"
          >
            Yes, put me to sleep
          </button>
          <button
            onClick={() => setSeconds(8)}
            className="flex-1 rounded-md border border-white/15 px-3 py-2 font-display text-sm tracking-wide text-dim transition hover:text-moon"
          >
            One more episode
          </button>
        </div>
      )}
    </div>
  );
}
