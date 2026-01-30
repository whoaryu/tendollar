"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[60dvh] flex-col items-center justify-center px-6 py-10 text-center animate-fade-in"
    >
      <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
        Help me reach $10. That&apos;s it. That&apos;s the site.
      </h1>
      <p className="mt-4 max-w-lg text-base text-neutral-600 sm:text-lg">
        Someone paid $10. I received $8.77. This is about justice.
      </p>
      <a
        href="#help"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        Pay me / Help me cross $10 →
      </a>
    </section>
  );
}
