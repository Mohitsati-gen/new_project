const STATS = [
  "47 HRS STREAMED THIS WEEK",
  "3 HRS SLEPT LAST NIGHT",
  "BINGE MODE: ON",
  "NEXT EPISODE IN 00:05",
  "6 SEASONS IN 4 DAYS",
  "STILL WATCHING? ALWAYS.",
];

export default function Marquee() {
  const loop = [...STATS, ...STATS];
  return (
    <div className="overflow-hidden border-y border-white/5 bg-stone-400 bg-card/60 py-2.5">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-mono text-xs tracking-widest text-black/100"
          >
            {s} <span className="text-ember/50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
