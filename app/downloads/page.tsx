import PageShell from "../../components/PageShell";
import Link from "next/link";
import { Cpu, ShieldCheck, Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function DownloadsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-[#05070b] pt-28 text-white">
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#0d1118] to-[#090b0f] p-12 shadow-[0_0_60px_rgba(0,229,255,.12)]">

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/20 p-3">
                <Cpu className="h-8 w-8 text-cyan-400" />
              </div>

              <div>
                <p className="text-cyan-400 font-bold tracking-[.25em] uppercase">
                  FREE SERVICE
                </p>

                <h1 className="text-5xl font-black mt-2">
                  RAS Advanced BIOS Optimization
                </h1>
              </div>
            </div>

            <p className="mt-8 text-xl text-gray-300 leading-9">
              Receive a completely FREE professional BIOS optimization from
              <span className="text-cyan-400 font-bold"> RAS TXWEAKS.</span>

              Every BIOS is tuned specifically for your motherboard, CPU,
              RAM, and gaming goals to maximize performance, improve stability,
              reduce latency, and increase FPS.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-cyan-500/20 bg-black/40 p-6">
                <ShieldCheck className="h-8 w-8 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold">Included FREE</h2>

                <ul className="mt-6 space-y-3 text-gray-300">
                  <li>✔ Personalized BIOS configuration</li>
                  <li>✔ RAM tuning & EXPO/XMP setup</li>
                  <li>✔ CPU optimization</li>
                  <li>✔ Voltage tuning guidance</li>
                  <li>✔ Boot optimization</li>
                  <li>✔ Stability verification</li>
                  <li>✔ Gaming performance tweaks</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-black/40 p-6">
                <Zap className="h-8 w-8 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold">
                  Join Our Discord
                </h2>

                <p className="mt-5 text-gray-300 leading-8">
                  Open a support ticket and one of our staff members will
                  schedule your FREE BIOS optimization.
                </p>

                <Link
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
                >
                  <MessageCircle className="h-6 w-6" />
                  Join Discord
                </Link>

                <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center">
                  <p className="text-cyan-400 font-bold">
                    Discord Invite
                  </p>

                  <p className="mt-2 text-gray-300">
                    discord.gg/ZWXkTTSuc
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-black/40 p-8 text-center">
              <h2 className="text-3xl font-black">
                Ready to Optimize Your PC?
              </h2>

              <p className="mt-4 text-gray-400">
                Our BIOS optimization service is completely FREE and customized
                for every system.
              </p>

              <Link
                href="https://discord.gg/ZWXkTTSuc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-10 py-4 text-lg font-bold text-black transition hover:bg-cyan-400"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

          </div>

        </section>
      </main>
    </PageShell>
  );
}
