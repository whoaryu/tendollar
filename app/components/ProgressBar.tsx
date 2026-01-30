"use client";

const PROGRESS = 87.7;
const REACHED_100 = false; // Toggle when you hit $10

export default function ProgressBar() {
  const percent = REACHED_100 ? 100 : PROGRESS;

  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-xl">
        <div className="overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-3.5 rounded-full bg-neutral-900 transition-all duration-1000 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-2 text-center text-sm text-neutral-600">
          {percent >= 100
            ? "We did it. Internet restored."
            : "Commission damage."}
        </p>
      </div>
    </section>
  );
}
