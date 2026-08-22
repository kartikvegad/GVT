import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { MotionRoot } from "@/components/motion-root";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Quality } from "@/components/quality";
import { Savings } from "@/components/savings";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";
import { Trust } from "@/components/trust";
import { WhySolar } from "@/components/why-solar";
import { MARQUEE_TAGS, PARTNERS } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MotionRoot />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee items={MARQUEE_TAGS} className="mt-6" />
        <Trust />
        <WhySolar />
        <About />
        <Solutions />
        <Process />
        <Quality />
        <Marquee items={PARTNERS} />
        <Projects />
        <Testimonials />
        <Pricing />
        <Savings />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
