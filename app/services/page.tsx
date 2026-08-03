import PageShell from "../../components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h1 className="text-6xl font-black text-center">
            OUR <span className="text-cyan-400">SERVICES</span>
          </h1>

          <p className="mt-6 text-center text-xl text-gray-400">
            Professional PC Optimization by RAS TXWEAKS & XERO&apos;S TXWEAKS
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">
              <h2 className="text-3xl font-bold text-green-400">
                RAS TXWEAKS BIOS OPTIMIZATION
              </h2>

              <p className="mt-2 text-2xl font-bold">FREE</p>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ BIOS Optimization</li>
                <li>✔ Memory Tuning</li>
                <li>✔ CPU Optimization</li>
                <li>✔ Stability Testing</li>
                <li>✔ Gaming Optimization</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">
              <h2 className="text-3xl font-bold text-cyan-400">
                XERO&apos;S TXWEAKS UTILITY
              </h2>

              <p className="mt-2 text-2xl font-bold">$10</p>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Windows Tweaks</li>
                <li>✔ Registry Tweaks</li>
                <li>✔ FPS Boost</li>
                <li>✔ Lower Latency</li>
                <li>✔ Lifetime Updates</li>
              </ul>
            </div>

          </div>
        </section>
      </main>
    </PageShell>
  );
}
