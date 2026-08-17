import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <span className="eyebrow">About</span>
          <h1 className="mt-3.5 text-5xl font-bold tracking-tight md:text-6xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-ink-dim">
            {site.fullName} was built by gamers, for gamers. We pair deep Windows
            optimization expertise with our own desktop utility tools to deliver
            the best PC performance experience possible.
          </p>

          <div className="mt-16 space-y-6">
            <div className="panel p-8">
              <h2 className="mt-3 text-2xl font-bold text-signal">Our Mission</h2>
              <p className="mt-4 leading-8 text-ink-dim">
                Help every gamer get the most out of their hardware — higher FPS,
                lower ping, and smoother gameplay — without needing to spend
                thousands on new parts.
              </p>
            </div>

            <div className="panel panel-alert p-8">
              <h2 className="mt-3 text-2xl font-bold text-alert">Why Rasx?</h2>
              <p className="mt-4 leading-8 text-ink-dim">
                One platform covering the whole stack. Free BIOS optimization,
                active community support, and the complimentary Rasx Utility —
                everything from hardware tuning to software optimization in one
                place.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
