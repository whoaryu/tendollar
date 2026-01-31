"use client";

const GOAL_10K = 10_000;
const CURRENT = 13; // $10 + $3 so far (approximate after fees, or use 13 for "we have $13")
const PROGRESS_PERCENT = Math.min(100, (CURRENT / GOAL_10K) * 100);

export default function ProgressBar() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto w-full max-w-xl min-w-0">
        <div className="flex items-baseline justify-between gap-2 text-sm text-neutral-600">
          <span>$0</span>
          <span className="font-medium text-neutral-900">Goal: $10,000</span>
          <span>$10k</span>
        </div>
        <div className="mt-2 overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-3 rounded-full bg-neutral-900 transition-all duration-1000 ease-out"
            style={{ width: `${Math.max(0.5, PROGRESS_PERCENT)}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm text-neutral-600">
          {PROGRESS_PERCENT >= 100
            ? "We did it again. Touch grass."
            : `${CURRENT} of $10k. Reddit, you know what to do.`}
        </p>
      </div>
    </section>
  );
}
