import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Hero from "@/components/revamp/Hero";
import SDGStrip from "@/components/revamp/SDGStrip";
import About from "@/components/revamp/About";
import Journey from "@/components/revamp/Journey";
import ImpactNumbers from "@/components/revamp/ImpactNumbers";
import Achievements from "@/components/revamp/Achievements";
import Founders from "@/components/revamp/Founders";

import Programs from "@/components/revamp/Programs";
import ImpactStories from "@/components/revamp/ImpactStories";
import Testimonials from "@/components/revamp/Testimonials";
import CoreValues from "@/components/revamp/CoreValues";
import Partners from "@/components/revamp/Partners";
import LookingAhead from "@/components/revamp/LookingAhead";
import Support from "@/components/revamp/Support";
import ContactForm from "@/components/revamp/ContactForm";
import Footer from "@/components/revamp/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revamp Initiatives — Encourage Creativity for Social Impact" },
      {
        name: "description",
        content:
          "Revamp Initiatives is a Nigerian creative social impact hub empowering vulnerable communities through creative expression, vocational training, and sustainable development since 2022.",
      },
      { property: "og:title", content: "Revamp Initiatives — Encourage Creativity for Social Impact" },
      {
        property: "og:description",
        content:
          "Empowering vulnerable Nigerian communities through creativity, vocational training, and sustainable development.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-cream">
      <Navbar />
      <Hero />
      <SDGStrip />
      <About />
      <Journey />
      <ImpactNumbers />
      <Achievements />
      <Founders />

      <Programs />
      <ImpactStories />
      <Testimonials />
      <CoreValues />
      <Partners />
      <LookingAhead />
      <Support />
      <ContactForm />
      <Footer />
    </main>
  );
}
