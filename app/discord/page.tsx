import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function DiscordPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-4xl px-6 pb-24 text-center md:px-8">
          <span className="eyebrow justify-center">Community</span>
          <h1 className="mt-3.5 text-5xl font-bold tracking-tight md:text-6xl">Join Our Discord</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-dim">
            Get 24/7 support, free BIOS optimization help, community tweaks, and
            early access to new features.
          </p>

          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-12"
          >
            Join {site.name} Discord
          </a>
        </section>
      </main>
    </PageShell>
  );
}
