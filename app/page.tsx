import PageShell from "../components/PageShell";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import GameBenchmarks from "../components/home/GameBenchmarks";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <PageShell>
      <main className="bg-black text-white">
        <Hero />
        <Features />
        <GameBenchmarks />
        <Reviews />
        <FAQ />
      </main>
    </PageShell>
  );
}
