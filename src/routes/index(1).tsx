import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Hero from "@/components/revamp/Hero";
import SDGStrip from "@/components/revamp/SDGStrip";
import About from "@/components/revamp/About";
import Journey from "@/components/revamp/Journey";
import ImpactNumbers from "@/components/revamp/ImpactNumbers";

import Programs from "@/components/revamp/Programs";
import ImpactStories from "@/components/revamp/ImpactStories";
import Testimonials from "@/components/revamp/Testimonials";
import CoreValues from "@/components/revamp/CoreValues";
import Partners from "@/components/revamp/Partners";
import LookingAhead from "@/components/revamp/LookingAhead";
import Support from "@/components/revamp/Support";
import Footer from "@/components/revamp/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revamp Initiatives, Creativity as a Force for Change" },
      {
        name: "description",
        content:
          "Revamp Initiatives is a Nigerian creative social impact hub empowering vulnerable communities through creative expression, vocational training, and sustainable development since 2022.",
      },
      { property: "og:title", content: "Revamp Initiatives, Creativity as a Force for Change" },
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

      <Programs />
      <ImpactStories />
      <Testimonials />
      <CoreValues />
      <Partners />
      <LookingAhead />
      <Support />
      <Footer />
    </main>
  );
}
