"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[60dvh] flex-col items-center justify-center px-4 py-10 text-center animate-fade-in sm:px-6"
    >
      <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
        Update: We did it.
      </p>
      <h1 className="mt-2 w-full max-w-2xl min-w-0 text-2xl font-semibold leading-tight tracking-tight text-neutral-900 break-words sm:text-4xl md:text-5xl">
        We hit $10. Internet restored. Now the goal is $10,000.
      </h1>
      <p className="mt-4 w-full max-w-lg min-w-0 break-words text-base text-neutral-600 sm:text-lg">
        The site went viral on Reddit. I&apos;m not stopping. Neither should you.
      </p>
      <a
        href="#help"
        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Help me reach $10k →
      </a>
    </section>
  );
}
