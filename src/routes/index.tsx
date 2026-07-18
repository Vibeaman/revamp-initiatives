import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/revamp/Navbar";
import Hero from "@/components/revamp/Hero";
import SDGStrip from "@/components/revamp/SDGStrip";
import HomeWhoWeAre from "@/components/revamp/HomeWhoWeAre";
import HomeProgramsTeaser from "@/components/revamp/HomeProgramsTeaser";
import HomeImpactStats from "@/components/revamp/HomeImpactStats";
import HomeTestimonials from "@/components/revamp/HomeTestimonials";
import Footer from "@/components/revamp/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revamp Initiatives: Encourage Creativity for Social Impact" },
      {
        name: "description",
        content:
          "Revamp Initiatives is a Nigerian creative social impact hub empowering vulnerable communities through creative expression, vocational training, and sustainable development since 2022.",
      },
      { property: "og:title", content: "Revamp Initiatives: Encourage Creativity for Social Impact" },
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
      <HomeWhoWeAre />
      <HomeProgramsTeaser />
      <HomeImpactStats />
      <HomeTestimonials />
      <Footer />
    </main>
  );
}
