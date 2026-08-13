import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import Testimonials from "../../components/Testimonials";
import { addons } from "../../lib/site";

const products = [
  {
    title: "Full Optimization",
    price: "$25",
    badge: "MOST POPULAR",
    desc: "Complete Windows optimization tuned end to end — the base package, with optional hardware overclocking and BIOS work you can add on.",
    features: [
      "Windows Optimized",
      "Services Debloated",
      "Lower Latency",
      "Higher FPS"
    ],
    hasAddons: true
  },

  {
    title: "Extreme Tweaks",
    price: "$15",
    badge: "PERFORMANCE",
    desc: "Aggressive performance package built for competitive gamers who want maximum responsiveness and lower latency.",
    features: [
      "Latency Tweaks",
      "Network Optimization",
      "CPU Tweaks",
      "Timer Resolution",
      "Competitive Preset"
    ],
    hasAddons: false
  }
];

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">

        <section className="mx-auto max-w-6xl px-8 pb-24">

          <div className="max-w-[62ch]">
            <span className="eyebrow">Products</span>
            <h1 className="mt-3.5 text-5xl font-black tracking-tight">
              Optimization <span className="text-signal">Packages</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-ink-dim">
              Choose the optimization package that&apos;s right for your PC. Every
              service is designed to maximize gaming performance while keeping
              your system stable and reliable.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {products.map((p, i) => (

              <div key={p.title} className="panel">

                <div className="h-1 w-full bg-signal" />

                <div className="p-6">

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[.68rem] tracking-widest text-muted">
                      TIER.0{i + 1}
                    </span>
                    <span className="font-mono text-[.68rem] font-bold tracking-widest text-signal">
                      {p.badge}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black">
                    {p.title}
                  </h2>

                  <div className="mt-5 font-mono text-5xl font-black text-signal">
                    {p.price}
                  </div>

                  <p className="mt-6 leading-8 text-ink-dim">
                    {p.desc}
                  </p>

                  <div className="mt-8 space-y-3">

                    {p.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3 text-ink-dim"
                      >
                        <div className="h-1.5 w-1.5 flex-none bg-signal" />
                        {feature}
                      </div>

                    ))}

                  </div>

                  {p.hasAddons && (
                    <p className="mt-6 font-mono text-xs text-muted">
                      + {addons.length} optional add-ons at checkout
                    </p>
                  )}

                  <PurchaseModal
                    product={p.title}
                    price={p.price}
                    addons={p.hasAddons ? addons : undefined}
                  />

                </div>

              </div>

            ))}

            <div className="panel panel-alert">

              <div className="h-1 w-full bg-alert" />

              <div className="p-6">

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[.68rem] tracking-widest text-muted">
                    TIER.03
                  </span>
                  <span className="font-mono text-[.68rem] font-bold tracking-widest text-alert">
                    COMPLIMENTARY
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black">
                  Rasx Utility
                </h2>

                <div className="mt-5 font-mono text-5xl font-black text-alert">
                  FREE
                </div>

                <p className="mt-6 leading-8 text-ink-dim">
                  Our desktop utility, included at no cost with every optimization
                  package. One-click tweaks, gaming profiles, and lifetime updates.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "One Click Tweaks",
                    "Gaming Profiles",
                    "Windows Cleaner",
                    "FPS Optimizer",
                    "Lifetime Updates"
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-ink-dim"
                    >
                      <div className="h-1.5 w-1.5 flex-none bg-alert" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="/downloads"
                  className="mt-10 block w-full rounded-none border border-alert py-3 text-center font-mono text-sm font-bold tracking-wide text-alert transition hover:bg-alert hover:text-[#1A0E00]"
                >
                  INCLUDED FREE →
                </a>

              </div>

            </div>

          </div>

          <Testimonials />

        </section>

      </main>
    </PageShell>
  );
}
