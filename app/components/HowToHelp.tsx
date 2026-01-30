import Image from "next/image";

const QR_SIZE = 200;

export default function HowToHelp() {
  return (
    <section
      id="help"
      className="scroll-mt-20 border-t border-neutral-100 bg-white/50 px-6 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
          How You Can Help
        </h2>
        <p className="mt-1 text-center text-sm text-neutral-600">
          Pick one. Or don&apos;t. No pressure.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <a
            href="https://buymeacoffee.com/whoaryu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center overflow-visible rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg"
          >
            <span className="text-base font-medium text-neutral-900 group-hover:underline">
              Buy Me a Coffee
            </span>
            <p className="mt-0.5 text-center text-sm text-neutral-600">
              Official. Polished. Takes a cut.
            </p>
            <div className="mt-4 flex min-h-[200px] min-w-[200px] items-center justify-center overflow-visible">
              <Image
                src="/bmc_qr.png"
                alt="Buy Me a Coffee QR code"
                width={QR_SIZE}
                height={QR_SIZE}
                className="rounded-xl border border-neutral-100 transition-transform duration-300 ease-out group-hover:scale-[1.27]"
              />
            </div>
            <span className="mt-3 text-xs text-neutral-500">
              buymeacoffee.com/whoaryu →
            </span>
          </a>
          <div className="group flex flex-col items-center overflow-visible rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg">
            <span className="text-base font-medium text-neutral-900">
              GPay (QR)
            </span>
            <p className="mt-0.5 text-center text-sm text-neutral-600">
              No commission. Pure vibes.
            </p>
            <div className="mt-4 flex min-h-[200px] min-w-[200px] items-center justify-center overflow-visible">
              <Image
                src="/gpay.jpeg"
                alt="GPay QR code for direct payment"
                width={QR_SIZE}
                height={QR_SIZE}
                className="rounded-xl border border-neutral-100 transition-transform duration-300 ease-out group-hover:scale-[1.27]"
              />
            </div>
            <p className="mt-3 text-center text-xs text-neutral-500">
              Direct transfer. No platform fee. Use at your own discretion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
