import Image from "next/image";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto w-full max-w-3xl min-w-0">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 break-words sm:text-2xl lg:text-3xl">
          The Math Is Not Mathing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600 break-words">
          Buy Me a Coffee takes a cut. When someone pays $10, the platform keeps
          a slice and you get $8.77. To withdraw, you need to hit $10 in your
          pocket. So we&apos;re basically funding their coffee, not mine.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
          <Image
            src="/payment.png"
            alt="Screenshot showing $10 paid and $8.77 received on Buy Me a Coffee"
            width={800}
            height={450}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
        <p className="mt-3 text-sm italic text-neutral-500">
          Capitalism moment.
        </p>
      </div>
    </section>
  );
}
