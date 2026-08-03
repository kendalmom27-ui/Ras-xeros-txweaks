import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import Testimonials from "../../components/Testimonials";

const products = [
  {
    title: "Full Optimization",
    price: "$25",
    badge: "MOST POPULAR",
    desc: "Complete Windows optimization including registry tweaks, FPS improvements, latency reduction, startup optimization and gaming performance tuning.",
    features: [
      "Windows Optimization",
      "Registry Tweaks",
      "FPS Boost",
      "Input Delay Reduction",
      "Gaming Tweaks"
    ]
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
    ]
  },

  {
    title: "XERO'S Utility",
    price: "$10",
    badge: "LIFETIME",
    desc: "Premium optimization utility featuring one-click tweaks, gaming profiles, Windows cleanup and lifetime updates.",
    features: [
      "One Click Tweaks",
      "Gaming Profiles",
      "Windows Cleaner",
      "FPS Optimizer",
      "Lifetime Updates"
    ]
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

                  <PurchaseModal product={p.title} price={p.price} />

                </div>

              </div>

            ))}

          </div>

          <Testimonials />

        </section>

      </main>
    </PageShell>
  );
}
