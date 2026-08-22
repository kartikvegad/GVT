import Image from "next/image";
import { CardCarousel } from "@/components/card-carousel";
import { PROJECTS } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-zinc-50">
      <div className="mx-auto w-[min(94%,72rem)]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-animate>
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-navy uppercase">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Rooftops we work on
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-500">
            Homes, housing societies, and light industry — designed around
            roof, load, and DISCOM rules.
          </p>
        </div>

        <div className="mt-10">
          <CardCarousel>
            {PROJECTS.map((project) => (
              <div
                key={`${project.title}-${project.location}`}
                className="img-card"
              >
                <article className="img-card-inner">
                  <div className="relative h-44 w-full shrink-0 sm:h-52">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 31vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-zinc-900">{project.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{project.location}</p>
                    <p className="mt-3 text-sm font-medium text-navy">{project.result}</p>
                  </div>
                </article>
              </div>
            ))}
          </CardCarousel>
        </div>
      </div>
    </section>
  );
}
