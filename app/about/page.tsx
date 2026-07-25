import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function AboutPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <h1 className="text-5xl font-black md:text-6xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            {site.fullName} was built by gamers, for gamers. We combine Ras
            Tweaks&apos; deep Windows optimization expertise with Xero&apos;s
            premium utility tools to deliver the best PC performance experience
            possible.
          </p>

          <div className="mt-16 space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold text-cyan-400">Our Mission</h2>
              <p className="mt-4 leading-8 text-gray-400">
                Help every gamer get the most out of their hardware — higher FPS,
                lower ping, and smoother gameplay — without needing to spend
                thousands on new parts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold text-cyan-400">Why Ras&Xero?</h2>
              <p className="mt-4 leading-8 text-gray-400">
                Two trusted brands, one powerful platform. Ras brings free BIOS
                optimization and community support. Xero brings the premium
                desktop utility. Together, we cover everything from hardware
                tuning to software optimization.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
