import PageShell from "../../components/PageShell";
import { site, products } from "../../lib/site";

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            {site.fullName}
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Products & Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {site.fullName} provides professional PC optimization solutions
            designed to improve gaming performance, reduce latency, and enhance
            overall system responsiveness.
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-500/30"
              >
                <h2 className="text-2xl font-bold text-cyan-400">
                  {product.name}
                </h2>
                <div className="mt-4 text-4xl font-black">{product.price}</div>
                <p className="mt-4 leading-7 text-gray-400">
                  {product.description}
                </p>
                <a
                  href={product.href}
                  className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8">
              <h2 className="text-3xl font-bold text-green-400">
                BIOS Optimization
              </h2>
              <p className="mt-2 text-sm font-semibold text-green-300">FREE</p>
              <p className="mt-5 leading-8 text-gray-300">
                Advanced BIOS optimization for supported systems. Every
                optimization is tailored to your hardware instead of using
                generic settings.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Memory Configuration</li>
                <li>✔ CPU Optimization Guidance</li>
                <li>✔ Performance-Focused BIOS Settings</li>
                <li>✔ Stability Verification</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
              <h2 className="text-3xl font-bold text-cyan-400">
                Ras&Xero Utility
              </h2>
              <div className="mt-4 text-5xl font-black">$10</div>
              <p className="mt-5 leading-8 text-gray-300">
                Our premium desktop optimization utility with Windows tweaks,
                registry optimizations, and gaming performance tools.
              </p>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Windows Optimization</li>
                <li>✔ Registry Tweaks</li>
                <li>✔ Gaming Performance Tweaks</li>
                <li>✔ Latency Optimizations</li>
                <li>✔ Lifetime Updates</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
