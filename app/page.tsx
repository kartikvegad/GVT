import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MotionRoot } from "@/components/motion-root";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Quality } from "@/components/quality";
import { Savings } from "@/components/savings";
import { Services } from "@/components/services";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";
import { Trust } from "@/components/trust";
import { WhySolar } from "@/components/why-solar";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <MotionRoot />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <WhySolar />
        <About />
        <Solutions />
        <Services />
        <Process />
        <Quality />
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
