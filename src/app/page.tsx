import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Mission />
      <Portfolio />
      <Stats />
      <Footer />
    </main>
  );
}
