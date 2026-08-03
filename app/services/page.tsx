import PageShell from "../../components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <span className="eyebrow justify-center">Services</span>
            <h1 className="mt-3.5 text-6xl font-black tracking-tight">
              OUR <span className="text-signal">SERVICES</span>
            </h1>

            <p className="mt-6 text-xl text-ink-dim">
              Professional PC Optimization by RAS TXWEAKS &amp; XERO&apos;S TXWEAKS
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div className="panel p-8">
              <span className="font-mono text-[.68rem] tracking-widest text-muted">CH.01</span>
              <h2 className="mt-3 text-3xl font-bold text-signal">
                RAS TXWEAKS BIOS OPTIMIZATION
              </h2>

              <p className="mt-2 font-mono text-2xl font-bold text-signal">FREE</p>

              <ul className="mt-6 space-y-3 text-ink-dim">
                <li>✔ BIOS Optimization</li>
                <li>✔ Memory Tuning</li>
                <li>✔ CPU Optimization</li>
                <li>✔ Stability Testing</li>
                <li>✔ Gaming Optimization</li>
              </ul>
            </div>

            <div className="panel panel-alert p-8">
              <span className="font-mono text-[.68rem] tracking-widest text-muted">CH.02</span>
              <h2 className="mt-3 text-3xl font-bold text-alert">
                XERO&apos;S TXWEAKS UTILITY
              </h2>

              <p className="mt-2 font-mono text-2xl font-bold text-alert">$10</p>

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
