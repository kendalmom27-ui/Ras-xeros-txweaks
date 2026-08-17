import PageShell from "../../components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <span className="eyebrow justify-center">Services</span>
            <h1 className="mt-3.5 text-6xl font-bold tracking-tight">
              OUR <span className="text-signal">SERVICES</span>
            </h1>

            <p className="mt-6 text-xl text-ink-dim">
              Professional PC Optimization by RASX
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="panel p-8">
              <h2 className="mt-3 text-3xl font-bold text-signal">
                RASX BIOS OPTIMIZATION
              </h2>

              <p className="mt-2 text-2xl font-bold text-signal">FREE</p>

              <ul className="mt-6 space-y-3 text-ink-dim">
                <li>✔ BIOS Optimization</li>
                <li>✔ Memory Tuning</li>
                <li>✔ CPU Optimization</li>
                <li>✔ Stability Testing</li>
                <li>✔ Gaming Optimization</li>
              </ul>
            </div>

            <div className="panel panel-alert p-8">
              <h2 className="mt-3 text-3xl font-bold text-alert">
                RASX UTILITY
              </h2>

              <p className="mt-2 text-2xl font-bold text-alert">COMPLIMENTARY</p>

              <ul className="mt-6 space-y-3 text-ink-dim">
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
