import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MotionRoot } from "@/components/motion-root";
import { Navbar } from "@/components/navbar";
import { PartnerMarquee } from "@/components/partner-marquee";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Quality } from "@/components/quality";
import { Solutions } from "@/components/solutions";
import { Trust } from "@/components/trust";
import { WhySolar } from "@/components/why-solar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MotionRoot />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <WhySolar />
        <About />
        <Process />
        <Solutions />
        <Quality />
        <PartnerMarquee />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
