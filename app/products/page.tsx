import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import Testimonials from "../../components/Testimonials";
import { addons } from "../../lib/site";

const products = [
  {
    title: "Full Optimization",
    price: "$25",
    badge: "MOST POPULAR",
    desc: "Complete Windows optimization tuned end to end — the base package, with optional hardware overclocking you can add on.",
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

          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Instant Delivery</span>
            <h1 className="mt-4 text-[clamp(2.1rem,4vw,3rem)] font-bold tracking-tight">
              Choose Your Package
            </h1>

            <p className="mt-4 text-lg text-ink-dim">
              The price you see is the price you pay — no upsells, no surprises.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {products.map((p) => (

              <div key={p.title} className="panel flex flex-col p-7">

                <span className="badge-pill self-start">{p.badge}</span>

                <h2 className="mt-5 text-2xl font-semibold">
                  {p.title}
                </h2>

                <div className="mt-4 bg-gradient-to-r from-signal-light to-signal bg-clip-text text-5xl font-bold text-transparent">
                  {p.price}
                </div>

                <p className="mt-5 leading-7 text-ink-dim">
                  {p.desc}
                </p>

                <div className="mt-7 space-y-3">

                  {p.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3 text-ink-dim"
                    >
                      <div className="h-1.5 w-1.5 flex-none rounded-full bg-signal" />
                      {feature}
                    </div>

                  ))}

                </div>

                <div className="mt-auto">
                  {p.hasAddons && (
                    <p className="mt-7 text-xs text-muted">
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

            <div className="panel panel-alert flex flex-col p-7">

              <span className="badge-pill self-start">Complimentary</span>

              <h2 className="mt-5 text-2xl font-semibold">
                Rasx Utility
              </h2>

              <div className="mt-4 bg-gradient-to-r from-signal-light to-signal bg-clip-text text-5xl font-bold text-transparent">
                FREE
              </div>

              <p className="mt-5 leading-7 text-ink-dim">
                Our desktop utility, included at no cost with every optimization
                package. One-click tweaks, gaming profiles, and lifetime updates.
              </p>

              <div className="mt-7 space-y-3">
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
                    <div className="h-1.5 w-1.5 flex-none rounded-full bg-signal" />
                    {feature}
                  </div>
                ))}
              </div>

              <a href="/downloads" className="btn btn-ghost mt-auto w-full">
                Included Free →
              </a>

            </div>

          </div>

          <Testimonials />

        </section>

      </main>
    </PageShell>
  );
}
