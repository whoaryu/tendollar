const DONORS = [
  { name: "Teddy Westside", amount: 10.0, timeAgo: "9 months ago", rank: 1 },
  { name: "Breanna Stone", amount: 3.0, timeAgo: "10 hours ago", rank: 2 },
];

export default function DonorLeaderboard() {
  return (
    <section
      id="leaderboard"
      className="scroll-mt-20 border-t border-neutral-100 bg-white/50 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto w-full max-w-2xl min-w-0">
        <h2 className="text-center text-xl font-semibold tracking-tight text-neutral-900 break-words sm:text-2xl">
          Top donors (so far)
        </h2>
        <p className="mt-1 text-center text-sm text-neutral-600">
          They believed before it was cool. Be like them.
        </p>
        <ul className="mt-8 space-y-3">
          {DONORS.map((donor) => (
            <li
              key={donor.name}
              className="flex min-w-0 items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex min-w-0 shrink items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white"
                  aria-hidden
                >
                  {donor.rank}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-medium text-neutral-900 break-words">
                    {donor.name}
                  </p>
                  <p className="text-xs text-neutral-500">{donor.timeAgo}</p>
                </div>
              </div>
              <span className="shrink-0 font-semibold text-neutral-900 tabular-nums">
                ${donor.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs italic text-neutral-500">
          Next name could be yours. No pressure. (Some pressure.)
        </p>
      </div>
    </section>
  );
}
