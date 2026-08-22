import Image from "next/image";
import { PROJECTS } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 px-[clamp(0.75rem,3vw,2rem)] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-animate>
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-navy uppercase">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by homeowners across Delhi NCR
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">
            Real rooftop types we install every week — on-grid and hybrid plants
            in Faridabad, Delhi, Gurugram, and Noida. Prototype snapshots.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              data-animate
              className="group overflow-hidden rounded-[clamp(1.1rem,2.5vw,1.4rem)] bg-white shadow-sm ring-1 ring-zinc-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 94vw, 31vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{project.location}</p>
                <p className="mt-3 text-sm font-medium text-navy">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
