import PageShell from "../../components/PageShell";
import FreeBiosModal from "../../components/FreeBiosModal";

export default function FreeBiosPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink flex items-center justify-center px-6">
        <FreeBiosModal />
      </main>
    </PageShell>
  );
}
