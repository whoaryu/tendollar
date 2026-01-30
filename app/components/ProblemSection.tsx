import Image from "next/image";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="scroll-mt-20 px-6 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          The Math Is Not Mathing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
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
