import PageShell from "../../components/PageShell";

export default function FreeBiosPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-[#050608] pt-28 text-white">
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <div className="rounded-3xl border border-green-500/20 bg-[#0B0D10] p-12 shadow-[0_0_60px_rgba(0,255,120,0.08)]">

            <span className="rounded-full bg-green-500/10 border border-green-500/30 px-4 py-2 text-sm font-bold text-green-400">
              FREE BIOS SERVICE
            </span>

            <h1 className="mt-6 text-5xl font-black">
              RAS Advanced BIOS Optimization
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Get a completely FREE advanced BIOS optimization from
              <span className="text-green-400 font-bold"> RAS TXWEAKS</span>.
              Every BIOS is tuned specifically for your hardware—no generic presets.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? Memory Optimization
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? CPU Performance Tuning
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? Lower Latency
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? Stability Tested
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? Personalized Settings
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                ? Gaming Optimization
              </div>

            </div>

            <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

              <h2 className="text-3xl font-black text-cyan-400">
                Join Our Discord
              </h2>

              <p className="mt-3 text-gray-400">
                Open a support ticket and request your FREE BIOS optimization.
              </p>

              <a
                href="https://discord.gg/ZWXkTTSuc"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                Join Discord
              </a>

            </div>

          </div>

        </section>
      </main>
    </PageShell>
  );
}
