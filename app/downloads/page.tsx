import PageShell from "../../components/PageShell";
import Link from "next/link";
import { Cpu, ShieldCheck, Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function DownloadsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <div className="panel p-12">

            <div className="flex items-center gap-3">
              <div className="border border-line bg-bg-raised-2 p-3">
                <Cpu className="h-8 w-8 text-signal" />
              </div>

              <div>
                <span className="eyebrow">Free Service</span>

                <h1 className="text-5xl font-bold tracking-tight mt-3">
                  RASX Advanced BIOS Optimization
                </h1>
              </div>
            </div>

            <p className="mt-8 text-xl text-ink-dim leading-9">
              Receive a completely FREE professional BIOS optimization from
              <span className="text-signal font-bold"> RASX.</span>
              {" "}Every BIOS is tuned specifically for your motherboard, CPU,
              RAM, and gaming goals to maximize performance, improve stability,
              reduce latency, and increase FPS.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">

              <div className="border border-line bg-bg-raised-2 p-6">
                <ShieldCheck className="h-8 w-8 text-signal mb-4" />
                <h2 className="text-2xl font-bold">Included FREE</h2>

                <ul className="mt-6 space-y-3 text-ink-dim">
                  <li>✔ Personalized BIOS configuration</li>
                  <li>✔ RAM tuning & EXPO/XMP setup</li>
                  <li>✔ CPU optimization</li>
                  <li>✔ Voltage tuning guidance</li>
                  <li>✔ Boot optimization</li>
                  <li>✔ Stability verification</li>
                  <li>✔ Gaming performance tweaks</li>
                </ul>
              </div>

              <div className="border border-line bg-bg-raised-2 p-6">
                <Zap className="h-8 w-8 text-alert mb-4" />
                <h2 className="text-2xl font-bold">
                  Join Our Discord
                </h2>

                <p className="mt-5 text-ink-dim leading-8">
                  Open a support ticket and one of our staff members will
                  schedule your FREE BIOS optimization.
                </p>

                <Link
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-8 w-full"
                >
                  <MessageCircle className="h-5 w-5" />
                  Join Discord
                </Link>

                <div className="panel panel-alert mt-6 p-5 text-center">
                  <p className="text-xs tracking-widest text-alert">
                    DISCORD INVITE
                  </p>

                  <p className="mt-2 text-ink-dim">
                    discord.gg/ZWXkTTSuc
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 border border-line bg-bg-raised-2 p-8 text-center">
              <h2 className="text-3xl font-bold">
                Ready to Optimize Your PC?
              </h2>

              <p className="mt-4 text-ink-dim">
                Our BIOS optimization service is completely FREE and customized
                for every system.
              </p>

              <Link
                href="https://discord.gg/ZWXkTTSuc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-8"
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
