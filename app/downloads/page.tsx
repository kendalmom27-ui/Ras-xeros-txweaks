import Navbar from "../../components/Navbar";

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#05070B] text-white pt-28">
        <section className="mx-auto max-w-6xl px-8">

          <h1 className="text-center text-6xl font-black">
            XERO'S <span className="text-cyan-400">TXWEAKS</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-400">
            Download the official XERO'S TXWEAKS Utility and optimize your PC
            with performance-focused tweaks.
          </p>

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-cyan-500/30 bg-white/5 p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-bold">
              XERO'S TXWEAKS Utility
            </h2>

            <div className="mt-4 text-5xl font-black text-cyan-400">
              $10
            </div>

            <ul className="mt-8 space-y-3 text-lg text-gray-300">
              <li>✔ Windows Optimization</li>
              <li>✔ Registry Tweaks</li>
              <li>✔ Gaming Performance Tweaks</li>
              <li>✔ Latency Optimization</li>
              <li>✔ System Cleanup</li>
              <li>✔ Future Updates</li>
            </ul>

            <button className="mt-10 w-full rounded-2xl bg-cyan-500 py-5 text-xl font-bold text-black transition hover:bg-cyan-400">
              Download Utility
            </button>

          </div>

        </section>
      </main>
    </>
  );
}
