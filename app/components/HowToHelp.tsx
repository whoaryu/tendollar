import Image from "next/image";

const QR_SIZE = 200;

export default function HowToHelp() {
  return (
    <section
      id="help"
      className="scroll-mt-20 border-t border-neutral-100 bg-white/50 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto w-full max-w-4xl min-w-0">
        <h2 className="text-center text-xl font-semibold tracking-tight text-neutral-900 break-words sm:text-2xl">
          How You Can Help
        </h2>
        <p className="mt-1 text-center text-sm text-neutral-600">
          Pick one. Or don&apos;t. No pressure.
        </p>
        <div className="mt-8 grid w-full min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <a
            href="https://buymeacoffee.com/whoaryu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col items-center overflow-x-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg"
          >
            <span className="text-center text-base font-medium text-neutral-900 break-words group-hover:underline">
              Buy Me a Coffee
            </span>
            <p className="mt-0.5 text-center text-sm text-neutral-600 break-words">
              Official. Polished. Takes a cut.
            </p>
            <div className="mt-4 flex min-h-[180px] w-full max-w-[200px] shrink-0 items-center justify-center overflow-visible sm:min-h-[200px]">
              <Image
                src="/bmc_qr.png"
                alt="Buy Me a Coffee QR code"
                width={QR_SIZE}
                height={QR_SIZE}
                className="rounded-xl border border-neutral-100 transition-transform duration-300 ease-out group-hover:scale-[1.27]"
              />
            </div>
            <span className="mt-3 break-all text-center text-xs text-neutral-500">
              buymeacoffee.com/whoaryu →
            </span>
          </a>
          <div className="group flex min-w-0 flex-col items-center overflow-x-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg">
            <span className="text-center text-base font-medium text-neutral-900 break-words">
              GPay (QR)
            </span>
            <p className="mt-0.5 text-center text-sm text-neutral-600 break-words">
              No commission. Pure vibes.
            </p>
            <div className="mt-4 flex min-h-[180px] w-full max-w-[200px] shrink-0 items-center justify-center overflow-visible sm:min-h-[200px]">
              <Image
                src="/gpay.jpeg"
                alt="GPay QR code for direct payment"
                width={QR_SIZE}
                height={QR_SIZE}
                className="rounded-xl border border-neutral-100 transition-transform duration-300 ease-out group-hover:scale-[1.27]"
              />
            </div>
            <p className="mt-3 break-words text-center text-xs text-neutral-500">
              Direct transfer. No platform fee. Use at your own discretion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
