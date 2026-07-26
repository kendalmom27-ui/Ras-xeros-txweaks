import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import FreeBiosModal from "../../components/FreeBiosModal";
import Testimonials from "../../components/Testimonials";

const products = [
  {
    title: "Full Optimization",
    price: "$25",
    badge: "MOST POPULAR",
    color: "cyan",
    desc: "Complete Windows optimization including registry tweaks, FPS improvements, latency reduction, startup optimization and gaming performance tuning.",
    features: [
      "Windows Optimization",
      "Registry Tweaks",
      "FPS Boost",
      "Input Delay Reduction",
      "Gaming Tweaks"
    ],
    button: "Purchase"
  },

  {
    title: "Extreme Tweaks",
    price: "$15",
    badge: "PERFORMANCE",
    color: "cyan",
    desc: "Aggressive performance package built for competitive gamers who want maximum responsiveness and lower latency.",
    features: [
      "Latency Tweaks",
      "Network Optimization",
      "CPU Tweaks",
      "Timer Resolution",
      "Competitive Preset"
    ],
    button: "Purchase"
  },

  {
    title: "XERO'S Utility",
    price: "$10",
    badge: "LIFETIME",
    color: "cyan",
    desc: "Premium optimization utility featuring one-click tweaks, gaming profiles, Windows cleanup and lifetime updates.",
    features: [
      "One Click Tweaks",
      "Gaming Profiles",
      "Windows Cleaner",
      "FPS Optimizer",
      "Lifetime Updates"
    ],
    button: "Purchase"
  }
];

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">

        <section className="mx-auto max-w-6xl px-8 pb-24">

          <div className="text-center">

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-bold tracking-widest text-cyan-400">
              PRODUCTS
            </span>

            <h1 className="mt-8 text-5xl font-black">
              Optimization <span className="text-cyan-400">Packages</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Choose the optimization package that's right for your PC. Every
              service is designed to maximize gaming performance while keeping
              your system stable and reliable.
            </p>

          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-4">

            {products.map((p) => (

              <div
                key={p.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0D] transition duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-[0_0_35px_rgba(0,229,255,0.18)]"
              >

                <div
                  className={
                    p.color === "green"
                      ? "h-2 bg-green-500"
                      : "h-2 bg-cyan-400"
                  }
                />

                <div className="p-6">

                  <span
                    className={
                      p.color === "green"
                        ? "rounded-full bg-green-500/15 px-4 py-2 text-xs font-bold tracking-widest text-green-400"
                        : "rounded-full bg-cyan-500/15 px-4 py-2 text-xs font-bold tracking-widest text-cyan-400"
                    }
                  >
                    {p.badge}
                  </span>

                  <h2 className="mt-6 text-2xl font-black">
                    {p.title}
                  </h2>

                  <div
                    className={
                      p.color === "green"
                        ? "mt-5 text-5xl font-black text-green-400"
                        : "mt-5 text-5xl font-black text-cyan-400"
                    }
                  >
                    {p.price}
                  </div>

                  <p className="mt-6 leading-8 text-gray-400">
                    {p.desc}
                  </p>

                  <div className="mt-8 space-y-3">

                    {p.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3 text-gray-300"
                      >

                        <div
                          className={
                            p.color === "green"
                              ? "h-2 w-2 rounded-full bg-green-400"
                              : "h-2 w-2 rounded-full bg-cyan-400"
                          }
                        />

                        {feature}

                      </div>

                    ))}

                  </div>

                  {p.price === "FREE" ? <FreeBiosModal /> : <PurchaseModal product={p.title} price={p.price} />}

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
















