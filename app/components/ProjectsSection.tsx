const PROJECTS = [
  {
    name: "barneys-desktop",
    url: "https://barneys-desktop.vercel.app",
    description: "My most viral internet experiment, watch out HIMYM fans.",
  },
  {
    name: "chatwrapped",
    url: "https://chatwrapped.vercel.app",
    description: "Spotify Wrapped, but for your Whatsapp Chats.",
  },
  {
    name: "the-old-internet",
    url: "https://the-old-internet.vercel.app",
    description: "A nostalgia trip back to the early web in a detective game.",
  },
  {
    name: "reconsider",
    url: "https://reconsider.vercel.app",
    description: "Reconsider your spendings via this simple tool.",
  },
  {
    name: "big-bull",
    url: "https://big-bull.vercel.app",
    description: "A fun simulation to make playing 'Stock Market' board game easier.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Things I&apos;ve Built (That Somehow Went Viral)
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-neutral-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-medium text-neutral-900 group-hover:underline">
                  {project.name}.vercel.app
                </span>
                <svg
                  className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="mt-1.5 text-sm text-neutral-600">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
