import { PROCESS_STEPS, type ProcessId } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#163a5f0f,transparent_42%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-[min(94%,72rem)]">
        <div className="mx-auto max-w-2xl text-center" data-animate>
          <p className="text-sm font-semibold tracking-wide text-navy uppercase">
            Our process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            From first visit to live rooftop
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base">
            Four steps. One team. A clear path from the survey to generation
            you can watch on your phone.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="process-line pointer-events-none absolute top-3 bottom-3 left-[1.35rem] w-px lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-8 lg:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              const even = index % 2 === 0;
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={step.id}
                  data-animate
                  data-delay={String(index + 1)}
                  className="relative grid items-center gap-4 lg:grid-cols-[1fr_4.5rem_1fr] lg:gap-8 lg:py-7"
                >
                  <article
                    className={`ml-12 rounded-[1.5rem] border border-zinc-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:ml-16 sm:p-6 lg:row-start-1 lg:ml-0 lg:p-7 ${
                      even ? "lg:col-start-1 lg:text-right" : "lg:col-start-3"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        even ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
                        <ProcessIcon id={step.id} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
                          {step.duration}
                        </p>
                        <h3 className="mt-1 text-xl font-bold text-zinc-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>

                  <div className="absolute top-6 left-0 z-10 lg:static lg:col-start-2 lg:row-start-1 lg:flex lg:justify-center">
                    <span className="relative z-10 flex size-11 items-center justify-center rounded-full border-4 border-white bg-navy text-xs font-bold tracking-wide text-white shadow-md">
                      {number}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessIcon({ id }: { id: ProcessId }) {
  switch (id) {
    case "survey":
      return <SurveyIcon />;
    case "design":
      return <DesignIcon />;
    case "install":
      return <InstallIcon />;
    case "care":
      return <CareIcon />;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}

function SurveyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M4 18V8.5L12 4l8 4.5V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 18v-5h6v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="7.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M5 19h14M7 16l4.2-8.4a1 1 0 0 1 1.8 0L17 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12h5.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M4 14.5 12 8l8 6.5V20H4v-5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 20v-4.5h8V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 5v2M12 17v2M5 12h2M17 12h2M7.2 7.2l1.4 1.4M15.4 15.4l1.4 1.4M16.8 7.2l-1.4 1.4M8.6 15.4l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
