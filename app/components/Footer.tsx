export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-2xl min-w-0 text-center">
        <p className="text-sm leading-relaxed text-neutral-600 break-words">
          This is a parody site. No pressure. No manipulation. Just vibes and
          transparency.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs text-neutral-500 underline underline-offset-2 transition-colors hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        >
          View source
        </a>
      </div>
    </footer>
  );
}
