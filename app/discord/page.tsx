import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function DiscordPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-4xl px-6 pb-24 text-center md:px-8">
          <h1 className="text-5xl font-black md:text-6xl">Join Our Discord</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Get 24/7 support, free BIOS optimization help, community tweaks, and
            early access to new features.
          </p>

          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-xl bg-[#5865F2] px-12 py-5 text-xl font-bold transition hover:bg-[#4752C4]"
          >
            Join {site.name} Discord
          </a>

          <p className="mt-8 text-sm text-gray-500">
            Update the Discord link in <code className="text-cyan-400">lib/site.ts</code> with your real invite URL.
          </p>
        </section>
      </main>
    </PageShell>
  );
}
