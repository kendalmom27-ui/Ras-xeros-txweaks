import PageShell from "../components/PageShell";
import Hero from "../components/home/Hero";
import Ticker from "../components/home/Ticker";
import Features from "../components/home/Features";
import GameBenchmarks from "../components/home/GameBenchmarks";
import Reviews from "../components/home/Reviews";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <PageShell>
      <main className="bg-bg text-ink">
        <Hero />
        <Ticker />
        <GameBenchmarks />
        <Features />
        <Reviews />
        <FAQ />
      </main>
    </PageShell>
  );
}

