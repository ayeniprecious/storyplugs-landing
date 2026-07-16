import { Apple, PlayCircle } from "lucide-react";

export function StoreBadges() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-left opacity-70">
        <Apple size={26} />
        <div>
          <div className="text-[11px] uppercase tracking-wide text-muted">
            Coming soon on
          </div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 text-left opacity-70">
        <PlayCircle size={26} />
        <div>
          <div className="text-[11px] uppercase tracking-wide text-muted">
            Coming soon on
          </div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </div>
    </div>
  );
}
