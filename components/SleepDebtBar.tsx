export default function SleepDebtBar() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-white/10 bg-card/80 px-4 py-3">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-dim">
        <span>Sleep debt this week</span>
        <span className="text-alert">14 hrs</span>
      </div>
      <div className="relative mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-alert" />
        <div className="absolute -top-1 left-[72%] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-alert shadow shadow-alert/50" />
      </div>
      <div className="mt-1 flex justify-between font-mono text-[10px] text-dim">
        <span>0h</span>
        <span>20h recommended</span>
      </div>
    </div>
  );
}
